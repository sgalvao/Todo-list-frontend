import { useMemo } from "react";
import {
  ApolloClient,
  HttpLink,
  NormalizedCacheObject,
  InMemoryCache,
  from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Session } from "next-auth";
import merge from "deepmerge";
import isEqual from "lodash/isEqual";

let apolloClient: ApolloClient<NormalizedCacheObject | null>;

export const createApolloClient = (session?: Session | null) => {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_HOST,
  });

  const authLink = setContext((_, { headers, session: clientSession }) => {
    const jwt = session?.accessToken || clientSession?.accessToken || "";
    const authorization = jwt ? jwt : "";
    return { headers: { ...headers, authorization } };
  });

  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: from([authLink, httpLink]),
    cache: new InMemoryCache({}),
  });
};

export function initializeApollo(
  initialState: NormalizedCacheObject | null = null,
  session?: Session | null
) {
  const apolloClientGlobal = apolloClient ?? createApolloClient(session);

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  const existingCache = apolloClientGlobal.extract();
  if (initialState && existingCache) {
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    });

    apolloClientGlobal.cache.restore(data);
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return apolloClientGlobal;
  // Create the Apollo Client once in the client
  apolloClient = apolloClient ?? apolloClientGlobal;

  return apolloClient;
}

export function addApolloState(
  client: ApolloClient<NormalizedCacheObject | null>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps: any
) {
  if (pageProps?.props) {
    pageProps.props["__APOLLO_STATE__"] = client.cache.extract();
  }

  return pageProps;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useApollo(pageProps: any, session: Session | null) {
  const state = pageProps["__APOLLO_STATE__"];
  const store = useMemo(
    () => initializeApollo(state, session),
    [state, session]
  );
  return store;
}

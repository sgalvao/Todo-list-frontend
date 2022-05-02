import NextAuth, { NextAuthOptions } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import CredentialsProvider from "next-auth/providers/credentials";

import { createApolloClient } from "utils/apollo";
import { UserProps } from "types/api";
import { LOGIN } from "graphql/mutations/user";

type AuthorizeProps = {
  email: string;
  password: string;
};

const apolloClient = createApolloClient();

const options = {
  pages: {
    signIn: "/login",
    signOut: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Sign-in",
      credentials: {},
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      async authorize({ email, password }: AuthorizeProps) {
        const { data } = await apolloClient.query({
          query: LOGIN,
          fetchPolicy: "no-cache",
          variables: {
            email,
            password,
          },
        });

        const user = data.login;

        if (user) {
          return {
            ...user,
            jwt: user.token,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      session.accessToken = token.accessToken;

      if (token.user) session.user = token.user as UserProps;

      return session;
    },

    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user;
        token.accessToken = user.jwt;
      }

      return token;
    },
  },
  secret: process.env.NEXT_AUTH_SECRET,
  jwt: {
    strategy: "jwt",
  },
} as NextAuthOptions;

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);

export default Auth;

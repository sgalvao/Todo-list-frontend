import { ApolloProvider } from "@apollo/client";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyles from "styles/global";
import { useApollo } from "utils/apollo";

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  const client = useApollo(pageProps, session);
  return (
    <SessionProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <Head>
          <title>Todo List - Project</title>

          <meta name="description" content="Todo list application" />
        </Head>
        <ToastContainer />
        <GlobalStyles />
        <Component {...pageProps} />
      </ApolloProvider>
    </SessionProvider>
  );
};

export default App;

import LoginForm from "../components/Login";
import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";

export default function Login() {
  return <LoginForm />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  if (session) {
    context.res.setHeader("Location", "/");
    context.res.statusCode = 302;
    return {
      props: {
        session,
      },
    };
  }

  return { props: {} };
}

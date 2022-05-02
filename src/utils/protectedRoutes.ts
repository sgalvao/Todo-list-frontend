import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";

async function protectedRoutes(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  const resolvedUrl =
    context.resolvedUrl !== "/"
      ? `/login?callbackUrl=${context.resolvedUrl}`
      : "/login";

  if (!session) {
    context.res.setHeader("Location", resolvedUrl);
    context.res.statusCode = 302;
  }

  return session;
}

export default protectedRoutes;

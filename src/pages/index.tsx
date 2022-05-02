import Homepage from "../components/Homepage";
import protectedRoutes from "../utils/protectedRoutes";
import { GetServerSidePropsContext } from "next";
import { initializeApollo } from "utils/apollo";
import { GET_PROJECTS } from "graphql/queries/project";
import { ProjectsProps } from "types/api";

export default function Home(loadProjects: ProjectsProps) {
  return <Homepage {...loadProjects} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context);
  const apollo = initializeApollo(null, session);

  if (!session) {
    return { props: {}, redirect: { destination: "/login" } };
  }

  const {
    data: { loadProjects },
  } = await apollo.query({
    query: GET_PROJECTS,
  });

  return {
    props: { session, loadProjects },
  };
}

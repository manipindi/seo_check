import { Layout } from "../../components/Layout";
import { useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";
import { useRouter } from "next/router";

export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const router = useRouter();
  console.log(router.isFallback, "router");
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return <div>{data?.post?.title}</div>;
}

export const getStaticPaths = async () => {
  const { data } = await client.queries.postConnection();

  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async (ctx) => {
  const { data, query, variables } = await client.queries.post({
    relativePath: ctx.params.slug + ".md",
  });

  return {
    props: {
      data,
      query,
      variables,
    },
  };
};

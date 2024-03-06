import { useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";
import { useRouter } from "next/router";

export default function Home(props) {
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

  return {
    paths: [],
    fallback: true,
  };
};


export const getStaticProps = async (ctx) => {
  const { data, query, variables } = await client.queries.post({
    relativePath: ctx.params.slug + ".md",
  });

  const dataFromApi = await fetch("https://seo-check-gules.vercel.app/api")
  const response = await dataFromApi.json()

  return {
    props: {
      data,
      query,
      variables,
    },
  };
};

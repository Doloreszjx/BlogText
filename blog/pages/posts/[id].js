import Layout from "../../components/layout";
import { getAllPostsIds, getAllPostsData } from "../../lib/posts";

export function Posts({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
}

export async function getStaticPath() {
  const paths = getAllPostsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getAllPostsData(params.id);
  return {
    props: {
      postData,
    },
  };
}

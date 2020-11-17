import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>FirstPost</title>
      </Head>
      <h1>FirstPost</h1>
      <Link href="/">
        <a>go back to home</a>
      </Link>
    </Layout>
  );
}

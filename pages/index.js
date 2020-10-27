import Head from "next/head";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Integra Delicias Laboral</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
    </>
  );
}

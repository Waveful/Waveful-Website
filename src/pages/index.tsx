//NextJS
import Head from "next/head";

//Components
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";



export default function Home() {
  return (
    <>
    <Head>
      <title>Waveful</title>
      <meta name="description" content="Waveful" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="min-h-screen">
      <Hero />
    </main>
    </>
  );
}

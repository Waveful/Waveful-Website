//NextJS
import Head from "next/head";

//Hero
import { Button } from "@heroui/react";

//Components
import Hero from "@/components/Hero";



export default function Home() {
  return (
    <>
    <Head>
      <title>Waveful</title>
      <meta name="description" content="Waveful" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Hero />
    </main>
    </>
  );
}

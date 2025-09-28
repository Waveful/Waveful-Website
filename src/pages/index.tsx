//NextJS
import Head from "next/head";

//Components
import About from "@/components/About";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
    <Head>
      <title>Waveful - Your Community, Your Wave.</title>
    </Head>
    <main className="min-h-screen">
      <About />
      <Hero />
    </main>
    </>
  );
}

//NextJS
import Head from "next/head";

//Components
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <>
    <Head>
      <title>Waveful - Your Community, Your Growth, Your Wave.</title>
    </Head>
    <main className="min-h-screen">
      <About />
      <Hero />
    </main>
    </>
  );
}

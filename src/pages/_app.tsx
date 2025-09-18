import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

//HeroUI
import {HeroUIProvider} from '@heroui/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";

//Components
import Nav from "@/components/Nav";


const seoData = {
  siteName: "Waveful - Your Community, Your Growth, Your Wave",
  favicon: "/logo_waveful_colored.png",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HeroUIProvider>
      <Head>
        <link rel="icon" href={seoData.favicon} />
        <link rel="apple-touch-icon" href={seoData.favicon} />
      </Head>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <div>
          <Nav />
          <Component {...pageProps} />
        </div>
      </NextThemesProvider>
    </HeroUIProvider>
  )
}

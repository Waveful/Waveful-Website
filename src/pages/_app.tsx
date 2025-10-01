
// Styles
import "@/styles/globals.css";

// NextJS
import type { AppProps } from "next/app";
import Head from "next/head";

// HeroUI
import { HeroUIProvider } from '@heroui/react';
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Components
import Nav from "@/components/Nav";
import { LanguageProvider } from "@/contexts/LanguageContext";

// SEO
const seoData = {
  siteName: "Waveful - Your Community, Your Wave",
  favicon: "/app_icon_waveful_rounded.png",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
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
    </LanguageProvider>
  );
}

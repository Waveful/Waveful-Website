import React from "react";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Button, Link } from "@heroui/react";

export default function Hero() {
  const backgroundUrl = "https://cdn.sanity.io/files/w9oq2e5b/production/057dd62b6130592e23651dea088c27644cf71239.mp4";

  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white text-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={backgroundUrl}
        autoPlay
        muted
        loop
        playsInline
      />

      <div aria-hidden className="absolute inset-0 bg-black/50 z-[1]" />

      <h1 className="relative z-[2] text-2xl md:text-6xl lg:text-8xl font-semibold leading-tight px-6">
        Your Community. Your Growth. Your Wave.
      </h1>


      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[2] flex flex-wrap items-center justify-center gap-3 px-4">
        <Button
          as={Link}
          href="/contact"
          className="rounded-full bg-white/10 hover:bg-white/20 text-sm backdrop-blur transition-colors"
        >
          Contact us
        </Button>
        <Button
          as={Link}
          href="/privacy"
          className="rounded-full bg-white/10 hover:bg-white/20 text-sm backdrop-blur transition-colors"
        >
          Privacy Policy
        </Button>
        <Button
          as={Link}
          href="/terms"
          className="rounded-full bg-white/10 hover:bg-white/20 text-sm backdrop-blur transition-colors"
        >
          Terms Of Use
        </Button>
        <Button
          as={Link}
          href="/cookies"
          className="rounded-full bg-white/10 hover:bg-white/20 text-sm backdrop-blur transition-colors"
        >
          Cookie Policy
        </Button>
        <Button
          as={Link}
          href="https://www.tiktok.com/@waveful"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className="rounded-full bg-white/10 hover:bg-white/20 p-2 backdrop-blur transition-colors"
        >
          <FaTiktok className="h-5 w-5" />
        </Button>
        <Button
          as={Link}
          href="https://www.instagram.com/waveful"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="rounded-full bg-white/10 hover:bg-white/20 p-2 backdrop-blur transition-colors"
        >
          <FaInstagram className="h-5 w-5" />
        </Button>
      </div>

    </section>
  );
}



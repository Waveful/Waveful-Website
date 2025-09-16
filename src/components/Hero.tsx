import React from "react";
import { FaTiktok } from "react-icons/fa6";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { Button, Image, Link } from "@heroui/react";

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

      <div className={"flex flex-col"}>
      <h1 className="relative z-[2] text-4xl md:text-4xl lg:text-6xl font-semibold leading-tight px-6">
        Your Community. <br className={"block md:hidden"} /> Your Growth.<br className={"block md:hidden"} /> Your Wave.
      </h1>

      <div className="relative z-[2] mt-6 flex flex-wrap items-center justify-center gap-3 px-4">
        <Button
          as={Link}
          href="https://apps.apple.com/"
          isExternal
          rel="noopener noreferrer"
          radius={"lg"}
          size={"lg"}
          className="w-56 h-20 flex items-center gap-3 border border-default-100 bg-black/60 hover:bg-black/80 text-left backdrop-blur transition-colors"
          startContent={<FaApple className="h-12 w-12" />}
        >
          <span className="flex flex-col leading-tight text-left">
            <span className="text-xs opacity-80">Download on the</span>
            <span className="text-lg font-medium">App Store</span>
          </span>
        </Button>
        <Button
          as={Link}
          href="https://apps.apple.com/"
          isExternal
          rel="noopener noreferrer"
          radius={"lg"}
          size={"lg"}
          className="w-56 h-20 flex items-center gap-3 border border-default-100 bg-black/60 hover:bg-black/80 text-left backdrop-blur transition-colors"
          startContent={<FaGooglePlay className="h-12 w-12" />}
        >
          <span className="flex flex-col leading-tight text-left">
            <span className="text-xs opacity-80">Download on the</span>
            <span className="text-lg font-medium">Play Store</span>
          </span>
        </Button>
      </div>
      </div>

      <div className="absolute bottom-4 z-[2] flex flex-wrap items-center justify-center gap-3 px-4">
        <Button
          as={Link}
          href="https://help.waveful.com"
          className="rounded-full bg-white/10 hover:bg-white/20 text-sm backdrop-blur transition-colors"
        >
          Contact us
        </Button>
        <Button
          as={Link}
          href="/legal/privacy"
          className="rounded-full bg-white/10 hover:bg-white/20 text-sm backdrop-blur transition-colors"
        >
          Privacy Policy
        </Button>
        <Button
          as={Link}
          href="/legal/terms-of-use"
          className="rounded-full bg-white/10 hover:bg-white/20 text-sm backdrop-blur transition-colors"
        >
          Terms Of Use
        </Button>

        <Button
          as={Link}
          href="/legal/cookies"
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
          href="https://www.waveful.app/accounts/Waveful"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="rounded-full bg-white/10 hover:bg-white/20 p-2 backdrop-blur transition-colors"
          startContent={
            <Image src={"/logo_waveful_white.png"} className={"h-8 x-8 invert"} />
          }
        />

      </div>

    </section>
  );
}



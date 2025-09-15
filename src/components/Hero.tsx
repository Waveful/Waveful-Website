import React from "react";

export default function Hero() {
  const backgroundUrl =
    "https://cdn.sanity.io/files/w9oq2e5b/production/057dd62b6130592e23651dea088c27644cf71239.mp4";

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
    </section>
  );
}



import React from "react";

type UseCountUpOptions = {
  target: number;
  durationMs?: number;
  startWhenVisible?: boolean;
};

function useCountUp({ target, durationMs = 1400, startWhenVisible = true }: UseCountUpOptions) {
  const [value, setValue] = React.useState<number>(0);
  const ref = React.useRef<HTMLSpanElement | null>(null);
  const startedRef = React.useRef<boolean>(false);

  React.useEffect(() => {
    if (!startWhenVisible) {
      startedRef.current = true;
    }

    const element = ref.current;
    if (!element) return;

    let observer: IntersectionObserver | null = null;

    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;

      const startTime = performance.now();

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / durationMs);
        const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out
        setValue(Math.round(target * eased));
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    };

    if (startWhenVisible) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              start();
            }
          });
        },
        { threshold: 0.3 }
      );
      observer.observe(element);
    } else {
      start();
    }

    return () => {
      if (observer && element) observer.unobserve(element);
    };
  }, [target, durationMs, startWhenVisible]);

  return { value, ref } as const;
}

function formatCompactNumber(value: number): string {
  if (value >= 1_000_000) return `${Math.floor(value / 1_000_0) / 100}M`;
  if (value >= 1_000) return `${Math.floor(value / 10) / 100}K`;
  return String(value);
}

type StatProps = {
  label: string;
  target: number;
  suffix?: string;
};

function Stat({ label, target, suffix = "+" }: StatProps) {
  const { value, ref } = useCountUp({ target });
  return (
    <div className="flex flex-col items-center text-white">
      <span ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-semibold tabular-nums">
        {formatCompactNumber(value)}{suffix}
      </span>
      <span className="mt-1 text-sm md:text-base opacity-80">{label}</span>
    </div>
  );
}

export default function About() {
  return (
    <section className="w-full mt-24 py-16 md:py-24 bg-black/50">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center text-default-900 mb-10">
        <h2 className={"text-3xl md:text-6xl font-semibold"}>
          Grow your community. 
          Meet new people.
        </h2>
        <p className={"mt-8 test-sm justify-center"}>
         Waveful is where creators and fans connect through content, challenges, and communities built to help you grow faster and earn more. 
         Share your best moments, start challenges, and turn your audience into an active community that supports you.
        </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-14 justify-items-center">
          <Stat label="Users" target={3_000_000} />
          <Stat label="Posts" target={40_000_000} />
          <Stat label="Creators" target={130_000} />
          <Stat label="Communities" target={250_000} />
        </div>
      </div>
    </section>
  );
}

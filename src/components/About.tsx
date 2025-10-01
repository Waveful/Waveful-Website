import React from "react";
import useTranslation from "@/hooks/useTranslation";

type UseCountUpOptions = {
  target: number;
  durationMs?: number;
  startWhenVisible?: boolean;
};

function useCountUp({ target, durationMs = 1400, startWhenVisible = true }: UseCountUpOptions) {
  const [value, setValue] = React.useState<number>(0);
  const ref = React.useRef<HTMLSpanElement | null>(null);
  const startedRef = React.useRef<boolean>(false);
  
  function getCountStep(forTarget: number): number {
    if (forTarget >= 1_000_000) return 100_000; // millions grow by 100k
    if (forTarget >= 100_000) return 10_000; // hundred-thousands grow by 10k
    return 1; // keep smooth increments for smaller numbers
  }

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
        const rawValue = target * eased;
        const step = getCountStep(target);
        const steppedValue = Math.floor(rawValue / step) * step;
        setValue(progress < 1 ? steppedValue : target);
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
  if (value >= 1_000_000) {
    const wholeMillions = value % 1_000_000 === 0;
    const formatted = (value / 1_000_000).toFixed(wholeMillions ? 0 : 1);
    return `${formatted}M`;
  }
  if (value >= 1_000) {
    const wholeThousands = value % 1_000 === 0;
    const formatted = (value / 1_000).toFixed(wholeThousands ? 0 : 1);
    return `${formatted}K`;
  }
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
  const { t } = useTranslation();
  
  // Split the subtitle into lines for proper rendering
  const subtitleLines = t('about.subtitle').split('\n');
  
  // Get the numeric values from translations and ensure they're numbers
  const stats = {
    users: Number(t('about.counts.users')),
    posts: Number(t('about.counts.posts')),
    creators: Number(t('about.counts.creators')),
    communities: Number(t('about.counts.communities'))
  };
  
  return (
    <section className="w-full mt-24 py-16 md:py-24 bg-black/50">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center text-default-900 mb-10">
          <h2 className="text-3xl md:text-6xl font-semibold">
            {subtitleLines.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < subtitleLines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
          <p className="mt-8 text-sm md:text-base justify-center">
            {t('about.description')}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-14 justify-items-center">
          <Stat 
            label={t('about.stats.users')} 
            target={stats.users} 
          />
          <Stat 
            label={t('about.stats.posts')} 
            target={stats.posts} 
          />
          <Stat 
            label={t('about.stats.creators')} 
            target={stats.creators} 
          />
          <Stat 
            label={t('about.stats.communities')} 
            target={stats.communities} 
          />
        </div>
      </div>
    </section>
  );
}

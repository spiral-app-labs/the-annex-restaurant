"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  decimals?: number;
}

export default function AnimatedCounter({
  end,
  duration = 2,
  prefix = "",
  suffix = "",
  label,
  decimals = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(end);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      setCount(0);

      const startTime = Date.now();
      const durationMs = duration * 1000;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = eased * end;

        setCount(current);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    }

    if (!isInView) {
      hasAnimated.current = false;
      setCount(0);
    }
  }, [isInView, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="font-serif text-4xl md:text-5xl font-bold gold-text mb-2">
        {prefix}
        {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
        {suffix}
      </div>
      <div className="text-cream-200/70 text-sm uppercase tracking-wider font-medium">
        {label}
      </div>
    </motion.div>
  );
}

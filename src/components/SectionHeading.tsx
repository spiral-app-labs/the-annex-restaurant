"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, light = false }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12 md:mb-16"
    >
      <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${light ? "text-navy-900" : "text-white"}`}>
        {title}
      </h2>
      <div className="w-20 h-0.5 bg-gold-400 mx-auto mb-4" />
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${light ? "text-navy-700/70" : "text-cream-200/70"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

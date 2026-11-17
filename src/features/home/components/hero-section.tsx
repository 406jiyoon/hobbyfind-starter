'use client';

import { motion, useReducedMotion } from 'framer-motion';

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      className="py-8 lg:py-12"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-[32px] font-bold leading-tight text-foreground lg:text-[48px]">
        나에게 맞는 취미를 찾아보세요
      </h1>
      <p className="mt-4 max-w-3xl text-base text-muted">
        운동형, 지능형, 예술형 취미를 둘러보고 새로운 즐거움을 발견하세요.
      </p>
    </motion.section>
  );
}
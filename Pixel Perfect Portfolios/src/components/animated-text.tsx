"use client";
import { motion, useInView, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

type Segment = { text: string; className?: string };

export function WordsPullUp({
  text,
  className = "",
  showAsterisk = false,
}: {
  text: string;
  className?: string;
  showAsterisk?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const words = text.split(" ");

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <span key={i} className="inline-block overflow-hidden pb-[0.05em] mr-[0.2em]">
            <motion.span
              className="inline-block relative"
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              {word}
              {showAsterisk && isLast && (
                <span className="absolute top-[0.05em] -right-[0.3em] text-[0.31em]">*</span>
              )}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}

export function WordsPullUpMultiStyle({
  segments,
  className = "",
}: {
  segments: Segment[];
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const allWords: { word: string; className?: string }[] = [];
  segments.forEach((seg) => {
    seg.text.split(" ").forEach((w) => allWords.push({ word: w, className: seg.className }));
  });

  return (
    <span ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {allWords.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.05em] mr-[0.25em]">
          <motion.span
            className={`inline-block ${w.className ?? ""}`}
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            {w.word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function AnimatedLetter({
  char,
  progress,
  index,
  total,
}: {
  char: string;
  progress: MotionValue<number>;
  index: number;
  total: number;
}) {
  const charProgress = index / total;
  const opacity = useTransform(progress, [charProgress - 0.1, charProgress + 0.05], [0.2, 1]);
  return <motion.span style={{ opacity }}>{char}</motion.span>;
}

export function ScrollRevealText({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });
  const chars = text.split("");
  return (
    <p ref={ref} className={className}>
      {chars.map((c, i) => (
        <AnimatedLetter key={i} char={c} progress={scrollYProgress} index={i} total={chars.length} />
      ))}
    </p>
  );
}

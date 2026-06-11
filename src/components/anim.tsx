import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, type CSSProperties } from "react";

export function WordsPullUp({
  text,
  className = "",
  showAsterisk = false,
  style,
}: {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const words = text.split(" ");
  return (
    <div ref={ref} className={className} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block relative"
            style={{ marginRight: "0.15em" }}
          >
            {word}
            {showAsterisk && isLast && (
              <span
                className="absolute"
                style={{
                  top: "0.65em",
                  right: "-0.3em",
                  fontSize: "0.31em",
                }}
              >
                *
              </span>
            )}
          </motion.span>
        );
      })}
    </div>
  );
}

export function WordsPullUpMultiStyle({
  segments,
  className = "",
}: {
  segments: { text: string; className?: string }[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const all: { word: string; className?: string }[] = [];
  segments.forEach((s) => {
    s.text.split(" ").forEach((w) => all.push({ word: w, className: s.className }));
  });
  return (
    <div ref={ref} className={className}>
      <span className="inline-flex flex-wrap justify-center">
        {all.map((item, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={`inline-block ${item.className ?? ""}`}
            style={{ marginRight: "0.25em" }}
          >
            {item.word}
          </motion.span>
        ))}
      </span>
    </div>
  );
}

function AnimatedLetter({
  char,
  progress,
  total,
  index,
}: {
  char: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  total: number;
  index: number;
}) {
  const charProgress = index / total;
  const opacity = useTransform(
    progress,
    [Math.max(0, charProgress - 0.1), charProgress + 0.05],
    [0.2, 1]
  );
  return <motion.span style={{ opacity }}>{char}</motion.span>;
}

export function ScrollRevealText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });
  const chars = text.split("");
  return (
    <p ref={ref} className={className}>
      {chars.map((c, i) => (
        <AnimatedLetter key={i} char={c} progress={scrollYProgress} total={chars.length} index={i} />
      ))}
    </p>
  );
}

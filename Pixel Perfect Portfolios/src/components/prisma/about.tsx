"use client";
import { WordsPullUpMultiStyle, ScrollRevealText } from "@/components/animated-text";

export function About() {
  return (
    <section className="bg-black py-20 md:py-32 px-4 md:px-6">
      <div className="bg-[#101010] rounded-2xl md:rounded-[2rem] max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28 text-center">
        <p className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-6">
          Offensive Security · l1nuxkid
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto leading-[0.95] sm:leading-[0.9] text-primary">
          <WordsPullUpMultiStyle
            segments={[
              { text: "I am Harsh Vala,", className: "font-normal" },
              { text: "a B.Sc. Cyber Security graduate.", className: "italic font-serif" },
              {
                text: "I break Active Directory, web apps, and networks — then document every step.",
                className: "font-normal",
              },
            ]}
          />
        </h2>

        <div className="mt-10 md:mt-14 max-w-2xl mx-auto">
          <ScrollRevealText
            className="text-xs sm:text-sm md:text-base leading-relaxed"
            text="OSCP+ certified, Pro Hacker on HackTheBox with 100+ machines rooted, and ranked #13 globally on TryHackMe. I interned at ISEA running vulnerability assessments and pentests aligned with OWASP Top 10, and volunteer on technical operations for NULLCON, India's premier infosec conference."
          />
        </div>
      </div>
    </section>
  );
}

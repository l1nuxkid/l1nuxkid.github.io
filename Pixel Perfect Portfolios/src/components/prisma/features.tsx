"use client";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useRef } from "react";
import { WordsPullUpMultiStyle } from "@/components/animated-text";

const cards = [
  {
    number: "01",
    title: "Offensive Arsenal.",
    items: [
      "Active Directory · AD CS · Kerberos attacks",
      "Burp Suite · Nmap · Nessus · Metasploit",
      "BloodHound · Impacket · evil-winrm · Chisel",
      "Python · Bash · SQL for tooling and exploits",
    ],
    href: "#skills",
  },
  {
    number: "02",
    title: "Rankings & Certs.",
    items: [
      "OSCP+ (OffSec) · PT1 (TryHackMe) · CPTS in progress",
      "#46 globally — OffSec Gauntlet CTF (3,500+)",
      "#13 globally — TryHackMe CTF · top 0.5%",
    ],
    href: "https://app.hackthebox.com/users/2149579",
  },
  {
    number: "03",
    title: "Notes & Writeups.",
    items: [
      "HackTheBox machine writeups · AD attack paths",
      "Web & API pentest notes · OWASP Top 10 deep-dives",
      "HackSmarter labs · methodology & cheatsheets",
      "Live at l1nuxkid.gitbook.io",
    ],
    href: "https://l1nuxkid.gitbook.io",
  },
];

function Card({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl overflow-hidden relative"
    >
      {children}
    </motion.div>
  );
}

export function Features() {
  return (
    <section className="relative min-h-screen bg-black px-4 md:px-6 py-20 md:py-32 overflow-hidden">
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-14 md:mb-20 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight">
          <div className="text-primary">
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: "Field-tested methodology for offensive engagements.",
                  className: "text-primary",
                },
              ]}
            />
          </div>
          <div className="mt-2">
            <WordsPullUpMultiStyle
              segments={[
                { text: "Built on labs. Sharpened in CTFs.", className: "text-gray-500" },
              ]}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]">
          <Card index={0}>
            <div className="relative h-full min-h-[320px] w-full">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-[10px] uppercase tracking-[0.2em] text-primary/60 mb-2">
                  l1nuxkid.dev
                </div>
                <div className="text-lg sm:text-xl font-medium" style={{ color: "#E1E0CC" }}>
                  The lab never sleeps.
                </div>
              </div>
            </div>
          </Card>

          {cards.map((card, i) => (
            <Card key={card.number} index={i + 1}>
              <div className="bg-[#212121] h-full min-h-[320px] p-5 md:p-6 flex flex-col">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center mb-6">
                  <span className="font-serif italic text-primary text-lg">{card.number}</span>
                </div>
                <h3 className="text-primary text-lg sm:text-xl font-normal mb-5 flex items-baseline gap-2">
                  <span>{card.title}</span>
                  <span className="text-gray-500 text-xs">({card.number})</span>
                </h3>
                <ul className="space-y-3 flex-1">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs sm:text-sm text-gray-400"
                    >
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={card.href}
                  className="mt-5 inline-flex items-center gap-2 text-primary text-xs sm:text-sm group"
                >
                  <span>Learn more</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    style={{ transform: "rotate(-45deg)" }}
                  />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

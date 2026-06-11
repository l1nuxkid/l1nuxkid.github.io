import { motion, useInView } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useRef } from "react";
import { WordsPullUpMultiStyle } from "./anim";

type Card = {
  number: string;
  title: string;
  icon: string;
  items: { title: string; desc: string }[];
};

const CARDS: Card[] = [
  {
    number: "01",
    title: "Offensive Toolchain.",
    icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85",
    items: [
      { title: "Burp Suite · Nmap · Nessus", desc: "Web & network reconnaissance" },
      { title: "Metasploit · Impacket", desc: "Exploitation frameworks" },
      { title: "BloodHound · CrackMapExec", desc: "Active Directory attack graphs" },
      { title: "evil-winrm · Chisel · Responder", desc: "Post-exploitation & pivoting" },
    ],
  },
  {
    number: "02",
    title: "Attack Domains.",
    icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85",
    items: [
      { title: "Active Directory exploitation", desc: "Kerberoasting, AD CS, BloodHound paths" },
      { title: "Web application security", desc: "OWASP Top 10, auth bypass, SSRF, RCE" },
      { title: "Privilege escalation", desc: "Linux & Windows kernel + misconfig abuse" },
    ],
  },
  {
    number: "03",
    title: "Proof of Work.",
    icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85",
    items: [
      { title: "OSCP+ certified", desc: "OffSec · Apr 2026 – Apr 2029" },
      { title: "#46 OffSec Gauntlet · #13 TryHackMe", desc: "Global CTF rankings" },
      { title: "100+ HTB machines · top 0.5% THM", desc: "Pro Hacker rank, public writeups" },
    ],
  },
];

function FeatureCard({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

export function Features() {
  return (
    <section id="skills" className="relative min-h-screen bg-black py-20 md:py-32 px-4 md:px-8 overflow-hidden">
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <WordsPullUpMultiStyle
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-2"
            segments={[
              {
                text: "Red-team grade workflows for serious adversaries.",
                className: "text-primary",
              },
            ]}
          />
          <WordsPullUpMultiStyle
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal"
            segments={[
              {
                text: "Built on patience. Powered by curiosity.",
                className: "text-gray-500",
              },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:h-[520px] gap-3 sm:gap-2 md:gap-1">
          {/* Video card */}
          <FeatureCard index={0}>
            <div className="relative h-full min-h-[360px] rounded-2xl overflow-hidden bg-[#212121]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xl md:text-2xl font-medium" style={{ color: "#E1E0CC" }}>
                  Think like an attacker.
                </p>
              </div>
            </div>
          </FeatureCard>

          {CARDS.map((card, i) => (
            <FeatureCard key={card.number} index={i + 1}>
              <div className="h-full min-h-[360px] rounded-2xl bg-[#212121] p-6 flex flex-col">
                <img
                  src={card.icon}
                  alt=""
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover mb-6"
                />
                <h3 className="text-lg md:text-xl font-medium mb-5 text-primary">
                  <span className="text-gray-500 mr-2">{card.number}</span>
                  {card.title}
                </h3>
                <ul className="space-y-3 flex-1">
                  {card.items.map((item, idx) => (
                    <li key={idx} className="flex gap-2.5">
                      <Check className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                      <div>
                        <p className="text-primary text-sm">{item.title}</p>
                        <p className="text-gray-400 text-xs mt-0.5">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://l1nuxkid.gitbook.io"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" style={{ transform: "rotate(-45deg)" }} />
                </a>
              </div>
            </FeatureCard>
          ))}
        </div>

        {/* Contact strip */}
        <div id="contact" className="mt-20 md:mt-32 border-t border-white/10 pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-primary text-[10px] uppercase tracking-[0.2em] mb-2">Direct line</p>
            <p className="font-serif italic text-2xl md:text-4xl text-primary">
              Let's break something together.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:harshvala1414@gmail.com"
              className="px-5 py-3 rounded-full bg-primary text-black font-medium text-sm hover:opacity-90 transition"
            >
              harshvala1414@gmail.com
            </a>
            <a
              href="https://github.com/l1nuxkid"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-full border border-white/20 text-primary font-medium text-sm hover:bg-white/5 transition"
            >
              GitHub
            </a>
            <a
              href="https://l1nuxkid.gitbook.io"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-full border border-white/20 text-primary font-medium text-sm hover:bg-white/5 transition"
            >
              Notes
            </a>
          </div>
        </div>
        <p className="mt-12 text-center text-xs text-gray-500">
          © 2026 Harsh Vala · l1nuxkid · Ahmedabad, India
        </p>
      </div>
    </section>
  );
}

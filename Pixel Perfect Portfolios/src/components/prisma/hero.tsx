"use client";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { WordsPullUp } from "@/components/animated-text";

const navItems: { label: string; href: string; external?: boolean }[] = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "CTF", href: "https://app.hackthebox.com/users/2149579", external: true },
  { label: "Notes", href: "https://l1nuxkid.gitbook.io", external: true },
  { label: "Resume", href: "/Harsh_Vala_CV.pdf", external: true },
  { label: "Contact", href: "mailto:harshvala1414@gmail.com" },
];

export function Hero() {
  return (
    <section className="h-screen w-full p-4 md:p-6">
      <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />
        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
          <div className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                download={item.label === "Resume" ? "Harsh_Vala_CV.pdf" : undefined}
                className="text-[10px] sm:text-xs md:text-sm transition-colors"
                style={{ color: "rgba(225, 224, 204, 0.8)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E1E0CC")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(225, 224, 204, 0.8)")}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 pb-6 md:pb-10 z-10">
          <div className="grid grid-cols-12 gap-4 items-end">
            <div className="col-span-12 lg:col-span-8">
              <h1
                className="font-medium leading-[0.85] tracking-[-0.07em] text-[20vw] sm:text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[13vw]"
                style={{ color: "#E1E0CC" }}
              >
                <WordsPullUp text="Harsh Vala" showAsterisk />
              </h1>
            </div>
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-5 pb-2 lg:pb-6">
              <motion.p
                className="text-primary/70 text-xs sm:text-sm md:text-base"
                style={{ lineHeight: 1.3 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                Offensive security professional — OSCP+ certified, Pro Hacker on HackTheBox,
                global rank #13 on TryHackMe. Active Directory, web app exploitation, and
                network penetration. Based in Ahmedabad, India.
              </motion.p>
              <div className="flex flex-wrap items-center gap-3">
                <motion.a
                  href="mailto:harshvala1414@gmail.com"
                  className="group inline-flex items-center justify-between gap-2 hover:gap-3 transition-all bg-primary text-black rounded-full pl-5 pr-1 py-1 font-medium text-sm sm:text-base w-fit"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span>Get in touch</span>
                  <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform group-hover:scale-110">
                    <ArrowRight className="w-4 h-4" style={{ color: "#E1E0CC" }} />
                  </span>
                </motion.a>
                <motion.a
                  href="/Harsh_Vala_CV.pdf"
                  download="Harsh_Vala_CV.pdf"
                  className="group inline-flex items-center gap-2 border border-primary/30 text-primary rounded-full px-5 py-2.5 font-medium text-sm sm:text-base hover:bg-primary/10 transition-colors w-fit"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

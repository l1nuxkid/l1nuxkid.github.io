import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WordsPullUp } from "./anim";

const NAV_ITEMS = ["About", "Skills", "Experience", "CTF", "Contact"];

export function Hero() {
  return (
    <section className="h-screen p-4 md:p-6">
      <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem] bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />
        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

        {/* Navbar */}
        <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
          <div className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 md:py-3">
            <ul className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
              {NAV_ITEMS.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-[10px] sm:text-xs md:text-sm transition-colors"
                    style={{ color: "rgba(225, 224, 204, 0.8)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#E1E0CC")}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(225, 224, 204, 0.8)")
                    }
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 md:px-10 pb-4 md:pb-8 z-10">
          <div className="grid grid-cols-12 items-end gap-4">
            <div className="col-span-12 lg:col-span-8">
              <WordsPullUp
                text="Harsh Vala"
                showAsterisk
                className="font-medium leading-[0.85] tracking-[-0.07em] text-[22vw] sm:text-[20vw] md:text-[18vw] lg:text-[16vw] xl:text-[15vw]"
                style={{ color: "#E1E0CC" }}
              />
            </div>
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-5 pb-2 md:pb-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-primary/70 text-xs sm:text-sm md:text-base"
                style={{ lineHeight: 1.2 }}
              >
                Offensive security professional. OSCP+ certified. Web exploitation, Active
                Directory attacks, and network penetration. Pro Hacker on HackTheBox. Every
                technique I learn, I document publicly.
              </motion.p>
              <motion.a
                href="/Harsh_Vala_CV_Cyber.pdf"
                download
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group inline-flex items-center gap-2 hover:gap-3 bg-primary rounded-full pl-5 pr-1.5 py-1.5 w-fit transition-all"
              >
                <span className="text-black font-medium text-sm sm:text-base">
                  Download CV
                </span>
                <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform group-hover:scale-110">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: "#E1E0CC" }} />
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ScrollRevealText, WordsPullUpMultiStyle } from "./anim";

export function About() {
  return (
    <section id="about" className="bg-black py-20 md:py-32 px-4 md:px-8">
      <div className="bg-[#101010] rounded-2xl md:rounded-[2rem] max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-28 text-center">
        <p className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-6">
          Offensive Security
        </p>
        <WordsPullUpMultiStyle
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] mb-10"
          segments={[
            { text: "I am Harsh Vala,", className: "font-normal" },
            { text: "an OSCP+ certified hacker.", className: "italic font-serif" },
            {
              text: "I break into web apps, Active Directory, and networks, then write it all down.",
              className: "font-normal",
            },
          ]}
        />
        <div className="max-w-2xl mx-auto">
          <ScrollRevealText
            className="text-xs sm:text-sm md:text-base"
            text="Recent B.Sc. Cyber Security graduate from Gujarat University. I spent the last two years living inside Burp Suite, BloodHound, and Impacket. Earned OSCP+, Pro Hacker on HackTheBox with 100+ machines rooted, global rank #46 in OffSec Gauntlet CTF and #13 on TryHackMe. Now looking for a red team or pentest role where I can break things on purpose."
          />
        </div>
      </div>
    </section>
  );
}

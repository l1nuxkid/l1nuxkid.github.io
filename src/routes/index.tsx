import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Features } from "@/components/Features";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Harsh Vala · OSCP+ Offensive Security" },
      {
        name: "description",
        content:
          "OSCP+ certified offensive security professional. Penetration testing, Active Directory, and web application security. Pro Hacker on HackTheBox.",
      },
      { property: "og:title", content: "Harsh Vala · Offensive Security" },
      {
        property: "og:description",
        content: "OSCP+ · Pro Hacker HTB · CTF #13 Global · Ahmedabad, India",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-black min-h-screen" style={{ color: "#E1E0CC" }}>
      <Hero />
      <About />
      <Features />
    </main>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/prisma/hero";
import { About } from "@/components/prisma/about";
import { Features } from "@/components/prisma/features";
import { getRequestOrigin } from "@/lib/origin.functions";
import ogImage from "@/assets/og-harsh-vala.jpg.asset.json";

const TITLE = "Harsh Vala · l1nuxkid · Offensive Security";
const DESCRIPTION =
  "OSCP+ certified offensive security professional. Active Directory, web app exploitation, and network penetration testing. Pro Hacker on HackTheBox · #13 TryHackMe Global.";

export const Route = createFileRoute("/")({
  loader: async () => {
    const origin = await getRequestOrigin();
    return { origin };
  },
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const ogImageUrl = `${origin}${ogImage.url}`;
    return {
      meta: [
        { title: TITLE },
        { name: "description", content: DESCRIPTION },
        {
          name: "keywords",
          content:
            "Harsh Vala, l1nuxkid, OSCP+, penetration testing, offensive security, HackTheBox, TryHackMe, Active Directory, web app pentest, NULLCON, Ahmedabad",
        },
        { name: "author", content: "Harsh Vala" },
        { name: "robots", content: "index, follow" },

        { property: "og:title", content: TITLE },
        { property: "og:description", content: DESCRIPTION },
        { property: "og:type", content: "profile" },
        { property: "og:url", content: `${origin}/` },
        { property: "og:image", content: ogImageUrl },
        { property: "og:image:secure_url", content: ogImageUrl },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: "Harsh Vala — Offensive Security · OSCP+" },
        { property: "og:site_name", content: "l1nuxkid" },
        { property: "profile:first_name", content: "Harsh" },
        { property: "profile:last_name", content: "Vala" },
        { property: "profile:username", content: "l1nuxkid" },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: TITLE },
        { name: "twitter:description", content: DESCRIPTION },
        { name: "twitter:image", content: ogImageUrl },
        { name: "twitter:image:alt", content: "Harsh Vala — Offensive Security · OSCP+" },
      ],
      links: [{ rel: "canonical", href: `${origin}/` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Harsh Vala",
            alternateName: "l1nuxkid",
            jobTitle: "Offensive Security Professional",
            description: DESCRIPTION,
            url: `${origin}/`,
            image: ogImageUrl,
            email: "mailto:harshvala1414@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ahmedabad",
              addressCountry: "IN",
            },
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "Gujarat University",
            },
            sameAs: [
              "https://l1nuxkid.gitbook.io",
              "https://app.hackthebox.com/users/2149579",
            ],
            knowsAbout: [
              "Penetration Testing",
              "Active Directory Security",
              "Web Application Security",
              "Network Security",
              "OWASP Top 10",
            ],
            hasCredential: [
              { "@type": "EducationalOccupationalCredential", name: "OSCP+" },
              { "@type": "EducationalOccupationalCredential", name: "TryHackMe PT1" },
            ],
          }),
        },
      ],
    };
  },
  component: Index,
});

function Index() {
  return (
    <main className="bg-black text-primary min-h-screen">
      <Hero />
      <About />
      <Features />
    </main>
  );
}

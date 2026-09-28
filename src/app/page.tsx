// src/app/page.tsx
import Image from "next/image";
import Footer from "@/components/Footer";
import OssShowcase from "@/components/OssShowcase";

const links = [
  { name: "GitHub", href: "https://github.com/hmake98" },
  { name: "LinkedIn", href: "https://linkedin.com/in/hmake98" },
  { name: "Email", href: "mailto:harsh.make1998@gmail.com" },
  { name: "Resume", href: "/resume.pdf" },
];

export default function Home() {
  return (
    <div className="bg-bg-primary min-h-screen">
      <main className="mx-auto w-full max-w-[620px] px-6 pt-20 pb-20 md:pt-28 md:pb-24">
        <header className="mb-16 md:mb-20">
          <div className="mb-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
            <Image
              src="/avatar.jpg"
              alt="Harsh Makwana"
              width={88}
              height={88}
              className="border-border-primary h-[88px] w-[88px] shrink-0 rounded-full border object-cover"
              priority
            />
            <h1 className="text-text-primary text-[2rem] leading-none font-semibold tracking-[-0.035em] md:text-[2.35rem]">
              Harsh Makwana
            </h1>
          </div>
          <div className="text-text-secondary space-y-4 text-[15px] leading-[1.72] md:text-base">
            <p>
              I design and build distributed backend systems — microservices, event-driven
              pipelines, and infrastructure that holds up under real production load.
            </p>
            <p>
              I can build with any stack a problem calls for, but my deepest hands-on experience is
              Node.js, NestJS, Prisma, PostgreSQL, MongoDB, RabbitMQ, gRPC, Temporal, AWS, and
              streaming systems.
            </p>
            <p>
              6+ years in. Currently Senior Backend Engineer at Simform Solutions, based in
              Ahmedabad, India.
            </p>
            <p>
              Past work includes an end-to-end, sub-second-latency GPU streaming platform: on-demand
              GPU orchestration that spins up cost-efficient instances only for the duration of a
              session and streams live video straight to viewers.
            </p>
            <p>
              I&apos;m building{" "}
              <a
                href="https://github.com/hmake98/snapflow-desktop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary decoration-border-secondary hover:decoration-text-secondary underline underline-offset-4 transition-colors"
              >
                snapflow-desktop
              </a>
              , a screenshot, annotation, and issue-tracking desktop app, using a Claude AI workflow
              end to end.
            </p>
            <p>
              Outside of work, I grow vegetables and flowering plants in a small terrace garden — a
              good way to disconnect after days spent designing systems that move fast. I also
              travel often; new environments have a way of resetting how I think about problems, and
              some of my clearest ideas about system design have come from being somewhere
              completely different from a screen.
            </p>
          </div>
          <nav aria-label="Elsewhere" className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={
                  link.href.startsWith("http") || link.href.endsWith(".pdf") ? "_blank" : undefined
                }
                rel={
                  link.href.startsWith("http") || link.href.endsWith(".pdf")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="text-text-secondary decoration-border-secondary hover:text-text-primary hover:decoration-text-secondary text-sm underline underline-offset-4 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </header>

        <section aria-labelledby="open-source">
          <h2 id="open-source" className="text-text-primary mb-5 text-[15px] font-medium">
            Open source
          </h2>
          <OssShowcase />
        </section>

        <Footer />
      </main>
    </div>
  );
}

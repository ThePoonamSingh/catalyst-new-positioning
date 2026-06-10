import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer, Reveal } from "./index";

export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title: "Platform — Catalyst" },
      { name: "description", content: "The agent-ready full-stack cloud platform. Backend, data, auth, workflows, AI, and deployment on one platform." },
      { property: "og:title", content: "Platform — Catalyst" },
      { property: "og:description", content: "The agent-ready full-stack cloud platform." },
    ],
  }),
  component: PlatformPage,
});

function PlatformPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <section className="relative pt-24 sm:pt-32 pb-20 border-b border-border/60 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[36rem] w-[60rem] bg-cta-gradient opacity-20 blur-3xl rounded-full" />
          <div className="absolute inset-0 grid-bg" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-xs font-mono tracking-[0.2em] text-muted-foreground uppercase">
              Platform
            </div>
            <h1 className="mt-4 font-black tracking-[-0.04em] text-[clamp(2.5rem,6vw,4.5rem)] leading-[1] max-w-4xl">
              Everything between prompt and production.
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
              One platform that replaces the stack. Backend, frontend, data, AI, workflows, and deployment — built to work together as a system.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/why-catalyst" className="inline-block text-sm font-medium px-5 py-3 rounded-lg bg-cta-gradient text-background hover:opacity-90 transition">
                Why Catalyst
              </Link>
              <Link to="/" hash="cta" className="inline-block text-sm font-medium px-5 py-3 rounded-lg border border-border/60 text-foreground hover:bg-white/[0.05] transition">
                Start Free
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
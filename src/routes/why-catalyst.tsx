import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer, Reveal } from "./index";

export const Route = createFileRoute("/why-catalyst")({
  head: () => ({
    meta: [
      { title: "Why Catalyst — What Makes Us Different" },
      { name: "description", content: "The things no other cloud platform can say. Zero learning curve, prompt-first, MCP-native, truly full-stack." },
      { property: "og:title", content: "Why Catalyst — What Makes Us Different" },
      { property: "og:description", content: "The things no other cloud platform can say." },
    ],
  }),
  component: WhyCatalystPage,
});

const items = [
  {
    label: "01 / ZERO LEARNING CURVE",
    t: "Prompt what you're building. The AI figures out the rest.",
    d: "The AI already knows the platform. You don't have to. Every Catalyst service, every integration, every configuration — already understood by the AI. Describe what you're building. It selects the right components, wires them, and provisions everything. You never learn the platform. It learns your project.",
    proof: "No services to memorize. No infrastructure to stitch together. No learning curve standing between an idea and a working application.",
  },
  {
    label: "02 / PROMPT-FIRST",
    t: "From idea to running application without touching a config file.",
    d: "AWS hands you 200 services and a getting-started guide. Catalyst gives you one prompt and a running application. No IAM roles. No VPC spelunking. No certification required. The platform handles what the platform should handle.",
    proof: "First deploy in 47 seconds · Zero config files",
  },
  {
    label: "03 / MCP-NATIVE",
    t: "Your agent workflows run on the same infra as your application.",
    d: "Most platforms bolt AI on as an afterthought. Catalyst is built with MCP as a first-class protocol — so your agents can discover, configure, and operate infrastructure the same way a developer would. No brittle glue code. No separate runtime. One platform for both.",
    proof: "Agents deploy, observe, and scale natively",
  },
  {
    label: "04 / FULL-STACK, TRULY",
    t: "Stop maintaining the stack. Start building the product.",
    d: "You didn't sign up to maintain Vercel, Supabase, Railway, and three other services just to run one application. Catalyst is one platform — frontend, backend, data, AI, workflows, deployment — built to work together as a system, not a collection.",
    proof: "One API · One bill · One dashboard · One deployment",
  },
];

function WhyCatalystPage() {
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
              What makes Catalyst different
            </div>
            <h1 className="mt-4 font-black tracking-[-0.04em] text-[clamp(2.5rem,6vw,4.5rem)] leading-[1] max-w-4xl">
              The things no other cloud platform can say.
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
              One platform that replaces the stack. Designed for prompts, agents, and the people who direct them.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid sm:grid-cols-2 gap-5">
            {items.map((it, i) => (
              <Reveal key={it.t} delay={i * 90}>
                <div className="glass rounded-2xl p-8 h-full hover:bg-white/[0.05] transition relative overflow-hidden flex flex-col">
                  <div className="text-[11px] font-mono tracking-[0.18em] text-primary/80 uppercase">
                    {it.label}
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold tracking-tight leading-snug">{it.t}</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{it.d}</p>
                  <p className="mt-6 pt-6 border-t border-border/60 text-sm text-foreground/80 leading-relaxed">
                    <span className="text-primary mr-2">→</span>{it.proof}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-20 text-center">
              <Link to="/" hash="cta" className="inline-block text-sm font-medium px-5 py-3 rounded-lg bg-cta-gradient text-background hover:opacity-90 transition">
                Start building on Catalyst
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}

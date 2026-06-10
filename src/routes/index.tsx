import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Catalyst — Everything Between Prompt and Production" },
      { name: "description", content: "The agent-ready full-stack cloud. Backend, data, auth, workflows, AI, and deployment on one platform built for developers and the agents they direct." },
      { property: "og:title", content: "Catalyst — Everything Between Prompt and Production" },
      { property: "og:description", content: "The agent-ready full-stack cloud. One platform for developers and agents." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <FoldTwo />
      <FoldThree />
      <FinalCTA />
      <Footer />
    </main>
  );
}

/* ---------- Reveal on scroll ---------- */
export function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setShown(true)),
      { threshold: 0.12 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s cubic-bezier(.2,.7,.2,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ---------- Nav ---------- */
export function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="h-7 w-7 rounded-md bg-cta-gradient ring-glow-emerald grid place-items-center text-[11px] font-black text-background">C</span>
          <span className="text-foreground">Catalyst</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <div className="relative group">
            <a href="https://catalyst.zoho.com/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition inline-flex items-center gap-1">
              Services
              <svg className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </a>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="rounded-lg border border-border/60 bg-background/95 backdrop-blur-xl shadow-lg shadow-black/10 py-2 px-1 min-w-[10rem]">
                {[
                  { label: "Why Catalyst", href: "https://catalyst.zoho.com/why-catalyst.html" },
                  { label: "Platform", href: "https://catalyst.zoho.com/platform.html" },
                  { label: "Solutions", href: "https://catalyst.zoho.com/solutions.html" },
                  { label: "Customers", href: "https://catalyst.zoho.com/customers.html" },
                  { label: "Pricing", href: "https://catalyst.zoho.com/pricing.html" },
                  { label: "Resources", href: "https://catalyst.zoho.com/resources.html" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 transition"
                  >
                    <span>{item.label}</span>
                    <svg className="w-3 h-3 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="relative group">
            <a href="/#agents" className="hover:text-foreground transition inline-flex items-center gap-1">
              Agents
              <svg className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </a>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="rounded-lg border border-border/60 bg-background/95 backdrop-blur-xl shadow-lg shadow-black/10 py-2 px-1 min-w-[10rem]">
                <a
                  href="https://github.com/catalystbyzoho/agent-skills"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 transition"
                >
                  <span>Agent Skills</span>
                  <svg className="w-3 h-3 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                </a>
                <a
                  href="https://github.com/catalystbyzoho/agent-skills#zoho-mcp-setup-recommended-all-tools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 transition"
                >
                  <span>Zoho MCP setup</span>
                  <svg className="w-3 h-3 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="relative group">
            <Link to="/platform" className="hover:text-foreground transition inline-flex items-center gap-1">
              Platform
              <svg className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="rounded-lg border border-border/60 bg-background/95 backdrop-blur-xl shadow-lg shadow-black/10 py-2 px-1 min-w-[10rem]">
                <Link
                  to="/why-catalyst"
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 transition"
                >
                  <span>Why Catalyst</span>
                </Link>
                <a
                  href="https://writer.zoho.in/writer/open/wue3r4d9c70e11c844d218704ac4fec179b30"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 transition"
                >
                  <span>Zero bandwidth fees</span>
                  <svg className="w-3 h-3 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                </a>
              </div>
            </div>
          </div>
          <a href="/#docs" className="hover:text-foreground transition">Docs</a>
          <a href="/#stack" className="hover:text-foreground transition">Stack</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" className="hidden sm:inline text-sm text-muted-foreground hover:text-foreground transition">Sign in</a>
          <a href="#cta" className="text-sm font-medium px-3.5 py-2 rounded-lg bg-cta-gradient text-background hover:opacity-90 transition">
            Start Free
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function EyebrowPill() {
  return (
    <span className="relative inline-flex rounded-full overflow-hidden p-[1.5px] revolving-glow">
      <span className="relative z-10 inline-flex items-center gap-3 font-mono text-[12px] sm:text-[14px] uppercase tracking-[0.18em] bg-white/[0.04] backdrop-blur-sm px-5 py-2 rounded-full">
        <span className="h-2 w-2 rounded-full bg-primary pulse-glow" />
        <span className="glow-text-pulse font-bold">
          Everything from Prompt to Production
        </span>
      </span>
    </span>
  );
}

function Hero() {
  return (
    <section id="prompt" className="relative bg-hero">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-28 sm:pt-32">
        <Reveal>
          <div className="flex justify-center">
            <EyebrowPill />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-10 text-center font-display font-extrabold tracking-[-0.045em] text-[clamp(2.75rem,8.5vw,6.5rem)] leading-[1.02] text-foreground">
            The Agent-Ready
            <br />Full-Stack Cloud.
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-2xl text-center text-base text-muted-foreground/80 leading-relaxed">
            AI can write code. It still can't ship a finished product. Catalyst closes the gap between what your agents
            generate and what actually runs in production — databases, auth, workflows, deployment, observability.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-5 max-w-3xl text-center text-lg sm:text-xl text-foreground/90 leading-relaxed font-medium tracking-[-0.01em]">
            Prompt what you're building. The AI figures out the rest. It selects the right components,
            wires them, and provisions everything. The AI already knows the platform — you never have to worry
            about learning a new one.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-white text-black font-semibold hover:shadow-[0_0_28px_-4px_rgba(255,255,255,0.25)] transition"
            >
              Initialize Platform
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#docs"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-white/[0.02] text-foreground border border-white/10 hover:bg-white/[0.05] transition font-mono text-sm"
            >
              Read Documentation
            </a>
          </div>
        </Reveal>

        {/* Terminal hero artifact */}
        <Reveal delay={320}>
          <HeroTerminal />
        </Reveal>

        {/* Trust strip */}
        <Reveal delay={420}>
          <div className="mt-20 border-t border-white/[0.06] pt-8">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-muted-foreground/70">
              {["Backend","Data","Auth","Workflows","AI","MCP","Deployment","Observability"].map((t) => (
                <span key={t} className="flex items-center gap-3">
                  <span className="h-1 w-1 rounded-full bg-primary/60" /> {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function HeroTerminal() {
  return (
    <div className="mt-20 mx-auto w-full max-w-3xl rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl p-1 overflow-hidden">
      <div className="w-full bg-[oklch(0.04_0_0)] rounded-[10px] border border-white/[0.06]">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-white/[0.015]">
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-zinc-800" />
            <div className="w-2 h-2 rounded-full bg-zinc-800" />
            <div className="w-2 h-2 rounded-full bg-zinc-800" />
          </div>
          <div className="font-mono text-[10px] text-muted-foreground/60 uppercase tracking-[0.22em]">
            agent_workflow.yaml
          </div>
          <div className="w-10" />
        </div>
        <div className="p-6 sm:p-7 text-left font-mono text-[13px] sm:text-sm leading-[1.85]">
          {[
            { n: "01", key: "agent:", val: "customer-intelligence" },
            { n: "02", key: "role:", val: "autonomous-researcher" },
            { n: "03", key: "runtime:", val: "catalyst-edge-v4" },
            { n: "04", key: "stack:", val: "[ db, auth, workflows, mcp ]" },
            { n: "05", key: "deploy:", val: "us-east · eu-west · ap-south" },
          ].map((l) => (
            <div key={l.n} className="flex gap-5">
              <span className="text-white/15 select-none">{l.n}</span>
              <span className="text-foreground/90">
                <span className="text-accent">{l.key}</span> {l.val}
              </span>
            </div>
          ))}
          <div className="flex gap-5 mt-3">
            <span className="text-white/15 select-none">06</span>
            <span className="inline-block w-2 h-4 align-middle bg-primary cursor-blink" />
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroFlow() {
  const cards = [
    {
      n: "01",
      label: "PROMPT",
      title: "Describe what you want to build.",
      tone: "purple" as const,
      body: (
        <div className="font-mono text-[13px] leading-relaxed text-muted-foreground">
          <span className="text-primary">{">"}</span> Build a customer portal with
          <span className="text-foreground"> authentication</span>,
          <span className="text-foreground"> billing</span>, and
          <span className="text-foreground"> support tickets</span>.
          <span className="cursor-blink ml-1 inline-block w-2 h-4 align-middle bg-primary" />
        </div>
      ),
    },
    {
      n: "02",
      label: "GENERATE",
      title: "AI scaffolds your application.",
      tone: "mix" as const,
      body: (
        <ul className="space-y-2 text-sm">
          {["APIs", "Database", "Authentication", "Workflows"].map((x) => (
            <li key={x} className="flex items-center gap-2 text-foreground">
              <span className="grid place-items-center h-5 w-5 rounded-full bg-primary/15 text-primary text-xs">✓</span>
              {x}
            </li>
          ))}
        </ul>
      ),
    },
    {
      n: "03",
      label: "PRODUCTION",
      title: "Deploy. Scale. Monitor. Operate.",
      tone: "emerald" as const,
      body: (
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 pulse-glow" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
          </span>
          <span className="font-mono text-sm text-foreground">Live</span>
          <span className="ml-auto text-xs text-muted-foreground">us-east · eu-west · ap-south</span>
        </div>
      ),
    },
  ];

  return (
    <div className="relative mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-3 items-stretch">
        {cards.map((c, i) => (
          <div key={c.n} className="relative">
            <div className={`glass-strong rounded-2xl p-6 h-full noise relative overflow-hidden ${c.tone === "emerald" ? "ring-glow-emerald" : c.tone === "purple" ? "ring-glow-purple" : ""}`}>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-widest text-muted-foreground">{c.n}</span>
                <span className={`text-[11px] tracking-[0.18em] font-semibold px-2 py-1 rounded-md ${c.tone === "purple" ? "bg-accent/15 text-accent" : "bg-primary/15 text-primary"}`}>
                  {c.label}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">{c.title}</h3>
              <div className="mt-5 rounded-xl bg-background/40 border border-border/60 p-4 min-h-[120px]">
                {c.body}
              </div>
            </div>

            {i < cards.length - 1 && (
              <div className="hidden md:flex absolute top-1/2 -right-3 z-10 -translate-y-1/2 items-center">
                <svg width="36" height="14" viewBox="0 0 36 14" fill="none">
                  <path d="M0 7 H28" stroke="url(#g)" strokeWidth="1.5" className="flow-dash" />
                  <path d="M28 1 L35 7 L28 13" stroke="url(#g)" strokeWidth="1.5" fill="none" />
                  <defs>
                    <linearGradient id="g" x1="0" x2="36" y1="0" y2="0">
                      <stop offset="0" stopColor="oklch(0.66 0.21 295)" />
                      <stop offset="1" stopColor="oklch(0.78 0.16 168)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Fold 2: Developers + Agents ---------- */
function FoldTwo() {
  return (
    <section id="agents" className="relative py-28 sm:py-36 border-t border-border/60">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-primary">Developers in control. Agents in the stack.</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-black tracking-[-0.03em] leading-[1.05]">
              Built for Developers.
              <br />
              <span className="text-gradient-emerald">Ready for Agents.</span>
            </h2>
            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed text-lg">
              <p>Most infrastructure platforms were built for humans.</p>
              <p className="text-foreground/80">
                Read documentation. Configure services. Wire everything together. Deploy manually.
              </p>
              <p>That's not how software is built anymore.</p>
              <p className="text-foreground">
                Developers increasingly direct agents. Agents increasingly assemble applications.
                Catalyst is designed for both — the same platform powers developers who create and agents who execute.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <Terminal />
        </Reveal>
      </div>

      <div id="platform" className="mx-auto max-w-7xl px-6 mt-28">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { t: "MCP", s: "Native protocol support", d: "Allow agents to discover and interact with your application infrastructure." },
            { t: "Agents", s: "First-class citizens", d: "Infrastructure designed to be operated by both humans and AI." },
            { t: "Workflows", s: "Composable orchestration", d: "Connect services, automate tasks, and coordinate systems." },
            { t: "Observability", s: "Built-in visibility", d: "Logs, monitoring, tracing, and debugging from day one." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 80}>
              <div className="glass rounded-2xl p-6 h-full hover:bg-white/[0.05] transition group">
                <h3 className="text-lg font-semibold">{c.t}</h3>
                <p className="text-sm text-primary/80 mt-1">{c.s}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-16 mx-auto max-w-3xl text-center text-xl sm:text-2xl font-medium tracking-[-0.01em] text-foreground/90">
            The future isn't developers versus agents.
            <br />
            <span className="text-gradient-emerald">The future is developers directing agents.</span>
            <br />
            <span className="text-muted-foreground text-base sm:text-lg block mt-3">Catalyst provides the infrastructure layer both depend on.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Terminal() {
  const lines = [
    "Creating backend",
    "Provisioning database",
    "Configuring auth",
    "Generating workflows",
    "Deploying globally",
  ];
  const [step, setStep] = useState(-1);
  useEffect(() => {
    let i = -1;
    const id = setInterval(() => {
      i++;
      if (i > lines.length) {
        i = -1;
      }
      setStep(i);
    }, 700);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="glass-strong rounded-2xl overflow-hidden ring-glow-emerald">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60 bg-black/30">
        <span className="h-3 w-3 rounded-full bg-[oklch(0.7_0.18_25)]" />
        <span className="h-3 w-3 rounded-full bg-[oklch(0.82_0.16_85)]" />
        <span className="h-3 w-3 rounded-full bg-[oklch(0.78_0.16_145)]" />
        <span className="ml-3 text-xs font-mono text-muted-foreground">catalyst — zsh</span>
      </div>
      <div className="p-6 font-mono text-sm leading-7 bg-black/20 min-h-[360px]">
        <div>
          <span className="text-primary">{">"}</span>{" "}
          <span className="text-foreground">Build a customer support platform</span>
        </div>
        <div className="mt-3 space-y-1.5">
          {lines.map((l, i) => (
            <div key={l} className="flex items-center gap-3 transition" style={{ opacity: step >= i ? 1 : 0.25 }}>
              <span className={step >= i ? "text-primary" : "text-muted-foreground"}>
                {step > i ? "✓" : step === i ? "…" : "·"}
              </span>
              <span className={step >= i ? "text-foreground" : "text-muted-foreground"}>{l}</span>
            </div>
          ))}
        </div>
        {step >= lines.length && (
          <div className="mt-5 inline-flex items-center gap-2 text-foreground">
            <span className="h-2 w-2 rounded-full bg-primary pulse-glow" />
            <span className="text-gradient-emerald font-semibold">Live in 24 seconds</span>
          </div>
        )}
        <div className="mt-4">
          <span className="text-primary">{">"}</span>
          <span className="cursor-blink ml-2 inline-block w-2 h-4 align-middle bg-primary" />
        </div>
      </div>
    </div>
  );
}

/* ---------- Fold 3: Stack ---------- */
function FoldThree() {
  const layers = [
    { n: "01", t: "Frontend", d: "Modern web experiences." },
    { n: "02", t: "Backend", d: "Serverless functions and APIs." },
    { n: "03", t: "Data", d: "Relational database and storage." },
    { n: "04", t: "AI", d: "Models, agents, and intelligence." },
    { n: "05", t: "Workflows", d: "Automation and orchestration." },
    { n: "06", t: "Deploy", d: "Production infrastructure." },
  ];
  return (
    <section id="stack" className="relative py-28 sm:py-36 border-t border-border/60">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[60rem] rounded-full bg-accent/20 blur-3xl pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-6xl font-black tracking-[-0.035em] leading-[1.02]">
              One platform.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Build, deploy, and operate any application using compute, relational data, authentication,
              workflows, AI services, and deployment infrastructure on a single platform.
            </p>
            <p className="mt-4 text-sm text-muted-foreground/80">
              No service sprawl. No infrastructure assembly. No stitching together six different vendors.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-4">
          {layers.map((l, i) => (
            <Reveal key={l.n} delay={i * 70}>
              <div className="group glass rounded-2xl p-6 h-full relative overflow-hidden hover:bg-white/[0.05] transition">
                <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-cta-gradient opacity-0 group-hover:opacity-20 blur-2xl transition" />
                <div className="flex items-baseline justify-end">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/60 group-hover:bg-primary transition" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">{l.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{l.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-8 glass-strong rounded-2xl p-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm">
            <span className="text-primary font-mono">⚡</span>
            {["One API", "One Dashboard", "One Bill", "One Deployment"].map((x, i) => (
              <span key={x} className="flex items-center gap-8">
                <span className="text-foreground font-medium">{x}</span>
                {i < 3 && <span className="text-muted-foreground/40">•</span>}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Fold 4: Why ---------- */
function FoldFour() {
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
  return (
    <section id="why" className="relative py-28 sm:py-36 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-xs font-mono tracking-[0.2em] text-muted-foreground uppercase">
            What makes Catalyst different
          </div>
          <h2 className="mt-4 text-4xl sm:text-5xl font-black tracking-[-0.03em] max-w-3xl">
            The things no other cloud platform can say.
          </h2>
        </Reveal>
        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 90}>
              <div className="glass rounded-2xl p-8 h-full hover:bg-white/[0.05] transition relative overflow-hidden flex flex-col">
                <div className="text-[11px] font-mono tracking-[0.18em] text-primary/80 uppercase">
                  {it.label}
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight leading-snug">{it.t}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{it.d}</p>
                <p className="mt-6 pt-6 border-t border-border/60 text-sm text-foreground/80 leading-relaxed">
                  <span className="text-primary mr-2">→</span>{it.proof}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="cta" className="relative py-28 sm:py-36 border-t border-border/60 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[40rem] w-[60rem] bg-cta-gradient opacity-25 blur-3xl rounded-full" />
        <div className="absolute inset-0 grid-bg" />
      </div>
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <h2 className="font-black tracking-[-0.04em] text-[clamp(2.5rem,7vw,5rem)] leading-[0.98]">
            Stop wiring.
            <br />
            <span className="text-gradient-emerald">Start shipping.</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-8 mx-auto max-w-2xl text-lg text-muted-foreground">
            Everything your AI needs to generate. Everything your application needs to run.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-cta-gradient text-background font-semibold ring-glow-emerald hover:scale-[1.02] transition">
              Start Free <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#stack" className="inline-flex items-center gap-2 px-7 py-4 rounded-xl glass text-foreground hover:bg-white/5 transition">
              See the Platform
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
export function Footer() {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="h-6 w-6 rounded-md bg-cta-gradient grid place-items-center text-[10px] font-black text-background">C</span>
          <span>© {new Date().getFullYear()} Catalyst — One platform.</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-foreground transition">Docs</a>
          <a href="#" className="hover:text-foreground transition">Pricing</a>
          <a href="#" className="hover:text-foreground transition">Security</a>
          <a href="#" className="hover:text-foreground transition">Status</a>
        </div>
      </div>
    </footer>
  );
}

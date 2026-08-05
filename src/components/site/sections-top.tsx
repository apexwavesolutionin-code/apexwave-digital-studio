import {
  ArrowRight,
  Sparkles,
  Globe,
  Smartphone,
  Palette,
  Megaphone,
  Search,
  MousePointerClick,
  Share2,
  Target,
  PenTool,
  Clapperboard,
  Layers,
  Wrench,
  Lightbulb,
  Map,
  Boxes,
  Cpu,
  Zap,
  MessagesSquare,
  LifeBuoy,
  TrendingUp,
  MessageCircle,
} from "lucide-react";
import heroImg from "@/assets/hero-3d.jpg";
import { Counter, Reveal } from "./reveal";

export function Hero() {
  return (
    <section id="home" className="hero-bg relative overflow-hidden pt-36 pb-24 sm:pt-44">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -left-40 size-[26rem] rounded-full bg-primary/20 blur-[140px]"
      />
      <div className="mx-auto grid max-w-6xl gap-14 px-4 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <Reveal className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs tracking-wide text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" />
            Build. Brand. Grow.
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl leading-[1.05] font-extrabold sm:text-5xl lg:text-6xl">
              We Build Digital Experiences That{" "}
              <span className="text-gradient">Drive Business Growth.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Helping businesses grow with premium branding, modern websites, mobile applications,
              digital marketing, and lead generation solutions designed for measurable results.
            </p>
          </Reveal>
          <Reveal delay={240} className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[var(--shadow-glow)]"
            >
              Get Free Consultation
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#portfolio"
              className="glass lift inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold"
            >
              View Portfolio
            </a>
          </Reveal>
          <Reveal delay={320} className="mt-12 grid max-w-lg grid-cols-3 gap-4">
            {[
              { v: 120, s: "+", l: "Projects" },
              { v: 98, s: "%", l: "Retention" },
              { v: 12, s: "K+", l: "Leads" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl px-4 py-4">
                <p className="font-display text-2xl font-extrabold text-primary">
                  <Counter value={s.v} suffix={s.s} />
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={120} className="relative">
          <div className="glass glow-ring animate-float-slow overflow-hidden rounded-3xl p-2">
            <img
              src={heroImg}
              alt="Floating 3D laptop, smartphone and analytics dashboard showcasing Apexwave digital work"
              width={1536}
              height={1152}
              className="w-full rounded-[1.25rem]"
            />
          </div>
          <div className="glass animate-float absolute -bottom-6 -left-2 rounded-2xl px-4 py-3 sm:left-6">
            <p className="text-[11px] tracking-wide text-muted-foreground uppercase">
              Avg. conversion lift
            </p>
            <p className="font-display text-xl font-bold text-primary">
              +<Counter value={214} suffix="%" />
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const STATS = [
  { value: 120, suffix: "+", label: "Projects Completed" },
  { value: 85, suffix: "+", label: "Happy Clients" },
  { value: 12500, suffix: "+", label: "Leads Generated" },
  { value: 7, suffix: "+", label: "Years of Experience" },
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <Reveal>
            <p className="text-xs tracking-[0.25em] text-primary uppercase">Who We Are</p>
            <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold sm:text-4xl">
              A digital studio built for measurable business growth.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-base leading-relaxed text-muted-foreground">
              APEXWAVE SOLUTION creates modern digital experiences that help businesses establish a
              powerful online presence. From branding and web development to marketing and lead
              generation, every solution is designed to deliver measurable business growth.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="glass lift h-full rounded-3xl p-6">
                <p className="font-display text-4xl font-extrabold">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  { icon: Globe, title: "Website Development", desc: "Fast, scalable, conversion-first websites." },
  { icon: Smartphone, title: "Mobile App Development", desc: "iOS and Android apps people keep." },
  { icon: Palette, title: "Branding", desc: "Identity systems with lasting recall." },
  { icon: Megaphone, title: "Digital Marketing", desc: "Full-funnel campaigns tied to revenue." },
  { icon: Search, title: "SEO", desc: "Technical and content SEO that compounds." },
  { icon: MousePointerClick, title: "Google Ads", desc: "Search and shopping built for ROAS." },
  { icon: Target, title: "Meta Ads", desc: "Creative-led acquisition on Meta." },
  { icon: Share2, title: "Social Media Marketing", desc: "Consistent, on-brand social presence." },
  { icon: TrendingUp, title: "Lead Generation", desc: "Qualified pipeline, not vanity metrics." },
  { icon: PenTool, title: "Graphic Design", desc: "Premium visual assets across channels." },
  { icon: Clapperboard, title: "Video Editing", desc: "Motion graphics and short-form edits." },
  { icon: Layers, title: "UI/UX Design", desc: "Research-backed interfaces that convert." },
  { icon: Wrench, title: "Website Maintenance", desc: "Monitoring, updates and performance care." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="max-w-2xl">
          <p className="text-xs tracking-[0.25em] text-primary uppercase">Services</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
            Everything you need to launch, scale and stay ahead.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 80}>
              <article className="glass lift group relative h-full overflow-hidden rounded-3xl p-6">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-16 -right-16 size-40 rounded-full bg-primary/0 blur-3xl transition-colors duration-500 group-hover:bg-primary/25"
                />
                <span className="grid size-11 place-items-center rounded-2xl bg-primary/12 text-primary ring-1 ring-primary/25">
                  <s.icon className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const REASONS = [
  { icon: Lightbulb, title: "Creative Thinking" },
  { icon: Map, title: "Strategic Planning" },
  { icon: Boxes, title: "Custom Solutions" },
  { icon: Cpu, title: "Modern Technologies" },
  { icon: Zap, title: "Fast Delivery" },
  { icon: MessagesSquare, title: "Transparent Communication" },
  { icon: LifeBuoy, title: "Long-Term Support" },
  { icon: TrendingUp, title: "Results-Driven Execution" },
];

export function WhyUs() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="glass relative overflow-hidden rounded-[2rem] p-8 sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/3 size-80 rounded-full bg-primary/20 blur-[120px]"
          />
          <Reveal className="max-w-2xl">
            <p className="text-xs tracking-[0.25em] text-primary uppercase">Why Apexwave</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
              Craft, clarity and accountability on every engagement.
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {REASONS.map((r, i) => (
              <Reveal as="li" key={r.title} delay={(i % 4) * 70}>
                <r.icon className="size-5 text-primary" />
                <p className="mt-3 font-display text-sm font-bold">{r.title}</p>
                <div className="hairline mt-4" />
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

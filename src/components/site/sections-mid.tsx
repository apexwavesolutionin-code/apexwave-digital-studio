import { useState } from "react";
import { ArrowUpRight, Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import workWeb from "@/assets/work-web.jpg";
import workApp from "@/assets/work-app.jpg";
import workBrand from "@/assets/work-brand.jpg";
import workMarketing from "@/assets/work-marketing.jpg";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

const PROJECTS = [
  {
    img: workWeb,
    category: "Websites",
    title: "Auric Retail Platform",
    desc: "Luxury commerce experience with a 2.4s faster load and 38% higher checkout rate.",
  },
  {
    img: workApp,
    category: "Mobile Apps",
    title: "Northbank Finance App",
    desc: "A dark-mode fintech app with biometric onboarding and real-time insights.",
  },
  {
    img: workBrand,
    category: "Branding",
    title: "Meridian Identity System",
    desc: "Full visual identity, stationery and brand guidelines for a consulting firm.",
  },
  {
    img: workMarketing,
    category: "Digital Marketing",
    title: "Orbit Growth Engine",
    desc: "Google and Meta campaigns generating 4,200 qualified leads in nine months.",
  },
  {
    img: workWeb,
    category: "Social Media Designs",
    title: "Lumen Content Studio",
    desc: "A 90-day content system that tripled organic reach across channels.",
  },
  {
    img: workApp,
    category: "Video Editing",
    title: "Vertex Motion Reel",
    desc: "Motion graphics and short-form edits built for paid social performance.",
  },
];

const FILTERS = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

export function Portfolio() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="max-w-2xl">
          <p className="text-xs tracking-[0.25em] text-primary uppercase">Portfolio</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
            Selected work across product, brand and growth.
          </h2>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full px-4 py-2 text-[13px] font-medium transition-all",
                filter === f
                  ? "bg-primary text-primary-foreground shadow-[var(--shadow-glow)]"
                  : "glass text-muted-foreground hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 80}>
              <article className="glass lift group h-full overflow-hidden rounded-3xl">
                <div className="overflow-hidden">
                  <img
                    src={p.img}
                    alt={`${p.title} — ${p.category} project by Apexwave Solution`}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[11px] tracking-[0.2em] text-primary uppercase">
                    {p.category}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                  >
                    View Project
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { n: "01", t: "Discovery", d: "Deep dive into goals, market and audience." },
  { n: "02", t: "Planning", d: "Roadmap, architecture and success metrics." },
  { n: "03", t: "Design", d: "Premium interfaces and brand systems." },
  { n: "04", t: "Development", d: "Clean, performant, scalable builds." },
  { n: "05", t: "Launch", d: "QA, analytics and a controlled release." },
  { n: "06", t: "Growth", d: "Optimisation, campaigns and reporting." },
];

export function Process() {
  return (
    <section id="process" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="max-w-2xl">
          <p className="text-xs tracking-[0.25em] text-primary uppercase">Working Process</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
            A calm, transparent path from idea to growth.
          </h2>
        </Reveal>

        <ol className="relative mt-14 grid gap-5 md:grid-cols-3">
          <div
            aria-hidden
            className="hairline absolute inset-x-0 top-16 hidden md:block"
            style={{ height: 1 }}
          />
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.n} delay={(i % 3) * 90}>
              <div className="glass lift relative h-full rounded-3xl p-6">
                <span className="font-display text-3xl font-extrabold text-primary/40">{s.n}</span>
                <h3 className="mt-3 font-display text-lg font-bold">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    name: "Ananya Rao",
    company: "Auric Retail",
    quote:
      "Apexwave rebuilt our storefront and identity in eight weeks. Revenue per session is up 41% and the brand finally feels premium.",
    initials: "AR",
  },
  {
    name: "Daniel Fisher",
    company: "Northbank",
    quote:
      "The app they shipped is genuinely best-in-class. Clear communication, zero surprises, and a design team that understands finance.",
    initials: "DF",
  },
  {
    name: "Priya Menon",
    company: "Meridian Consulting",
    quote:
      "Strategy first, design second — exactly what we needed. Our lead quality improved within the first month of launch.",
    initials: "PM",
  },
  {
    name: "Marcus Hale",
    company: "Orbit Labs",
    quote:
      "Their paid media team treats budget like their own. 4,200 qualified leads and a cost per lead that keeps dropping.",
    initials: "MH",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="max-w-2xl">
          <p className="text-xs tracking-[0.25em] text-primary uppercase">Testimonials</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
            Trusted by founders and marketing leaders.
          </h2>
        </Reveal>
      </div>

      <div className="group relative mt-14 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <ul className="animate-marquee flex w-max gap-5 group-hover:[animation-play-state:paused]">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <li key={`${t.name}-${i}`} className="glass w-[19rem] shrink-0 rounded-3xl p-6 sm:w-96">
              <div className="flex items-center gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary/15 font-display text-sm font-bold text-primary">
                  {t.initials}
                </span>
                <div className="min-w-0">
                  <p className="truncate font-display text-sm font-bold">{t.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{t.company}</p>
                </div>
              </div>
              <div className="mt-4 flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-3.5 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">“{t.quote}”</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: "How is pricing structured?",
    a: "Every engagement is scoped individually. Websites typically start at ₹45,000, brand identity at ₹35,000 and marketing retainers at ₹25,000 per month. You receive a fixed proposal before any work begins.",
  },
  {
    q: "What is a typical project timeline?",
    a: "A marketing website takes 3–5 weeks, a full brand system 4–6 weeks, and a mobile app 8–14 weeks depending on scope. We share a milestone plan in the planning phase.",
  },
  {
    q: "Do you handle SEO after launch?",
    a: "Yes. Technical SEO, schema, Core Web Vitals and on-page structure are built in, and we offer ongoing content and link programmes as a monthly retainer.",
  },
  {
    q: "Which marketing channels do you manage?",
    a: "Google Ads, Meta Ads, organic social, email and landing-page conversion work — all reported against pipeline, not impressions.",
  },
  {
    q: "Can you refresh an existing brand?",
    a: "Absolutely. We run brand audits and evolve existing identities where the equity is worth keeping, rather than restarting from zero.",
  },
  {
    q: "Do you offer website maintenance?",
    a: "Yes — updates, security patches, backups, uptime monitoring and performance tuning are available as a monthly care plan.",
  },
  {
    q: "What support do clients get after handover?",
    a: "Thirty days of complimentary support on every project, plus optional long-term retainers with a named point of contact and guaranteed response times.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="text-xs tracking-[0.25em] text-primary uppercase">FAQ</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
            Answers before you ask.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Still unsure about something? Send us a note and we will reply within one business day.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <Accordion type="single" collapsible className="glass rounded-3xl px-5 py-1">
            {FAQS.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-border/60">
                <AccordionTrigger className="text-left font-display text-[15px] font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

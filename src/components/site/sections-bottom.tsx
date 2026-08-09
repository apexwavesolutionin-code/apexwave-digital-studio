import { useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import {
  Mail,
  Phone,
  MessageCircle,
  CalendarClock,
  MapPin,
  Clock,
  ArrowRight,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
} from "lucide-react";
import { Reveal } from "./reveal";
import markAsset from "@/assets/apexwave-mark.png.asset.json";


const SERVICE_OPTIONS = [
  "Website Development",
  "Mobile App Development",
  "Branding",
  "Digital Marketing",
  "SEO",
  "Google Ads",
  "Meta Ads",
  "Social Media Marketing",
  "Lead Generation",
  "Graphic Design",
  "Video Editing",
  "UI/UX Design",
  "Website Maintenance",
];

const BUDGETS = ["Under ₹50,000", "₹50,000 – ₹1,50,000", "₹1,50,000 – ₹5,00,000", "₹5,00,000+"];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  company: z.string().trim().max(100).optional(),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  service: z.string().trim().min(1, "Select a service"),
  budget: z.string().trim().min(1, "Select a budget"),
  message: z.string().trim().min(10, "Tell us a little more").max(1000),
});

const SOCIALS = [
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com" },
  { label: "X (Twitter)", icon: Twitter, href: "https://x.com" },
  { label: "Instagram", icon: Instagram, href: "https://www.instagram.com" },
  { label: "Facebook", icon: Facebook, href: "https://www.facebook.com" },
  { label: "YouTube", icon: Youtube, href: "https://www.youtube.com" },
];

const MAP_QUERY = "Villapuram, Madurai, Tamil Nadu, India";

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }
    setErrors({});
    form.reset();
    toast.success("Thank you — we'll get back to you within one business day.");
  };

  const field =
    "w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/60";

  return (
    <section id="contact" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="max-w-2xl">
          <p className="text-xs tracking-[0.25em] text-primary uppercase">Contact</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
            Let's talk about your next move.
          </h2>
        </Reveal>

        <div className="mt-10 grid sm:mt-14 gap-6 lg:grid-cols-2">
          <Reveal className="space-y-6">
            <div className="glass rounded-3xl p-5 sm:p-7">
              <h3 className="font-display text-lg font-bold">Contact Information</h3>
              <div className="mt-5 grid gap-4 text-sm">
                <a
                  href="mailto:apexwavesolution.in@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="size-4 shrink-0 text-primary" />
                  <span className="truncate">apexwavesolution.in@gmail.com</span>
                </a>
                <a
                  href="tel:+919345192523"
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="size-4 shrink-0 text-primary" />
                  +91 93451 92523
                </a>
                <p className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="size-4 shrink-0 text-primary" />
                  {MAP_QUERY}
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-2.5">
                {[
                  { l: "Call Now", i: Phone, h: "tel:+919345192523", ext: false },
                  {
                    l: "WhatsApp",
                    i: MessageCircle,
                    h: "https://wa.me/919345192523",
                    ext: true,
                  },
                  {
                    l: "Send Email",
                    i: Mail,
                    h: "mailto:apexwavesolution.in@gmail.com",
                    ext: false,
                  },
                  { l: "Book Consultation", i: CalendarClock, h: "#contact", ext: false },
                ].map((a) => (
                  <a
                    key={a.l}
                    href={a.h}
                    {...(a.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="lift flex items-center gap-2 rounded-xl border border-border bg-white/[0.03] px-3.5 py-3 text-[13px] font-medium"
                  >
                    <a.i className="size-4 shrink-0 text-primary" />
                    <span className="truncate">{a.l}</span>
                  </a>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-border bg-white/[0.02] p-4 text-sm">
                <p className="flex items-center gap-2 font-display font-semibold">
                  <Clock className="size-4 text-primary" /> Business Hours
                </p>
                <ul className="mt-3 space-y-1.5 text-muted-foreground">
                  <li className="flex justify-between gap-4">
                    <span>Monday–Friday</span>
                    <span>9 AM – 7 PM</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span>Saturday</span>
                    <span>10 AM – 5 PM</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid size-11 place-items-center rounded-full border border-border bg-white/[0.03] text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
                  >
                    <s.icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="glass overflow-hidden rounded-3xl p-2 shadow-[var(--shadow-card)]">
              <iframe
                title="APEXWAVES SOLUTION location map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`}
                className="h-72 w-full rounded-[1.25rem] border-0 grayscale-[0.4]"
              />
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-1.5 rounded-xl px-4 py-3 text-[13px] font-semibold text-primary"
              >
                Open in Google Maps <ArrowRight className="size-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={onSubmit} noValidate className="glass rounded-3xl p-5 sm:p-7">
              <h3 className="font-display text-lg font-bold">Start a project</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { n: "name", l: "Name", t: "text", ph: "Your full name" },
                  { n: "company", l: "Company", t: "text", ph: "Company name" },
                  { n: "email", l: "Email", t: "email", ph: "you@company.com" },
                  { n: "phone", l: "Phone", t: "tel", ph: "+91 00000 00000" },
                ].map((f) => (
                  <div key={f.n}>
                    <label htmlFor={f.n} className="text-xs font-medium text-muted-foreground">
                      {f.l}
                    </label>
                    <input
                      id={f.n}
                      name={f.n}
                      type={f.t}
                      placeholder={f.ph}
                      maxLength={255}
                      className={`${field} mt-1.5`}
                    />
                    {errors[f.n] && (
                      <p className="mt-1.5 text-xs text-destructive">{errors[f.n]}</p>
                    )}
                  </div>
                ))}

                <div>
                  <label htmlFor="service" className="text-xs font-medium text-muted-foreground">
                    Service
                  </label>
                  <select id="service" name="service" defaultValue="" className={`${field} mt-1.5`}>
                    <option value="" disabled>
                      Select a service
                    </option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s} className="bg-background">
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors['service'] && (
                    <p className="mt-1.5 text-xs text-destructive">{errors['service']}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="budget" className="text-xs font-medium text-muted-foreground">
                    Budget
                  </label>
                  <select id="budget" name="budget" defaultValue="" className={`${field} mt-1.5`}>
                    <option value="" disabled>
                      Select a budget
                    </option>
                    {BUDGETS.map((b) => (
                      <option key={b} value={b} className="bg-background">
                        {b}
                      </option>
                    ))}
                  </select>
                  {errors['budget'] && (
                    <p className="mt-1.5 text-xs text-destructive">{errors['budget']}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-xs font-medium text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    maxLength={1000}
                    placeholder="Tell us about your goals, timeline and scope."
                    className={`${field} mt-1.5 resize-none`}
                  />
                  {errors['message'] && (
                    <p className="mt-1.5 text-xs text-destructive">{errors['message']}</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[var(--shadow-glow)]"
              >
                Book Free Consultation
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="hero-bg glass relative overflow-hidden rounded-[2.5rem] px-6 py-20 text-center sm:px-14">
          <div
            aria-hidden
            className="animate-float pointer-events-none absolute -top-20 left-1/2 size-96 -translate-x-1/2 rounded-full bg-primary/25 blur-[130px]"
          />
          <div
            aria-hidden
            className="animate-float-slow pointer-events-none absolute -right-16 bottom-0 size-64 rounded-full border border-primary/20"
          />
          <Reveal className="relative">
            <h2 className="mx-auto max-w-3xl font-display text-3xl leading-tight font-extrabold sm:text-5xl">
              Ready to Build Something Exceptional?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Create a strong digital presence with modern design, strategic branding, and
              performance-focused marketing solutions.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[var(--shadow-glow)]"
              >
                Get Started
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="mailto:apexwavesolution.in@gmail.com"
                className="glass lift inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold"
              >
                Contact Us
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const FOOTER_SERVICES = [
  "Website Development",
  "Mobile App Development",
  "Branding",
  "Digital Marketing",
  "SEO",
  "UI/UX Design",
];

export function Footer() {
  return (
    <footer className="relative border-t border-border pt-16 pb-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src={markAsset.url}
                alt="APEXWAVES SOLUTION logo"
                width={428}
                height={311}
                className="h-9 w-auto"
              />
              <span className="font-display text-sm font-extrabold tracking-[0.18em] uppercase">
                APEXWAVES SOLUTION
              </span>
            </div>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A digital studio building brands, websites, apps and growth systems for ambitious
              businesses.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Quick links">
            <h3 className="font-display text-sm font-bold">Quick Links</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-foreground">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-bold">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {FOOTER_SERVICES.map((s) => (
                <li key={s}>
                  <a href="#services" className="transition-colors hover:text-foreground">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold">Newsletter</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Occasional notes on design, growth and performance.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const input = e.currentTarget.elements.namedItem("newsletter") as HTMLInputElement;
                const ok = z.string().trim().email().max(255).safeParse(input.value).success;
                if (!ok) {
                  toast.error("Enter a valid email address.");
                  return;
                }
                e.currentTarget.reset();
                toast.success("You're subscribed.");
              }}
              className="mt-4 flex gap-2"
            >
              <label htmlFor="newsletter" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter"
                name="newsletter"
                type="email"
                maxLength={255}
                placeholder="you@company.com"
                className="min-w-0 flex-1 rounded-xl border border-border bg-white/[0.03] px-3.5 py-2.5 text-sm outline-none focus:border-primary/60"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground transition-all hover:brightness-110"
              >
                <ArrowRight className="size-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="hairline mt-12" />
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} APEXWAVES SOLUTION. All rights reserved.</p>
          <p className="font-medium">Designed with passion by APEXWAVES SOLUTION</p>
        </div>
      </div>
    </footer>
  );
}

import { useState } from "react";
import { MessageCircle, Phone, Mail, CalendarClock, Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";

const ACTIONS = [
  { label: "WhatsApp", icon: MessageCircle, href: "https://wa.me/919345192523", external: true },
  { label: "Call", icon: Phone, href: "tel:+919345192523", external: false },
  { label: "Email", icon: Mail, href: "mailto:apexwavesolution.in@gmail.com", external: false },
  { label: "Schedule Meeting", icon: CalendarClock, href: "#contact", external: false },
];

export function FloatingActions() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-2.5 sm:right-6 sm:bottom-6">
      {ACTIONS.map((a, i) => (
        <a
          key={a.label}
          href={a.href}
          {...(a.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          onClick={() => setOpen(false)}
          style={{ transitionDelay: `${open ? i * 45 : 0}ms` }}
          className={cn(
            "glass group flex items-center gap-2.5 rounded-full py-2.5 pr-4 pl-2.5 text-[13px] font-medium transition-all duration-300",
            open
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none translate-y-3 opacity-0",
          )}
        >
          <span className="grid size-8 place-items-center rounded-full bg-primary/15 text-primary">
            <a.icon className="size-4" />
          </span>
          {a.label}
        </a>
      ))}
      <button
        type="button"
        aria-label={open ? "Close contact menu" : "Open contact menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="grid size-12 place-items-center rounded-full bg-primary text-primary-foreground sm:size-14 shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
      >
        {open ? <X className="size-5" /> : <Plus className="size-5" />}
      </button>
    </div>
  );
}

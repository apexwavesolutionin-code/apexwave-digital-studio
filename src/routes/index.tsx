import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/nav";
import { FloatingActions } from "@/components/site/floating-actions";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { Hero, About, Services, WhyUs } from "@/components/site/sections-top";
import { Portfolio, Process, Testimonials, Faq } from "@/components/site/sections-mid";
import { Contact, FinalCta, Footer } from "@/components/site/sections-bottom";

const title = "APEXWAVE SOLUTION — Build. Brand. Grow.";
const description =
  "Premium branding, websites, mobile apps, digital marketing and lead generation built for measurable business growth.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Portfolio />
        <Process />
        <Testimonials />
        <Faq />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
      <FloatingActions />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "APEXWAVE SOLUTION",
            slogan: "Build. Brand. Grow.",
            description,
            email: "apexwavesolution.in@gmail.com",
            telephone: "+91 93451 92523",
            areaServed: "IN",
          }),
        }}
      />
    </div>
  );
}

import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919345192523";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with APEXWAVES SOLUTION on WhatsApp"
      className="fixed right-4 bottom-20 z-50 grid size-12 sm:size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl sm:right-6 sm:bottom-28"
    >
      <MessageCircle className="size-6 fill-current" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />
    </a>
  );
}

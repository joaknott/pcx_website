
export default function WhatsAppFloat({ href }: { href: string }) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="¿Te ayudamos? Escribinos por WhatsApp"
        className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-sm font-semibold text-black shadow-lg transition-transform hover:scale-105"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        </svg>
        <span className="hidden sm:inline">¿Te ayudamos?</span>
      </a>
    );
  }
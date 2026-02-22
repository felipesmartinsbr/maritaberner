import React, { useState, type MouseEvent } from 'react';
import { Instagram, ExternalLink, Copy, Check } from 'lucide-react';

// Custom TikTok icon
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    height="1em"
    width="1em"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

interface LinkData {
  title: string;
  code: string;
  url: string;
  tag?: string;
}

const links: LinkData[] = [
  {
    title: "SAINT GERMAIN",
    code: "A-MARIANAFSGRA",
    url: "https://www.saintgermainbrand.com.br/?fbclid=PAQ0xDSwLuliFleHRuA2FlbQIxMQABp3qSA5xVm_DRNMSrs4jA5Iyx1zNY2GOuUdriXM_4M19tt6fK6cjWRGagMXIZ_aem_qyluxJmnfDhyG9lrUUInyQ",
    tag: "Relógios"
  },
  {
    title: "SHEIN",
    code: "TABERNERBR10",
    url: "https://m.shein.com/br/pdsearch/YMJT8/?dont_use_suggest_word=1&ici=s1%60EditSearch%60YMJT8%60_fb%60d0%60PageStore&search_type=store&src_identifier=st%3D2%60sc%3DYMJT8%60sr%3D0%60ps%3D0&src_module=store_search&src_tab_page_id=page_store_pre_search1753331260561&store_code=7637004454&word_id=0",
    tag: "Moda"
  },
  {
    title: "OLLIE",
    code: "MARITABERNER10",
    url: "https://meuollie.com.br/?utm_source=afiliados&utm_medium=social&utm_campaign=MARITABERNER10",
    tag: "Skincare"
  },
  {
    title: "VETCARDS",
    code: "MARII10",
    url: "https://www.rafavet.online/?fbclid=PAQ0xDSwLulwtleHRuA2FlbQIxMQABp0iKJEYYeEgdPKE6l6wG2Tw-G3-6gISxPErzYzeKNV7VT75O9g11awCVxiq__aem_YA8zXHqqyXmHFU0i2Q7OUQ",
    tag: "Veterinária"
  },
  {
    title: "VETSINITALY",
    code: "MARII100",
    url: "https://shadow.doctorsinitaly.com/?fbclid=PAQ0xDSwLulHxleHRuA2FlbQIxMQABpz3Nj4_yajhYQW5pQ-taH_qYErWO0GY3y73xbi0udE80YVAJ69CKUp2O_fF3_aem_AkR9kKQN7r4ur6zSego4Yw",
    tag: "Intercâmbio"
  }
];

const LinkCard: React.FC<{ link: LinkData; index: number }> = ({ link, index }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(link.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Calculate delay class based on index (clamped to available classes)
  const delayClass = index < 8 ? `delay-${(index + 2) * 100}` : 'delay-800';

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex w-full flex-col items-center justify-center overflow-hidden rounded-full border-[0.5px] border-luxury-rose-gold/40 bg-white p-2.5 shadow-[0_2px_10px_-3px_rgba(230,183,169,0.15)] transition-all duration-500 hover:-translate-y-0.5 hover:border-luxury-rose-gold hover:shadow-[0_8px_20px_-5px_rgba(230,183,169,0.25)] active:scale-[0.99] animate-fade-in-up opacity-0 ${delayClass}`}
    >
      <div className="flex w-full items-center justify-between px-2">
        {/* Left: Spacer to balance layout */}
        <div className="w-6" />

        {/* Center: Content */}
        <div className="flex flex-col items-center text-center">
          <span className="font-serif text-base font-medium tracking-wider text-luxury-text transition-colors duration-300 group-hover:text-luxury-rose-gold">
            {link.title}
          </span>

          <div className="mt-1 flex items-center gap-2">
            <span className="font-sans text-[10px] font-medium uppercase tracking-[0.15em] text-luxury-text-light/80">
              Cupom: <span className="text-luxury-text">{link.code}</span>
            </span>
            <button
              onClick={handleCopy}
              className="group/copy relative flex h-5 w-5 items-center justify-center rounded-full transition-colors hover:bg-luxury-blush/30"
              aria-label="Copiar cupom"
            >
              {copied ? (
                <Check size={10} className="text-green-600" />
              ) : (
                <Copy size={10} className="text-luxury-rose-gold opacity-70 transition-opacity group-hover/copy:opacity-100" />
              )}
            </button>
          </div>
        </div>

        {/* Right: External Link Icon */}
        <div className="flex w-6 justify-end">
          <ExternalLink
            size={12}
            className="text-luxury-rose-gold/40 transition-all duration-300 group-hover:text-luxury-rose-gold group-hover:opacity-100"
          />
        </div>
      </div>

      {/* Subtle Shine Effect on Hover */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-luxury-blush/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
    </a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-luxury-white via-luxury-off-white to-[#FDF5F6] px-5 py-8 sm:px-6 lg:px-8">
      {/* Background Texture Overlay (Optional subtle noise) */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.015] mix-blend-multiply"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      <div className="relative mx-auto max-w-[380px]">

        {/* HERO SECTION */}
        <div className="mb-6 flex flex-col items-center text-center animate-fade-in-up opacity-0">
          {/* Profile Image */}
          <div className="relative mb-4">
            <div className="absolute -inset-2 animate-pulse rounded-full border border-luxury-rose-gold/20 opacity-50" />
            <div className="relative h-24 w-24 overflow-hidden rounded-full border-[1px] border-luxury-rose-gold p-1 shadow-[0_10px_40px_-10px_rgba(230,183,169,0.4)]">
              <div className="h-full w-full overflow-hidden rounded-full">
                <img
                  src="https://i.imgur.com/j0tFQ1f.jpeg"
                  alt="Marii Taberner"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    // First fallback: local image in public folder
                    if (target.src !== window.location.origin + '/profile_photo.jpg') {
                      target.src = '/profile_photo.jpg';
                    } else {
                      // Final fallback: Unsplash placeholder
                      target.src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop';
                    }
                  }}
                />
              </div>
            </div>
          </div>

          {/* Name & Handle */}
          <h1 className="font-serif text-2xl font-medium leading-tight text-luxury-text">
            Marii Taberner
          </h1>

          {/* SOCIALS SECTION (Moved here) */}
          <div className="mt-2 flex justify-center gap-4">
            <a
              href="https://www.instagram.com/marii.taberner?igsh=ZHo3b21pZmNsanA3&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-luxury-rose-gold/20 bg-white text-luxury-text-light shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-luxury-rose-gold hover:text-luxury-rose-gold hover:shadow-[0_4px_15px_-4px_rgba(230,183,169,0.4)]"
              aria-label="Instagram"
            >
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a
              href="https://www.tiktok.com/@marii.taberner?_t=ZM-8yHojj2KgHW&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-luxury-rose-gold/20 bg-white text-luxury-text-light shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-luxury-rose-gold hover:text-luxury-rose-gold hover:shadow-[0_4px_15px_-4px_rgba(230,183,169,0.4)]"
              aria-label="TikTok"
            >
              <TikTokIcon className="text-lg" />
            </a>
          </div>

          <div className="mt-4 h-[1px] w-12 bg-luxury-rose-gold/50" />
          <p className="mt-3 font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-luxury-text-light">
            Links & Cupons
          </p>
        </div>

        {/* LINKS SECTION */}
        <div className="flex flex-col gap-2">
          {links.map((link, index) => (
            <LinkCard key={link.title} link={link} index={index} />
          ))}
        </div>

        {/* FOOTER CTA (Moved here) */}
        <div className="mt-6 text-center animate-fade-in-up opacity-0 delay-700">
          <p className="font-serif text-xs italic text-luxury-text-light/60">
            Aberta para novas parcerias via direct.
          </p>
        </div>

      </div>
    </div>
  );
}

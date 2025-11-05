import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

function WhaleSVG({ className = '' }) {
  return (
    <svg
      viewBox="0 0 600 300"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Swimming whale illustration"
    >
      <defs>
        <linearGradient id="whaleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="50%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>
      <g>
        {/* Body */}
        <path
          d="M40 150c40-60 130-95 210-80 40 8 85 30 110 60 15 18 35 16 55 11 18-5 45-11 65 0 18 10 24 36-8 44-30 8-76-6-96-17 0 0-14 28-44 47-46 29-112 42-171 31C80 233 36 200 30 168c-4-18 2-28 10-18z"
          fill="url(#whaleGrad)"
        />
        {/* Belly */}
        <path
          d="M90 182c22 18 64 30 104 32 44 3 92-7 127-27 10-6 22-16 30-28-55 18-137 30-200 18-24-5-45-11-61-22-5 8-5 19 0 27z"
          fill="#c7e6ff"
          opacity="0.9"
        />
        {/* Tail */}
        <path
          d="M40 150c-18-6-34-18-38-30 20 6 40-2 58 6 6 3 16 11 20 16-12 6-26 9-40 8z"
          fill="#1d4ed8"
        />
        {/* Eye */}
        <circle cx="265" cy="140" r="6" fill="#0b1220" />
        <circle cx="263" cy="138" r="2" fill="#ffffff" />
      </g>
    </svg>
  );
}

export default function WhaleHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  // Move the whale down as the user scrolls the whole page
  const y = useTransform(scrollYProgress, [0, 1], [0, 1200]);
  // Gentle swim sway left-right and slight rotation
  const x = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 30, -20, 25, 0]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, -3, 2]);

  return (
    <section ref={ref} className="relative min-h-[180vh] w-full bg-gradient-to-b from-sky-50 via-sky-100 to-sky-200 overflow-hidden">
      {/* Soft radial lighting */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[120vw] h-[120vw] rounded-full bg-sky-200/60 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-blue-300/40 blur-3xl" />
      </div>

      {/* Content header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-sky-700 ring-1 ring-white/60">
            Hand-crafted ocean art on canvas
          </p>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
            Personalized marine art that makes a splash
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            From custom portraits to ready‑made whales, dolphins, and reef life—bring the ocean home in museum‑quality canvas.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#shop" className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-5 py-3 text-sm font-semibold hover:bg-slate-800">
              Shop canvases <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 ring-1 ring-slate-200 px-5 py-3 text-sm font-semibold hover:bg-slate-50">
              Request personalization
            </a>
          </div>
        </div>
      </div>

      {/* Whale follows the scroll downward */}
      <motion.div style={{ y, x, rotate }} className="relative z-10 mt-12 mx-auto" aria-hidden="true">
        <div className="mx-auto" style={{ width: 'min(900px, 92vw)' }}>
          <WhaleSVG className="w-full h-auto drop-shadow-2xl" />
        </div>
      </motion.div>

      {/* Bubbles */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/40 animate-[rise_12s_linear_infinite]"
            style={{
              left: `${(i * 53) % 100}%`,
              bottom: `${(i * 17) % 100}%`,
              width: `${8 + (i % 6) * 3}px`,
              height: `${8 + (i % 6) * 3}px`,
              animationDelay: `${i * 0.6}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes rise {
          0% { transform: translateY(0) scale(1); opacity: .7; }
          70% { opacity: .6; }
          100% { transform: translateY(-120vh) scale(1.2); opacity: 0; }
        }
      `}</style>
    </section>
  );
}

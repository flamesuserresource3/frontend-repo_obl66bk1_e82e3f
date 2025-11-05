import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

// Simple before→after→try-on interactive slider.
// 0–50: reveal shirt from fabric, 50–100: reveal model from shirt.
export default function LiveDemo() {
  const [v, setV] = useState(35);

  const { clipShirt, clipModel } = useMemo(() => {
    // percentage for clip-path from right to left reveal
    const shirtPercent = Math.min(100, Math.max(0, v * 2));
    const modelPercent = Math.min(100, Math.max(0, (v - 50) * 2));
    return {
      clipShirt: `inset(0 ${100 - shirtPercent}% 0 0)`,
      clipModel: `inset(0 ${100 - modelPercent}% 0 0)`,
    };
  }, [v]);

  return (
    <section id="demo" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold md:text-5xl"
        >
          Live Demo Preview
        </motion.h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/65">
          Slide to morph fabric → garment → virtual try‑on. Designed for immersive exploration.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Interactive Pane */}
          <div className="relative col-span-7 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-2 backdrop-blur-xl">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
              {/* Base: fabric */}
              <img
                src="https://images.unsplash.com/photo-1610252974797-c7538f3a7f17?q=80&w=1600&auto=format&fit=crop"
                alt="Fabric texture"
                className="absolute inset-0 h-full w-full object-cover"
              />
              {/* Middle: shirt mock */}
              <img
                src="https://images.unsplash.com/photo-1617127365659-c47fa864d8be?q=80&w=1600&auto=format&fit=crop"
                alt="Generated shirt"
                style={{ clipPath: clipShirt }}
                className="absolute inset-0 h-full w-full object-cover shadow-[0_0_40px_rgba(236,72,153,0.25)]"
              />
              {/* Top: model try-on */}
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop"
                alt="Virtual try-on"
                style={{ clipPath: clipModel }}
                className="absolute inset-0 h-full w-full object-cover shadow-[0_0_50px_rgba(56,189,248,0.25)]"
              />

              {/* Labels */}
              <div className="pointer-events-none absolute left-4 top-4 flex gap-2">
                <span className="rounded-full bg-black/60 px-3 py-1 text-xs backdrop-blur">Fabric</span>
                <span className="rounded-full bg-black/60 px-3 py-1 text-xs backdrop-blur">Shirt</span>
                <span className="rounded-full bg-black/60 px-3 py-1 text-xs backdrop-blur">Try‑On</span>
              </div>

              {/* Slider */}
              <div className="absolute bottom-5 left-1/2 z-[1] w-[90%] -translate-x-1/2">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={v}
                  onChange={(e) => setV(parseInt(e.target.value))}
                  className="range w-full [--thumb:linear-gradient(90deg,#ec4899,#8b5cf6,#22d3ee)]"
                  aria-label="Demo slider"
                />
              </div>
            </div>
            {/* Range styling */}
            <style>{`
              .range { -webkit-appearance: none; appearance: none; height: 2px; background: linear-gradient(90deg, rgba(255,255,255,0.2), rgba(255,255,255,0.4)); border-radius: 999px; }
              .range::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; height: 18px; width: 18px; border-radius: 999px; background: var(--thumb); box-shadow: 0 0 0 4px rgba(255,255,255,0.15), 0 0 24px rgba(34,211,238,0.6); cursor: pointer; }
              .range::-moz-range-thumb { height: 18px; width: 18px; border-radius: 999px; background: var(--thumb); border: 0; box-shadow: 0 0 0 4px rgba(255,255,255,0.15), 0 0 24px rgba(139,92,246,0.6); cursor: pointer; }
            `}</style>
          </div>

          {/* Highlights */}
          <div className="col-span-5 space-y-5">
            {[
              {
                title: 'Photoreal Texture Mapping',
                desc: 'Intelligent sheen + weave capture for couture‑grade realism.',
              },
              { title: 'Adaptive Fit on Avatars', desc: 'Realistic drape, movement, and body diversity.' },
              { title: 'Instant Iterations', desc: 'Experiment with colors, trims, and cuts in seconds.' },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-fuchsia-500/15 to-cyan-400/15 blur-2xl" />
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Social Proof Marquee */}
        <div className="mt-14 overflow-hidden">
          <div className="flex animate-marquee items-center gap-10 opacity-90 [animation-duration:28s]">
            {[
              {
                img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
                quote: '“A surreal blend of couture and code.”',
                name: 'Lina / Fashion Director',
              },
              {
                img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop',
                quote: '“The most premium virtual try‑on we\'ve tested.”',
                name: 'Kenji / Creative Tech',
              },
              {
                img: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=400&auto=format&fit=crop',
                quote: '“Obsessed with the realism and speed.”',
                name: 'Maya / Style Creator',
              },
              {
                img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
                quote: '“Feels like magic — instant runway looks.”',
                name: 'Theo / Digital Stylist',
              },
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur">
                <img src={t.img} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                <div className="text-sm">
                  <p className="text-white/90">{t.quote}</p>
                  <p className="text-white/60">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .animate-marquee { animation: marquee linear infinite; }
        `}</style>
      </div>
    </section>
  );
}

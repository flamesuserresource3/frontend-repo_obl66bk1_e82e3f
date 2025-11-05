import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Sparkles, User } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload Your Fabric',
    desc: 'Drop a texture or fabric photo. Our pipeline captures weave, sheen, and drape in seconds.',
    accent: 'from-fuchsia-500 to-rose-400',
  },
  {
    icon: Sparkles,
    title: 'AI Generates Outfits',
    desc: 'Instantly morphs into tailored shirt and pants with realistic lighting and details.',
    accent: 'from-purple-500 to-indigo-400',
  },
  {
    icon: User,
    title: 'Virtual Try‑On',
    desc: 'Preview on diverse digital avatars with accurate fit and movement.',
    accent: 'from-cyan-400 to-sky-500',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative w-full bg-black py-24 text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center font-['Geist',ui-sans-serif] text-3xl font-semibold tracking-tight md:text-5xl"
        >
          From Fabric to Fashion — Instantly
        </motion.h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/65">
          A cinematic pipeline with fluid transitions, depth, and intelligent texture mapping.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 backdrop-blur-xl"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.accent} shadow-[0_0_30px_rgb(255_255_255_/_0.1)]`}>
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

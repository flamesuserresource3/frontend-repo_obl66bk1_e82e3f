import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Cinematic gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gradient-to-br from-fuchsia-500/30 via-purple-500/20 to-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-cyan-400/20 via-sky-500/20 to-fuchsia-500/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="space-y-6"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-md"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-fuchsia-400" />
            AI x Fashion — Live 3D Preview
          </motion.span>

          <h1 className="font-['Mona_Sans',ui-sans-serif] text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Turn Fabric Into Fashion. <span className="bg-gradient-to-r from-fuchsia-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent">Try It On — Virtually.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-balance text-base text-white/70 md:text-lg">
            From Fabric to Fashion — Instantly. Generate premium shirt and pants designs from any texture and preview on diverse digital avatars.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#demo"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 text-base font-medium"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 opacity-80 transition-opacity group-hover:opacity-100" />
              <span className="absolute -inset-px rounded-full blur-xl bg-gradient-to-r from-fuchsia-500/50 via-purple-500/50 to-cyan-400/50 opacity-60" />
              <span className="relative z-10">Start Styling</span>
            </motion.a>
            <a
              href="#how"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-white/80 backdrop-blur-md transition hover:bg-white/10"
            >
              How it works
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

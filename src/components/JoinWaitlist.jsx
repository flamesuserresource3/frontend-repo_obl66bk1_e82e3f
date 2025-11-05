import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function JoinWaitlist() {
  const [email, setEmail] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return alert('Enter a valid email.');
    alert(`Thanks! We'll notify you at ${email}`);
    setEmail('');
  };

  return (
    <section className="relative w-full overflow-hidden bg-black py-24 text-white">
      {/* Motion lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-fuchsia-400/30 via-white/10 to-cyan-400/30" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-fuchsia-500/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cyan-400/10 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold md:text-4xl"
        >
          Join the StyleFusion Waitlist
        </motion.h3>
        <p className="mx-auto mt-3 max-w-xl text-white/70">
          Be first to access the most luxurious AI fashion experience.
        </p>

        <form onSubmit={onSubmit} className="mx-auto mt-8 flex w-full max-w-xl flex-col items-center gap-3 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@studio.com"
            className="w-full flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-white outline-none placeholder:text-white/40 focus:border-fuchsia-400/50"
          />
          <button
            type="submit"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 font-medium"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 opacity-80 transition-opacity group-hover:opacity-100" />
            <span className="absolute -inset-px rounded-full blur-xl bg-gradient-to-r from-fuchsia-500/50 via-purple-500/50 to-cyan-400/50 opacity-60" />
            <span className="relative">Join Waitlist</span>
          </button>
        </form>
        <p className="mt-2 text-xs text-white/50">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}

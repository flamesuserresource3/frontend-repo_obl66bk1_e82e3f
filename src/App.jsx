import React from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import LiveDemo from './components/LiveDemo';
import JoinWaitlist from './components/JoinWaitlist';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <HowItWorks />
      <LiveDemo />
      <JoinWaitlist />
      <footer className="border-t border-white/10 bg-black/40 py-10 text-center text-sm text-white/60">
        <p>© {new Date().getFullYear()} StyleFusion — Crafted at the edge of fashion and AI.</p>
      </footer>
    </div>
  );
}

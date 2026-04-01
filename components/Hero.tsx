'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden">
      {/* === VIDEO BACKGROUND MIT GRADIENT-ÜBERGANG === */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/assets/animated-background.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay - Fließender Übergang von oben nach unten */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black"></div>
      </div>
      {/* === END VIDEO BACKGROUND === */}

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Main Headline */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-white">KI, die Ihren Betrieb</span>
          <br />
          <span className="gradient-text">wirklich entlastet.</span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Wir entwickeln maßgeschneiderte KI-Agenten und Automatisierungslösungen
          für mittelständische Unternehmen — pragmatisch, umsetzungsstark, messbar.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Primary CTA */}
          <Link
            href="/kontakt"
            className="group px-8 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold rounded-lg text-lg shadow-glow hover:shadow-glow-strong hover:scale-105 transition-all duration-300"
          >
            Kostenloses Gespräch vereinbaren
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/workshop"
            className="group px-8 py-4 border-2 border-accent-primary text-white font-semibold rounded-lg text-lg hover:bg-accent-primary/10 backdrop-blur-sm transition-all duration-300"
          >
            AI Clarity Workshop entdecken
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>

        {/* Social Proof - No Emojis */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 border border-accent-primary/30 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <svg className="w-8 h-8 text-accent-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-text-secondary text-sm font-medium">KI-Agenten</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 border border-accent-primary/30 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <svg className="w-8 h-8 text-accent-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="text-text-secondary text-sm font-medium">Prozessoptimierung</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 border border-accent-primary/30 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <svg className="w-8 h-8 text-accent-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <p className="text-text-secondary text-sm font-medium">Workflow-Automatisierung</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 border border-accent-primary/30 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <svg className="w-8 h-8 text-accent-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <p className="text-text-secondary text-sm font-medium">KI-Consulting</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

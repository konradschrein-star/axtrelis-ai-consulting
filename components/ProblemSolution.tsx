'use client';

import { motion } from 'framer-motion';

export default function ProblemSolution() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Problem */}
          <motion.div
            className="relative bg-background-card/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl"></div>

            <div className="relative">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-lg mb-4">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-white mb-6">Das Problem</h3>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="3"/>
                  </svg>
                  <span className="text-text-secondary">Ihr Team verbringt Stunden mit Aufgaben, die KI in Sekunden erledigen könnte</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="3"/>
                  </svg>
                  <span className="text-text-secondary">Sie wissen nicht, wo KI in Ihrem Unternehmen wirklich Sinn macht</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="3"/>
                  </svg>
                  <span className="text-text-secondary">Berater verkaufen Ihnen Folien statt funktionierende Lösungen</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="3"/>
                  </svg>
                  <span className="text-text-secondary">Projekte scheitern an fehlender technischer Umsetzung</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            className="relative bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 backdrop-blur-sm border border-accent-primary/30 rounded-2xl p-8 overflow-hidden shadow-glow"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/10 rounded-full blur-3xl"></div>

            <div className="relative">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-primary/20 border border-accent-primary/40 rounded-lg mb-4">
                <svg className="w-6 h-6 text-accent-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-white mb-6">Unsere Lösung</h3>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-text-secondary">Wir identifizieren konkrete Use Cases in Ihrem Betrieb</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-text-secondary">Wir entwickeln KI-Lösungen, die wirklich funktionieren</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-text-secondary">Pragmatischer Ansatz: Quick Wins statt jahrelanger Projekte</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent-secondary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-text-secondary">Technische Umsetzung und Beratung aus einer Hand</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function LeadMagnet() {
  // Tally Form ID
  const TALLY_FORM_ID = 'ODYzOg';

  // Form visibility state
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="relative bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 border-2 border-accent-primary/50 rounded-2xl p-8 md:p-12 shadow-glow overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Glow effects */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-secondary/20 rounded-full blur-3xl"></div>

          <div className="relative">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-2xl flex items-center justify-center shadow-glow">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Kostenloses PDF
            </h2>
            <h3 className="text-xl md:text-2xl text-accent-secondary text-center mb-6 font-semibold">
              KI im Mittelstand — Was wirklich funktioniert (und was nicht)
            </h3>

            {/* Description */}
            <div className="text-center mb-10 max-w-2xl mx-auto">
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong className="text-white">7 Seiten kompaktes Wissen:</strong> Warum KI-Projekte scheitern,
                was wirklich funktioniert, und ein Selbstcheck für Ihr Unternehmen.
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                <span className="px-3 py-1 bg-accent-primary/10 border border-accent-primary/30 rounded-full text-accent-secondary">
                  ✓ Sofortiger Download
                </span>
                <span className="px-3 py-1 bg-accent-primary/10 border border-accent-primary/30 rounded-full text-accent-secondary">
                  ✓ 100% Kostenlos
                </span>
                <span className="px-3 py-1 bg-accent-primary/10 border border-accent-primary/30 rounded-full text-accent-secondary">
                  ✓ Keine Verpflichtungen
                </span>
              </div>
            </div>

            {/* CTA Button or Form */}
            <div className="max-w-lg mx-auto">
              <AnimatePresence mode="wait">
                {!isFormVisible ? (
                  /* CTA Button */
                  <motion.div
                    key="button"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                  >
                    <button
                      onClick={() => setIsFormVisible(true)}
                      className="group px-10 py-5 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-bold text-lg rounded-xl shadow-glow hover:shadow-glow-strong hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Jetzt kostenlos herunterladen
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </motion.div>
                ) : (
                  /* Form Container */
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* White Card for Form */}
                    <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl border-2 border-accent-primary/30 relative overflow-hidden">
                      {/* Subtle gradient accent */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary"></div>

                      {/* Close Button */}
                      <button
                        onClick={() => setIsFormVisible(false)}
                        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600 hover:text-gray-800"
                        aria-label="Schließen"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>

                      <iframe
                        src={`https://tally.so/embed/${TALLY_FORM_ID}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
                        width="100%"
                        height="280"
                        frameBorder="0"
                        marginHeight={0}
                        marginWidth={0}
                        title="PDF Download - Axtrelis"
                        className="w-full"
                        style={{ minHeight: '280px' }}
                      ></iframe>
                    </div>

                    {/* Info Text */}
                    <p className="text-xs text-text-secondary text-center mt-6 leading-relaxed">
                      🔒 Nach dem Absenden werden Sie zur Download-Seite weitergeleitet.<br />
                      Ihre E-Mail wird ausschließlich für Updates zu KI-Themen verwendet.<br />
                      <span className="text-accent-primary">Abmeldung jederzeit möglich.</span>
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

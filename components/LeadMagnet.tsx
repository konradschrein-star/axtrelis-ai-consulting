'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function LeadMagnet() {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && consent) {
      // TODO: Integrate with CRM/Newsletter tool
      console.log('Lead Magnet submitted:', email);
      setSubmitted(true);
      // Trigger PDF download
      window.open('/assets/ki-mittelstand-leitfaden.pdf', '_blank');
    }
  };

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
            <p className="text-text-secondary text-center mb-8 max-w-2xl mx-auto leading-relaxed">
              7 Seiten kompaktes Wissen: Warum KI-Projekte scheitern, was wirklich
              funktioniert, und ein Selbstcheck für Ihr Unternehmen.
            </p>

            {/* Form */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="mb-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ihre E-Mail-Adresse"
                    required
                    className="w-full px-4 py-3 bg-background-primary/80 backdrop-blur-sm border border-border rounded-lg text-white placeholder-text-muted focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-colors"
                  />
                </div>

                <div className="mb-6 flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                    className="mt-1 w-4 h-4 accent-accent-primary cursor-pointer"
                  />
                  <label htmlFor="consent" className="text-sm text-text-secondary cursor-pointer">
                    Ich stimme zu, dass meine E-Mail-Adresse für den PDF-Download
                    und gelegentliche Updates zu KI-Themen verwendet werden darf.
                    (Abmeldung jederzeit möglich)
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!consent || !email}
                  className="w-full px-6 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold rounded-lg text-lg shadow-glow hover:shadow-glow-strong hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  Jetzt kostenlos herunterladen
                </button>
              </form>
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 border-2 border-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-xl text-white font-semibold mb-2">
                  Vielen Dank!
                </p>
                <p className="text-text-secondary">
                  Ihr PDF wird in Kürze heruntergeladen. Prüfen Sie Ihr E-Mail-Postfach
                  für weitere Informationen.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';

export default function LeadMagnet() {
  // Tally Form ID
  const TALLY_FORM_ID = 'ODYzOg';

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

            {/* Tally Form Embed */}
            <div className="max-w-md mx-auto">
              <iframe
                src={`https://tally.so/embed/${TALLY_FORM_ID}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
                width="100%"
                height="350"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="PDF Download - Axtrelis"
                className="rounded-lg"
              ></iframe>
            </div>

            {/* Info Text */}
            <p className="text-xs text-text-muted text-center mt-4 max-w-md mx-auto">
              Nach dem Absenden werden Sie zur Download-Seite weitergeleitet.
              Ihre E-Mail wird ausschließlich für Updates zu KI-Themen verwendet (Abmeldung jederzeit möglich).
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

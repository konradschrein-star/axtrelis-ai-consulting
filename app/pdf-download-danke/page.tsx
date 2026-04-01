'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PdfDownloadDankePage() {
  const [downloadStarted, setDownloadStarted] = useState(false);

  useEffect(() => {
    // Auto-download PDF after 500ms
    const timer = setTimeout(() => {
      window.open('/assets/Axtrelis_Consulting_Unternehmensübersicht.pdf', '_blank');
      setDownloadStarted(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(34,197,94,0.4)]">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Vielen Dank! 🎉
          </h1>

          {/* Message */}
          <p className="text-xl md:text-2xl text-text-secondary mb-8 leading-relaxed">
            Ihr PDF wird heruntergeladen...
          </p>

          {/* Download Info */}
          <div className="bg-background-card border border-border rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">
              PDF: Axtrelis Unternehmensübersicht
            </h2>
            <p className="text-text-secondary mb-6">
              Falls der Download nicht automatisch startet, klicken Sie auf den Button unten.
            </p>

            {/* Manual Download Button */}
            <a
              href="/assets/Axtrelis_Consulting_Unternehmensübersicht.pdf"
              download="Axtrelis_Consulting_Unternehmensübersicht.pdf"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-glow"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              PDF herunterladen
            </a>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Wie geht es weiter?
            </h3>
            <p className="text-text-secondary mb-6">
              Sie haben Fragen zu KI in Ihrem Unternehmen? Buchen Sie ein kostenloses Erstgespräch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/workshop"
                className="px-8 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                AI Clarity Workshop
              </Link>
              <Link
                href="/kontakt"
                className="px-8 py-4 bg-background-card border border-border text-white font-semibold rounded-lg hover:border-accent-primary/50 transition-colors"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-12">
            <Link
              href="/"
              className="text-accent-primary hover:text-accent-secondary transition-colors inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

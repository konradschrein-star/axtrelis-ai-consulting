import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Kontakt | Axtrelis AI Consulting',
  description: 'Sprechen wir über Ihre KI-Strategie. Kontaktieren Sie Axtrelis für maßgeschneiderte KI-Lösungen und Automatisierung.',
};

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Sprechen wir.
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-8 leading-relaxed">
              Sie haben eine Frage, ein konkretes Projekt oder möchten einfach nur
              herausfinden, ob KI für Ihr Unternehmen relevant ist? Wir freuen uns
              auf Ihre Nachricht.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-background-card border border-border rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl font-bold text-white mb-6">
                Nachricht senden
              </h2>

              <div className="space-y-6">
                <p className="text-text-secondary mb-6">
                  Klicken Sie auf den Button unten, um uns eine E-Mail zu senden.
                </p>

                <a
                  href="mailto:konrad.schrein@gmail.com?subject=Kontaktanfrage%20von%20Axtrelis%20Website&body=Hallo%20Axtrelis-Team%2C%0A%0A%5BBitte%20beschreiben%20Sie%20Ihr%20Anliegen%20hier%5D%0A%0AMeine%20Kontaktdaten%3A%0AName%3A%20%0AUnternehmen%3A%20%0ATelefon%3A%20%0A%0AViele%20Grüße"
                  className="block w-full px-8 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-center"
                >
                  Nachricht senden (E-Mail öffnen)
                </a>

                <p className="text-text-muted text-sm text-center">
                  Oder schreiben Sie uns direkt:{' '}
                  <a href="mailto:konrad.schrein@gmail.com" className="text-accent-primary hover:underline">
                    konrad.schrein@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Direkte Kontaktmöglichkeiten */}
              <div className="bg-background-card border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Direkte Kontaktmöglichkeiten
                </h2>

                <div className="space-y-6">
                  {/* E-Mail */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-primary/10 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-1">E-Mail</h3>
                      <a
                        href="mailto:konrad@axtrelis.com"
                        className="text-text-secondary hover:text-accent-primary transition-colors"
                      >
                        konrad@axtrelis.com
                      </a>
                    </div>
                  </div>

                  {/* Telefon */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-primary/10 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-1">Telefon</h3>
                      <a
                        href="tel:+4915785471426"
                        className="text-text-secondary hover:text-accent-primary transition-colors"
                      >
                        +49 157 85471426
                      </a>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-primary/10 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-1">LinkedIn</h3>
                      <a
                        href="https://www.linkedin.com/company/axtrelis/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-accent-primary transition-colors"
                      >
                        linkedin.com/company/axtrelis
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Standort */}
              <div className="bg-background-card border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Standort
                </h2>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-primary/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">Dresden, Deutschland</h3>
                    <p className="text-text-secondary">
                      Wir sind digital unterwegs, arbeiten aber gerne vor Ort
                      bei Ihnen — besonders im Raum Dresden, Sachsen und deutschlandweit.
                    </p>
                  </div>
                </div>
              </div>

              {/* AI Clarity Workshop CTA */}
              <div className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-3">
                  Sie brauchen erstmal Orientierung?
                </h2>
                <p className="text-text-secondary mb-6">
                  Unser kostenloser AI Clarity Workshop gibt Ihrem Team konkrete
                  Ansatzpunkte für KI in Ihrem Unternehmen.
                </p>
                <Link
                  href="/workshop"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  Mehr zum Workshop
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

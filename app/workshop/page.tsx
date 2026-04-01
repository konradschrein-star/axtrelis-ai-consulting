import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'AI Clarity Workshop - Kostenlos für Ihr Team | Axtrelis',
  description: 'Kostenloser AI Clarity Workshop: Wir zeigen Ihrem Team konkret, wo KI in Ihrem Unternehmen ansetzen kann. Kein Fachchinesisch, keine Verkaufsveranstaltung.',
};

export default function WorkshopPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-block px-4 py-2 bg-accent-primary/10 border border-accent-primary/20 rounded-full mb-6">
              <span className="text-accent-primary font-semibold text-sm uppercase tracking-wide">
                Kostenlos für Ihr Team
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Clarity Workshop
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-8 leading-relaxed">
              Wir kommen zu Ihnen — und zeigen Ihrem Team konkret, wo KI in Ihrem
              Unternehmen ansetzen kann. Kein Fachchinesisch. Keine Verkaufsveranstaltung.
            </p>
          </div>

          {/* Was passiert Section */}
          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Was passiert im Workshop?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Block 1 */}
              <div className="bg-background-card border border-border rounded-2xl p-8">
                <div className="w-12 h-12 bg-accent-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  1. Analyse
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Wir schauen uns Ihre Prozesse an. Wo wiederholt sich was? Wo
                  geht Zeit verloren? Wo könnte KI unterstützen?
                </p>
              </div>

              {/* Block 2 */}
              <div className="bg-background-card border border-border rounded-2xl p-8">
                <div className="w-12 h-12 bg-accent-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  2. Klarheit
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Wir zeigen konkrete Ansatzpunkte — mit Beispielen, die zu Ihrem
                  Unternehmen passen. Kein theoretisches Blabla.
                </p>
              </div>

              {/* Block 3 */}
              <div className="bg-background-card border border-border rounded-2xl p-8">
                <div className="w-12 h-12 bg-accent-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  3. Nächste Schritte
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Sie entscheiden, ob und wie Sie weitermachen möchten. Keine
                  Verpflichtung. Kein Druck.
                </p>
              </div>
            </div>
          </div>

          {/* Für wen geeignet Section */}
          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Für wen ist der Workshop geeignet?
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="bg-background-card border border-border rounded-xl p-6 flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-accent-primary/10 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-accent-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  <strong className="text-white">Unternehmen, die KI evaluieren:</strong> Sie wissen,
                  KI ist wichtig — aber nicht, wo Sie anfangen sollen.
                </p>
              </div>

              <div className="bg-background-card border border-border rounded-xl p-6 flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-accent-primary/10 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-accent-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  <strong className="text-white">Teams mit gemischter Erfahrung:</strong> Manche kennen
                  ChatGPT, andere nicht. Wir holen alle ab.
                </p>
              </div>

              <div className="bg-background-card border border-border rounded-xl p-6 flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-accent-primary/10 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-accent-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  <strong className="text-white">Skepsis im Team:</strong> Manche glauben, KI ist Hype.
                  Wir zeigen reale, sofort umsetzbare Anwendungsfälle.
                </p>
              </div>

              <div className="bg-background-card border border-border rounded-xl p-6 flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-accent-primary/10 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-accent-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  <strong className="text-white">Ineffiziente Prozesse:</strong> Wiederkehrende Aufgaben,
                  manuelle Datenverarbeitung, Copy-Paste-Tätigkeiten — genau da setzen wir an.
                </p>
              </div>
            </div>
          </div>

          {/* Was der Workshop NICHT ist Section */}
          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Was der Workshop <span className="text-accent-primary">nicht</span> ist
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="bg-background-card border border-accent-primary/20 rounded-xl p-6 flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-red-500/10 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  <strong className="text-white">Kein theoretischer Vortrag</strong> über "die Zukunft
                  der KI". Wir sprechen nur über das, was heute schon funktioniert.
                </p>
              </div>

              <div className="bg-background-card border border-accent-primary/20 rounded-xl p-6 flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-red-500/10 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  <strong className="text-white">Keine Verkaufsveranstaltung.</strong> Wir pitchen nicht
                  unsere Lösung. Wir analysieren Ihre Situation.
                </p>
              </div>

              <div className="bg-background-card border border-accent-primary/20 rounded-xl p-6 flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-red-500/10 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  <strong className="text-white">Keine Verpflichtung.</strong> Nach dem Workshop entscheiden
                  Sie, ob Sie weitermachen möchten — oder nicht.
                </p>
              </div>

              <div className="bg-background-card border border-accent-primary/20 rounded-xl p-6 flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-red-500/10 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  <strong className="text-white">Keine One-Size-Fits-All-Lösung.</strong> Wir bringen
                  keine fertigen Slides mit. Wir passen uns an Ihre Branche an.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div id="anfragen" className="max-w-2xl mx-auto">
            <div className="bg-background-card border border-border rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
                Workshop anfragen
              </h2>
              <p className="text-text-secondary text-center mb-8">
                Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden
                bei Ihnen, um einen Termin zu vereinbaren.
              </p>

              <div className="space-y-6">
                <p className="text-text-secondary text-center mb-6">
                  Klicken Sie auf den Button unten, um uns eine E-Mail mit Ihrer
                  Workshop-Anfrage zu senden.
                </p>

                <a
                  href="mailto:konrad.schrein@gmail.com?subject=AI%20Clarity%20Workshop%20Anfrage&body=Hallo%20Axtrelis-Team%2C%0A%0AIch%20interessiere%20mich%20für%20den%20kostenlosen%20AI%20Clarity%20Workshop.%0A%0AMeine%20Kontaktdaten%3A%0AName%3A%20%0AUnternehmen%3A%20%0ATelefon%3A%20%0A%0ABitte%20kontaktieren%20Sie%20mich%20für%20einen%20Termin.%0A%0AViele%20Grüße"
                  className="block w-full px-8 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-center"
                >
                  Workshop anfragen (E-Mail öffnen)
                </a>

                <p className="text-text-muted text-sm text-center">
                  Oder schreiben Sie uns direkt:{' '}
                  <a href="mailto:konrad.schrein@gmail.com" className="text-accent-primary hover:underline">
                    konrad.schrein@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

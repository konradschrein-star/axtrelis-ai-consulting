import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Leistungen - KI-Agenten & Automatisierung | Axtrelis',
  description: 'Unsere Leistungen: KI-Agenten, Prozessautomatisierung, Dokumentenverarbeitung und strategische KI-Beratung für den Mittelstand.',
};

export default function LeistungenPage() {
  const services = [
    {
      title: 'KI-Agenten',
      description: 'Autonome Systeme, die selbstständig Aufgaben übernehmen',
      icon: (
        <svg className="w-8 h-8 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        'Kundenanfragen automatisch beantworten',
        'E-Mails klassifizieren und weiterleiten',
        'Termine planen und koordinieren',
        'Datenbanken durchsuchen und Reports erstellen',
        'Interne Wissensdatenbank für Mitarbeiter',
      ],
      useCases: [
        {
          title: 'Support-Agent',
          description: 'Beantwortet wiederkehrende Kundenanfragen per E-Mail oder Chat — rund um die Uhr.',
        },
        {
          title: 'Vertriebsassistent',
          description: 'Qualifiziert Leads, versendet Follow-ups und erstellt Angebote basierend auf Vorlagen.',
        },
        {
          title: 'Interner Wissens-Agent',
          description: 'Beantwortet Fragen Ihrer Mitarbeiter basierend auf internen Dokumenten und SOPs.',
        },
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Prozessautomatisierung',
      description: 'Wiederkehrende Workflows mit KI automatisieren',
      icon: (
        <svg className="w-8 h-8 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      features: [
        'Rechnungen automatisch verarbeiten und ablegen',
        'Bestellungen aus E-Mails extrahieren und ins System eintragen',
        'Social-Media-Posts erstellen und planen',
        'Reports automatisch generieren und versenden',
        'Daten zwischen Systemen synchronisieren',
      ],
      useCases: [
        {
          title: 'Rechnungsverarbeitung',
          description: 'PDFs werden automatisch gescannt, Daten extrahiert und im ERP-System abgelegt.',
        },
        {
          title: 'Lead-Qualifizierung',
          description: 'Eingehende Anfragen werden analysiert, priorisiert und an das richtige Team weitergeleitet.',
        },
        {
          title: 'Content-Produktion',
          description: 'Blog-Artikel, Social Posts und Newsletter werden automatisch erstellt und geplant.',
        },
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Dokumenten- & Datenverarbeitung',
      description: 'KI liest, klassifiziert und verarbeitet Ihre Daten',
      icon: (
        <svg className="w-8 h-8 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      features: [
        'PDFs automatisch auslesen (OCR + KI)',
        'Verträge analysieren und Key-Facts extrahieren',
        'E-Mails nach Kategorien sortieren',
        'Kundenfeedback auswerten und kategorisieren',
        'Datenbanken bereinigen und zusammenführen',
      ],
      useCases: [
        {
          title: 'Vertragsanalyse',
          description: 'Lieferantenverträge werden gescannt, wichtige Klauseln extrahiert und in Excel exportiert.',
        },
        {
          title: 'Kundenfeedback-Analyse',
          description: 'Support-Tickets und Bewertungen werden analysiert, Themen identifiziert und Reports erstellt.',
        },
        {
          title: 'Dokumentenarchivierung',
          description: 'Eingehende PDFs werden automatisch kategorisiert, umbenannt und im richtigen Ordner abgelegt.',
        },
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Strategie & Beratung',
      description: 'KI-Readiness, Priorisierung und Change Management',
      icon: (
        <svg className="w-8 h-8 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      features: [
        'Ist-Analyse Ihrer Prozesse',
        'Identifikation von KI-Potenzialen',
        'Priorisierung nach Aufwand & Impact',
        'Roadmap-Entwicklung',
        'Change Management & Team-Schulung',
      ],
      useCases: [
        {
          title: 'KI-Readiness-Check',
          description: 'Wir analysieren Ihre Prozesse und zeigen, wo KI heute schon umsetzbar ist.',
        },
        {
          title: 'Pilot-Projekt',
          description: 'Wir starten mit einem kleinen, schnellen Projekt — damit Sie KI im eigenen Kontext erleben.',
        },
        {
          title: 'Team-Enablement',
          description: 'Wir schulen Ihr Team, damit sie KI-Tools selbstständig nutzen können.',
        },
      ],
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Unsere Leistungen
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
              Von der ersten Idee bis zur laufenden KI-Lösung — wir begleiten Sie durch
              den gesamten Prozess. Pragmatisch, umsetzungsstark, messbar.
            </p>
          </div>

          {/* Weitere Leistungen Banner */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <h3 className="text-2xl font-bold text-white">
                  Hier geht es zu unseren weiteren Leistungen
                </h3>
              </div>
              <p className="text-text-secondary mb-6">
                Wir haben für fast jedes digitale Problem eine Lösung.
              </p>
              <a
                href="https://webseiten.axtrelis.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
              >
                Alle Leistungen entdecken →
              </a>
            </div>
          </div>

          {/* Services */}
          {services.map((service, index) => (
            <div key={service.title} className="mb-24">
              <div className="bg-background-card border border-border rounded-3xl p-10 md:p-16">
                {/* Header */}
                <div className="flex items-start space-x-6 mb-10">
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${service.color} bg-opacity-10 rounded-2xl flex items-center justify-center`}>
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                      {index + 1}. {service.title}
                    </h2>
                    <p className="text-xl text-text-secondary">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-white mb-6">
                    Was wir konkret umsetzen:
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-accent-primary/10 rounded-full flex items-center justify-center mt-1">
                          <svg className="w-3 h-3 text-accent-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-text-secondary">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-6">
                    Anwendungsbeispiele:
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {service.useCases.map((useCase) => (
                      <div key={useCase.title} className="bg-black border border-border rounded-xl p-6">
                        <h4 className="text-lg font-bold text-white mb-2">
                          {useCase.title}
                        </h4>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          {useCase.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* CTA Section - Workshop */}
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 rounded-2xl p-12 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Noch unsicher, wo Sie anfangen sollen?
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Unser kostenloser AI Clarity Workshop gibt Ihrem Team konkrete Ansatzpunkte
              — ohne Verpflichtung, ohne Verkaufsdruck.
            </p>
            <Link
              href="/workshop"
              className="inline-block px-8 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Jetzt Workshop anfragen
            </Link>
          </div>

          {/* CTA Section - Weitere Leistungen */}
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Hier geht es zu unseren weiteren Leistungen
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Wir haben für fast jedes digitale Problem eine Lösung.
            </p>
            <a
              href="https://webseiten.axtrelis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
            >
              Alle Leistungen entdecken →
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

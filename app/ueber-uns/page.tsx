import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Über uns - Das Team hinter Axtrelis | AI Consulting',
  description: 'Lernen Sie das Team hinter Axtrelis kennen: Experten für KI-Consulting, Automatisierung und technische Umsetzung.',
};

export default function UeberUnsPage() {
  const team = [
    // Co-Founder
    {
      name: 'Rayan Tawfik',
      role: 'Co-Founder',
      department: 'Consulting & Business Development',
      image: '/images/team/rayan-tawfik.jpg',
      linkedin: 'https://www.linkedin.com/in/rayan-stefan-tawfik/',
      bio: 'Verantwortlich für die strategische Ausrichtung und Geschäftsentwicklung bei Axtrelis.',
      isFounder: true,
    },
    {
      name: 'Konrad Schreiner',
      role: 'Co-Founder',
      department: 'Technische Umsetzung & KI-Architektur',
      image: '/images/team/konrad-schreiner.jpg',
      linkedin: 'https://www.linkedin.com/in/konrad-schreiner-6b649830a/',
      bio: 'Baut die technischen Systeme und KI-Architekturen, die Axtrelis-Kunden nutzen.',
      isFounder: true,
    },
    {
      name: 'Niclas',
      role: 'Co-Founder',
      department: 'Head of Development',
      image: '/images/team/niclas.jpg',
      linkedin: null,
      bio: 'Leitet die technische Entwicklung und stellt sicher, dass Projekte termingerecht umgesetzt werden.',
      isFounder: true,
    },
    // Sales & Vertrieb
    {
      name: 'Joosten Weber',
      role: 'Sales',
      department: 'Website-Vertrieb',
      image: '/images/team/Joosten.jpg',
      linkedin: 'https://www.linkedin.com/in/joosten-weber-300436382/',
      bio: 'Berät Unternehmen bei der digitalen Präsenz und bringt Webste Vertrieb zu neuen Kunden.',
      isFounder: false,
    },
    {
      name: 'Frederik',
      role: 'Sales & Vertrieb',
      department: 'Business Development',
      image: '/images/team/Frederik.jpeg',
      linkedin: null,
      bio: 'Unterstützt das Sales-Team und erschließt neue Geschäftsmöglichkeiten.',
      isFounder: false,
    },
  ];

  const founders = team.filter((member) => member.isFounder);
  const sales = team.filter((member) => !member.isFounder);

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Das Team hinter Axtrelis
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
              Wir sind Entwickler, Berater und Pragmatiker. Unser Ziel: KI-Lösungen,
              die wirklich funktionieren — ohne Hype, ohne Umwege.
            </p>
          </div>

          {/* Co-Founder Section */}
          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Gründer & Leitung
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {founders.map((member) => (
                <div
                  key={member.name}
                  className="bg-background-card border border-border rounded-2xl p-8 hover:border-accent-primary/30 transition-colors"
                >
                  {/* Photo */}
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-full opacity-20 blur-xl"></div>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="relative rounded-full object-cover border-2 border-accent-primary/20"
                    />
                  </div>

                  {/* Info */}
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-accent-primary font-semibold text-sm mb-2">
                      {member.role}
                    </p>
                    <p className="text-text-muted text-sm">{member.department}</p>
                  </div>

                  {/* Bio */}
                  <p className="text-text-secondary text-sm text-center mb-6 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* LinkedIn */}
                  {member.linkedin && (
                    <div className="text-center">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-accent-primary hover:text-accent-secondary transition-colors text-sm"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sales Team Section */}
          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Sales & Vertrieb
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {sales.map((member) => (
                <div
                  key={member.name}
                  className="bg-background-card border border-border rounded-2xl p-8 hover:border-accent-primary/30 transition-colors"
                >
                  {/* Photo */}
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="rounded-full object-cover border-2 border-border"
                    />
                  </div>

                  {/* Info */}
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-accent-primary font-semibold text-sm mb-2">
                      {member.role}
                    </p>
                    <p className="text-text-muted text-sm">{member.department}</p>
                  </div>

                  {/* Bio */}
                  <p className="text-text-secondary text-sm text-center mb-6 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* LinkedIn */}
                  {member.linkedin && (
                    <div className="text-center">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-accent-primary hover:text-accent-secondary transition-colors text-sm"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Unsere Haltung Section */}
          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Unsere Haltung
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Statement 1 */}
              <div className="bg-background-card border border-border rounded-2xl p-8">
                <div className="w-12 h-12 bg-accent-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  KI funktioniert pragmatisch
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Wir glauben nicht an die &quot;Revolution&quot;. Wir glauben an konkrete Prozesse,
                  die KI heute schon besser macht — und genau dort setzen wir an.
                </p>
              </div>

              {/* Statement 2 */}
              <div className="bg-background-card border border-border rounded-2xl p-8">
                <div className="w-12 h-12 bg-accent-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Ergebnisse statt Folien
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Wir bauen funktionierende Lösungen. Keine 50-seitigen Strategiepapiere.
                  Wenn wir fertig sind, läuft etwas — messbar, umsetzbar, nutzbar.
                </p>
              </div>

              {/* Statement 3 */}
              <div className="bg-background-card border border-border rounded-2xl p-8">
                <div className="w-12 h-12 bg-accent-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Jedes Unternehmen ist anders
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Es gibt keine Standard-Lösung. Wir analysieren Ihre Prozesse, verstehen
                  Ihr Team und bauen dann etwas, das zu Ihnen passt — nicht andersherum.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Lassen Sie uns sprechen
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Sie möchten wissen, ob KI für Ihr Unternehmen relevant ist?
              Unser kostenloser AI Clarity Workshop gibt Ihnen Antworten.
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
        </div>
      </main>

      <Footer />
    </div>
  );
}

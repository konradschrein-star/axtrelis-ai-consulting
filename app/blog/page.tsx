import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Blog - KI im Mittelstand | Axtrelis',
  description: 'Einblicke, Praxistipps und Erfahrungen rund um KI-Implementation im Mittelstand.',
};

export default function BlogPage() {
  // Placeholder articles - später aus CMS (Sanity.io)
  const placeholderArticles = [
    {
      title: 'Was ist ein KI-Agent — und warum ist er für Mittelständler relevant?',
      category: 'Grundlagen',
      excerpt: 'KI-Agenten können selbstständig Aufgaben übernehmen. Wir erklären, was das bedeutet und wo sie im Mittelstand eingesetzt werden.',
      date: '2026-03-15',
      readTime: '5 Min.',
      slug: 'was-ist-ein-ki-agent',
      gradient: 'from-blue-500 to-cyan-500',
      icon: '🤖',
    },
    {
      title: '5 Prozesse in Ihrem Unternehmen, die KI heute schon übernehmen kann',
      category: 'Praxis',
      excerpt: 'Von der Rechnungsverarbeitung bis zur Kundenanfrage — diese fünf Prozesse lassen sich sofort mit KI automatisieren.',
      date: '2026-03-10',
      readTime: '7 Min.',
      slug: '5-prozesse-ki-automatisierung',
      gradient: 'from-purple-500 to-pink-500',
      icon: '⚡',
    },
    {
      title: 'KI einführen ohne das Team zu verlieren',
      category: 'Change Management',
      excerpt: 'Wie Sie KI-Projekte so angehen, dass Ihr Team mitgeht statt blockiert.',
      date: '2026-03-05',
      readTime: '6 Min.',
      slug: 'ki-einfuehren-change-management',
      gradient: 'from-green-500 to-teal-500',
      icon: '👥',
    },
    {
      title: 'Warum die meisten KI-Projekte scheitern (und wie Sie es richtig machen)',
      category: 'Strategie',
      excerpt: 'Die häufigsten Fehler bei KI-Projekten — und wie Sie sie vermeiden.',
      date: '2026-02-28',
      readTime: '8 Min.',
      slug: 'ki-projekte-fehler-vermeiden',
      gradient: 'from-orange-500 to-red-500',
      icon: '🎯',
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
              KI im Mittelstand
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
              Einblicke von der Praxis. Kein Hype, keine Theorie — nur das,
              was wirklich funktioniert.
            </p>
          </div>

          {/* Coming Soon Notice */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 rounded-2xl p-8 text-center">
              <div className="inline-block px-4 py-2 bg-accent-primary/10 border border-accent-primary/20 rounded-full mb-4">
                <span className="text-accent-primary font-semibold text-sm uppercase tracking-wide">
                  In Arbeit
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">
                Blog kommt bald
              </h2>
              <p className="text-text-secondary">
                Wir arbeiten gerade an wertvollen Inhalten für Sie. In der Zwischenzeit
                können Sie gerne unseren{' '}
                <Link href="/workshop" className="text-accent-primary hover:underline">
                  AI Clarity Workshop
                </Link>{' '}
                anfragen oder{' '}
                <Link href="/kontakt" className="text-accent-primary hover:underline">
                  direkt Kontakt
                </Link>{' '}
                aufnehmen.
              </p>
            </div>
          </div>

          {/* Placeholder Articles */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">
              Geplante Artikel
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {placeholderArticles.map((article) => (
                <div
                  key={article.slug}
                  className="bg-background-card border border-border rounded-2xl overflow-hidden hover:border-accent-primary/30 transition-colors opacity-50"
                >
                  {/* Gradient Header Image */}
                  <div className={`h-48 bg-gradient-to-br ${article.gradient} flex items-center justify-center`}>
                    <span className="text-8xl opacity-80">{article.icon}</span>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Category */}
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="px-3 py-1 bg-accent-primary/10 border border-accent-primary/20 rounded-full text-accent-primary text-xs font-semibold uppercase tracking-wide">
                        {article.category}
                      </span>
                      <span className="text-text-muted text-sm">
                        {article.readTime} Lesezeit
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-text-secondary mb-4 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Date */}
                    <div className="flex items-center justify-between text-sm text-text-muted">
                      <span>
                        {new Date(article.date).toLocaleDateString('de-DE', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                      <span className="text-accent-primary/50">Kommt bald</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto text-center mt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Lieber direkt sprechen?
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Unser kostenloser AI Clarity Workshop gibt Ihrem Team konkrete
              Ansatzpunkte für KI in Ihrem Unternehmen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/workshop"
                className="px-8 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Workshop anfragen
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

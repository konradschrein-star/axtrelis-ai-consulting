import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Impressum | Axtrelis AI Consulting',
  description: 'Impressum und rechtliche Angaben von Axtrelis LLC',
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl text-white mb-12 font-bold">
            Impressum
          </h1>

          <div className="space-y-8">
            {/* Angaben gemäß § 5 TMG */}
            <section className="bg-background-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <div className="text-text-secondary space-y-2">
                <p className="text-white font-bold">Axtrelis LLC</p>
                <p>Konrad Schreiner</p>
                <p>Johann-Mayer-Straße 26</p>
                <p>01097 Dresden</p>
                <p>Deutschland</p>
              </div>
            </section>

            {/* Vertretungsberechtigt */}
            <section className="bg-background-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Vertretungsberechtigt
              </h2>
              <div className="text-text-secondary">
                <p>Konrad Schreiner</p>
              </div>
            </section>

            {/* Kontakt */}
            <section className="bg-background-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Kontakt
              </h2>
              <div className="text-text-secondary space-y-2">
                <p>
                  Telefon:{' '}
                  <a
                    href="tel:+4915785471426"
                    className="text-accent-primary hover:text-accent-secondary transition-colors"
                  >
                    +49 157 85471426
                  </a>
                </p>
                <p>
                  E-Mail:{' '}
                  <a
                    href="mailto:konrad.schrein@gmail.com"
                    className="text-accent-primary hover:text-accent-secondary transition-colors"
                  >
                    konrad.schrein@gmail.com
                  </a>
                </p>
              </div>
            </section>

            {/* Verantwortlich für Inhalte */}
            <section className="bg-background-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Verantwortlich für redaktionelle Inhalte nach § 18 Abs. 2 MStV
              </h2>
              <div className="text-text-secondary space-y-2">
                <p>Konrad Schreiner</p>
                <p>Johann-Mayer-Straße 26</p>
                <p>01097 Dresden</p>
                <p>Deutschland</p>
              </div>
            </section>

            {/* Unternehmensform */}
            <section className="bg-background-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Hinweis zur Unternehmensform
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Axtrelis ist eine nach US-amerikanischem Recht gegründete Limited
                Liability Company (LLC). Die Geschäftstätigkeit wird von Dresden,
                Deutschland aus ausgeführt.
              </p>
            </section>

            {/* Vertragsabschluss */}
            <section className="bg-background-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Vertragsabschluss und Zahlungen
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Vertragspartner für Dienstleistungen und Zahlungen ist Konrad Schreiner.
                Die Geschäftstätigkeit erfolgt im Namen von Axtrelis LLC.
              </p>
            </section>

            {/* EU-Streitschlichtung */}
            <section className="bg-background-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                EU-Streitschlichtung
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-primary hover:text-accent-secondary transition-colors underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                . Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
              <p className="text-text-secondary leading-relaxed mt-4">
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                teilzunehmen.
              </p>
            </section>

            {/* Haftung für Inhalte */}
            <section className="bg-background-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Haftung für Inhalte
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
                auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
                §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
                überwachen oder nach Umständen zu forschen, die auf eine
                rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="text-text-secondary leading-relaxed mt-4">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
                Inhalte umgehend entfernen.
              </p>
            </section>

            {/* Haftung für Links */}
            <section className="bg-background-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Haftung für Links
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren
                Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
                fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
                der Seiten verantwortlich. Die verlinkten Seiten wurden zum
                Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
                erkennbar.
              </p>
              <p className="text-text-secondary leading-relaxed mt-4">
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
                jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
                derartige Links umgehend entfernen.
              </p>
            </section>

            {/* Urheberrecht */}
            <section className="bg-background-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Urheberrecht
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht
                kommerziellen Gebrauch gestattet.
              </p>
              <p className="text-text-secondary leading-relaxed mt-4">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
                wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
                werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
                trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
                wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
                Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

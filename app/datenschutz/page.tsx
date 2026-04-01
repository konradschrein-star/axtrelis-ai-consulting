import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Datenschutzerklärung | Axtrelis AI Consulting',
  description: 'Datenschutzerklärung und Informationen zur Datenverarbeitung',
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl text-white mb-12 font-bold">
            Datenschutzerklärung
          </h1>

          <div className="space-y-8">
            {/* Einleitung */}
            <section className="bg-background-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                1. Datenschutz auf einen Blick
              </h2>
              <div className="text-text-secondary leading-relaxed space-y-4">
                <h3 className="text-xl font-semibold text-white mt-4">
                  Allgemeine Hinweise
                </h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was
                  mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
                  besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                  persönlich identifiziert werden können.
                </p>
              </div>
            </section>

            {/* Verantwortlicher */}
            <section className="bg-background-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                2. Verantwortliche Stelle
              </h2>
              <div className="text-text-secondary leading-relaxed space-y-2">
                <p>
                  Verantwortlich für die Datenverarbeitung auf dieser Website ist:
                </p>
                <div className="mt-4 space-y-1">
                  <p className="text-white font-semibold">Axtrelis LLC</p>
                  <p>Konrad Schreiner</p>
                  <p>Johann-Mayer-Straße 26</p>
                  <p>01097 Dresden</p>
                  <p>Deutschland</p>
                  <p className="mt-3">
                    Telefon:{' '}
                    <a
                      href="tel:+4915785471426"
                      className="text-accent-primary hover:text-accent-secondary"
                    >
                      +49 157 85471426
                    </a>
                  </p>
                  <p>
                    E-Mail:{' '}
                    <a
                      href="mailto:konrad.schrein@gmail.com"
                      className="text-accent-primary hover:text-accent-secondary"
                    >
                      konrad.schrein@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </section>

            {/* Datenerfassung */}
            <section className="bg-background-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                3. Datenerfassung auf dieser Website
              </h2>

              <div className="text-text-secondary leading-relaxed space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Automatische Datenerfassung
                  </h3>
                  <p>
                    Beim Besuch dieser Website werden automatisch Informationen erfasst,
                    die Ihr Browser an unseren Server übermittelt (sogenannte Server-Logfiles).
                    Dies umfasst:
                  </p>
                  <ul className="list-disc list-inside mt-3 space-y-1 ml-4">
                    <li>Browsertyp und Browserversion</li>
                    <li>Verwendetes Betriebssystem</li>
                    <li>Referrer URL (zuvor besuchte Seite)</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>IP-Adresse (anonymisiert)</li>
                    <li>Uhrzeit der Serveranfrage</li>
                  </ul>
                  <p className="mt-3">
                    Diese Daten werden <strong className="text-white">nicht mit anderen Datenquellen zusammengeführt</strong>.
                    Die Erfassung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
                    (berechtigtes Interesse an der technischen Bereitstellung und Sicherheit
                    der Website).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Kontaktaufnahme per E-Mail
                  </h3>
                  <p>
                    Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben (E-Mail-Adresse,
                    Name, Nachricht) zum Zweck der Bearbeitung Ihrer Anfrage gespeichert.
                    Die Daten werden gelöscht, sobald sie für die Erreichung des Zwecks ihrer
                    Erhebung nicht mehr erforderlich sind.
                  </p>
                  <p className="mt-3">
                    Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw.
                    Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung
                    Ihrer Anfrage).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Kontaktformular
                  </h3>
                  <p>
                    Wenn Sie ein Kontaktformular auf dieser Website nutzen, werden die
                    von Ihnen eingegebenen Daten (Name, E-Mail-Adresse, Nachricht) zum
                    Zweck der Bearbeitung Ihrer Anfrage und für eventuelle Rückfragen
                    gespeichert.
                  </p>
                  <p className="mt-3">
                    Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben.
                    Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
                    (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
                    Interesse).
                  </p>
                </div>
              </div>
            </section>

            {/* SSL-Verschlüsselung */}
            <section className="bg-background-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                4. SSL- bzw. TLS-Verschlüsselung
              </h2>
              <div className="text-text-secondary leading-relaxed">
                <p>
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
                  vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine
                  verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
                  Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol
                  in Ihrer Browserzeile.
                </p>
                <p className="mt-3">
                  Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten,
                  die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
                </p>
              </div>
            </section>

            {/* Cookies */}
            <section className="bg-background-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                5. Cookies
              </h2>
              <div className="text-text-secondary leading-relaxed">
                <p>
                  Diese Website verwendet <strong className="text-white">keine Cookies</strong> für
                  Tracking oder Analyse-Zwecke.
                </p>
                <p className="mt-3">
                  Technisch notwendige Cookies (z.B. Session-Cookies) können in Zukunft
                  eingesetzt werden, um die Funktionalität der Website zu gewährleisten.
                  Sie werden darüber rechtzeitig informiert.
                </p>
              </div>
            </section>

            {/* Analytics */}
            <section className="bg-background-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                6. Analyse-Tools und Tools von Drittanbietern
              </h2>
              <div className="text-text-secondary leading-relaxed">
                <p>
                  Auf dieser Website werden aktuell <strong className="text-white">keine
                  Analyse-Tools</strong> (wie Google Analytics, Matomo, etc.) eingesetzt.
                </p>
                <p className="mt-3">
                  Sollten in Zukunft Analyse-Tools verwendet werden, werden Sie darüber
                  auf dieser Seite informiert und haben die Möglichkeit, der Datenerfassung
                  zu widersprechen.
                </p>
              </div>
            </section>

            {/* Speicherdauer */}
            <section className="bg-background-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                7. Speicherdauer
              </h2>
              <div className="text-text-secondary leading-relaxed">
                <p>
                  Personenbezogene Daten werden nur so lange gespeichert, wie es für den
                  jeweiligen Zweck erforderlich ist:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                  <li>
                    <strong className="text-white">Server-Logfiles:</strong> Automatische Löschung nach 7 Tagen
                  </li>
                  <li>
                    <strong className="text-white">Kontaktanfragen:</strong> Löschung nach Abschluss der
                    Korrespondenz bzw. nach 6 Monaten bei Nicht-Antwort
                  </li>
                  <li>
                    <strong className="text-white">Vertragsdaten:</strong> Aufbewahrung gemäß gesetzlicher
                    Aufbewahrungsfristen (6-10 Jahre nach HGB/AO)
                  </li>
                </ul>
              </div>
            </section>

            {/* Rechte der Betroffenen */}
            <section className="bg-background-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                8. Ihre Rechte
              </h2>
              <div className="text-text-secondary leading-relaxed space-y-4">
                <p>
                  Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
                  gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger
                  und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung
                  oder Löschung dieser Daten.
                </p>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Folgende Rechte stehen Ihnen zu:
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong className="text-white">Auskunftsrecht (Art. 15 DSGVO):</strong> Recht
                      auf Auskunft über Ihre gespeicherten Daten
                    </li>
                    <li>
                      <strong className="text-white">Berichtigungsrecht (Art. 16 DSGVO):</strong> Recht
                      auf Korrektur unrichtiger Daten
                    </li>
                    <li>
                      <strong className="text-white">Löschungsrecht (Art. 17 DSGVO):</strong> Recht
                      auf Löschung Ihrer Daten
                    </li>
                    <li>
                      <strong className="text-white">Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Recht
                      auf Einschränkung der Datenverarbeitung
                    </li>
                    <li>
                      <strong className="text-white">Datenübertragbarkeit (Art. 20 DSGVO):</strong> Recht
                      auf Erhalt Ihrer Daten in strukturiertem Format
                    </li>
                    <li>
                      <strong className="text-white">Widerspruchsrecht (Art. 21 DSGVO):</strong> Recht
                      auf Widerspruch gegen die Verarbeitung
                    </li>
                    <li>
                      <strong className="text-white">Beschwerderecht:</strong> Recht auf Beschwerde
                      bei einer Aufsichtsbehörde
                    </li>
                  </ul>
                </div>

                <p className="mt-4">
                  Für Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte kontaktieren
                  Sie uns bitte unter:{' '}
                  <a
                    href="mailto:konrad.schrein@gmail.com"
                    className="text-accent-primary hover:text-accent-secondary"
                  >
                    konrad.schrein@gmail.com
                  </a>
                </p>
              </div>
            </section>

            {/* Widerspruchsrecht */}
            <section className="bg-background-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                9. Widerspruchsrecht gegen Datenerhebung
              </h2>
              <div className="text-text-secondary leading-relaxed">
                <p>
                  Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten
                  Interessen gemäß Art. 6 Abs. 1 lit. f DSGVO verarbeitet werden, haben
                  Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung
                  Ihrer personenbezogenen Daten einzulegen, soweit dafür Gründe vorliegen,
                  die sich aus Ihrer besonderen Situation ergeben.
                </p>
                <p className="mt-3">
                  Möchten Sie von Ihrem Widerspruchsrecht Gebrauch machen, genügt eine
                  E-Mail an:{' '}
                  <a
                    href="mailto:konrad.schrein@gmail.com"
                    className="text-accent-primary hover:text-accent-secondary"
                  >
                    konrad.schrein@gmail.com
                  </a>
                </p>
              </div>
            </section>

            {/* Aufsichtsbehörde */}
            <section className="bg-background-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                10. Zuständige Aufsichtsbehörde
              </h2>
              <div className="text-text-secondary leading-relaxed space-y-2">
                <p>
                  Zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen ist:
                </p>
                <div className="mt-4 space-y-1">
                  <p className="text-white font-semibold">
                    Sächsischer Datenschutzbeauftragter
                  </p>
                  <p>Devrientstraße 5</p>
                  <p>01067 Dresden</p>
                  <p className="mt-3">
                    Telefon:{' '}
                    <a
                      href="tel:+4935148549010"
                      className="text-accent-primary hover:text-accent-secondary"
                    >
                      +49 351 48549010
                    </a>
                  </p>
                  <p>
                    E-Mail:{' '}
                    <a
                      href="mailto:saechsdsb@slt.sachsen.de"
                      className="text-accent-primary hover:text-accent-secondary"
                    >
                      saechsdsb@slt.sachsen.de
                    </a>
                  </p>
                  <p>
                    Website:{' '}
                    <a
                      href="https://www.saechsdsb.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-primary hover:text-accent-secondary underline"
                    >
                      www.saechsdsb.de
                    </a>
                  </p>
                </div>
              </div>
            </section>

            {/* Änderungen */}
            <section className="bg-background-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                11. Änderungen dieser Datenschutzerklärung
              </h2>
              <div className="text-text-secondary leading-relaxed">
                <p>
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit
                  sie stets den aktuellen rechtlichen Anforderungen entspricht oder um
                  Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen.
                  Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
                </p>
                <p className="mt-3 text-text-muted text-sm">
                  Stand: März 2026
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">Axtrelis</span>
            </div>
            <p className="text-text-secondary max-w-md">
              KI-Consulting und Automatisierung für mittelständische Unternehmen.
              Pragmatisch, umsetzungsstark, messbar.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/leistungen" className="text-text-secondary hover:text-white transition-colors">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link href="/workshop" className="text-text-secondary hover:text-white transition-colors">
                  AI Clarity Workshop
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns" className="text-text-secondary hover:text-white transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-text-secondary hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-text-secondary hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/impressum" className="text-text-secondary hover:text-white transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-text-secondary hover:text-white transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/axtrelis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-text-muted text-sm">
              © 2026 Axtrelis Consulting. Alle Rechte vorbehalten.
            </p>
            <p className="text-text-muted text-sm">
              Made with precision in Dresden
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

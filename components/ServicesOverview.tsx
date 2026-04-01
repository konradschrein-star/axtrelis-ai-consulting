'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'KI-Agenten',
    description: 'Autonome Systeme, die selbstständig Aufgaben übernehmen — von der Kundenanfrage bis zur Terminvereinbarung.',
    link: '/leistungen#ki-agenten',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Prozessautomatisierung',
    description: 'Workflows mit KI automatisieren: Rechnungsverarbeitung, Dateneingabe, E-Mail-Klassifizierung und mehr.',
    link: '/leistungen#prozessautomatisierung',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'AI Clarity Workshop',
    description: 'Kostenloser Workshop: Wir zeigen Ihrem Team konkret, wo KI in Ihrem Unternehmen ansetzen kann.',
    link: '/workshop',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Strategie & Beratung',
    description: 'KI-Readiness Check, Use-Case-Priorisierung und Change Management für erfolgreiche KI-Einführung.',
    link: '/leistungen#strategie',
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 px-6 bg-background-secondary/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Unsere <span className="gradient-text">Leistungen</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Von der ersten Idee bis zur laufenden KI-Lösung
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative bg-background-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-accent-primary/50 hover:shadow-glow transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/0 to-accent-secondary/0 group-hover:from-accent-primary/5 group-hover:to-accent-secondary/5 rounded-xl transition-all duration-300"></div>

              <div className="relative">
                <div className="text-accent-secondary mb-4 group-hover:scale-110 group-hover:text-accent-primary transition-all duration-300">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                <Link
                  href={service.link}
                  className="inline-flex items-center text-accent-primary hover:text-accent-secondary transition-colors duration-200 text-sm font-medium"
                >
                  Mehr erfahren
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

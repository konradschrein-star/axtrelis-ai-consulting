'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Rayan Tawfik',
    role: 'Co-Founder',
    specialty: 'Consulting & Business Development',
    linkedin: 'https://www.linkedin.com/in/rayan-stefan-tawfik/',
    description: 'Experte für KI-Strategie und Business-Transformation im Mittelstand.',
    image: '/images/team/rayan-tawfik.jpg',
  },
  {
    name: 'Konrad Schreiner',
    role: 'Co-Founder',
    specialty: 'Technische Umsetzung & KI-Architektur',
    linkedin: 'https://www.linkedin.com/in/konrad-schreiner-6b649830a/',
    description: 'Entwickelt KI-Agenten und Automatisierungslösungen mit modernsten Technologien.',
    image: '/images/team/Konrad2.jpeg',
  },
  {
    name: 'Niclas',
    role: 'Co-Founder',
    specialty: 'Head of Development',
    linkedin: '#',
    description: 'Leitet die technische Entwicklung und sorgt für skalierbare Lösungen.',
    image: '/images/team/niclas.jpg',
  },
  {
    name: 'Frederik',
    role: 'Co-Founder',
    specialty: '',
    linkedin: '#',
    description: 'Mitgründer von Axtrelis.',
    image: '/images/team/Frederik.jpeg',
  },
];

export default function TeamTeaser() {
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
            Das <span className="gradient-text">Team</span> hinter Axtrelis
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Vier Gründer — eine Mission: KI greifbar machen
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="group relative bg-background-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-accent-primary/50 hover:shadow-glow transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/0 to-accent-secondary/0 group-hover:from-accent-primary/5 group-hover:to-accent-secondary/5 rounded-xl transition-all duration-300"></div>

              <div className="relative">
                {/* Team Photo */}
                <div className="w-24 h-24 mx-auto mb-4 relative rounded-full overflow-hidden border-2 border-accent-primary/30 shadow-glow">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center"
                    style={{ aspectRatio: '1/1' }}
                  />
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-bold text-white text-center mb-1">
                  {member.name}
                </h3>
                <p className="text-accent-secondary text-center font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-text-muted text-sm text-center mb-3">
                  {member.specialty}
                </p>

                {/* Description */}
                <p className="text-text-secondary text-sm text-center mb-4 leading-relaxed">
                  {member.description}
                </p>

                {/* LinkedIn Link */}
                {member.linkedin !== '#' && (
                  <div className="text-center">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-accent-primary hover:text-accent-secondary transition-colors duration-200 text-sm font-medium"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      LinkedIn
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            href="/ueber-uns"
            className="group inline-flex items-center px-6 py-3 border-2 border-accent-primary text-white font-semibold rounded-lg hover:bg-accent-primary/10 backdrop-blur-sm transition-all duration-300"
          >
            Mehr über uns erfahren
            <svg
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
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
        </motion.div>
      </div>
    </section>
  );
}

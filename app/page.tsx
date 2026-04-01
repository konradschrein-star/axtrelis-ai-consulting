import Navigation from '@/components/Navigation';
import BackgroundVideo from '@/components/BackgroundVideo';
import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import ServicesOverview from '@/components/ServicesOverview';
import LeadMagnet from '@/components/LeadMagnet';
import TeamTeaser from '@/components/TeamTeaser';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      {/* Navigation (sticky) */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Problem-Solution Block */}
      <ProblemSolution />

      {/* Services Overview */}
      <ServicesOverview />

      {/* Lead Magnet */}
      <LeadMagnet />

      {/* Team Teaser */}
      <TeamTeaser />

      {/* Footer */}
      <Footer />
    </main>
  );
}

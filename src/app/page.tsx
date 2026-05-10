import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { TrustSection } from '@/components/TrustSection';
import Services from '@/components/Services';
import RadialOrbitalTimelineDemo from '@/components/RadialOrbitalTimelineDemo';
import AnimatedTeamSectionDemo from '@/components/AnimatedTeamSectionDemo';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative bg-[#020203] min-h-screen">
      {/* Background Mesh Glows */}
      <div className="glow-mesh" />
      
      <Navbar />
      
      <div className="flex flex-col gap-0">
        <Hero />
        <TrustSection />
        <Services />
        <RadialOrbitalTimelineDemo />
        <AnimatedTeamSectionDemo />
        <Pricing />
        <FAQ />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}

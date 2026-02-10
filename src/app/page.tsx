import Hero from '@/components/Hero';
import About from '@/components/About';
import Tracks from '@/components/Tracks';
import Benefits from '@/components/Benefits';

import ActivityTimeline from '@/components/ActivityTimeline';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="relative">
      <Navbar /> {/* Navigation Bar */}
      
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <div id="about" className="scroll-mt-20">
        <FadeIn>
          <About />
        </FadeIn>
      </div>

      {/* Tracks Section */}
      <div id="tracks" className="scroll-mt-20">
        <FadeIn>
          <Tracks />
        </FadeIn>
      </div>

      {/* Benefits Section */}
      <div id="benefits" className="scroll-mt-20">
        <FadeIn>
          <Benefits />
        </FadeIn>
      </div>

      {/* Activity Timeline Section */}
      <div id="activity" className="scroll-mt-20">
        <FadeIn>
          <ActivityTimeline />
        </FadeIn>
      </div>



      {/* Footer */}
      <FadeIn delay={0.2}>
        <Footer />
      </FadeIn>
    </main>
  );
}

import Hero from '@/components/Hero';
import About from '@/components/About';
import Tracks from '@/components/Tracks';
import Benefits from '@/components/Benefits';
import Schedule from '@/components/Schedule';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';

export default function Home() {
  return (
    <main>
      <Hero />
      <FadeIn>
        <About />
      </FadeIn>
      <FadeIn>
        <Tracks />
      </FadeIn>
      <FadeIn>
        <Benefits />
      </FadeIn>
      <FadeIn>
        <Schedule />
      </FadeIn>
      <FadeIn delay={0.2}>
        <Footer />
      </FadeIn>
    </main>
  );
}

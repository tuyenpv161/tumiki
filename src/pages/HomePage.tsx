import { HeroSection } from '../components/HeroSection';
import { FieldsSection } from '../components/FieldsSection';
import { ResearchSection } from '../components/ResearchSection';
import { PartnersSection } from '../components/PartnersSection';
import { NewsSection } from '../components/NewsSection';

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <FieldsSection />
      <ResearchSection />
      <PartnersSection />
      <NewsSection />
    </main>
  );
}

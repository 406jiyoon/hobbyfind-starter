'use client';

import { ContentContainer } from '@/components/layout/content-container';
import { hobbies } from '@/data/hobbies';
import { HeroSection } from '@/features/home/components/hero-section';
import { HobbyGrid } from '@/features/hobbies/components/hobby-grid';

export default function HomePage() {
  return (
    <main>
      <ContentContainer>
        <HeroSection />
        <HobbyGrid hobbies={hobbies} />
      </ContentContainer>
    </main>
  );
}

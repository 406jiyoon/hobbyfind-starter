'use client';

import { HobbyCard } from '@/features/hobbies/components/hobby-card';
import type { Hobby } from '@/data/hobbies';

type HobbyGridProps = {
  hobbies: Hobby[];
};

export function HobbyGrid({ hobbies }: HobbyGridProps) {
  if (hobbies.length === 0) {
    return <p className="py-8 text-base text-muted">표시할 취미가 없습니다.</p>;
  }

  return (
    <section className="pb-8 lg:pb-12" aria-labelledby="hobby-list-heading">
      <h2 id="hobby-list-heading" className="sr-only">
        전체 취미
      </h2>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {hobbies.map((hobby) => (
          <li key={hobby.id}>
            <HobbyCard hobby={hobby} />
          </li>
        ))}
      </ul>
    </section>
  );
}

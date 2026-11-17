'use client';

import Image from 'next/image';
import { useState } from 'react';
import { categoryLabelById, type Hobby } from '@/data/hobbies';

export function HobbyCard({ hobby }: { hobby: Hobby }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface">
        {imageFailed ? (
          <div className="flex h-full items-center justify-center text-sm text-muted">
            이미지를 불러올 수 없습니다
          </div>
        ) : (
          <Image
            src={hobby.imageSrc}
            alt={hobby.imageAlt}
            fill
            unoptimized
            sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
            onError={() => setImageFailed(true)}
          />
        )}
      </div>

      <p className="mt-3 text-sm font-medium text-brand">
        {categoryLabelById[hobby.category]}
      </p>
      <h2 className="mt-1 text-lg font-bold text-foreground">
        {hobby.name}
      </h2>
      <p className="mt-2 text-sm text-muted">
        {hobby.description}
      </p>
    </article>
  );
}
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ContentContainer } from '@/components/layout/content-container';
import { CATEGORIES } from '@/data/hobbies';
import { cn } from '@/lib/utils';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-border bg-background">
      <ContentContainer className="flex flex-col gap-1 py-3 md:flex-row md:items-center md:justify-between">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center rounded-md text-xl font-bold text-brand transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          HobbyFind
        </Link>
        <nav aria-label="취미 카테고리">
          <ul className="flex flex-wrap items-center gap-1">
            {CATEGORIES.map((category) => {
              const isCurrent = pathname === category.href;

              return (
                <li key={category.id}>
                  <Link
                    href={category.href}
                    aria-current={isCurrent ? 'page' : undefined}
                    className={cn(
                      'inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-foreground transition-colors duration-150 hover:bg-brand-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand active:bg-brand-soft active:text-brand',
                      isCurrent && 'bg-brand-soft text-brand',
                    )}
                  >
                    {category.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </ContentContainer>
    </header>
  );
}

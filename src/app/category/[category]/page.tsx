import { notFound } from 'next/navigation';
import { ContentContainer } from '@/components/layout/content-container';
import {
  CATEGORIES,
  hobbies,
  type HobbyCategory,
} from '@/data/hobbies';
import { HobbyGrid } from '@/features/hobbies/components/hobby-grid';

const introductions: Record<HobbyCategory, string> = {
  sports: '몸을 움직이며 활력과 건강을 찾는 취미를 만나보세요.',
  intellectual: '새로운 지식을 배우고 생각의 폭을 넓혀보세요.',
  arts: '나만의 감각으로 만들고 표현하는 즐거움을 발견하세요.',
};

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { category } = await params;
  const selectedCategory = CATEGORIES.find(
    (item) => item.id === category,
  );

  if (!selectedCategory) {
    notFound();
  }

  const categoryHobbies = hobbies.filter(
    (hobby) => hobby.category === selectedCategory.id,
  );

  return (
    <main>
      <ContentContainer>
        <section className="py-8 lg:py-12">
          <h1 className="text-[32px] font-bold leading-tight text-foreground lg:text-[48px]">
            {selectedCategory.label} 취미
          </h1>
          <p className="mt-4 max-w-3xl text-base text-muted">
            {introductions[selectedCategory.id]}
          </p>
        </section>

        <HobbyGrid hobbies={categoryHobbies} />
      </ContentContainer>
    </main>
  );
}
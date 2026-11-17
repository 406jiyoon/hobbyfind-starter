import { z } from 'zod';

export const CATEGORIES = [
  { id: 'sports', label: '운동형', href: '/category/sports' },
  { id: 'intellectual', label: '지능형', href: '/category/intellectual' },
  { id: 'arts', label: '예술형', href: '/category/arts' },
] as const;

export type HobbyCategory = (typeof CATEGORIES)[number]['id'];

const hobbySchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  description: z.string().min(1),
  category: z.enum(['sports', 'intellectual', 'arts']),
  imageSrc: z.string().startsWith('/thumbnails/'),
  imageAlt: z.string().min(1),
});

const hobbyListSchema = z.array(hobbySchema).length(18).superRefine((items, context) => {
  const counts = items.reduce<Record<HobbyCategory, number>>(
    (accumulator, hobby) => ({
      ...accumulator,
      [hobby.category]: accumulator[hobby.category] + 1,
    }),
    { sports: 0, intellectual: 0, arts: 0 },
  );

  CATEGORIES.forEach((category) => {
    if (counts[category.id] === 6) {
      return;
    }

    context.addIssue({
      code: z.ZodIssueCode.custom,
      message: `${category.label} 취미는 6개여야 합니다.`,
    });
  });
});

const hobbyRecords = [
  {
    id: 'jogging',
    name: '조깅/러닝',
    description: '일정한 속도로 달리며 몸과 마음을 가볍게 만드는 취미',
    category: 'sports',
    imageSrc: '/thumbnails/running.jpg',
    imageAlt: '공원을 따라 조깅하는 모습',
  },
  {
    id: 'yoga',
    name: '요가',
    description: '호흡과 자세를 맞춰 유연함과 안정을 기르는 취미',
    category: 'sports',
    imageSrc: '/thumbnails/yoga.jpg',
    imageAlt: '요가 매트 위에서 자세를 취하는 모습',
  },
  {
    id: 'swimming',
    name: '수영',
    description: '물속에서 전신을 움직이며 지구력을 키우는 취미',
    category: 'sports',
    imageSrc: '/thumbnails/swimming.jpg',
    imageAlt: '수영장 레인을 헤엄치는 모습',
  },
  {
    id: 'cycling',
    name: '자전거',
    description: '길을 달리며 풍경을 즐기고 체력을 다지는 취미',
    category: 'sports',
    imageSrc: '/thumbnails/cycling.jpg',
    imageAlt: '자전거를 타고 길을 달리는 모습',
  },
  {
    id: 'climbing',
    name: '클라이밍',
    description: '손과 발로 벽을 오르며 집중력과 근력을 쓰는 취미',
    category: 'sports',
    imageSrc: '/thumbnails/climbing.jpg',
    imageAlt: '실내 클라이밍 벽을 오르는 모습',
  },
  {
    id: 'dance',
    name: '댄스',
    description: '음악에 맞춰 몸을 움직이며 표현하는 취미',
    category: 'sports',
    imageSrc: '/thumbnails/dance.jpg',
    imageAlt: '음악에 맞춰 춤을 추는 모습',
  },
  {
    id: 'reading',
    name: '독서',
    description: '글을 읽으며 생각과 시야를 넓히는 취미',
    category: 'intellectual',
    imageSrc: '/thumbnails/reading.jpg',
    imageAlt: '펼친 책을 읽는 모습',
  },
  {
    id: 'puzzle',
    name: '퍼즐',
    description: '조각을 맞추며 관찰력과 끈기를 기르는 취미',
    category: 'intellectual',
    imageSrc: '/thumbnails/puzzle.jpg',
    imageAlt: '퍼즐 조각을 맞춰 가는 모습',
  },
  {
    id: 'chess',
    name: '체스',
    description: '말을 움직이며 다음 수를 읽는 취미',
    category: 'intellectual',
    imageSrc: '/thumbnails/chess.jpg',
    imageAlt: '체스판 위에 놓인 말',
  },
  {
    id: 'programming',
    name: '프로그래밍',
    description: '문제를 나누고 코드로 해결하는 취미',
    category: 'intellectual',
    imageSrc: '/thumbnails/programming.jpg',
    imageAlt: '코드를 작성하는 화면',
  },
  {
    id: 'language',
    name: '외국어 학습',
    description: '새로운 언어로 표현하고 이해하는 취미',
    category: 'intellectual',
    imageSrc: '/thumbnails/foreign_language_learning.jpg',
    imageAlt: '외국어 노트를 펼쳐 둔 모습',
  },
  {
    id: 'photography',
    name: '사진 촬영',
    description: '빛과 장면을 담으며 시선을 연습하는 취미',
    category: 'intellectual',
    imageSrc: '/thumbnails/photography.jpg',
    imageAlt: '카메라로 장면을 담는 모습',
  },
  {
    id: 'drawing',
    name: '그림 그리기',
    description: '색과 선으로 떠오른 모습을 표현하는 취미',
    category: 'arts',
    imageSrc: '/thumbnails/drawing.jpg',
    imageAlt: '스케치북에 그림을 그리는 모습',
  },
  {
    id: 'instrument',
    name: '악기 연주',
    description: '소리의 높낮이를 맞추며 곡을 연주하는 취미',
    category: 'arts',
    imageSrc: '/thumbnails/instrument_playing.jpg',
    imageAlt: '악기를 연주하는 모습',
  },
  {
    id: 'cooking',
    name: '요리',
    description: '재료를 다듬어 한 접시의 음식을 만드는 취미',
    category: 'arts',
    imageSrc: '/thumbnails/cooking.jpg',
    imageAlt: '재료를 다듬어 요리하는 모습',
  },
  {
    id: 'calligraphy',
    name: '서예',
    description: '붓과 먹으로 글자의 형태를 다듬는 취미',
    category: 'arts',
    imageSrc: '/thumbnails/calligraphy.jpg',
    imageAlt: '붓으로 글씨를 쓰는 모습',
  },
  {
    id: 'pottery',
    name: '도자기 만들기',
    description: '흙을 빚어 그릇과 형태를 만드는 취미',
    category: 'arts',
    imageSrc: '/thumbnails/pottery.jpg',
    imageAlt: '물레 위에서 도자기를 빚는 모습',
  },
  {
    id: 'gardening',
    name: '정원 가꾸기',
    description: '식물을 돌보고 계절의 변화를 가꾸는 취미',
    category: 'arts',
    imageSrc: '/thumbnails/gardening.jpg',
    imageAlt: '화분에 식물을 돌보는 모습',
  },
] as const;

export type Hobby = z.infer<typeof hobbySchema>;

export const hobbies: Hobby[] = hobbyListSchema.parse(hobbyRecords);

export const categoryLabelById: Record<HobbyCategory, string> = {
  sports: '운동형',
  intellectual: '지능형',
  arts: '예술형',
};

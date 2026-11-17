import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'HobbyFind',
  description: '운동형, 지능형, 예술형 취미를 둘러보고 새로운 즐거움을 발견하세요.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="bg-background font-sans text-base leading-[1.6] text-foreground antialiased break-keep">
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}

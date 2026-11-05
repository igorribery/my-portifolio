import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://igor-ribeiro.vercel.app'),
  title: 'Igor Ribeiro | Desenvolvedor Full Stack',
  description: 'Portfólio de Igor Ribeiro, desenvolvedor Full Stack com experiência em frontend e backend. Projetos com React, Next.js, TypeScript, Node.js e Go.',
  openGraph: {
    title: 'Igor Ribeiro | Full Stack Developer',
    description: 'Projetos e experiências de Igor Ribeiro em desenvolvimento Full Stack, frontend e backend.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://igor-ribeiro.vercel.app',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR"><body>{children}<Analytics /><SpeedInsights /></body></html>
  );
}

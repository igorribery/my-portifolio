import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://igor-ribeiro.vercel.app'),
  title: 'Igor Ribeiro | Desenvolvedor Full Stack',
  description: 'Portfólio de Igor Ribeiro: desenvolvedor Full Stack com foco em backend, arquitetura de software, Go, Node.js, React, Next.js e AWS.',
  openGraph: {
    title: 'Igor Ribeiro | Full Stack Developer',
    description: 'Projetos, experiência, arquitetura e engenharia de software.',
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

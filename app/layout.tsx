import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Igor Ribeiro | Especialista em Front-end React',
  description:
    'Portfólio de Igor Ribeiro, especialista em front-end com React, Next.js e TypeScript, com experiência profissional em Go, Kotlin, GraphQL e AWS.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Igor RDS | Desenvolvedor Full Stack',
  description:
    'Portfólio de Igor RDS — Desenvolvedor Full Stack especializado em React, Next.js, TypeScript e AWS. Projeto CriptoInvest em produção.',
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

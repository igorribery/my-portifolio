# Portfólio — Igor Ribeiro

Site pessoal de Igor Ribeiro, desenvolvido com **Next.js 15**, **React 19** e **TypeScript**.

## Dark Premium

Redesign baseado no protótipo visual aprovado: hero editorial, painel de código animado, vitrines ilustrativas de projetos, timeline profissional, tecnologia em movimento e contato.

- O conteúdo permanece em português e destaca experiências e projetos verificáveis.
- Animações leves em CSS, revelações via `IntersectionObserver` e interação de ponteiro com `requestAnimationFrame`; sem dependência extra de motion.
- Suporte a `prefers-reduced-motion`, navegação por teclado, link de salto e layout responsivo.
- A seção de projetos descreve **CriptoInvest** e **TaskFlow**, com links para seus repositórios públicos. Mockups são ilustrativos (não dados em tempo real).
- Metadados para SEO e compartilhamento social.

## Desenvolvimento

```bash
npm ci
npm run dev
```

Acesse `http://localhost:3000`. Para validar a compilação, execute `npm run build`.

A aplicação usa Vercel Analytics e Speed Insights já presentes no projeto original. Não inclui alterações de configuração de deploy.

import { PortfolioMotion } from '@/componentes/portfolio-motion';
import { GarimpexFeature } from '@/componentes/garimpex-feature';
import { contato } from '@/dados/portfolio';

/** Portfolio Dark Premium — implementation of the approved visual prototype. */
export default function Home() {
  const whatsappUrl = `https://wa.me/55${contato.telefone.replace(/\D/g, '')}?text=${encodeURIComponent('Olá! Vi seu portfólio e gostaria de conversar sobre uma oportunidade profissional.')}`;

  return (
    <>
      <a href="#projetos" className="skip-link">Ir para os projetos</a>

<div className="topline">
</div>
<div className="wrap">
<header className="navbar">
<a href="#inicio" className="brand">
<span className="brand-logo">IR<span className="brand-dot">.</span>
</span>
<span>igor<span className="brand-dot">.</span>ribeiro</span>
</a>
<nav className="navlinks">
<a href="#projetos">Projetos</a>
<a href="#experiencia">Experiência</a>
<a href="#stack">Stack</a>
<a href="#contato">Contato</a>
</nav>
<a className="top-contact" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Vamos conversar ↗</a>
</header>
<section className="hero" id="inicio">
<div className="gridbg">
</div>
<div className="hero-copy reveal visible">
<div className="eyebrow">
<span className="dot">
</span> FULL STACK DEVELOPER <span className="line">
</span> BRASIL</div>
<h1>
<span>Código que</span>
<span>vira <span className="gradient" style={{ display: 'inline' }}>produto.</span>
</span>
</h1>
<p className="hero-sub">Olá, eu sou <strong>Igor Ribeiro.</strong> Desenvolvedor Full Stack com experiência em <strong>frontend e backend</strong>. Gosto de transformar ideias em aplicações web completas, criando interfaces intuitivas e funcionalidades que resolvem problemas reais.</p>
<div className="hero-cta">
<a className="btn btn-primary" href="#projetos">Explorar projetos <span>↗</span>
</a>
<a target="_blank" rel="noopener noreferrer" className="btn btn-plain" href="https://github.com/igorribery">GitHub <span>↗</span>
</a>
</div>
<div className="mini-stats">
<div className="stat">
<span className="num">3+ anos</span>
<span className="label">Experiência</span>
</div>
<div className="sep">
</div>
<div className="stat">
<span className="num">Node · Go</span>
<span className="label">Backend</span>
</div>
<div className="sep">
</div>
<div className="stat">
<span className="num">React · TS · Next.js</span>
<span className="label">Frontend</span>
</div>
</div>
</div>
<div className="visual-wrap reveal visible">
<div className="halo">
</div>
<div className="halo two">
</div>
<div className="orbit-chip top">✳ &nbsp; FRONTEND / <span className="green">BACKEND</span>
</div>
<div className="codebox">
<div className="code-head">
<div className="dots">
<i>
</i>
<i>
</i>
<i>
</i>
</div>
<small>developer.ts</small>
<small>⌘</small>
</div>
<div className="code-pad">
<div>
<span className="c-slate">01</span>&nbsp; <span className="c-purp">const</span> <span className="c-blue">developer</span> <span className="c-white">= {"{"}</span>
</div>
<div>
<span className="c-slate">02</span>&nbsp;&nbsp;&nbsp; <span className="c-white">name:</span> <span className="c-green">&apos;Igor Ribeiro&apos;</span><span className="c-white">,</span>
</div>
<div>
<span className="c-slate">03</span>&nbsp;&nbsp;&nbsp; <span className="c-white">role:</span> <span className="c-green">&apos;Full Stack&apos;</span><span className="c-white">,</span>
</div>
<div>
<span className="c-slate">04</span>&nbsp;&nbsp;&nbsp; <span className="c-white">frontend:</span> <span className="c-white">[</span><span className="c-green">&apos;React&apos;</span><span className="c-white">,</span> <span className="c-green">&apos;TypeScript&apos;</span><span className="c-white">,</span>
</div>
<div>
<span className="c-slate">05</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="c-green">&apos;Next.js&apos;</span><span className="c-white">],</span>
</div>
<div>
<span className="c-slate">06</span>&nbsp;&nbsp;&nbsp; <span className="c-white">backend:</span> <span className="c-white">[</span><span className="c-green">&apos;Node.js&apos;</span><span className="c-white">,</span> <span className="c-green">&apos;Go&apos;</span><span className="c-white">],</span>
</div>
<div>
<span className="c-slate">07</span>&nbsp;&nbsp;&nbsp; <span className="c-blue">build</span><span className="c-white">:</span> <span className="c-yellow">&apos;with purpose&apos;</span>
</div>
<div>
<span className="c-slate">08</span>&nbsp; <span className="c-white">{"}"};</span>
</div>
</div>
<div className="code-bottom">
<span>
</span> Building web applications, one commit at a time</div>
</div>
<div className="orbit-chip bottom">↗ &nbsp; THINK. BUILD. <span className="green">SHIP.</span>
</div>
</div>
<div className="hero-vertical">DESIGN × ENGINEERING / 2026</div>
</section>
</div>
<div className="divider">
</div>
<main>
<section className="section wrap" id="projetos">
<div className="section-top reveal">
<div>
<div className="sect-num">02 / TRABALHOS SELECIONADOS</div>
<h2>Projetos que vão<br />além da interface<span style={{ color: 'var(--blue)' }}>.</span>
</h2>
</div>
<p className="aside">Da interface às APIs. Projetos que mostram minha experiência desenvolvendo aplicações web de ponta a ponta.</p>
</div>
<GarimpexFeature />
<div className="project-grid">
<article className="project-card reveal">
<div className="project-art">
<div className="project-tag">FEATURED / FULL STACK</div>
<div className="dashboard">
<div className="dash-top">◈ &nbsp; CRYPTO INVEST <small>MARKET OVERVIEW</small>
</div>
<div className="dash-mid">
<strong>Market insights</strong>
<span>↗ Live data integration</span>
</div>
<div className="dash-bars">
<i style={{ height: '48%' }}>
</i>
<i style={{ height: '62%' }}>
</i>
<i style={{ height: '55%' }}>
</i>
<i style={{ height: '77%' }}>
</i>
<i style={{ height: '68%' }}>
</i>
<i style={{ height: '86%' }}>
</i>
<i style={{ height: '72%' }}>
</i>
<i style={{ height: '83%' }}>
</i>
<i style={{ height: '91%' }}>
</i>
<i style={{ height: '74%' }}>
</i>
<i style={{ height: '97%' }}>
</i>
<i style={{ height: '88%' }}>
</i>
</div>
<div className="dash-footer">
<span>PORTFOLIO</span>
<span>ALERTS</span>
<span>INTEGRATIONS</span>
</div>
</div>
</div>
<div className="project-detail">
<div className="proj-meta">
<span>01 / CRIPTOINVEST</span>
<span>WEB PLATFORM</span>
</div>
<h3>CriptoInvest</h3>
<p>Plataforma full stack de acompanhamento do mercado cripto, gestão de carteira e alertas de preço com infraestrutura AWS.</p>
<div className="chips">
<span>Next.js</span>
<span>Node.js</span>
<span>PostgreSQL</span>
<span>AWS</span>
</div>
<a target="_blank" rel="noopener noreferrer" className="proj-link" href="https://github.com/igorribery/criptoinvest">Explorar projeto <span>↗</span>
</a>
</div>
</article>
<article className="project-card reveal">
<div className="project-art task">
<div className="project-tag">FEATURED / AI INTEGRATION</div>
<div className="kanban">
<div className="kanban-col">
<h4>To do &nbsp; 03</h4>
<div className="ticket">
<strong>
</strong>
<b>
</b>
</div>
<div className="ticket">
<strong>
</strong>
<b>
</b>
</div>
<div className="ticket">
<strong>
</strong>
<b>
</b>
</div>
</div>
<div className="kanban-col">
<h4>In progress &nbsp; 02</h4>
<div className="ticket">
<strong>
</strong>
<b>
</b>
</div>
<div className="ticket">
<strong>
</strong>
<b>
</b>
</div>
</div>
<div className="kanban-col">
<h4>Done &nbsp; 04</h4>
<div className="ticket">
<strong>
</strong>
<b>
</b>
</div>
<div className="ticket">
<strong>
</strong>
<b>
</b>
</div>
</div>
</div>
<div className="task-float">✦ &nbsp; Ollama + RAG</div>
</div>
<div className="project-detail">
<div className="proj-meta">
<span>02 / TASKFLOW</span>
<span>PRODUCTIVITY</span>
</div>
<h3>TaskFlow</h3>
<p>Gestão colaborativa com Kanban, histórico de tarefas, autenticação e assistente com IA local integrado ao fluxo de trabalho.</p>
<div className="chips">
<span>Next.js</span>
<span>NestJS</span>
<span>Redis</span>
<span>Ollama / RAG</span>
</div>
<a target="_blank" rel="noopener noreferrer" className="proj-link" href="https://github.com/igorribery/taskflow">Explorar projeto <span>↗</span>
</a>
</div>
</article>
</div>
</section>
<div className="stackband" id="stack">
<div className="stackband-inner">
<span>TYPESCRIPT <b>✳</b>
</span>
<span>NODE.JS <b>✳</b>
</span>
<span>GO <b>✳</b>
</span>
<span>POSTGRESQL <b>✳</b>
</span>
<span>REDIS <b>✳</b>
</span>
<span>NEXT.JS <b>✳</b>
</span>
<span>REACT <b>✳</b>
</span>
<span>DOCKER <b>✳</b>
</span>
<span>TYPESCRIPT <b>✳</b>
</span>
<span>NODE.JS <b>✳</b>
</span>
<span>GO <b>✳</b>
</span>
<span>POSTGRESQL <b>✳</b>
</span>
<span>REDIS <b>✳</b>
</span>
<span>NEXT.JS <b>✳</b>
</span>
<span>REACT <b>✳</b>
</span>
<span>DOCKER <b>✳</b>
</span>
</div>
</div>
<section className="section wrap" id="experiencia">
<div className="sect-num">03 / JORNADA PROFISSIONAL</div>
<div className="exp-grid">
<div className="exp-left reveal">
<h2>Experiência<br />que constrói<span style={{ color: 'var(--blue)' }}>.</span>
</h2>
<p>Experiência criando interfaces, APIs e integrações para aplicações web. Gosto de participar de todas as etapas do desenvolvimento, da ideia à entrega.</p>
</div>
<div className="exp-history">
<div className="exp-role exp-role--current reveal">
<small>ATUALMENTE · AUTÔNOMO</small>
<h3>Desenvolvedor Full Stack <span style={{ color: '#8292a8', fontWeight: '400' }}>· Freelance e projetos próprios</span></h3>
<p>Atuação independente com trabalhos freelance e desenvolvimento de produtos próprios, incluindo plataformas SaaS, aplicações web e aplicativos com React Native. Desenvolvimento de interfaces, APIs e integrações, da implementação à evolução das funcionalidades.</p>
<div className="chips">
<span>Full Stack</span>
<span>Freelance</span>
<span>SaaS</span>
<span>React Native</span>
</div>
</div>
<div className="exp-role reveal">
<small>MAR 2023 — MAR 2026 · REMOTO</small>
<h3>Desenvolvedor Full Stack <span style={{ color: '#8292a8', fontWeight: '400' }}>@ Numih</span>
</h3>
<p>Atuação com React, Next.js, TypeScript, Go, Node.js, Kotlin, GraphQL, Redis e serviços AWS. Desenvolvimento de interfaces, APIs, integrações e funcionalidades de ponta a ponta.</p>
<div className="chips">
<span>Backend</span>
<span>Frontend</span>
<span>Integrações</span>
<span>APIs</span>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="footer" id="contato">
<div className="sect-num">04 / VAMOS CONVERSAR</div>
<h2>Vamos trabalhar<br />
<em>juntos?</em>
</h2>
<p>Aberto a oportunidades como Desenvolvedor Full Stack em empresas, em regime CLT ou PJ, além de projetos freelance e parcerias.</p>
<div className="footer-actions">
<a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Conversar sobre oportunidades pelo WhatsApp">Conversar sobre oportunidades ↗</a>
<a className="btn btn-plain" href={`mailto:${contato.email}`}>Enviar e-mail ↗</a>
</div>
<small>© 2026 Igor Ribeiro &nbsp; · &nbsp; <a target="_blank" rel="noopener noreferrer" href="https://github.com/igorribery">GitHub</a> &nbsp; · &nbsp; <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/igorrds113/">LinkedIn</a>
</small>
</footer>

      <PortfolioMotion />
    </>
  );
}
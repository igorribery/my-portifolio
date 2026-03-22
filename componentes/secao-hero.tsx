import { FaArrowRightLong } from 'react-icons/fa6';
import { MdOutlineMail } from 'react-icons/md';

export function SecaoHero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__conteudo">
        <p className="eyebrow">Desenvolvedor Full Stack</p>
        <h1>Igor Ribeiro</h1>
        <p className="hero__descricao">
          Especialista em front-end com React, Next.js e TypeScript, com experiência
          profissional no desenvolvimento de interfaces modernas, componentes reutilizáveis
          e integrações end-to-end.
        </p>
        <p className="hero__descricao">
          Também atuei profissionalmente com Node.js, Go, Kotlin, GraphQL e serviços AWS,
          participando da construção de aplicações completas, integrações entre serviços e
          entregas prontas para produção.
        </p>

        <div className="hero__acoes">
          <a className="botao botao--primario" href="#projeto">
            <span className="botao__icone" aria-hidden>
              <FaArrowRightLong />
            </span>
            Ver projeto CriptoInvest
          </a>
          <a className="botao botao--secundario" href="#contato">
            <span className="botao__icone" aria-hidden>
              <MdOutlineMail />
            </span>
            Entrar em contato
          </a>
        </div>
      </div>
    </section>
  );
}

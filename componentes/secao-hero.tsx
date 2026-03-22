import { FaArrowRightLong } from 'react-icons/fa6';
import { MdOutlineMail } from 'react-icons/md';
import { metricas } from '@/dados/portfolio';

export function SecaoHero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__conteudo">
        <p className="eyebrow">Desenvolvedor Full Stack</p>
        <h1>Igor Ribeiro</h1>
        <p className="hero__descricao">
          Desenvolvedor Full Stack especializado em React, Next.js, TypeScript e AWS.
          Construindo aplicações escaláveis com arquitetura moderna - frontend, APIs,
          banco de dados e infraestrutura em nuvem.
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

      <div className="painel-destaque">
        <p className="painel-destaque__titulo">Projeto em destaque</p>
        <ul className="grade-metricas">
          {metricas.map((metrica) => (
            <li key={metrica.legenda}>
              <strong>{metrica.valor}</strong>
              <span>{metrica.legenda}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

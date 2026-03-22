import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';
import { destaquesProjeto } from '@/dados/portfolio';

export function SecaoProjeto() {
  return (
    <section id="projeto" className="secao bloco-cartao">
      <div className="secao__cabecalho">
        <p className="eyebrow">Projeto em destaque</p>
        <h2>CriptoInvest - Aplicação full stack para mercado cripto</h2>
      </div>

      <div className="grade-duas-colunas">
        <p>
          Aplicação completa para acompanhar o mercado cripto: autenticação de usuários,
          registro de aportes e alertas automáticos de preço. Frontend Next.js hospedado no
          Amplify, API Node.js + Express no Elastic Beanstalk, PostgreSQL no RDS e rotina de
          alertas em Lambda + EventBridge + DynamoDB.
        </p>

        <ul className="lista-checks">
          {destaquesProjeto.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="projeto__links">
        <a
          href="https://main.d3uogzqxruse62.amplifyapp.com"
          target="_blank"
          rel="noreferrer"
          className="botao botao--primario botao--sm"
        >
          <span className="botao__icone" aria-hidden>
            <FaArrowUpRightFromSquare />
          </span>
          Ver aplicação
        </a>
        <a
          href="https://github.com/igorribery/criptoinvest"
          target="_blank"
          rel="noreferrer"
          className="botao botao--secundario botao--sm"
        >
          <span className="botao__icone" aria-hidden>
            <FaGithub />
          </span>
          Ver repositório
        </a>
      </div>
    </section>
  );
}

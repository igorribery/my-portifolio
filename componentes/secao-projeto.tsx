import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';
import { destaquesProjeto, destaquesTaskflow } from '@/dados/portfolio';

export function SecaoProjeto() {
  return (
    <section id="projeto" className="secao bloco-cartao">
      <div className="secao__cabecalho">
        <p className="eyebrow">Projeto em destaque</p>
        <h2>CriptoInvest - Aplicação full stack para o mercado cripto</h2>
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

      <div className="secao__cabecalho" style={{ marginTop: '36px' }}>
        <p className="eyebrow">Projeto recente</p>
        <h2>TaskFlow - Plataforma de produtividade</h2>
      </div>

      <div className="grade-duas-colunas">
        <p>
          Projeto em evolução para gestão de tarefas e fluxo de trabalho, estruturado em monorepo
          com frontend moderno e API robusta. A proposta do TaskFlow é fornecer base escalável
          para organização de tarefas, produtividade pessoal e colaboração entre equipes. Chatbot IA local com Ollama integrado ao sistema.
        </p>

        <ul className="lista-checks">
          {destaquesTaskflow.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="projeto__links">
        <a
          href="https://github.com/igorribery/taskflow"
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

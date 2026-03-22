import { etapasProcesso } from '@/dados/portfolio';

export function SecaoProcesso() {
  return (
    <section id="processo" className="secao bloco-cartao">
      <div className="secao__cabecalho">
        <p className="eyebrow">Processo</p>
        <h2>Arquitetura do CriptoInvest — da descoberta à produção</h2>
      </div>

      <div className="linha-do-tempo">
        {etapasProcesso.map((etapa, indice) => (
          <article key={etapa.titulo} className="etapa">
            <span>{String(indice + 1).padStart(2, '0')}</span>
            <div>
              <h3>{etapa.titulo}</h3>
              <p>{etapa.descricao}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

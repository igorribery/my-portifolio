import { experienciasProfissionais } from '@/dados/portfolio';

export function SecaoExperiencia() {
  return (
    <section id="experiencia" className="secao bloco-cartao">
      <div className="secao__cabecalho">
        <p className="eyebrow">Trajetória</p>
        <h2>Experiência profissional</h2>
      </div>

      <div className="experiencia-timeline">
        {experienciasProfissionais.map((experiencia) => (
          <article key={`${experiencia.empresa}-${experiencia.periodo}`} className="experiencia-card">
            <div className="experiencia-card__marcador" aria-hidden />

            <div className="experiencia-card__conteudo">
              <p className="experiencia-card__meta">
                {experiencia.periodo} <span>{experiencia.local}</span>
              </p>
              <h3>
                {experiencia.empresa} - {experiencia.cargo}
              </h3>
              <p className="experiencia-card__descricao">{experiencia.descricao}</p>

              <ul className="experiencia-card__lista">
                {experiencia.responsabilidades.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="tags tags--compactas">
                {experiencia.stacks.map((stack) => (
                  <span key={stack} className="tag">
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

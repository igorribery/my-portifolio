import Image from 'next/image';

/**
 * Public-facing presentation of Garimpex, a private pre-launch SaaS.
 * Only screenshots of the public marketing landing page are used here.
 * The example offers in the screenshots are illustrative, not live data.
 */
export function GarimpexFeature() {
  return (
    <article className="gpx-feature reveal" aria-labelledby="gpx-title">
      <div className="gpx-grid">
        <div className="gpx-copy">
          <div className="gpx-kicker">
            <span className="gpx-dot" aria-hidden="true" />
            PROJETO AUTORAL / SAAS
            <span className="gpx-badge">
              <span className="gpx-mini" aria-hidden="true" />
              Em desenvolvimento
            </span>
          </div>
          <h3 className="gpx-title" id="gpx-title">Garimpex<span>.</span></h3>
          <p className="gpx-headline">Inteligência para encontrar, filtrar e distribuir ofertas.</p>
          <p className="gpx-description">
            Plataforma SaaS de curadoria e automação de ofertas para afiliados.
            Centraliza oportunidades de marketplaces, organiza produtos por nichos
            e categorias, analisa histórico de preços e ajuda a gerenciar os
            envios para grupos e canais.
          </p>
          <ul className="gpx-points" aria-label="Funcionalidades em desenvolvimento">
            <li>Curadoria por nicho</li>
            <li>Classificação de produtos</li>
            <li>Histórico de preços</li>
            <li>Automação de envios</li>
            <li>Painel de gestão</li>
          </ul>
          <div className="gpx-footer">
            <span className="gpx-tech">Next.js · NestJS · PostgreSQL · Redis</span>
            <span className="gpx-private">Código privado · Pré-lançamento</span>
          </div>
        </div>

        <div className="gpx-visual gpx-visual-real">
          <div className="gpx-aurora" aria-hidden="true" />
          <div className="gpx-real-browser">
            <div className="gpx-real-top" aria-hidden="true">
              <span className="gpx-window-dots"><i /><i /><i /></span>
              <span>garimpex / apresentação</span>
              <span className="gpx-real-live">● CAPTURA REAL</span>
            </div>
            <Image
              className="gpx-real-shot"
              src="/images/garimpex-home.webp"
              alt="Landing page real do Garimpex, apresentando a automação e exemplos ilustrativos de ofertas"
              width={1080}
              height={774}
              sizes="(max-width: 760px) 90vw, (max-width: 1050px) 48vw, 560px"
              quality={80}
            />
          </div>
          <div className="gpx-float" aria-hidden="true">✦ &nbsp; INTERFACE REAL DO PROJETO</div>
        </div>
      </div>

      <div className="gpx-gallery-intro">
        <span>VISÃO DO PRODUTO</span>
        <strong>Capturas reais do site · Interface em desenvolvimento</strong>
      </div>
      <div className="gpx-real-gallery">
        <figure className="gpx-real-thumb">
          <div className="gpx-real-browser">
            <div className="gpx-real-top" aria-hidden="true">
              <span className="gpx-window-dots"><i /><i /><i /></span>
              <span>01 / CONTAS E NICHOS</span>
            </div>
            <Image
              src="/images/garimpex-configuracao.webp"
              alt="Captura real da explicação sobre conexões de marketplaces e filtros por nichos"
              width={1080}
              height={753}
              sizes="(max-width: 760px) 90vw, 550px"
              quality={80}
            />
          </div>
          <figcaption>Conexões e preferências de curadoria</figcaption>
        </figure>
        <figure className="gpx-real-thumb">
          <div className="gpx-real-browser">
            <div className="gpx-real-top" aria-hidden="true">
              <span className="gpx-window-dots"><i /><i /><i /></span>
              <span>02 / AUTOMAÇÃO</span>
            </div>
            <Image
              src="/images/garimpex-automacao.webp"
              alt="Captura real da explicação sobre ritmo e automação de envios do Garimpex"
              width={1080}
              height={766}
              sizes="(max-width: 760px) 90vw, 550px"
              quality={80}
            />
          </div>
          <figcaption>Ritmo e automação de ofertas</figcaption>
        </figure>
      </div>
    </article>
  );
}
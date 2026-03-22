import type { ReactNode } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md';
import { redesSociais, contato } from '@/dados/portfolio';

type ChaveIcone = 'linkedin' | 'github' | 'email';

const icones: Record<ChaveIcone, ReactNode> = {
  linkedin: <FaLinkedinIn size={22} aria-hidden />,
  github: <FaGithub size={22} aria-hidden />,
  email: <MdMailOutline size={22} aria-hidden />,
};

export function Rodape() {
  return (
    <footer id="contato" className="rodape">
      <div>
        <p className="eyebrow">Contato</p>
        <h2>Vamos conversar — aberto a novas oportunidades e projetos.</h2>
      </div>

      <div className="rodape__contato">
        <a href={`mailto:${contato.email}`} className="contato-item contato-item--com-icone">
          <span className="contato-item__icone">{icones.email}</span>
          {contato.email}
        </a>
      </div>

      <ul className="lista-redes lista-redes--rodape">
        {redesSociais.map((rede) => (
          <li key={rede.nome}>
            <a href={rede.url} target="_blank" rel="noreferrer" className="rede-link" aria-label={rede.nome}>
              <span className="rede-link__icone">{icones[rede.icone as ChaveIcone] ?? null}</span>
              <span className="rede-link__texto">{rede.nome}</span>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

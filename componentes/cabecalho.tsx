import { navegacao } from '@/dados/portfolio';

export function Cabecalho() {
  return (
    <header className="cabecalho">
      <nav aria-label="Navegação principal">
        <ul className="menu">
          {navegacao.map((item) => (
            <li key={item.alvo}>
              <a href={item.alvo}>{item.rotulo}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

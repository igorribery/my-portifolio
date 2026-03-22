import { Cabecalho } from '@/componentes/cabecalho';
import { Rodape } from '@/componentes/rodape';
import { SecaoHero } from '@/componentes/secao-hero';
import { SecaoProcesso } from '@/componentes/secao-processo';
import { SecaoProjeto } from '@/componentes/secao-projeto';
import { SecaoStack } from '@/componentes/secao-stack';

export default function Home() {
  return (
    <main className="pagina">
      <Cabecalho />
      <SecaoHero />
      <SecaoProjeto />
      <SecaoStack />
      <SecaoProcesso />
      <Rodape />
    </main>
  );
}

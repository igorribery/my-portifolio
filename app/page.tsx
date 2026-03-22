import { Cabecalho } from '@/componentes/cabecalho';
import { Rodape } from '@/componentes/rodape';
import { SecaoExperiencia } from '@/componentes/secao-experiencia';
import { SecaoHero } from '@/componentes/secao-hero';
import { SecaoProjeto } from '@/componentes/secao-projeto';
import { SecaoStack } from '@/componentes/secao-stack';

export default function Home() {
  return (
    <main className="pagina">
      <Cabecalho />
      <SecaoHero />
      <SecaoExperiencia />
      <SecaoProjeto />
      <SecaoStack />
      <Rodape />
    </main>
  );
}

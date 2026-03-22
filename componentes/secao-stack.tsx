import type { ReactNode } from 'react';
import { FaDatabase } from 'react-icons/fa';
import { HiOutlineBolt, HiOutlineCircleStack, HiOutlineCloud, HiOutlineKey } from 'react-icons/hi2';
import { LuContainer, LuHardDriveUpload, LuServerCog, LuWorkflow } from 'react-icons/lu';
import {
  SiCypress,
  SiDocker,
  SiExpress,
  SiGit,
  SiGo,
  SiGraphql,
  SiJsonwebtokens,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiSpring,
  SiStorybook,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { stackPorCategorias } from '@/dados/portfolio';

const iconesStack: Record<string, ReactNode> = {
  React: <SiReact aria-hidden />,
  'Next.js': <SiNextdotjs aria-hidden />,
  TypeScript: <SiTypescript aria-hidden />,
  Tailwind: <SiTailwindcss aria-hidden />,
  Storybook: <SiStorybook aria-hidden />,
  Cypress: <SiCypress aria-hidden />,
  'Node.js': <SiNodedotjs aria-hidden />,
  Express: <SiExpress aria-hidden />,
  Kotlin: <HiOutlineBolt aria-hidden />,
  Go: <SiGo aria-hidden />,
  Spring: <SiSpring aria-hidden />,
  GraphQL: <SiGraphql aria-hidden />,
  'APIs RESTful': <LuServerCog aria-hidden />,
  MongoDB: <SiMongodb aria-hidden />,
  PostgreSQL: <SiPostgresql aria-hidden />,
  Redis: <SiRedis aria-hidden />,
  CloudFront: <HiOutlineCloud aria-hidden />,
  Amplify: <LuHardDriveUpload aria-hidden />,
  'Elastic Beanstalk': <LuContainer aria-hidden />,
  EC2: <LuServerCog aria-hidden />,
  RDS: <FaDatabase aria-hidden />,
  Lambda: <HiOutlineBolt aria-hidden />,
  EventBridge: <LuWorkflow aria-hidden />,
  S3: <HiOutlineCloud aria-hidden />,
  SES: <HiOutlineKey aria-hidden />,
  DynamoDB: <HiOutlineCircleStack aria-hidden />,
  'Secrets Manager': <HiOutlineKey aria-hidden />,
  Docker: <SiDocker aria-hidden />,
  Git: <SiGit aria-hidden />,
  'OAuth 2.0': <HiOutlineKey aria-hidden />,
  JWT: <SiJsonwebtokens aria-hidden />,
};

export function SecaoStack() {
  return (
    <section id="stack" className="secao">
      <div className="secao__cabecalho">
        <p className="eyebrow">Habilidades e competências</p>
        <h2>Stack técnica - Frontend, Backend, Cloud e DevOps</h2>
      </div>

      <div className="stack-categorias">
        {stackPorCategorias.map((categoria) => (
          <div key={categoria.titulo} className="stack-categoria">
            <h3 className="stack-categoria__titulo">{categoria.titulo}</h3>
            <div className="tags">
              {categoria.itens.map((item) => (
                <span key={item} className="tag">
                  <span className="tag__icone">{iconesStack[item] ?? <HiOutlineCloud aria-hidden />}</span>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

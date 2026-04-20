export const navegacao = [
  { rotulo: 'Início', alvo: '#inicio' },
  { rotulo: 'Experiência', alvo: '#experiencia' },
  { rotulo: 'Projeto', alvo: '#projeto' },
  { rotulo: 'Stack', alvo: '#stack' },
  { rotulo: 'Contato', alvo: '#contato' },
];

export const experienciasProfissionais = [
  {
    empresa: 'Numih',
    cargo: 'Desenvolvedor Full Stack',
    periodo: '03/2023 - 03/2026',
    local: 'Uberlândia, MG • Remoto',
    descricao:
      'Atuação profissional em produtos web com foco em entregas end-to-end, integração entre serviços e evolução de arquitetura modular baseada em microsserviços para monorepo.',
    responsabilidades: [
      'Desenvolvimento de funcionalidades end-to-end em arquitetura modular baseada em microsserviços, posteriormente evoluindo para monorepo.',
      'Implementação de APIs utilizando Go, Node.js, Kotlin e GraphQL, incluindo regras de negócio e integração entre serviços.',
      'Utilização de Redis para comunicação entre módulos e mecanismos de cache.',
      'Desenvolvimento de interfaces web com React, Next.js, TypeScript e Tailwind, criando componentes reutilizáveis e responsivos.',
      'Integração com AWS S3 para gerenciamento e armazenamento de arquivos em módulo dedicado de uploads.',
      'Implementação de envio de e-mails transacionais utilizando AWS SES para confirmação de ações do usuário e notificações do sistema.',
      'Integração completa entre front-end e back-end, realizando deploy das alterações e acompanhando as entregas.',
      'Uso de Git para versionamento de código e atuação com metodologias ágeis.',
    ],
    stacks: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Go', 'Node.js', 'Kotlin', 'GraphQL', 'Redis', 'AWS S3', 'AWS SES', 'Git'],
  },
];

export const destaquesProjeto = [
  'Dashboard com top 10 criptomoedas via CoinGecko e acompanhamento de carteira.',
  'Autenticação completa: e-mail e senha, Google OAuth, recuperação de senha e perfil com avatar no S3.',
  'Alertas automáticos de preço, pontuais e periódicos, com Lambda, EventBridge e DynamoDB.',
  'Arquitetura escalável com Amplify, CloudFront, Elastic Beanstalk e RDS PostgreSQL.',
];

export const destaquesTaskflow = [
  'Chatbot de IA local integrado ao sistema, utilizando Ollama, capaz de responder dúvidas sobre o projeto e auxiliar no fluxo de uso da aplicação. Implementa RAG (Retrieval-Augmented Generation) para enriquecer respostas com base no próprio código-fonte e documentação do sistema.',
  'Monorepo full stack com frontend em Next.js + React + TypeScript e backend em NestJS.',
  'API RESTful com Prisma, PostgreSQL e Redis para cache e comunicação entre módulos.',
  'Arquitetura orientada a escalabilidade, separando aplicações backend e frontend no mesmo repositório.',
  'Base preparada para evolução de tarefas, fluxos e produtividade em equipes.',
];

export const stackPorCategorias = [
  {
    titulo: 'Frontend',
    itens: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Storybook', 'Cypress'],
  },
  {
    titulo: 'Backend e APIs',
    itens: ['Node.js', 'Express', 'Kotlin', 'Go', 'Spring', 'GraphQL', 'APIs RESTful'],
  },
  {
    titulo: 'Banco de Dados',
    itens: ['MongoDB', 'PostgreSQL', 'Redis'],
  },
  {
    titulo: 'Cloud e AWS',
    itens: [
      'CloudFront',
      'Amplify',
      'Elastic Beanstalk',
      'EC2',
      'RDS',
      'Lambda',
      'EventBridge',
      'S3',
      'SES',
      'DynamoDB',
      'Secrets Manager',
    ],
  },
  {
    titulo: 'DevOps e Ferramentas',
    itens: ['Docker', 'Git', 'OAuth 2.0', 'JWT'],
  },
];

export const redesSociais = [
  { nome: 'LinkedIn', url: 'https://www.linkedin.com/in/igorrds113/', icone: 'linkedin' },
  { nome: 'GitHub', url: 'https://github.com/igorribery', icone: 'github' },
];

export const contato = {
  email: 'igorrds1998@gmail.com',
  telefone: '(38) 9 9816-7744',
  linkedin: 'https://www.linkedin.com/in/igorrds113/',
  github: 'https://github.com/igorribery',
};

export const navegacao = [
  { rotulo: 'Início', alvo: '#inicio' },
  { rotulo: 'Projeto', alvo: '#projeto' },
  { rotulo: 'Stack', alvo: '#stack' },
  { rotulo: 'Processo', alvo: '#processo' },
  { rotulo: 'Contato', alvo: '#contato' },
];

export const metricas = [
  { valor: '100%', legenda: 'Arquitetura em produção na AWS' },
  { valor: 'Full Stack', legenda: 'Frontend Next.js + API Express + Lambda' },
  { valor: 'AWS', legenda: 'Amplify, CloudFront, Elastic Beanstalk, RDS, Lambda' },
];

export const destaquesProjeto = [
  'Dashboard com top 10 criptomoedas via CoinGecko e acompanhamento de carteira.',
  'Autenticação completa: e-mail/senha, Google OAuth, recuperação de senha e perfil com avatar no S3.',
  'Alertas automáticos de preço (TARGET_ONCE e PERIODIC) via Lambda + EventBridge + DynamoDB.',
  'Arquitetura serverless e escalável: Amplify, CloudFront, Elastic Beanstalk, RDS PostgreSQL.',
];

export const pilhaTecnologica = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind',
  'Kotlin',
  'Go',
  'Spring',
  'GraphQL',
  'APIs RESTful',
  'MongoDB',
  'PostgreSQL',
  'Docker',
  'Redis',
  'GIT',
  'Cypress',
  'Storybook',
  'Node.js',
  'Express',
  'OAuth 2.0',
  'JWT',
  'AWS CloudFront',
  'AWS Amplify',
  'Elastic Beanstalk',
  'EC2',
  'RDS',
  'Lambda',
  'EventBridge',
  'S3',
  'SES',
  'DynamoDB',
  'Secrets Manager',
];

// Stack organizada por categorias (estilo Sophie Pyxis)
export const stackPorCategorias = [
  {
    titulo: 'Frontend',
    itens: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Storybook', 'Cypress'],
  },
  {
    titulo: 'Backend & APIs',
    itens: ['Node.js', 'Express', 'Kotlin', 'Go', 'Spring', 'GraphQL', 'APIs RESTful'],
  },
  {
    titulo: 'Banco de Dados',
    itens: ['MongoDB', 'PostgreSQL', 'Redis'],
  },
  {
    titulo: 'Cloud & AWS',
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
    titulo: 'DevOps & Ferramentas',
    itens: ['Docker', 'GIT', 'OAuth 2.0', 'JWT'],
  },
];

export const etapasProcesso = [
  {
    titulo: 'Arquitetura',
    descricao:
      'Definição da stack em produção: Next.js no Amplify, API Express no Elastic Beanstalk, PostgreSQL no RDS e Lambda para alertas. CDN via CloudFront e integração com CoinGecko, Google OAuth, SES e S3.',
  },
  {
    titulo: 'Desenvolvimento',
    descricao:
      'Frontend com autenticação completa (e-mail/senha, OAuth), dashboard de criptoativos, lançamentos de carteira e sistema de alertas. API REST com endpoints de auth, portfolio e alertas.',
  },
  {
    titulo: 'Infraestrutura',
    descricao:
      'Deploy automatizado no Amplify, API no Beanstalk com Load Balancer, Lambda agendada via EventBridge para verificação de alertas, DynamoDB para estado/cooldown e Secrets Manager para credenciais.',
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

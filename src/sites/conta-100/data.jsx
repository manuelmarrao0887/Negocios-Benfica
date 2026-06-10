import {
  Calculator,
  ClipboardList,
  Users,
  Scale,
  FileText,
  ShieldCheck,
  Building2,
  Briefcase,
  UserRound,
  PiggyBank,
  Plane,
  Newspaper,
  BadgeCheck,
  Layers,
  HeartHandshake,
  TrendingUp,
} from 'lucide-react'

// ── Brand ────────────────────────────────────────────────────────────────────
export const slug = 'conta-100'

export const brand = {
  name: 'Conta 100%',
  full: 'Conta 100% — Contabilidade, Lda.',
  tagline: 'Cuidamos de si. Fazemos crescer o seu negócio.',
  intro:
    'Gabinete de contabilidade, auditoria e consultoria fiscal para empresas, PME, freelancers e particulares. Desde 2005, com Contabilista Certificado e deslocação ao cliente.',
  phoneDisplay: '217 789 402',
  phoneHref: 'tel:+351217789402',
  mobileDisplay: '937 022 373',
  whatsapp: 'https://wa.me/351937022373',
  email: 'geral@contacemporcento.pt',
  emailHref: 'mailto:geral@contacemporcento.pt',
  address: 'Rua Lucília Simões 1A, 1500-385 Lisboa (Benfica)',
  addressShort: 'Rua Lucília Simões 1A · Benfica, Lisboa',
  mapsQuery: 'Rua Lucília Simões 1A, 1500-385 Lisboa',
  hours: 'Seg–Sex · horário comercial',
  since: 2005,
  domain: 'contacemporcento.pt',
}

export const nav = [
  { label: 'Início', to: '' },
  { label: 'Serviços', to: 'servicos' },
  { label: 'Sobre', to: 'sobre' },
  { label: 'Contacto', to: 'contacto' },
]

// ── Highlights / trust strip ─────────────────────────────────────────────────
export const highlights = [
  { icon: BadgeCheck, title: '12+ anos', text: 'Experiência sólida, nacional e internacional, desde 2005.' },
  { icon: ShieldCheck, title: 'Contabilista Certificado', text: 'Responsabilização técnica perante a AT e a OCC.' },
  { icon: HeartHandshake, title: 'Deslocação ao cliente', text: 'Vamos ter consigo, onde a sua empresa precisar.' },
  { icon: Layers, title: 'Gama completa', text: 'Contabilidade, RH, fiscalidade, IRS e seguros.' },
]

// ── Services (6 — detailed) ──────────────────────────────────────────────────
export const services = [
  {
    icon: Calculator,
    title: 'Contabilidade Geral',
    desc:
      'Responsabilização como Contabilista Certificado, com rigor e transparência em todas as obrigações.',
    points: [
      'Constituição de sociedades',
      'Contabilidade geral e analítica',
      'Balancetes mensais',
      'Relatório de contas e informação financeira',
      'Reuniões de acompanhamento económico-financeiro',
    ],
  },
  {
    icon: ClipboardList,
    title: 'Outsourcing Administrativo',
    desc:
      'Libertamos a sua equipa da carga administrativa, com processos controlados e informação sempre atualizada.',
    points: [
      'Emissão e controlo de faturação',
      'Gestão de contas correntes (clientes/fornecedores)',
      'Compras, stocks e imobilizado',
      'Gestão de tesouraria',
      'Processamento de salários',
    ],
  },
  {
    icon: Users,
    title: 'Recursos Humanos',
    desc:
      'Gestão de pessoal em conformidade com a lei e a Segurança Social, do cadastro ao processamento mensal.',
    points: [
      'Cadastro de pessoal',
      'Processamento mensal de vencimentos e recibos',
      'Relatório Único',
      'Horários e mapa de férias',
      'Conformidade com a Segurança Social',
    ],
  },
  {
    icon: Scale,
    title: 'Consultoria Fiscal',
    desc:
      'Acompanhamento fiscal próximo, do cumprimento das obrigações ao planeamento que otimiza a sua carga fiscal.',
    points: [
      'IVA, IRC e IRS',
      'Modelo 22 e IES',
      'Apoio em inspeções fiscais',
      'Planeamento fiscal',
    ],
  },
  {
    icon: FileText,
    title: 'IRS',
    desc:
      'Apoio completo na sua declaração e na contabilidade familiar, com simulações que evitam surpresas.',
    points: [
      '1.ª e 2.ª fase de entrega',
      'Simulações de IRS',
      'Contabilidade familiar',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Gestão de Seguros',
    desc:
      'Aconselhamento e gestão dos seguros do seu negócio e da sua família, com cobertura ajustada às necessidades.',
    points: [
      'Automóvel e multirriscos',
      'Acidentes e responsabilidade civil',
      'Saúde e vida',
      'Crédito',
    ],
  },
]

// ── For whom ─────────────────────────────────────────────────────────────────
export const audience = [
  {
    icon: Building2,
    title: 'Empresas',
    text: 'Acompanhamento contabilístico e fiscal completo, com informação de gestão para decidir melhor.',
  },
  {
    icon: Briefcase,
    title: 'PME',
    text: 'Soluções à medida das pequenas e médias empresas, do arranque ao crescimento sustentado.',
  },
  {
    icon: UserRound,
    title: 'Freelancers',
    text: 'Recibos verdes e trabalhadores independentes, sem complicações com obrigações e prazos.',
  },
  {
    icon: PiggyBank,
    title: 'Particulares',
    text: 'IRS, contabilidade familiar e gestão de seguros, com aconselhamento de confiança.',
  },
]

// ── Differentiators ──────────────────────────────────────────────────────────
export const differentiators = [
  {
    icon: TrendingUp,
    title: '12+ anos de experiência',
    text: 'Um percurso sólido, com experiência nacional e internacional ao serviço dos nossos clientes.',
  },
  {
    icon: Users,
    title: 'Equipa dinâmica',
    text: 'Uma equipa próxima e disponível, que conhece o seu negócio e responde quando precisa.',
  },
  {
    icon: Plane,
    title: 'Deslocação ao cliente',
    text: 'Sediados em Benfica, mas vamos ter consigo — onde e quando for mais conveniente.',
  },
  {
    icon: Newspaper,
    title: 'Newsletter mensal',
    text: 'Informação fiscal e de gestão atualizada, todos os meses, para nunca ficar para trás.',
  },
]

// ── Values / approach ────────────────────────────────────────────────────────
export const values = [
  {
    icon: ShieldCheck,
    title: 'Confiança e rigor',
    text: 'Responsabilização como Contabilista Certificado e total transparência em cada número que apresentamos.',
  },
  {
    icon: HeartHandshake,
    title: 'Proximidade',
    text: 'Tratamos cada cliente pelo nome. Acompanhamos, explicamos e estamos presentes — também ao domicílio.',
  },
  {
    icon: TrendingUp,
    title: 'Foco no crescimento',
    text: 'Não cumprimos só obrigações: usamos a informação financeira para ajudar o seu negócio a crescer.',
  },
]

// ── Team ─────────────────────────────────────────────────────────────────────
export const team = [
  {
    name: 'Bruno Santos',
    role: 'Contabilista Certificado',
    initials: 'BS',
    bio: 'Responsável técnico do gabinete, com larga experiência em contabilidade, fiscalidade e consultoria a empresas e particulares.',
  },
  {
    name: 'Equipa Conta 100%',
    role: 'Contabilidade & Fiscalidade',
    initials: 'C',
    bio: 'Uma equipa dinâmica dedicada à contabilidade geral e analítica, processamento de salários e cumprimento de obrigações fiscais.',
  },
  {
    name: 'Apoio ao Cliente',
    role: 'Outsourcing & Recursos Humanos',
    initials: 'AC',
    bio: 'Gestão administrativa, faturação, contas correntes e recursos humanos, em articulação próxima com cada cliente.',
  },
]

export const stats = [
  { value: '12+', label: 'Anos de experiência' },
  { value: '2005', label: 'No mercado desde' },
  { value: '6', label: 'Áreas de serviço' },
  { value: 'CC', label: 'Contabilista Certificado' },
]

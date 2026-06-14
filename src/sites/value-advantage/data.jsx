import {
  Calculator,
  Users,
  ReceiptText,
  LineChart,
  Wallet,
  Building2,
  Home as HomeIcon,
  FileSpreadsheet,
  ShieldCheck,
  HeartHandshake,
  Eye,
  TrendingUp,
  Handshake,
  Target,
  Award,
  Star,
} from 'lucide-react'

// ── Brand ────────────────────────────────────────────────────────────────────
// Real business: Value Advantage — Contabilidade e Gestão, Lda (Avenidas Novas, Lisboa).
// Content confirmed from https://valueadvantage.pt (services, contacts, about, founders).
export const slug = 'value-advantage'

export const brand = {
  name: 'Value Advantage',
  full: 'Value Advantage — Contabilidade e Gestão, Lda',
  tagline: 'Acrescentamos valor ao seu negócio.',
  intro:
    'Empresa de contabilidade, consultoria e apoio à gestão nas Avenidas Novas, em Lisboa. Acompanhamos os nossos clientes no desenvolvimento dos seus projetos e negócios, com proximidade, rigor e total transparência.',
  // Real contact details (valueadvantage.pt). Mobile → nacional, also used for WhatsApp.
  phoneDisplay: '+351 914 571 429',
  phoneHref: 'tel:+351914571429',
  whatsapp: 'https://wa.me/351914571429',
  email: 'geral@valueadvantage.pt',
  emailHref: 'mailto:geral@valueadvantage.pt',
  address: 'Av. 5 de Outubro 151, 2.º E · 1050-053 Lisboa',
  addressShort: 'Av. 5 de Outubro 151, 2.º E · Lisboa',
  mapsQuery: 'Avenida 5 de Outubro 151, Lisboa',
  hours: 'Seg–Sex · horário comercial',
  zone: 'Avenidas Novas · Lisboa',
  rating: '4,9',
  reviews: '50',
  since: 2015,
  domain: 'valueadvantage.pt',
}

export const nav = [
  { label: 'Início', to: '' },
  { label: 'Serviços', to: 'servicos' },
  { label: 'Sobre', to: 'sobre' },
  { label: 'Contacto', to: 'contacto' },
]

// ── Highlights / trust strip ─────────────────────────────────────────────────
export const highlights = [
  { icon: Star, title: '4,9 em 50 avaliações', text: 'Classificação Google que reflete a confiança dos nossos clientes.' },
  { icon: Award, title: '20+ anos de experiência', text: 'Saber acumulado em contabilidade, gestão e fiscalidade.' },
  { icon: ShieldCheck, title: 'Contabilista Certificado', text: 'Responsabilização técnica perante a Autoridade Tributária.' },
  { icon: HeartHandshake, title: 'Acompanhamento dedicado', text: 'Uma relação próxima e permanente com cada cliente.' },
]

// ── Services (real — from valueadvantage.pt) ─────────────────────────────────
export const services = [
  {
    icon: Calculator,
    title: 'Contabilidade',
    desc:
      'Execução de toda a contabilidade geral e cumprimento das obrigações legais e fiscais, com rigor e transparência.',
    points: [
      'Contabilidade geral em programa certificado, segundo o SNC',
      'Emissão e disponibilização de mapas de análise',
      'Cumprimento de obrigações fiscais (IVA, IRC, IES)',
      'Assinatura na qualidade de Contabilista Certificado',
      'Reuniões de acompanhamento sempre que necessário',
    ],
  },
  {
    icon: Users,
    title: 'Gestão de Recursos Humanos',
    desc:
      'Processamento salarial e gestão de pessoal em conformidade com a legislação laboral e a Segurança Social.',
    points: [
      'Processamento mensal de vencimentos e recibos',
      'Cadastro e gestão de colaboradores',
      'Cumprimento das obrigações com a Segurança Social',
      'Apoio na contratação e na cessação de contratos',
    ],
  },
  {
    icon: ReceiptText,
    title: 'Gestão de Faturação',
    desc:
      'Tratamento completo do seu processo de faturação, da emissão das faturas ao controlo dos recebimentos.',
    points: [
      'Emissão mensal de faturas',
      'Emissão de recibos após confirmação de pagamento',
      'Controlo de contas correntes de clientes',
      'Articulação com extratos e movimentos bancários',
    ],
  },
  {
    icon: LineChart,
    title: 'Consultoria e Apoio à Gestão',
    desc:
      'Acompanhamento de gestão para decidir com confiança, do plano de negócio à análise de viabilidade.',
    points: [
      'Apoio à criação de empresas',
      'Elaboração de planos de negócio',
      'Estudos de viabilidade económica',
      'Apoio na tesouraria e na gestão',
    ],
  },
  {
    icon: Wallet,
    title: 'Gestão de Finanças Pessoais',
    desc:
      'Organização e acompanhamento das suas finanças pessoais e familiares, com aconselhamento de confiança.',
    points: [
      'Organização de receitas e despesas',
      'Apoio ao planeamento financeiro familiar',
      'Acompanhamento próximo e personalizado',
    ],
  },
  {
    icon: Building2,
    title: 'Constituição de Empresas',
    desc:
      'Damos os primeiros passos do seu negócio consigo, da constituição da sociedade ao arranque da atividade.',
    points: [
      'Constituição de sociedades',
      'Início de atividade junto da Autoridade Tributária',
      'Enquadramento fiscal e contabilístico inicial',
    ],
  },
  {
    icon: HomeIcon,
    title: 'Alojamento Local',
    desc:
      'Tratamos da legalização e do enquadramento do seu Alojamento Local, sem complicações.',
    points: [
      'Registo e legalização do Alojamento Local',
      'Enquadramento fiscal da atividade',
      'Acompanhamento das obrigações declarativas',
    ],
  },
  {
    icon: FileSpreadsheet,
    title: 'E-Fatura e IRS',
    desc:
      'Validação de documentos no E-Fatura e preenchimento da sua declaração de IRS, com simulação prévia.',
    points: [
      'Validação de documentos no portal E-Fatura',
      'Preenchimento e entrega do IRS',
      'Simulação para evitar surpresas',
    ],
  },
]

// ── For whom ─────────────────────────────────────────────────────────────────
export const audience = [
  {
    icon: Building2,
    title: 'Empresas & PME',
    text: 'Contabilidade, fiscalidade e informação de gestão para decidir melhor e crescer de forma sustentada.',
  },
  {
    icon: TrendingUp,
    title: 'Empreendedores',
    text: 'Da constituição da empresa ao arranque da atividade, ao seu lado em cada etapa.',
  },
  {
    icon: HomeIcon,
    title: 'Alojamento Local',
    text: 'Legalização e enquadramento fiscal do seu AL, com acompanhamento das obrigações.',
  },
  {
    icon: Wallet,
    title: 'Particulares',
    text: 'IRS, E-Fatura e gestão de finanças pessoais, com aconselhamento de confiança.',
  },
]

// ── Values / approach ────────────────────────────────────────────────────────
export const values = [
  {
    icon: HeartHandshake,
    title: 'Proximidade',
    text: 'Um acompanhamento dedicado e permanente que nos permite conhecer a fundo a realidade do seu negócio.',
  },
  {
    icon: Eye,
    title: 'Transparência',
    text: 'Atuamos com profissionalismo e total clareza em cada número e em cada decisão que apoiamos.',
  },
  {
    icon: Target,
    title: 'Foco no valor',
    text: 'Não cumprimos apenas obrigações: transformamos informação em decisões que acrescentam valor.',
  },
]

// ── Approach / how we work ───────────────────────────────────────────────────
export const approach = [
  {
    step: '01',
    title: 'Conhecer o seu negócio',
    text: 'Começamos por compreender a sua realidade, os seus objetivos e as suas necessidades específicas.',
  },
  {
    step: '02',
    title: 'Organizar e cumprir',
    text: 'Tratamos da contabilidade e de todas as obrigações fiscais, com rigor e nos prazos certos.',
  },
  {
    step: '03',
    title: 'Informar para decidir',
    text: 'Disponibilizamos mapas e indicadores que tornam a informação financeira clara e útil.',
  },
  {
    step: '04',
    title: 'Acompanhar e melhorar',
    text: 'Estamos sempre presentes, com propostas de melhoria contínua dos seus processos.',
  },
]

// ── Team (real — founders/collaborators) ─────────────────────────────────────
export const team = [
  {
    name: 'Eva Barbosa',
    role: 'Sócia-Gerente · Contabilista',
    initials: 'EB',
    bio: 'Licenciada em Contabilidade e Gestão Financeira pelo ISCAP. Mais de 20 anos de experiência em contabilidade, controlo de gestão, fiscalidade e sistemas de qualidade, em sectores como engenharia, imobiliário, construção e produção vinícola.',
  },
  {
    name: 'Marta Boavida',
    role: 'Contabilista Certificada',
    initials: 'MB',
    bio: 'Licenciada em Contabilidade e Administração pelo ISCAL. Assegura a execução da contabilidade e o cumprimento das obrigações fiscais dos clientes, com rigor e proximidade.',
  },
  {
    name: 'Equipa Value Advantage',
    role: 'Consultores & Colaboradores',
    initials: 'VA',
    bio: 'Uma equipa de colaboradores e consultores que acompanha cada cliente de perto, do apoio administrativo à consultoria de gestão.',
  },
]

export const stats = [
  { value: '20+', label: 'Anos de experiência' },
  { value: '4,9', label: 'Avaliação Google' },
  { value: '8', label: 'Áreas de serviço' },
  { value: 'CC', label: 'Contabilista Certificado' },
]

// Real differentiators distilled from the company's own positioning.
export const trust = [
  {
    icon: Star,
    title: '4,9 estrelas no Google',
    text: 'Uma classificação de 4,9 em 50 avaliações, construída cliente a cliente.',
  },
  {
    icon: Handshake,
    title: 'Relação de confiança',
    text: 'Tratamos cada cliente pelo nome, com um acompanhamento próximo e permanente.',
  },
  {
    icon: ShieldCheck,
    title: 'Rigor técnico',
    text: 'Responsabilização como Contabilista Certificado perante a Autoridade Tributária.',
  },
]

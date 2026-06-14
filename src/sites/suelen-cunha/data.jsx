import {
  BadgeCheck,
  Stamp,
  Heart,
  Scale,
  FileCheck2,
  Globe2,
  Plane,
  ScrollText,
  Users,
  ShieldCheck,
  HandHeart,
  Award,
  Languages,
  GraduationCap,
  Building2,
} from 'lucide-react'

// ── Brand ────────────────────────────────────────────────────────────────────
// All facts below are sourced from the live site advogadasuelencunha.com and
// from public professional records (Escavador). No phones, emails, names or
// testimonials are invented.
export const slug = 'suelen-cunha'

export const brand = {
  name: 'Suelen Cunha',
  full: 'Advogada Suelen Cunha',
  signature: 'Advocacia Internacional',
  tagline: 'A sua ponte segura para Portugal.',
  intro:
    'Advocacia internacional especializada em Nacionalidade Portuguesa e Direito Migratório. Um acompanhamento próximo e humano que transforma processos burocráticos em jornadas seguras e transparentes — entre Portugal e o seu país de origem.',
  // Contactos reais (site + WhatsApp oficial)
  phoneDisplay: '+351 916 611 293',
  phoneHref: 'tel:+351916611293',
  whatsapp: 'https://wa.me/351916611293',
  landlineDisplay: '+351 211 914 549',
  landlineHref: 'tel:+351211914549',
  email: 'juridico@advogadasuelencunha.com',
  emailHref: 'mailto:juridico@advogadasuelencunha.com',
  address: 'Campo Pequeno 2, Sala 12C · 1000-078 Lisboa',
  addressShort: 'Campo Pequeno 2, 12C · Lisboa',
  mapsQuery: 'Campo Pequeno 2, Lisboa',
  // Horário não publicado no site — apresentamos por marcação, sem inventar horas.
  hours: 'Atendimento por marcação',
  hoursNote: 'Reuniões presenciais no escritório em Lisboa ou online, mediante marcação.',
  rating: '5,0',
  reviews: '81',
  since: 2007, // 18+ anos de atuação (site) → início aproximado da carreira
}

export const nav = [
  { label: 'Início', to: '' },
  { label: 'Áreas de Prática', to: 'areas' },
  { label: 'Sobre', to: 'sobre' },
  { label: 'Contacto', to: 'contacto' },
]

// ── Trust strip / highlights (do site: "Por que nos escolher?") ──────────────
export const highlights = [
  {
    icon: HandHeart,
    title: 'Atendimento humano',
    text: 'Cada caso é único. O seu processo é tratado com atenção individualizada e humanizada.',
  },
  {
    icon: Building2,
    title: 'Presença em Portugal',
    text: 'Escritório próprio em Lisboa para tratar dos trâmites diretamente com conservatórias e tribunais.',
  },
  {
    icon: Award,
    title: 'Experiência comprovada',
    text: 'Mais de 18 anos de atuação e milhares de processos concluídos com sucesso.',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança jurídica',
    text: 'Transparência total e conformidade com a lei em cada etapa do processo, sem surpresas.',
  },
]

// ── Áreas de Prática (confirmadas e expandidas a partir do site real) ─────────
export const areas = [
  {
    icon: BadgeCheck,
    title: 'Nacionalidade Portuguesa',
    desc: 'Assessoria completa para netos, filhos e cônjuges de portugueses. Análise documental rigorosa para garantir o sucesso do seu pedido.',
    points: ['Netos e filhos de portugueses', 'Nacionalidade por casamento', 'Análise e instrução documental'],
  },
  {
    icon: Plane,
    title: 'Vistos para Portugal',
    desc: 'Orientação estratégica para Vistos D7, D2 e D8 (Nómadas Digitais) e Reagrupamento Familiar. Planeie a sua mudança com segurança.',
    points: ['Visto D7 (rendimentos próprios)', 'Visto D2 (empreendedores)', 'Visto D8 (nómadas digitais)'],
  },
  {
    icon: Heart,
    title: 'Casamento e Divórcio',
    desc: 'Processos de casamento e divórcio em Portugal, assegurando que os seus direitos civis são respeitados em ambos os países.',
    points: ['Casamento em Portugal', 'Divórcio internacional', 'Direitos civis transfronteiriços'],
  },
  {
    icon: Scale,
    title: 'Revisão de Sentença Estrangeira',
    desc: 'Homologação e revisão de sentenças estrangeiras para que produzam efeitos legais no território português.',
    points: ['Homologação de sentenças', 'Revisão e confirmação', 'Eficácia legal em Portugal'],
  },
  {
    icon: FileCheck2,
    title: 'Transcrição de Casamento',
    desc: 'Averbação de casamentos celebrados no estrangeiro, mantendo o seu estado civil atualizado perante as autoridades portuguesas.',
    points: ['Averbação de casamento', 'Atualização de estado civil', 'Registo nas conservatórias'],
  },
  {
    icon: Users,
    title: 'Reagrupamento Familiar',
    desc: 'Acompanhamento de pedidos de reagrupamento familiar para reunir a sua família em Portugal com segurança jurídica.',
    points: ['Reunião da família', 'Cônjuge e filhos', 'Apoio em todo o processo'],
  },
  {
    icon: Globe2,
    title: 'Direito Migratório',
    desc: 'Atuação estratégica e focada nas necessidades dos cidadãos estrangeiros em Portugal, do planeamento à regularização.',
    points: ['Regularização', 'Residência', 'Planeamento da mudança'],
  },
  {
    icon: ScrollText,
    title: 'Consultoria Jurídica Internacional',
    desc: 'Aconselhamento jurídico para conectar histórias entre Portugal e os outros países, com ética e foco em resultados.',
    points: ['Análise de cada caso', 'Estratégia personalizada', 'Acompanhamento próximo'],
  },
]

// ── Como trabalho / abordagem ────────────────────────────────────────────────
export const approach = [
  {
    icon: Languages,
    step: '01',
    title: 'Escuta e diagnóstico',
    text: 'Começamos por ouvir a sua história. Analiso o seu caso em detalhe e explico, com clareza, o caminho possível.',
  },
  {
    icon: ScrollText,
    step: '02',
    title: 'Estratégia e documentos',
    text: 'Defino uma estratégia personalizada e faço uma análise documental rigorosa, para evitar surpresas e atrasos.',
  },
  {
    icon: Stamp,
    step: '03',
    title: 'Trâmites em Portugal',
    text: 'Trato dos trâmites diretamente com conservatórias, tribunais e órgãos públicos, com a presença local que o seu caso exige.',
  },
  {
    icon: ShieldCheck,
    step: '04',
    title: 'Acompanhamento até ao fim',
    text: 'Acompanho-o em cada etapa, com transparência total, até à conclusão segura do seu processo.',
  },
]

// ── Sobre a advogada (factos reais — site + registos públicos) ───────────────
export const credentials = [
  { icon: Scale, label: 'Advogada em Portugal e no Brasil' },
  { icon: GraduationCap, label: 'Mestrado em Ciências Jurídico-Internacionais' },
  { icon: GraduationCap, label: 'Doutoranda em Ciências Jurídico-Civis (FDUL)' },
  { icon: Languages, label: 'Nacionalidades brasileira, portuguesa e italiana' },
]

// Pontos biográficos verificáveis (Escavador / Faculdade de Direito de Lisboa).
export const bio = [
  'Natural de Belo Horizonte (Minas Gerais, Brasil), Suelen Cunha é advogada em Portugal e no Brasil, com atuação também na União Europeia.',
  'Licenciou-se em Direito pela Pontifícia Universidade Católica de Minas Gerais, é mestre em Ciências Jurídico-Internacionais e doutoranda em Ciências Jurídico-Civis pela Faculdade de Direito da Universidade de Lisboa.',
  'Foi professora na Pontifícia Universidade Católica de Minas Gerais e na Faculdade Arnaldo Janssen, experiência que reforça o rigor técnico que dedica a cada processo.',
]

// ── Estatísticas (factos do site) ────────────────────────────────────────────
export const stats = [
  { value: '18+', label: 'Anos de atuação' },
  { value: '5.000+', label: 'Clientes acompanhados' },
  { value: '2', label: 'Jurisdições (PT · BR)' },
  { value: '5,0★', label: '81 avaliações' },
]

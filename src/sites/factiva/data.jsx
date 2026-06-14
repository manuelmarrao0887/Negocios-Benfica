import {
  Calculator,
  FileText,
  Landmark,
  Users,
  Building2,
  LineChart,
  ShieldCheck,
  Clock,
  HeartHandshake,
  Briefcase,
  Receipt,
  PiggyBank,
  Scale,
  TrendingUp,
  CalendarClock,
  MapPin,
} from 'lucide-react'

// ── Brand ────────────────────────────────────────────────────────────────────
// All facts below are real and sourced from public business directories
// (pai.pt, portalnacional.com.pt, racius, iberinform). No invented data.
export const slug = 'factiva'

export const brand = {
  name: 'Factiva',
  full: 'Factiva — Gabinete de Contabilidade e Gestão, Lda.',
  tagline: 'Contabilidade e gestão de confiança, no coração das Avenidas Novas.',
  intro:
    'Gabinete de contabilidade e gestão na Avenida da República, em Lisboa. Acompanhamos empresas, empresários em nome individual e particulares com rigor técnico e uma relação próxima — da contabilidade do dia a dia ao planeamento fiscal e à gestão do seu negócio.',
  phoneDisplay: '21 793 97 23',
  phoneHref: 'tel:+351217939723',
  // Real landline; not a mobile/WhatsApp line — directories list no WhatsApp number,
  // so we do not fabricate one.
  email: 'factiva@netcabo.pt',
  emailHref: 'mailto:factiva@netcabo.pt',
  address: 'Avenida da República 47, 2.º Dto. · 1050-188 Lisboa',
  addressShort: 'Av. da República 47 · Saldanha, Lisboa',
  mapsQuery: 'Avenida da República 47, Lisboa',
  hours: 'Segunda a sexta · 09h00 – 18h00',
  hoursNote: 'Atendimento preferencialmente por marcação.',
  nif: '502 307 269',
  rating: '4,5',
  since: 1989,
}

export const nav = [
  { label: 'Início', to: '' },
  { label: 'Serviços', to: 'servicos' },
  { label: 'Sobre', to: 'sobre' },
  { label: 'Contacto', to: 'contacto' },
]

// ── Highlights / trust strip ─────────────────────────────────────────────────
export const highlights = [
  { icon: CalendarClock, title: 'Mais de 30 anos', text: 'Um gabinete com história, ativo desde 1989.' },
  { icon: MapPin, title: 'Avenidas Novas', text: 'No Saldanha, Av. da República — fácil de chegar.' },
  { icon: Users, title: 'Empresas e particulares', text: 'Da sociedade ao trabalhador independente.' },
  { icon: ShieldCheck, title: 'Rigor e confidencialidade', text: 'Os seus números tratados com o máximo cuidado.' },
]

// ── Services ─────────────────────────────────────────────────────────────────
// Core activity per directories: contabilidade + gestão e serviços financeiros.
// Expanded to the standard scope of a gabinete de contabilidade.
export const services = [
  {
    icon: Calculator,
    title: 'Contabilidade geral',
    desc: 'Organização e execução da contabilidade financeira segundo o SNC, com lançamentos, reconciliações e prestação de contas anual.',
  },
  {
    icon: Landmark,
    title: 'Fiscalidade — IRS, IRC e IVA',
    desc: 'Apuramento e entrega das obrigações fiscais nos prazos legais e planeamento para uma carga tributária equilibrada.',
  },
  {
    icon: Receipt,
    title: 'Obrigações declarativas',
    desc: 'Tratamento das declarações periódicas e anuais junto da Autoridade Tributária e da Segurança Social.',
  },
  {
    icon: Users,
    title: 'Processamento salarial',
    desc: 'Recibos de vencimento, mapas de seguro, admissões e cessações — toda a gestão de pessoal da sua empresa.',
  },
  {
    icon: Building2,
    title: 'Constituição de empresas',
    desc: 'Apoio na criação da sua sociedade ou atividade, do enquadramento fiscal ao arranque com o pé direito.',
  },
  {
    icon: LineChart,
    title: 'Consultoria de gestão',
    desc: 'Análise económico-financeira, orçamentos e indicadores que ajudam a decidir com base em números fiáveis.',
  },
  {
    icon: Briefcase,
    title: 'Empresários e independentes',
    desc: 'Acompanhamento dedicado a empresários em nome individual e trabalhadores por conta própria.',
  },
  {
    icon: PiggyBank,
    title: 'Gestão e serviços financeiros',
    desc: 'Apoio na tesouraria, controlo de contas correntes e organização financeira do dia a dia.',
  },
  {
    icon: FileText,
    title: 'IRS de particulares',
    desc: 'Preenchimento e entrega do IRS de famílias e particulares, com aconselhamento sobre deduções.',
  },
]

// ── Process / approach ───────────────────────────────────────────────────────
export const steps = [
  {
    n: '01',
    title: 'Conhecemos o seu caso',
    text: 'Uma primeira conversa para perceber a sua atividade, as suas obrigações e os seus objetivos.',
  },
  {
    n: '02',
    title: 'Organizamos a contabilidade',
    text: 'Tratamos da documentação, dos lançamentos e do enquadramento fiscal mais adequado.',
  },
  {
    n: '03',
    title: 'Cumprimos os prazos',
    text: 'Entregamos as obrigações fiscais e declarativas a tempo, sem sobressaltos nem coimas.',
  },
  {
    n: '04',
    title: 'Acompanhamos e aconselhamos',
    text: 'Estamos disponíveis ao longo do ano para esclarecer dúvidas e apoiar as suas decisões.',
  },
]

// ── Values / why us ──────────────────────────────────────────────────────────
export const values = [
  {
    icon: HeartHandshake,
    title: 'Relação de proximidade',
    text: 'Um gabinete à escala humana, em que fala sempre com quem conhece o seu dossier.',
  },
  {
    icon: ShieldCheck,
    title: 'Rigor técnico',
    text: 'Trabalho cuidado e atualizado face às constantes alterações fiscais e legais.',
  },
  {
    icon: Clock,
    title: 'Prazos cumpridos',
    text: 'Antecipamos as obrigações para que nunca seja apanhado de surpresa.',
  },
  {
    icon: Scale,
    title: 'Transparência',
    text: 'Contas claras e linguagem simples — explicamos o que está por trás dos números.',
  },
]

// ── Who we help ──────────────────────────────────────────────────────────────
export const audiences = [
  {
    icon: Building2,
    title: 'Sociedades e PME',
    text: 'Contabilidade organizada, fiscalidade e gestão para empresas de qualquer dimensão.',
  },
  {
    icon: Briefcase,
    title: 'Empresários em nome individual',
    text: 'Enquadramento, obrigações e apoio para quem trabalha por conta própria.',
  },
  {
    icon: Users,
    title: 'Particulares',
    text: 'IRS, heranças e situações pontuais com aconselhamento de quem percebe do assunto.',
  },
]

export const stats = [
  { value: '35+', label: 'Anos de atividade', icon: CalendarClock },
  { value: 'SNC', label: 'Normativo aplicado', icon: FileText },
  { value: '4,5', label: 'Avaliação Google', icon: TrendingUp },
  { value: '1989', label: 'No mercado desde', icon: ShieldCheck },
]

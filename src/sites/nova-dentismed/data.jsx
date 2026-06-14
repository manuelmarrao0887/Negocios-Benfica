import {
  Stethoscope,
  Sparkles,
  Smile,
  Brackets,
  Bone,
  Layers,
  Activity,
  ShieldPlus,
  Baby,
  Wind,
  Star,
  Clock,
  CalendarCheck,
  HeartHandshake,
  BadgeCheck,
  Microscope,
  Users,
  MapPin,
  ScanFace,
} from 'lucide-react'

// ── Brand ────────────────────────────────────────────────────────────────────
// Real content sourced from novadentismed.com (homepage, /contatos, /centro-implantologia)
// and the clinic logo (wordmark: "Nova Dentismed — Clínica Médico Dentária — Dra. Ana Paula Atanásio").
export const slug = 'nova-dentismed'

export const brand = {
  name: 'Nova Dentismed',
  full: 'Nova Dentismed — Clínica Médico-Dentária',
  director: 'Dra. Ana Paula Atanásio',
  tagline: 'O seu sorriso em mãos especializadas.',
  intro:
    'Clínica médico-dentária no Campo Pequeno, em Lisboa, com mais de 20 anos ao serviço da saúde oral. Equipas especializadas em todas as áreas da medicina dentária, num só espaço.',
  // Confirmed on novadentismed.com/contatos (Campo Pequeno)
  phoneDisplay: '217 970 483',
  phoneHref: 'tel:+351217970483',
  phoneAltDisplay: '217 950 155',
  phoneAltHref: 'tel:+351217950155',
  mobileDisplay: '961 352 525',
  whatsapp: 'https://wa.me/351961352525',
  email: 'campopequeno@novadentismed.com',
  emailHref: 'mailto:campopequeno@novadentismed.com',
  address: 'Av. da República 56, 4.º Esq. · 1050-196 Lisboa',
  addressShort: 'Av. da República 56, 4.º Esq. · Campo Pequeno',
  mapsQuery: 'Avenida da República 56, Lisboa',
  hours: '2.ª a 6.ª · 9h00 – 19h00 | Sábado · 9h00 – 18h00',
  hoursWeek: '2.ª a 6.ª · 9h00 – 19h00',
  hoursSat: 'Sábado · 9h00 – 18h00',
  since: 'há mais de 20 anos',
  // Real Google rating supplied by client brief
  rating: '4,7',
  reviews: '77',
}

export const nav = [
  { label: 'Início', to: '' },
  { label: 'Tratamentos', to: 'tratamentos' },
  { label: 'Sobre', to: 'sobre' },
  { label: 'Contacto', to: 'contacto' },
]

// ── Highlights / trust strip ─────────────────────────────────────────────────
export const highlights = [
  { icon: BadgeCheck, title: '20+ anos', text: 'Mais de duas décadas ao serviço da saúde oral em Lisboa.' },
  { icon: Layers, title: 'Todas as especialidades', text: 'Da implantologia à ortodontia, num só espaço.' },
  { icon: MapPin, title: 'Campo Pequeno', text: 'No centro de Lisboa, junto à Av. da República.' },
  { icon: CalendarCheck, title: 'Aberto ao sábado', text: 'Marcações de 2.ª a sábado, para se ajustar a si.' },
]

// ── Treatments (real areas listed on novadentismed.com) ──────────────────────
export const treatments = [
  {
    icon: Stethoscope,
    title: 'Medicina Dentária Geral',
    desc:
      'Consultas de avaliação, diagnóstico e tratamento dentário de rotina, para cuidar do seu sorriso ao longo da vida.',
    points: ['Consulta de avaliação', 'Destartarização', 'Tratamento de cáries', 'Acompanhamento regular'],
  },
  {
    icon: Bone,
    title: 'Implantologia',
    desc:
      'Centro de Implantologia com soluções fixas para repor dentes em falta — implante unitário, pontes, reabilitação total e carga imediata.',
    points: ['Implante unitário', 'Pontes sobre implantes', 'Reabilitação total', 'Carga imediata'],
  },
  {
    icon: Brackets,
    title: 'Ortodontia',
    desc:
      'Correção do alinhamento dos dentes com aparelho fixo ou ortodontia invisível, para adultos e crianças.',
    points: ['Ortodontia invisível', 'Aparelho fixo', 'Avaliação ortodôntica', 'Crianças e adultos'],
  },
  {
    icon: Sparkles,
    title: 'Estética Dentária e Branqueamento',
    desc:
      'Devolvemos brilho e harmonia ao seu sorriso, com branqueamento e tratamentos estéticos personalizados.',
    points: ['Branqueamento dentário', 'Facetas estéticas', 'Reabilitação estética', 'Harmonia do sorriso'],
  },
  {
    icon: Layers,
    title: 'Próteses Dentárias',
    desc:
      'Próteses fixas e removíveis desenhadas à medida, para repor função e estética com conforto.',
    points: ['Prótese fixa', 'Prótese removível', 'Reabilitação oral', 'Ajuste personalizado'],
  },
  {
    icon: Activity,
    title: 'Endodontia',
    desc:
      'Tratamento de canais radiculares para tratar a dor e preservar o dente natural sempre que possível.',
    points: ['Desvitalização', 'Tratamento de canais', 'Alívio da dor', 'Preservação do dente'],
  },
  {
    icon: ShieldPlus,
    title: 'Periodontologia',
    desc:
      'Prevenção e tratamento das doenças das gengivas e dos tecidos de suporte dos dentes.',
    points: ['Tratamento de gengivas', 'Doença periodontal', 'Limpeza profunda', 'Manutenção'],
  },
  {
    icon: Baby,
    title: 'Odontopediatria',
    desc:
      'Cuidados dentários dedicados às crianças, num ambiente tranquilo que cria hábitos saudáveis desde cedo.',
    points: ['Primeira consulta', 'Prevenção de cáries', 'Selantes', 'Acompanhamento infantil'],
  },
  {
    icon: Wind,
    title: 'Higiene Oral',
    desc:
      'Limpezas profissionais e aconselhamento de higiene para manter dentes e gengivas saudáveis.',
    points: ['Destartarização', 'Polimento', 'Aconselhamento', 'Prevenção'],
  },
]

// ── Why us ───────────────────────────────────────────────────────────────────
export const why = [
  {
    icon: Microscope,
    title: 'Equipas especializadas',
    text: 'Profissionais dedicados a cada área da medicina dentária, a trabalhar em conjunto pelo seu sorriso.',
  },
  {
    icon: HeartHandshake,
    title: 'Atendimento próximo',
    text: 'Ouvimos cada caso, explicamos as opções e definimos consigo o melhor plano de tratamento.',
  },
  {
    icon: ScanFace,
    title: 'Plano à sua medida',
    text: 'Diagnóstico cuidado e um plano personalizado, do primeiro contacto ao acompanhamento.',
  },
  {
    icon: Smile,
    title: 'Sorrisos para toda a vida',
    text: 'Da odontopediatria à reabilitação, cuidamos de todas as idades e fases da vida.',
  },
]

// ── Stats ────────────────────────────────────────────────────────────────────
export const stats = [
  { value: '20+', label: 'Anos de experiência' },
  { value: '9', label: 'Áreas de tratamento' },
  { value: '4,7★', label: 'Avaliação Google' },
  { value: 'Campo Pequeno', label: 'No centro de Lisboa' },
]

// ── Care journey (process) ───────────────────────────────────────────────────
export const journey = [
  { step: '01', title: 'Marcação', text: 'Contacte-nos por telefone, WhatsApp ou formulário e escolha o horário que lhe der mais jeito.' },
  { step: '02', title: 'Avaliação', text: 'Fazemos um diagnóstico cuidado e explicamos, sem pressas, todas as opções disponíveis.' },
  { step: '03', title: 'Plano de tratamento', text: 'Definimos consigo um plano personalizado, com prioridades e etapas claras.' },
  { step: '04', title: 'Acompanhamento', text: 'Tratamos e acompanhamos a evolução do seu sorriso ao longo do tempo.' },
]

export { Star, Clock, Users, Stethoscope }

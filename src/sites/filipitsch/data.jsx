import {
  Activity,
  Bone,
  Dumbbell,
  Hand,
  Leaf,
  Salad,
  Flower2,
  Baby,
  Sparkles,
  Speech,
  HeartPulse,
  Home as HomeIcon,
  Clock,
  Users,
  Stethoscope,
} from 'lucide-react'

// ── Brand ────────────────────────────────────────────────────────────────────
export const slug = 'filipitsch'

export const brand = {
  name: 'Filipitsch',
  full: 'Filipitsch — Terapia Activa',
  tagline: 'Profissionais de saúde ao seu inteiro dispor.',
  intro:
    'Clínica multidisciplinar em Benfica que reúne fisioterapia, osteopatia, naturopatia, nutrição e muito mais — numa abordagem integrativa e preventiva da saúde, para todas as idades.',
  phoneDisplay: '+351 966 466 146',
  phoneHref: 'tel:+351966466146',
  whatsapp: 'https://wa.me/351966466146',
  address: 'Calçada do Tojal 28A · Benfica, Lisboa',
  mapsQuery: 'Calçada do Tojal 28A, 1500 Lisboa',
  hours: 'Todos os dias · 08h00 – 22h00',
  since: 2017,
}

export const nav = [
  { label: 'Início', to: '' },
  { label: 'Serviços', to: 'servicos' },
  { label: 'Sobre', to: 'sobre' },
  { label: 'Contacto', to: 'contacto' },
]

// ── Highlights / trust strip ─────────────────────────────────────────────────
export const highlights = [
  { icon: Users, title: 'Todas as idades', text: 'Do bebé ao idoso, cuidados para toda a família.' },
  { icon: Clock, title: 'Aberto todos os dias', text: 'Disponibilidade alargada, sete dias por semana.' },
  { icon: HomeIcon, title: 'Ao domicílio', text: 'Sessões em sua casa, quando precisar.' },
  { icon: Leaf, title: 'Abordagem integrativa', text: 'Tratamento natural, preventivo e personalizado.' },
]

// ── Services ─────────────────────────────────────────────────────────────────
export const services = [
  {
    icon: Activity,
    title: 'Fisioterapia',
    desc: 'Reabilitação e recuperação funcional — do desporto de alta competição à geriatria e pediatria.',
  },
  {
    icon: Bone,
    title: 'Osteopatia',
    desc: 'Osteopatia estrutural, visceral e sacrocraniana, incluindo osteopatia pediátrica.',
  },
  {
    icon: Dumbbell,
    title: 'Terapia Manual & Desportiva',
    desc: 'Técnicas manuais e acompanhamento desportivo para prevenir lesões e melhorar a mobilidade.',
  },
  {
    icon: Hand,
    title: 'Massagens',
    desc: 'Massagem terapêutica e de relaxamento, adaptada às necessidades de cada pessoa.',
  },
  {
    icon: Leaf,
    title: 'Naturopatia',
    desc: 'Prevenção e tratamento através da nutrição, plantas medicinais e terapia ortomolecular.',
  },
  {
    icon: Salad,
    title: 'Nutrição',
    desc: 'Consultas de nutrição clínica e desportiva para um estilo de vida mais saudável.',
  },
  {
    icon: Flower2,
    title: 'Medicina Tradicional Chinesa',
    desc: 'Uma visão milenar do equilíbrio do corpo, integrada no seu plano de cuidados.',
  },
  {
    icon: Baby,
    title: 'Psicomotricidade',
    desc: 'Estimulação e desenvolvimento — do bebé ao idoso, incluindo necessidades especiais.',
  },
  {
    icon: Sparkles,
    title: 'Estética',
    desc: 'Cuidados de estética e medicina estética para o seu bem-estar e autoconfiança.',
  },
  {
    icon: Speech,
    title: 'Terapia da Fala',
    desc: 'Avaliação e intervenção na comunicação, linguagem e deglutição.',
  },
]

// ── Team ─────────────────────────────────────────────────────────────────────
export const team = [
  {
    name: 'Bernardo Filipitsch',
    role: 'Terapeuta Manual & Osteopatia',
    initials: 'BF',
    bio: 'Fundador da clínica. Terapeuta desportivo com mais de 20 anos de prática, especializado em osteopatia e técnicas manipulativas, do alto rendimento à reabilitação.',
  },
  {
    name: 'Rita Rijo',
    role: 'Naturopata',
    initials: 'RR',
    bio: 'Medicina holística: nutrição, plantas medicinais e terapia ortomolecular numa lógica preventiva.',
  },
  {
    name: 'Mariana',
    role: 'Nutricionista',
    initials: 'M',
    bio: 'Nutrição clínica e desportiva, com planos personalizados e acompanhamento contínuo.',
  },
  {
    name: 'Equipa de Osteopatia',
    role: 'Osteopatia & Massagem',
    initials: 'OS',
    bio: 'Osteopatia estrutural, visceral e sacrocraniana, massagem terapêutica e de relaxamento, com cédula profissional.',
  },
  {
    name: 'Psicomotricidade',
    role: 'Desenvolvimento & Estimulação',
    initials: 'PM',
    bio: 'Intervenção em necessidades especiais, perturbações do desenvolvimento e estimulação precoce.',
  },
]

// ── Values / approach ────────────────────────────────────────────────────────
export const values = [
  {
    icon: HeartPulse,
    title: 'A pessoa em primeiro lugar',
    text: 'Avaliamos cada caso de forma individual e desenhamos um plano à medida — não há dois corpos iguais.',
  },
  {
    icon: Leaf,
    title: 'Natural e preventivo',
    text: 'Privilegiamos abordagens naturais que tratam a causa e previnem o reaparecimento do problema.',
  },
  {
    icon: Stethoscope,
    title: 'Equipa multidisciplinar',
    text: 'Várias especialidades sob o mesmo teto, a trabalhar em conjunto pelo seu bem-estar.',
  },
]

export const stats = [
  { value: '20+', label: 'Anos de experiência' },
  { value: '10', label: 'Áreas de especialidade' },
  { value: '7/7', label: 'Dias por semana' },
  { value: '2017', label: 'Clínica desde' },
]

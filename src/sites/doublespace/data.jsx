// ── DoubleSpace — data ───────────────────────────────────────────────────────
// Salão de beleza em Benfica: Nails · Cosmetology · Barber. Marca bilingue PT/EN.
// Apenas factos reais. SEM dono/fundador inventado. SEM preços. SEM reviews.
// Email NÃO encontrado — não inventar.

import {
  Sparkles,
  Scissors,
  Hand,
  Droplets,
  Brush,
  Wind,
  Gem,
  Palette,
  Instagram,
  Clock,
  Globe,
  CreditCard,
  CalendarHeart,
  Heart,
} from 'lucide-react'

export const slug = 'doublespace'

export const brand = {
  name: 'DoubleSpace',
  full: 'DoubleSpace — Nails · Cosmetology · Barber',
  tagline: 'Nails · Cosmetology · Barber — o teu espaço de beleza em Benfica.',
  intro:
    'Um salão em Benfica que reúne três mundos num só espaço: Nails, Cosmetology e Barber. Beleza editorial, ambiente acolhedor e uma equipa que fala a tua língua.',
  // Contactos — apenas o que existe
  phoneDisplay: '+351 915 552 545',
  phoneHref: 'tel:+351915552545',
  whatsapp: 'https://wa.me/351915552545',
  address: 'Estr. de Benfica 706A, 1500-112 Lisboa',
  mapsQuery: 'Estrada de Benfica 706, 1500-112 Lisboa',
  hours: 'Todos os dias · 9h00 – 21h00',
  // Social
  instagram: 'https://instagram.com/doublespace_lisboa',
  instagramHandle: '@doublespace_lisboa',
  instagramBarber: 'https://instagram.com/doublespace_barbershop',
  instagramBarberHandle: '@doublespace_barbershop',
  tiktok: 'https://tiktok.com/@doublespace_lisbon',
  tiktokHandle: '@doublespace_lisbon',
  followers: '6,3K',
  domain: 'double-space.eu',
}

export const nav = [
  { label: 'Início', to: '' },
  { label: 'Serviços', to: 'servicos' },
  { label: 'Sobre', to: 'sobre' },
  { label: 'Contacto', to: 'contacto' },
]

// ── Trust strip / highlights ─────────────────────────────────────────────────
export const highlights = [
  { icon: Instagram, title: '6,3K seguidores', text: 'A nossa maior montra vive no Instagram.' },
  { icon: Clock, title: 'Aberto todos os dias', text: 'Das 9h às 21h, sete dias por semana.' },
  { icon: Globe, title: 'Equipa multilingue', text: 'Falamos português e inglês — expat-friendly.' },
  { icon: CreditCard, title: 'Pagamento com cartão', text: 'Marcação simples, pagamento sem complicações.' },
]

// ── Os três espaços (verticais) ──────────────────────────────────────────────
export const verticals = [
  {
    key: 'nails',
    tag: 'Nails',
    label: 'Unhas',
    icon: Sparkles,
    accent: '#C06A52',
    headline: 'Manicures e nail art com acabamento de revista.',
    desc: 'Manicure, pedicure, gel e verniz gel, com nail art à medida do teu estilo.',
    items: ['Manicure', 'Pedicure', 'Gel & verniz gel', 'Nail art'],
  },
  {
    key: 'cosmetology',
    tag: 'Cosmetology',
    label: 'Estética',
    icon: Droplets,
    accent: '#A98DA0',
    headline: 'Cuidados de pele que se notam ao toque.',
    desc: 'Tratamentos faciais, limpeza de pele e extrações, com rotinas pensadas para a tua pele.',
    items: ['Tratamentos faciais', 'Limpeza de pele', 'Extrações', 'Cuidados de pele'],
  },
  {
    key: 'barber',
    tag: 'Barber',
    label: 'Barbearia',
    icon: Scissors,
    accent: '#1B1714',
    headline: 'Corte e barba com mão de mestre.',
    desc: 'Cortes masculinos, barba e grooming, num ambiente descontraído e cuidado.',
    items: ['Cortes masculinos', 'Barba', 'Grooming'],
  },
]

// ── Serviços detalhados (página Serviços) ────────────────────────────────────
export const services = [
  {
    key: 'nails',
    tag: 'Nails',
    label: 'Unhas',
    icon: Sparkles,
    accent: '#C06A52',
    desc: 'Mãos e pés tratados ao detalhe, do clássico ao mais criativo. Cada manicure é uma pequena assinatura.',
    items: [
      { icon: Hand, title: 'Manicure', text: 'Cuidado completo de mãos e cutículas, com o acabamento que preferes.' },
      { icon: Sparkles, title: 'Pedicure', text: 'Pés renovados e confortáveis, com atenção a cada detalhe.' },
      { icon: Gem, title: 'Gel & verniz gel', text: 'Cor duradoura, brilho impecável e resistência para o dia a dia.' },
      { icon: Brush, title: 'Nail art', text: 'Desenhos e apliques personalizados — do minimal ao statement.' },
    ],
  },
  {
    key: 'cosmetology',
    tag: 'Cosmetology',
    label: 'Cosmetologia / Estética',
    icon: Droplets,
    accent: '#A98DA0',
    desc: 'Estética e cosmetologia centradas na saúde e no brilho da pele, com tratamentos adaptados a cada rosto.',
    items: [
      { icon: Droplets, title: 'Tratamentos faciais', text: 'Protocolos à medida para hidratar, equilibrar e revitalizar a pele.' },
      { icon: Sparkles, title: 'Limpeza de pele', text: 'Limpeza profunda para uma pele mais limpa, fresca e luminosa.' },
      { icon: Wind, title: 'Extrações', text: 'Técnica cuidada para desobstruir os poros com conforto.' },
      { icon: Heart, title: 'Cuidados de pele', text: 'Aconselhamento e rotinas para manteres os resultados em casa.' },
    ],
  },
  {
    key: 'barber',
    tag: 'Barber',
    label: 'Barbearia',
    icon: Scissors,
    accent: '#1B1714',
    desc: 'A barbearia DoubleSpace junta técnica e ambiente. Corte, barba e grooming, com tempo para te sentires bem.',
    items: [
      { icon: Scissors, title: 'Cortes masculinos', text: 'Do clássico ao contemporâneo, ajustado à tua cara e estilo.' },
      { icon: Wind, title: 'Barba', text: 'Aparar, desenhar e tratar a barba com toalha quente e detalhe.' },
      { icon: Sparkles, title: 'Grooming', text: 'Acabamentos e cuidados para um look impecável até ao detalhe.' },
    ],
  },
]

// Styling / hairdressing — extra
export const styling = {
  icon: Palette,
  title: 'Styling & Hairdressing',
  text: 'Também cuidamos do teu cabelo: styling e hairdressing para completar o look, seja para o dia a dia ou para uma ocasião especial.',
}

// ── O que nos distingue (Sobre) ──────────────────────────────────────────────
export const concept = [
  {
    icon: Sparkles,
    title: 'Três espaços, um só lugar',
    text: 'Nails, Cosmetology e Barber lado a lado. Tudo o que a tua rotina de beleza precisa, sem saltar de sítio em sítio.',
  },
  {
    icon: Globe,
    title: 'Equipa multilingue',
    text: 'Falamos português e inglês. Um espaço expat-friendly, onde toda a gente se sente em casa.',
  },
  {
    icon: CalendarHeart,
    title: 'Aberto todos os dias',
    text: 'Das 9h às 21h, sete dias por semana — marcamos à volta da tua agenda.',
  },
]

// ── Stats / prova social ─────────────────────────────────────────────────────
export const stats = [
  { value: '6,3K', label: 'Seguidores no Instagram' },
  { value: '3', label: 'Espaços num só' },
  { value: '7/7', label: 'Dias por semana' },
  { value: 'PT · EN', label: 'Equipa bilingue' },
]

// ── Instagram-style feed gallery ─────────────────────────────────────────────
// picsum seeds — evocam o feed do salão (alt + width/height + lazy + overlay)
export const gallery = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({
  n,
  src: `https://picsum.photos/seed/doublespace-${n}/600/600`,
  alt: `Momento do salão DoubleSpace em Benfica — feed de Instagram (${n})`,
}))

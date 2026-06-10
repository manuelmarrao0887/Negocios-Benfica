import {
  Sparkles,
  Layers,
  Feather,
  Link2,
  Ribbon,
  Eraser,
  Scissors,
  Palette,
  Droplets,
  Wand2,
  ShieldCheck,
  Gem,
  Instagram,
  HandHeart,
  Brush,
} from 'lucide-react'

// ── Brand ────────────────────────────────────────────────────────────────────
export const slug = 'linda-mulher'

export const brand = {
  name: 'Linda Mulher',
  full: 'Linda Mulher Studio',
  tagline: 'O melhor salão de beleza em Lisboa.',
  subtagline: 'Extensões de cabelo 100% humano.',
  intro:
    'Estúdio de luxo no Parque das Nações, especializado em extensões capilares de cabelo 100% humano. Consultoria personalizada, aplicação profissional e uma transformação verdadeiramente natural.',
  phoneDisplay: '+351 920 530 829',
  phoneHref: 'tel:+351920530829',
  whatsapp: 'https://wa.me/351920530829',
  whatsappText:
    'https://wa.me/351920530829?text=Ol%C3%A1!%20Gostaria%20de%20marcar%20uma%20consultoria%20no%20Linda%20Mulher%20Studio.',
  instagram: 'https://www.instagram.com/linda_mulher_studio/',
  instagramHandle: '@linda_mulher_studio',
  followers: '35K',
  address: 'Rua Polo Norte 18D, 1990-266 Lisboa',
  area: 'Parque das Nações · a ~7 min do Oriente',
  mapsQuery: 'Rua Polo Norte 18D, 1990-266 Lisboa',
  hours: 'Seg – Sáb · 10h00 – 19h00',
  hoursNote: 'Domingos e feriados: apenas marcações VIP.',
}

export const nav = [
  { label: 'Início', to: '' },
  { label: 'Serviços', to: 'servicos' },
  { label: 'Sobre', to: 'sobre' },
  { label: 'Contacto', to: 'contacto' },
]

// ── Trust / hallmarks strip ──────────────────────────────────────────────────
export const hallmarks = [
  { icon: Gem, title: 'Cabelo 100% humano', text: 'Matéria-prima certificada, de 55 a 80 cm de comprimento.' },
  { icon: ShieldCheck, title: 'Garantia de preço europeu', text: 'Qualidade premium com o melhor valor do mercado.' },
  { icon: HandHeart, title: 'Aplicação profissional', text: 'Técnica precisa para um resultado natural e duradouro.' },
  { icon: Instagram, title: '35K na comunidade', text: 'Mais de 35 mil seguidores acompanham as transformações.' },
]

// ── Extension techniques (hero specialty) ────────────────────────────────────
export const techniques = [
  {
    icon: Sparkles,
    title: 'Queratina',
    desc: 'Fixação por micro pontos de queratina — discreta, resistente e ideal para volume duradouro.',
  },
  {
    icon: Feather,
    title: 'Nano Pele (Invisível)',
    desc: 'A técnica mais imperceptível: a base funde-se com o couro cabeludo para um efeito 100% natural.',
  },
  {
    icon: Layers,
    title: 'Tela',
    desc: 'Faixas contínuas que acrescentam densidade e comprimento de forma uniforme e confortável.',
  },
  {
    icon: Link2,
    title: 'Micro Link',
    desc: 'Anéis micro, sem calor nem cola, para uma aplicação delicada e fácil de manter.',
  },
  {
    icon: Ribbon,
    title: 'Fita adesiva',
    desc: 'Aplicação rápida e leve, perfeita para um cabelo com mais corpo no dia a dia.',
  },
  {
    icon: Eraser,
    title: 'Remoção de extensões',
    desc: 'Remoção cuidada e segura, preservando integralmente o seu cabelo natural.',
  },
]

// ── Hair quality features ────────────────────────────────────────────────────
export const hairFeatures = [
  'Cabelo 100% humano certificado',
  'Comprimentos de 55 a 80 cm',
  'Lisos, ondulados ou cacheados',
  'Castanhos, loiros, acobreados, ruivos e platinados',
  'Garantia de preço europeu',
  'Venda de cabelo, além da aplicação',
]

// ── Full service catalogue (grouped) ─────────────────────────────────────────
export const serviceGroups = [
  {
    id: 'extensoes',
    eyebrow: 'A nossa assinatura',
    title: 'Extensões capilares',
    icon: Sparkles,
    blurb:
      'Cabelo 100% humano em várias técnicas, tonalidades e texturas. Consultoria personalizada para escolher o método ideal para si.',
    items: [
      'Queratina',
      'Nano Pele (Invisível)',
      'Tela',
      'Micro Link',
      'Fita adesiva',
      'Remoção de extensões',
    ],
  },
  {
    id: 'cabeleireiro',
    eyebrow: 'Salão',
    title: 'Cabeleireiro',
    icon: Scissors,
    blurb: 'Serviços completos de cabeleireiro para cuidar, transformar e realçar o seu estilo.',
    items: ['Brushing', 'Madeixas', 'Progressiva', 'Corte', 'Corte bordado', 'Coloração'],
  },
  {
    id: 'tratamentos',
    eyebrow: 'Cuidado',
    title: 'Tratamentos capilares',
    icon: Droplets,
    blurb: 'Protocolos de recuperação e brilho que devolvem força e saúde ao cabelo.',
    items: ['Banho de Verniz', 'Reconstrução Capilar', 'Detox Capilar', 'Protocolo Capilar'],
  },
  {
    id: 'unhas',
    eyebrow: 'Mãos & pés',
    title: 'Unhas',
    icon: Wand2,
    blurb: 'Manicure e pedicure de luxo, com acabamentos impecáveis e nail art à medida.',
    items: [
      'Extensões em gel',
      'Extensões em acrílico',
      'Verniz gel',
      'Francesinha',
      'Nail art',
      'Pedicure',
    ],
  },
  {
    id: 'sobrancelhas',
    eyebrow: 'Rosto',
    title: 'Sobrancelhas & rosto',
    icon: Brush,
    blurb: 'Design de sobrancelhas e cuidados de rosto que valorizam o seu olhar.',
    items: ['Designer de Sobrancelhas', 'Buço'],
  },
]

// ── About pillars ────────────────────────────────────────────────────────────
export const pillars = [
  {
    icon: Gem,
    title: 'Matéria-prima premium',
    text: 'Trabalhamos exclusivamente com cabelo 100% humano certificado, em comprimentos de 55 a 80 cm.',
  },
  {
    icon: Palette,
    title: 'Transformação natural',
    text: 'Técnicas e tonalidades escolhidas a dedo para um resultado discreto, fluido e verdadeiramente seu.',
  },
  {
    icon: HandHeart,
    title: 'Experiência de luxo',
    text: 'Consultoria personalizada num ambiente acolhedor, pensado para o seu conforto e privacidade.',
  },
]

export const stats = [
  { value: '35K', label: 'Seguidores no Instagram' },
  { value: '100%', label: 'Cabelo humano' },
  { value: '5', label: 'Técnicas de extensão' },
  { value: '55–80', label: 'cm de comprimento' },
]

// ── Lookbook (before/after + gallery) ────────────────────────────────────────
// picsum seeds give stable, distinct imagery; styled with a plum/rose overlay.
export const lookbook = [
  { seed: 'linda-mulher-1', alt: 'Transformação com extensões longas e onduladas' },
  { seed: 'linda-mulher-2', alt: 'Resultado de extensões em tom loiro platinado' },
  { seed: 'linda-mulher-3', alt: 'Cabelo com volume e brilho após aplicação' },
  { seed: 'linda-mulher-4', alt: 'Madeixas e extensões em tons acobreados' },
  { seed: 'linda-mulher-5', alt: 'Penteado elegante com cabelo 100% humano' },
  { seed: 'linda-mulher-6', alt: 'Detalhe de extensões naturais e discretas' },
]

export const beforeAfter = [
  {
    seedBefore: 'linda-mulher-7',
    seedAfter: 'linda-mulher-8',
    alt: 'Antes e depois de uma transformação com extensões',
    caption: 'De curto a comprimento intenso com extensões de queratina.',
  },
  {
    seedBefore: 'linda-mulher-9',
    seedAfter: 'linda-mulher-10',
    alt: 'Antes e depois de densidade e cor',
    caption: 'Mais densidade e luz com a técnica Nano Pele invisível.',
  },
]

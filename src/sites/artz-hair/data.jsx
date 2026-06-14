// ── Art.Z Hair & Experience — data ───────────────────────────────────────────
// Salão de beleza premium "Hair & Experience" em Lisboa (Av. Luís Bívar, Saldanha).
// APENAS factos reais, confirmados na pesquisa. SEM preços inventados. SEM
// testemunhos inventados. A classificação 4,7★ · 525 avaliações é o Google rating.
//
// Fontes (ver REPORT):
//   • Site oficial artzhair.com (home + /servicos-eng/) — serviços, conceito, logótipo.
//   • Página de contacto oficial / Timeout / Portal da Queixa — morada, telefone, email, horário.
//   • SAPO / NiT — abertura (Junho 2020), conceito, Luís Zamban (direcção criativa).
//   • Instagram @artz.hair (18K) · Facebook ART.Z HAIR.

import {
  Scissors,
  Palette,
  Sparkles,
  Brush,
  Wind,
  Droplets,
  Flower2,
  Hand,
  Eye,
  HeartHandshake,
  Crown,
  Star,
  Clock,
  MapPin,
  Phone,
  Instagram,
  Coffee,
  Camera,
  Wine,
  GlassWater,
} from 'lucide-react'

export const slug = 'artz-hair'

export const brand = {
  name: 'Art.Z',
  full: 'Art.Z Hair & Experience',
  signature: 'Hair & Experience',
  tagline: 'Não é um salão de beleza convencional — é como a sua casa. Viva a experiência.',
  intro:
    'Mais do que um cabeleireiro, a Art.Z é uma experiência de beleza de A a Z. No coração das Avenidas Novas, reunimos hairstyling, cor, tratamentos, spa, maquilhagem e barbearia num espaço pensado ao detalhe — onde cada visita é um momento só seu.',

  // ── Contactos (apenas o que existe) ──
  phoneDisplay: '+351 213 523 050',
  phoneHref: 'tel:+351213523050',
  mobileDisplay: '+351 964 155 807',
  mobileHref: 'tel:+351964155807',
  whatsapp: 'https://wa.me/351964155807',
  whatsappText:
    'https://wa.me/351964155807?text=Ol%C3%A1%20Art.Z!%20Gostaria%20de%20marcar%20uma%20experi%C3%AAncia.',
  email: 'contacto@artzhair.com',
  emailHref: 'mailto:contacto@artzhair.com',

  address: 'Av. Luís Bívar 93 A/B/C, 1050-143 Lisboa',
  district: 'Saldanha · Avenidas Novas',
  mapsQuery: 'Avenida Luís Bívar 93, Lisboa',

  // Horário (Timeout / página de contacto oficial)
  hours: 'Seg 9h–18h · Ter a Sáb 9h–20h · Dom encerrado',
  hoursNote: 'Atendimento por marcação. Aconselhamos reservar com antecedência.',

  // Social
  instagram: 'https://instagram.com/artz.hair',
  instagramHandle: '@artz.hair',
  followers: '18K',
  facebook: 'https://www.facebook.com/artz.hairexperience/',
  website: 'artzhair.com',

  // Prova social (Google)
  rating: '4,7',
  reviews: '525',
  since: 2020,
}

export const nav = [
  { label: 'Início', to: '' },
  { label: 'Serviços', to: 'servicos' },
  { label: 'Sobre', to: 'sobre' },
  { label: 'Contacto', to: 'contacto' },
]

// ── Trust strip / highlights ─────────────────────────────────────────────────
export const highlights = [
  { icon: Star, title: '4,7 ★ no Google', text: 'Mais de 525 avaliações de quem viveu a experiência.' },
  { icon: Crown, title: 'Hair & Experience', text: 'Um conceito de A a Z: cabelo, spa, beleza e bem-estar.' },
  { icon: MapPin, title: 'Saldanha · Lisboa', text: 'No coração das Avenidas Novas, na Av. Luís Bívar.' },
  { icon: Instagram, title: '18K na comunidade', text: 'Inspiração e bastidores diários em @artz.hair.' },
]

// ── A experiência (o que distingue) ──────────────────────────────────────────
export const experience = [
  {
    icon: Coffee,
    title: 'Acolhimento à medida',
    text: 'Recebemo-lo como em casa, com tempo e atenção a cada detalhe da sua visita.',
  },
  {
    icon: Camera,
    title: 'Espaço editorial',
    text: 'Um ambiente cuidado, pensado para se sentir bem — e para ficar memorável.',
  },
  {
    icon: HeartHandshake,
    title: 'Beleza de A a Z',
    text: 'Cabelo, cor, tratamentos, spa, maquilhagem e barbearia, tudo sob o mesmo teto.',
  },
]

// ── Serviços (página Serviços) — confirmados no site oficial ──────────────────
export const services = [
  {
    key: 'hairstyle',
    icon: Scissors,
    title: 'Corte & Hairstyling',
    desc: 'Corte de senhora, homem e criança, brushing e styling com BabyLiss. A assinatura começa aqui.',
    items: ['Corte senhora, homem e criança', 'Brushing', 'Styling & BabyLiss', 'Penteados'],
  },
  {
    key: 'cor',
    icon: Palette,
    title: 'Coloração',
    desc: 'Cor, madeixas e balayage com produtos de referência, para um resultado luminoso e natural.',
    items: ['Coloração', 'Madeixas', 'Balayage', 'Iluminação'],
  },
  {
    key: 'tratamentos',
    icon: Droplets,
    title: 'Tratamentos Capilares',
    desc: 'Ampolas, máscaras, queratina e protocolos de reconstrução para devolver força e brilho ao cabelo.',
    items: ['Ampolas & máscaras', 'Queratina & aminoácidos', 'Argiloterapia', 'Pro Fiber & Wella Care'],
  },
  {
    key: 'alisamentos',
    icon: Wind,
    title: 'Alisamentos & Anti-Frizz',
    desc: 'Protocolos anti-frizz e de retexturização que disciplinam o cabelo e prolongam o brushing.',
    items: ['Anti-frizz', 'Organoterapia', 'Retexturização', 'Bio Organo'],
  },
  {
    key: 'spa',
    icon: Flower2,
    title: 'Spa & Bem-estar',
    desc: 'Uma pausa para si: massagem corporal, reflexologia e rituais anti-stress que completam a experiência.',
    items: ['Massagem corporal', 'Reflexologia', 'Anti-stress', 'Massagem modeladora'],
  },
  {
    key: 'beleza',
    icon: Brush,
    title: 'Maquilhagem & Olhar',
    desc: 'Maquilhagem, airbrush e cuidados de olhar para realçar a sua beleza em qualquer ocasião.',
    items: ['Maquilhagem & airbrush', 'Extensão de pestanas', 'Lifting de pestanas', 'Microblading & henna'],
  },
  {
    key: 'nails',
    icon: Hand,
    title: 'Unhas & Nail Art',
    desc: 'Mãos e pés ao detalhe: gel, acrílico, fibra de vidro, spa de pés e nail art à sua medida.',
    items: ['Gel & acrílico', 'Fibra de vidro', 'Pedicure & spa de pés', 'Nail art'],
  },
  {
    key: 'barber',
    icon: Sparkles,
    title: 'Barbearia',
    desc: 'Corte, barba, hidratação e um momento de relaxamento — grooming com mão de mestre.',
    items: ['Corte masculino', 'Barba', 'Hidratação', 'Relaxamento'],
  },
  {
    key: 'noivas',
    icon: Crown,
    title: 'Noivas & Eventos',
    desc: 'Pacote dia da noiva e preparação para ocasiões especiais — cabelo, maquilhagem e spa num só lugar.',
    items: ['Dia da noiva', 'Penteado & maquilhagem', 'Manicure & pedicure de noiva', 'Eventos'],
  },
]

// ── Pequenos detalhes da experiência (Sobre) ─────────────────────────────────
export const experienceDetails = [
  { icon: Wine, label: 'Bar de acolhimento' },
  { icon: Camera, label: 'Photobooth' },
  { icon: GlassWater, label: 'Bebida de boas-vindas' },
  { icon: Crown, label: 'Atendimento premium' },
]

// ── Marcas / parceiros (logótipos vistos no site oficial) ─────────────────────
export const partners = ['Wella Professionals', 'Kérastase', "L'Oréal Professionnel"]

// ── Sobre / valores ──────────────────────────────────────────────────────────
export const values = [
  {
    icon: Crown,
    title: 'A experiência primeiro',
    text: 'Acreditamos que beleza e bem-estar andam juntos. Cada visita é desenhada para ser um momento, não apenas um serviço.',
  },
  {
    icon: Eye,
    title: 'Olhar de autor',
    text: 'Sob a direcção criativa de Luís Zamban, cada corte e cada cor têm intenção, técnica e personalidade.',
  },
  {
    icon: HeartHandshake,
    title: 'Como em casa',
    text: 'Recebemo-lo com tempo, conforto e à vontade. A Art.Z não é um salão convencional — é o seu espaço.',
  },
]

export const stats = [
  { value: '4,7★', label: 'Avaliação Google' },
  { value: '525', label: 'Avaliações' },
  { value: '18K', label: 'Seguidores' },
  { value: '2020', label: 'Desde' },
]

// ── Galeria estilo editorial (picsum seeds) ──────────────────────────────────
// alt + width/height + lazy + overlay on-brand. Imagens ilustrativas.
export const gallery = [1, 2, 3, 4, 5, 6].map((n) => ({
  n,
  src: `https://picsum.photos/seed/artz-hair-${n}/640/800`,
  alt: `Ambiente e trabalhos do salão Art.Z Hair & Experience em Lisboa (${n})`,
}))

// Re-export icons usados nas páginas para conveniência
export const icons = { Clock, MapPin, Phone, Instagram, Star }

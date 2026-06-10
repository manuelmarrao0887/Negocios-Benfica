import {
  Refrigerator,
  Wind,
  Wrench,
  Snowflake,
  Droplets,
  Thermometer,
  Gauge,
  Volume2,
  Zap,
  Filter,
  Leaf,
  ShieldCheck,
  Clock,
  MapPin,
  Building2,
  Search,
  ClipboardCheck,
  Phone,
  Sparkles,
} from 'lucide-react'

// ── Brand ────────────────────────────────────────────────────────────────────
export const slug = 'tecnico-frio'

export const brand = {
  name: 'Técnico Frio',
  full: 'Técnico Frio — Assistência Técnica',
  tagline: 'Reparação de ar condicionado e frigoríficos na Grande Lisboa.',
  claim: 'Diagnóstico rápido. Solução eficaz.',
  intro:
    'Assistência técnica especializada na reparação e manutenção de ar condicionado e frigoríficos, para casa e para o seu negócio. Diagnóstico rápido ao domicílio em toda a Grande Lisboa.',
  phoneDisplay: '928 494 205',
  phoneHref: 'tel:+351928494205',
  phone2Display: '935 995 450',
  phone2Href: 'tel:+351935995450',
  whatsapp: 'https://wa.me/351928494205',
  whatsappDisplay: '928 494 205',
  email: 'info@tecnicofrio.pt',
  emailHref: 'mailto:info@tecnicofrio.pt',
  address: 'Calçada do Tojal 03, Lisboa',
  mapsQuery: 'Calçada do Tojal 3, Lisboa',
  hours: 'Atendimento de segunda a sábado, mediante marcação',
  cta: 'Pedir orçamento',
}

export const nav = [
  { label: 'Início', to: '' },
  { label: 'Serviços', to: 'servicos' },
  { label: 'Sobre', to: 'sobre' },
  { label: 'Contacto', to: 'contacto' },
]

// ── Highlights / trust strip ─────────────────────────────────────────────────
export const highlights = [
  { icon: Search, title: 'Diagnóstico rápido', text: 'Avaliação ágil ao domicílio para identificar a avaria.' },
  { icon: Snowflake, title: 'AC e frio', text: 'Ar condicionado e frigoríficos numa só assistência.' },
  { icon: MapPin, title: 'Ampla cobertura', text: 'Toda a Grande Lisboa, das duas margens às linhas.' },
  { icon: Building2, title: 'Casa e negócio', text: 'Soluções residenciais e comerciais.' },
]

// ── Services (full) ──────────────────────────────────────────────────────────
export const services = [
  {
    id: 'frigorificos',
    icon: Refrigerator,
    eyebrow: 'Frio doméstico e comercial',
    title: 'Reparação de frigoríficos e congeladores',
    desc: 'Resolvemos avarias de frigoríficos, combinados e arcas congeladoras — equipamento residencial e comercial.',
    problems: [
      'Não arrefece ou não atinge a temperatura',
      'Não congela ou descongela sozinho',
      'Formação excessiva de gelo',
      'Fuga de água no interior ou no chão',
      'Ruídos anormais durante o funcionamento',
      'Maus odores persistentes',
      'Falha de termostato',
      'Avaria do compressor',
    ],
  },
  {
    id: 'ar-condicionado',
    icon: Wind,
    eyebrow: 'Climatização residencial e comercial',
    title: 'Reparação de ar condicionado',
    desc: 'Assistência a equipamentos de ar condicionado split e multi-split, em casa e em espaços comerciais.',
    problems: [
      'Não arrefece ou não aquece',
      'Fuga de gás refrigerante',
      'Pinga água da unidade interior',
      'Ruído excessivo no funcionamento',
      'Odores ao ligar o aparelho',
      'Falhas elétricas e de componentes',
    ],
  },
  {
    id: 'manutencao',
    icon: Wrench,
    eyebrow: 'Prevenção e eficiência',
    title: 'Manutenção preventiva',
    desc: 'Manutenção que prolonga a vida útil do equipamento e evita avarias recorrentes antes que aconteçam.',
    problems: [
      'Limpeza e higienização de filtros',
      'Melhoria da eficiência energética',
      'Prevenção de avarias recorrentes',
      'Verificação geral de funcionamento',
    ],
  },
]

// ── Common problem → solution pairs (home highlight section) ─────────────────
export const problemSolutions = [
  {
    icon: Thermometer,
    problem: 'O frigorífico não arrefece',
    solution: 'Avaliamos termostato, gás e compressor e repomos a temperatura correta.',
  },
  {
    icon: Snowflake,
    problem: 'Excesso de gelo no congelador',
    solution: 'Identificamos a causa da acumulação e corrigimos o sistema de degelo.',
  },
  {
    icon: Droplets,
    problem: 'O ar condicionado pinga água',
    solution: 'Desobstruímos a drenagem e tratamos a origem da fuga.',
  },
  {
    icon: Wind,
    problem: 'O AC não arrefece nem aquece',
    solution: 'Verificamos carga de gás, componentes e parte elétrica para repor o desempenho.',
  },
  {
    icon: Volume2,
    problem: 'Ruídos ou maus odores',
    solution: 'Diagnosticamos a fonte do ruído ou cheiro e higienizamos o equipamento.',
  },
  {
    icon: Zap,
    problem: 'Falhas elétricas e de componentes',
    solution: 'Testamos a instalação e substituímos os componentes em falha.',
  },
]

// ── Process / fast diagnosis ─────────────────────────────────────────────────
export const steps = [
  {
    icon: Phone,
    step: '01',
    title: 'Contacto',
    text: 'Descreva-nos a avaria por telefone ou WhatsApp e agendamos a visita.',
  },
  {
    icon: Search,
    step: '02',
    title: 'Diagnóstico rápido',
    text: 'Deslocamo-nos ao domicílio e identificamos a causa do problema.',
  },
  {
    icon: ClipboardCheck,
    step: '03',
    title: 'Solução eficaz',
    text: 'Reparamos o equipamento com a melhor solução para o seu caso.',
  },
  {
    icon: Sparkles,
    step: '04',
    title: 'Prevenção',
    text: 'Aconselhamos a manutenção certa para evitar avarias futuras.',
  },
]

// ── Service area (real) ──────────────────────────────────────────────────────
export const areas = [
  {
    icon: Building2,
    title: 'Lisboa',
    zones: ['Alvalade', 'Anjos', 'Ajuda', 'Alcântara', 'Areeiro', 'Avenidas Novas', 'Benfica', 'Beato', 'Campo Grande', 'Carnide'],
  },
  {
    icon: MapPin,
    title: 'Margem Sul',
    zones: ['Almada', 'Seixal', 'Setúbal e arredores'],
  },
  {
    icon: MapPin,
    title: 'Linha de Sintra',
    zones: ['Loures', 'Odivelas', 'Amadora', 'Sintra'],
  },
  {
    icon: MapPin,
    title: 'Linha de Cascais',
    zones: ['Carnaxide', 'Algés', 'Oeiras', 'Cascais'],
  },
]

// Flat list for compact chip display
export const areaChips = [
  'Alvalade', 'Anjos', 'Ajuda', 'Alcântara', 'Areeiro', 'Avenidas Novas', 'Benfica', 'Beato',
  'Campo Grande', 'Carnide', 'Carnaxide', 'Algés', 'Loures', 'Odivelas', 'Amadora', 'Cascais',
  'Sintra', 'Oeiras', 'Almada', 'Seixal', 'Setúbal',
]

// ── Trust / why us (no reviews — value props only) ───────────────────────────
export const trust = [
  {
    icon: Gauge,
    title: 'Diagnóstico rápido',
    text: 'Identificamos a avaria sem demoras, para repor o conforto quanto antes.',
  },
  {
    icon: Snowflake,
    title: 'Manutenção preventiva',
    text: 'Prolongamos a vida útil do equipamento e prevenimos avarias recorrentes.',
  },
  {
    icon: MapPin,
    title: 'Ampla cobertura',
    text: 'Atuamos em quatro eixos da Grande Lisboa, das duas margens às linhas.',
  },
  {
    icon: Building2,
    title: 'Residencial e comercial',
    text: 'Respondemos a casas e a negócios com o mesmo rigor técnico.',
  },
]

// ── Service promise (Sobre) ──────────────────────────────────────────────────
export const promise = [
  {
    icon: Clock,
    title: 'Rapidez',
    text: 'Diagnóstico ágil ao domicílio para resolver a avaria sem demoras.',
  },
  {
    icon: ShieldCheck,
    title: 'Eficácia',
    text: 'Soluções certas à primeira, com foco na causa do problema.',
  },
  {
    icon: Leaf,
    title: 'Durabilidade',
    text: 'Manutenção que prolonga a vida útil do seu equipamento.',
  },
]

export const equipmentTags = [
  { icon: Refrigerator, label: 'Frigoríficos' },
  { icon: Snowflake, label: 'Congeladores' },
  { icon: Wind, label: 'Ar condicionado' },
  { icon: Filter, label: 'Filtros e higienização' },
]

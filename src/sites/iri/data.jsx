import {
  Droplets,
  Layers,
  Thermometer,
  Volume2,
  SquareStack,
  Store,
  ShieldCheck,
  Award,
  Star,
  PackageSearch,
  Building2,
  HardHat,
  ClipboardCheck,
  Hammer,
} from 'lucide-react'

// ── Brand ────────────────────────────────────────────────────────────────────
export const slug = 'iri'

export const brand = {
  name: 'IRI',
  full: 'IRI — Isolamentos, Revestimentos e Impermeabilização, Lda.',
  sigla: 'Isolamentos · Revestimentos · Impermeabilização',
  tagline: 'Isolamentos, Revestimentos, Impermeabilização.',
  claim: 'Há 30 anos, uma empresa de referência.',
  intro:
    'Materiais técnicos e aplicação especializada, com loja de referência em Lisboa. Há 30 anos a resolver problemas de impermeabilização, revestimentos e isolamento — com gama profunda e aconselhamento a sério.',
  // Phones
  phoneStoreDisplay: '+351 217 620 450',
  phoneStoreHref: 'tel:+351217620450',
  phoneWorksDisplay: '+351 217 620 452',
  phoneWorksHref: 'tel:+351217620452',
  mobileDisplay: '917 766 776',
  mobileHref: 'tel:+351917766776',
  // Emails
  emailComercial: 'comercial1@iri.pt',
  emailInfo: 'info@iri.pt',
  // Location
  address: 'Rua Jorge Barradas 37A, 1500-369 Lisboa',
  mapsQuery: 'Rua Jorge Barradas 37A, 1500-369 Lisboa',
  hours: 'Seg–Sex · horário de loja',
  since: 1993,
  years: 30,
  rating: '4,4',
  reviews: 71,
}

export const nav = [
  { label: 'Início', to: '' },
  { label: 'Serviços', to: 'servicos' },
  { label: 'Sobre', to: 'sobre' },
  { label: 'Contacto', to: 'contacto' },
]

// ── Service pillars (5 + loja) ───────────────────────────────────────────────
export const pillars = [
  {
    icon: Droplets,
    title: 'Impermeabilização',
    desc: 'A nossa especialidade de referência: coberturas, terraços, caves, fundações e zonas húmidas — sistemas líquidos, telas e membranas.',
  },
  {
    icon: Layers,
    title: 'Revestimentos',
    desc: 'Revestimentos técnicos e decorativos para fachadas, interiores e zonas técnicas, com a solução certa para cada superfície.',
  },
  {
    icon: Thermometer,
    title: 'Isolamento Térmico',
    desc: 'ETICS (capoto), coberturas e paredes — soluções que reduzem perdas de energia e melhoram o conforto do edifício.',
  },
  {
    icon: Volume2,
    title: 'Isolamento Acústico',
    desc: 'Controlo de ruído em pavimentos, paredes e tetos, para um ambiente mais silencioso em habitação e espaços de trabalho.',
  },
  {
    icon: SquareStack,
    title: 'Pavimentos',
    desc: 'Pavimentos técnicos, autonivelantes e de resina, preparados para resistir ao uso e a exigências específicas.',
  },
  {
    icon: Store,
    title: 'Loja de materiais técnicos',
    desc: 'Venda ao público e a profissionais, com aconselhamento técnico para escolher o produto e o sistema adequados.',
    highlight: true,
  },
]

// ── Brand partners (trust strip — text badges) ───────────────────────────────
export const partners = [
  'Sika',
  'Soprema',
  'Imperalum',
  'Schlüter Systems',
  'Mapei',
  'Texsa',
  'Weber',
]

// ── Detailed services (Serviços page) ────────────────────────────────────────
export const services = [
  {
    icon: Droplets,
    title: 'Impermeabilização',
    desc: 'Tratamento e proteção de coberturas, terraços, varandas, caves, depósitos e fundações contra a água e a humidade.',
    points: [
      'Telas asfálticas e membranas sintéticas',
      'Sistemas de impermeabilização líquida',
      'Coberturas planas e inclinadas',
      'Tratamento de humidades e infiltrações',
    ],
  },
  {
    icon: Layers,
    title: 'Revestimentos',
    desc: 'Revestimentos técnicos e decorativos que protegem e valorizam fachadas, interiores e zonas de uso intenso.',
    points: [
      'Revestimentos de fachada',
      'Argamassas e sistemas técnicos',
      'Acabamentos decorativos',
      'Proteção e reabilitação de superfícies',
    ],
  },
  {
    icon: Thermometer,
    title: 'Isolamento Térmico',
    desc: 'Soluções de isolamento que reduzem o consumo de energia e aumentam o conforto, no inverno e no verão.',
    points: [
      'Sistemas ETICS (capoto)',
      'Isolamento de coberturas',
      'Isolamento de paredes e tetos',
      'Eficiência energética do edifício',
    ],
  },
  {
    icon: Volume2,
    title: 'Isolamento Acústico',
    desc: 'Controlo de ruído aéreo e de percussão, para espaços mais silenciosos e confortáveis.',
    points: [
      'Isolamento de pavimentos',
      'Tratamento de paredes e tetos',
      'Redução de ruído entre divisões',
      'Soluções para habitação e serviços',
    ],
  },
  {
    icon: SquareStack,
    title: 'Pavimentos',
    desc: 'Pavimentos técnicos preparados para o desgaste, com base bem executada e acabamento à medida do uso.',
    points: [
      'Pavimentos autonivelantes',
      'Pavimentos de resina',
      'Preparação e regularização de bases',
      'Soluções para uso intenso',
    ],
  },
]

// ── Differentiators / values ─────────────────────────────────────────────────
export const values = [
  {
    icon: PackageSearch,
    title: 'Gama técnica profunda',
    text: 'Trabalhamos com as principais marcas do setor e mantemos uma oferta ampla, para encontrar a solução certa para cada caso.',
  },
  {
    icon: ClipboardCheck,
    title: 'Aconselhamento a sério',
    text: 'Não vendemos apenas produto: ajudamos a escolher o sistema adequado e a aplicá-lo bem, com base em 30 anos de experiência.',
  },
  {
    icon: Building2,
    title: 'Loja de referência',
    text: 'Uma loja física de referência na região de Lisboa, ao serviço de particulares, construtores e aplicadores.',
  },
]

// ── Process (how works are run) ──────────────────────────────────────────────
export const steps = [
  {
    icon: ClipboardCheck,
    title: 'Diagnóstico',
    text: 'Avaliamos o problema no local ou na loja e identificamos a causa, não apenas o sintoma.',
  },
  {
    icon: PackageSearch,
    title: 'Solução técnica',
    text: 'Recomendamos o sistema e os materiais certos, das marcas com que trabalhamos.',
  },
  {
    icon: Hammer,
    title: 'Aplicação',
    text: 'Executamos a obra com rigor, ou fornecemos tudo para quem prefere aplicar.',
  },
  {
    icon: ShieldCheck,
    title: 'Resultado duradouro',
    text: 'Soluções pensadas para durar, com o acompanhamento de quem já é referência no setor.',
  },
]

// ── Stats ────────────────────────────────────────────────────────────────────
export const stats = [
  { value: '30', label: 'Anos de experiência' },
  { value: '1993', label: 'No mercado desde' },
  { value: '4,4★', label: '71 avaliações Google' },
  { value: 'PME', label: 'Líder' },
]

// ── Trust badges (about / hero) ──────────────────────────────────────────────
export const badges = [
  { icon: Award, label: 'PME Líder' },
  { icon: ShieldCheck, label: 'Há 30 anos' },
  { icon: Star, label: '4,4★ · 71 avaliações' },
]

// ── Team blurb cards ─────────────────────────────────────────────────────────
export const team = [
  {
    icon: HardHat,
    title: 'Equipa de aplicação',
    text: 'Aplicadores experientes em impermeabilização, isolamento e pavimentos, habituados a obras de exigência.',
  },
  {
    icon: Store,
    title: 'Atendimento de loja',
    text: 'Profissionais que conhecem a gama e ajudam a escolher, com o aconselhamento técnico que nos distingue.',
  },
  {
    icon: ClipboardCheck,
    title: 'Orçamentos e obra',
    text: 'Apoio na avaliação de cada caso e na preparação de orçamentos, para particulares e empresas.',
  },
]

// ── Obras Realizadas gallery (picsum placeholders) ───────────────────────────
export const gallery = [
  { seed: 'iri-1', title: 'Impermeabilização de cobertura', tag: 'Impermeabilização' },
  { seed: 'iri-2', title: 'Sistema ETICS em fachada', tag: 'Isolamento térmico' },
  { seed: 'iri-3', title: 'Terraço técnico', tag: 'Impermeabilização' },
  { seed: 'iri-4', title: 'Pavimento de resina', tag: 'Pavimentos' },
  { seed: 'iri-5', title: 'Revestimento de fachada', tag: 'Revestimentos' },
  { seed: 'iri-6', title: 'Tratamento de humidades', tag: 'Impermeabilização' },
]

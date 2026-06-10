import {
  Zap,
  Radio,
  Wrench,
  CircuitBoard,
  Cpu,
  Package,
  ShieldCheck,
  Headset,
  Factory,
  Layers,
  PackageCheck,
  Car,
  Boxes,
  Gauge,
  Clock,
  Settings2,
} from 'lucide-react'

// ── Brand ────────────────────────────────────────────────────────────────────
export const slug = 'rui-dinis'

export const brand = {
  name: 'Rui Dinis',
  full: 'Rui Dinis — Reparações e Acessórios Industriais, Lda.',
  short: 'Rui Dinis, Lda.',
  tagline: 'Resposta às exigências industriais.',
  intro:
    'Eletrónica industrial de nicho desde 2002: reparação, manutenção e comercialização de máquinas de alta frequência (soldadura HF/RF) e de ultra-sons, com assistência técnica especializada a equipamentos industriais.',
  // Contacts — real facts only.
  phoneDisplay: '+351 217 647 203',
  phoneHref: 'tel:+351217647203',
  mobileDisplay: '917 320 561',
  whatsapp: 'https://wa.me/351917320561',
  faxDisplay: '217 604 091',
  email: 'geral@ruidinis.com',
  emailHref: 'mailto:geral@ruidinis.com',
  address: 'Rua Rogério Amaral, 6 – Loja A, 1500-517 Lisboa (Benfica)',
  addressShort: 'Rua Rogério Amaral, 6 – Loja A · Benfica, Lisboa',
  mapsQuery: 'Rua Rogério Amaral 6, 1500-517 Lisboa',
  hours: 'Seg–Sex · horário comercial',
  since: 2002,
}

export const nav = [
  { label: 'Início', to: '' },
  { label: 'Soluções', to: 'solucoes' },
  { label: 'Sobre', to: 'sobre' },
  { label: 'Contacto', to: 'contacto' },
]

// ── Capability strip (trust / facts, no reviews) ─────────────────────────────
export const capabilities = [
  { icon: Clock, code: 'EST. 2002', title: 'Desde 2002', text: 'Mais de duas décadas dedicadas à eletrónica industrial de alta frequência e ultra-sons.' },
  { icon: ShieldCheck, code: 'EXCL. PT', title: 'Representante exclusivo', text: 'Representação exclusiva em Portugal de marcas de equipamento industrial.' },
  { icon: Headset, code: 'PÓS-VENDA', title: 'Assistência especializada', text: 'Suporte técnico e pós-venda dedicado, com peças e know-how próprios.' },
  { icon: Gauge, code: 'NICHO', title: 'Especialista de nicho', text: 'Foco exclusivo num segmento técnico exigente da indústria nacional.' },
]

// ── Solutions / equipment catalogue ──────────────────────────────────────────
export const solutions = [
  {
    icon: Zap,
    code: 'HF / RF',
    title: 'Máquinas de Alta Frequência',
    desc: 'Soldadura HF/RF de termoplásticos. Reparação, manutenção e comercialização de equipamento de alta frequência.',
    tags: ['Soldadura HF', 'Termoplásticos', 'Reparação'],
  },
  {
    icon: Radio,
    code: 'US',
    title: 'Máquinas de Ultra-Sons',
    desc: 'Comercialização de equipamento de soldadura por ultra-sons para aplicações industriais de precisão.',
    tags: ['Ultra-sons', 'Comercialização', 'Soldadura'],
  },
  {
    icon: CircuitBoard,
    code: 'REP',
    title: 'Reparação de Eletrónica Industrial',
    desc: 'Diagnóstico e reparação de placas e sistemas eletrónicos industriais, com recondicionamento ao nível de componente.',
    tags: ['Diagnóstico', 'Placas', 'Recondicionamento'],
  },
  {
    icon: Wrench,
    code: 'AT',
    title: 'Assistência Técnica',
    desc: 'Manutenção preventiva e corretiva e assistência técnica a equipamentos industriais no terreno e em oficina.',
    tags: ['Preventiva', 'Corretiva', 'No terreno'],
  },
  {
    icon: Cpu,
    code: 'CMP',
    title: 'Componentes Eletrónicos',
    desc: 'Fornecimento de componentes eletrónicos para aplicações industriais e para a reparação de equipamento.',
    tags: ['Componentes', 'Industrial', 'Fornecimento'],
  },
  {
    icon: Package,
    code: 'ACS',
    title: 'Consumíveis e Acessórios',
    desc: 'Telas plásticas, barras de latão, ferragens e demais consumíveis para soldadura e produção.',
    tags: ['Telas plásticas', 'Barras de latão', 'Ferragens'],
  },
]

// ── Consumables (catalogue detail on Soluções) ───────────────────────────────
export const consumables = [
  { icon: Layers, title: 'Telas plásticas', text: 'Telas técnicas para apoio à soldadura de alta frequência e proteção de molde.' },
  { icon: Settings2, title: 'Barras de latão', text: 'Barras de latão para elétrodos e ferramenta de soldadura HF.' },
  { icon: Boxes, title: 'Ferragens', text: 'Ferragens e acessórios diversos de apoio à montagem e à produção.' },
  { icon: Cpu, title: 'Componentes eletrónicos', text: 'Peças e componentes para reparação e manutenção de equipamento.' },
]

// ── Process / how we work ────────────────────────────────────────────────────
export const process = [
  { step: '01', title: 'Diagnóstico', text: 'Avaliamos o equipamento e identificamos a origem da avaria ou necessidade.' },
  { step: '02', title: 'Proposta', text: 'Apresentamos orçamento e plano de intervenção, com peças e prazos.' },
  { step: '03', title: 'Intervenção', text: 'Reparação, manutenção ou instalação por técnicos especializados.' },
  { step: '04', title: 'Pós-venda', text: 'Acompanhamento, consumíveis e assistência continuada ao equipamento.' },
]

// ── Applications / sectors ───────────────────────────────────────────────────
export const sectors = [
  { icon: PackageCheck, title: 'Embalagem', text: 'Soldadura de embalagem e blister em linhas de produção.' },
  { icon: Layers, title: 'Lonas e telas plásticas', text: 'União e selagem de lonas, toldos e telas técnicas.' },
  { icon: Factory, title: 'Termoformagem', text: 'Apoio a processos de termoformagem de plásticos.' },
  { icon: Car, title: 'Indústria automóvel', text: 'Componentes e acabamentos soldados para o setor automóvel.' },
  { icon: Boxes, title: 'PVC e termoplásticos', text: 'Soldadura de PVC e termoplásticos para múltiplas aplicações.' },
]

// ── Stats ────────────────────────────────────────────────────────────────────
export const stats = [
  { value: '2002', label: 'No mercado desde' },
  { value: 'HF · US', label: 'Tecnologias-chave' },
  { value: 'PT', label: 'Representação exclusiva' },
  { value: '1:1', label: 'Assistência dedicada' },
]

// ── Positioning points (Sobre) ───────────────────────────────────────────────
export const positioning = [
  {
    icon: Clock,
    title: 'Experiência desde 2002',
    text: 'Mais de vinte anos de prática dedicada à eletrónica industrial de alta frequência e ultra-sons.',
  },
  {
    icon: ShieldCheck,
    title: 'Representante exclusivo',
    text: 'Representação exclusiva em Portugal de marcas de equipamento industrial do segmento.',
  },
  {
    icon: Headset,
    title: 'Assistência e pós-venda',
    text: 'Forte componente de assistência técnica e apoio pós-venda, com peças e consumíveis próprios.',
  },
  {
    icon: Gauge,
    title: 'Especialista de nicho',
    text: 'Foco exclusivo num segmento técnico exigente, com conhecimento profundo do equipamento.',
  },
]

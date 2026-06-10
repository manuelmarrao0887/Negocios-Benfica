import {
  Building2,
  Home as HomeIcon,
  Factory,
  Gauge,
  Feather,
  Layers,
  ThermometerSun,
  Recycle,
  Trash2,
  Compass,
  Handshake,
  Sparkles,
  ClipboardCheck,
  PencilRuler,
  Wrench,
  Search,
  PenTool,
  Boxes,
  CheckCircle2,
} from 'lucide-react'

// ── Brand ────────────────────────────────────────────────────────────────────
export const slug = 'farol-vibrante'

export const brand = {
  name: 'Farol Vibrante',
  full: 'Farol Vibrante — Construções LSF',
  domain: 'farolvibrante.pt',
  tagline: 'Especialistas em Light Steel Framing.',
  claim: 'Construímos mais rápido, mais leve, mais sustentável.',
  intro:
    'Construtora especializada em Light Steel Framing — aço leve galvanizado. Levamos a construção industrializada à habitação, ao comércio e à indústria, com o rigor e a orientação de um farol: luz, método e confiança em cada obra.',
  // Sem telefone/email verificados — contacto é por formulário de pedido de orçamento + morada.
  address: 'R. Cmte. Henrique Maya 7C, Lisboa',
  mapsQuery: 'Rua Comandante Henrique Maya 7C, Lisboa',
}

export const nav = [
  { label: 'Início', to: '' },
  { label: 'Serviços', to: 'servicos' },
  { label: 'Sobre', to: 'sobre' },
  { label: 'Contacto', to: 'contacto' },
]

// ── Highlights / trust strip ─────────────────────────────────────────────────
export const highlights = [
  { icon: Gauge, title: 'Até 6× mais rápido', text: 'Construção industrializada que reduz drasticamente os prazos de obra.' },
  { icon: Feather, title: '~80% mais leve', text: 'Estrutura em aço leve que simplifica fundações e logística.' },
  { icon: ThermometerSun, title: 'Conforto térmico', text: 'Melhor desempenho térmico e acústico, dia após dia.' },
  { icon: Recycle, title: 'Aço reciclável', text: 'Aço galvanizado 100% reciclável e menos desperdício em obra.' },
]

// ── Services ─────────────────────────────────────────────────────────────────
export const services = [
  {
    icon: Building2,
    title: 'Construção e Remodelações',
    desc: 'Edifícios novos e remodelações em Light Steel Framing — residencial, comercial e industrial, do projeto à entrega.',
    points: ['Moradias e edifícios habitacionais', 'Espaços comerciais e de serviços', 'Naves e edifícios industriais', 'Ampliações e sobreelevações em aço leve'],
  },
  {
    icon: PencilRuler,
    title: 'Projeto e Consultoria',
    desc: 'Desenvolvimento de projeto e consultoria técnica em LSF, para tomar decisões com base sólida desde o primeiro traço.',
    points: ['Estudo de viabilidade e soluções LSF', 'Desenvolvimento e compatibilização de projeto', 'Consultoria técnica e otimização de soluções', 'Apoio na escolha de sistemas e acabamentos'],
  },
  {
    icon: ClipboardCheck,
    title: 'Gestão e Fiscalização de Obra',
    desc: 'Coordenação, planeamento e fiscalização de obra com método e rigor — a sua obra orientada por quem domina o sistema.',
    points: ['Planeamento e gestão de prazos', 'Coordenação de equipas e fornecedores', 'Fiscalização e controlo de qualidade', 'Acompanhamento até à entrega final'],
  },
]

// ── "Porquê LSF" — educational value props (REAL) ────────────────────────────
export const lsfReasons = [
  { icon: Gauge, stat: 'Até 6×', label: 'Mais rápido', text: 'A construção industrializada em aço leve pode ser até seis vezes mais rápida do que a construção convencional.' },
  { icon: Feather, stat: '~80%', label: 'Mais leve', text: 'A estrutura em aço leve galvanizado é cerca de 80% mais leve, o que simplifica fundações e transporte.' },
  { icon: Layers, stat: 'Fundações', label: 'Simplificadas', text: 'Menos carga sobre o solo permite fundações mais simples e económicas, mesmo em terrenos exigentes.' },
  { icon: ThermometerSun, stat: 'Térmico', label: 'e acústico', text: 'O sistema integra isolamento de elevado desempenho, com maior conforto térmico e acústico.' },
  { icon: Recycle, stat: '100%', label: 'Reciclável', text: 'O aço galvanizado é totalmente reciclável, uma escolha mais sustentável ao longo de todo o ciclo de vida.' },
  { icon: Trash2, stat: 'Menos', label: 'Desperdício', text: 'A pré-fabricação rigorosa reduz o desperdício de materiais e a desordem em estaleiro.' },
]

// Material-vs-labour ratio
export const ratio = [
  { value: '~80%', label: 'Material', text: 'Componentes produzidos com precisão industrial.', accent: true },
  { value: '~20%', label: 'Mão-de-obra', text: 'Montagem rápida, limpa e previsível em obra.', accent: false },
]

// ── Conventional vs Steel Frame comparison ───────────────────────────────────
export const comparison = {
  rows: [
    { label: 'Prazo de execução', conv: 'Longo e dependente do clima', lsf: 'Até 6× mais rápido' },
    { label: 'Peso da estrutura', conv: 'Estrutura pesada (betão/alvenaria)', lsf: '~80% mais leve' },
    { label: 'Fundações', conv: 'Reforçadas e dispendiosas', lsf: 'Simplificadas' },
    { label: 'Desempenho térmico', conv: 'Variável, pontes térmicas', lsf: 'Elevado isolamento integrado' },
    { label: 'Desperdício em obra', conv: 'Elevado', lsf: 'Reduzido, pré-fabricação rigorosa' },
    { label: 'Sustentabilidade', conv: 'Materiais de difícil reciclagem', lsf: 'Aço 100% reciclável' },
    { label: 'Estaleiro', conv: 'Húmido e desorganizado', lsf: 'Seco, limpo e previsível' },
  ],
}

// ── Values (REAL) ────────────────────────────────────────────────────────────
export const values = [
  {
    icon: Handshake,
    title: 'Fazemos Juntos',
    text: 'Trabalhamos lado a lado com cada cliente, numa relação de confiança mútua, do primeiro esboço à entrega da chave.',
  },
  {
    icon: Sparkles,
    title: 'Fazemos com Excelência',
    text: 'Rigor técnico em cada detalhe — porque uma estrutura sólida começa numa exigência sólida.',
  },
  {
    icon: Compass,
    title: 'Fazemos Diferente',
    text: 'Abraçamos a construção industrializada em aço leve para construir melhor, mais limpo e mais sustentável.',
  },
]

// ── Process steps ────────────────────────────────────────────────────────────
export const process = [
  { icon: Search, num: '01', title: 'Diagnóstico', text: 'Ouvimos a sua ideia e avaliamos a viabilidade da solução em Light Steel Framing.' },
  { icon: PenTool, num: '02', title: 'Projeto', text: 'Desenvolvemos e compatibilizamos o projeto, com orientação técnica em cada decisão.' },
  { icon: Boxes, num: '03', title: 'Fabrico', text: 'Os componentes em aço leve são produzidos com precisão industrial e baixo desperdício.' },
  { icon: Wrench, num: '04', title: 'Montagem', text: 'Montagem rápida, limpa e previsível em obra, com gestão e fiscalização rigorosas.' },
  { icon: CheckCircle2, num: '05', title: 'Entrega', text: 'Entregamos a obra concluída, com o conforto e o desempenho que o sistema garante.' },
]

// ── Stats / number band ──────────────────────────────────────────────────────
export const stats = [
  { value: '6×', label: 'Mais rápido' },
  { value: '80%', label: 'Mais leve' },
  { value: '100%', label: 'Aço reciclável' },
  { value: '3', label: 'Valores que nos guiam' },
]

// ── Sectors served ───────────────────────────────────────────────────────────
export const sectors = [
  { icon: HomeIcon, title: 'Residencial', text: 'Moradias e edifícios habitacionais à medida.' },
  { icon: Building2, title: 'Comercial', text: 'Lojas, escritórios e espaços de serviços.' },
  { icon: Factory, title: 'Industrial', text: 'Naves e estruturas para a indústria.' },
]

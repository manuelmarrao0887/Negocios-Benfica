import {
  Flame,
  Hammer,
  Wrench,
  Trash2,
  ClipboardCheck,
  Calculator,
  ShieldCheck,
  HardHat,
  Globe2,
  Layers,
  Factory,
  Building2,
  FlaskConical,
  Boxes,
  Thermometer,
  Gauge,
  Award,
  CheckCircle2,
} from 'lucide-react'

// ── Brand ────────────────────────────────────────────────────────────────────
export const slug = 'fornoportugal'

export const brand = {
  name: 'Fornoportugal',
  full: 'Fornoportugal — Montagem de Refractários, Lda.',
  tagline: 'Engenharia de refractários para a indústria.',
  claim: '100% de satisfação dos clientes.',
  intro:
    'Engenharia de fornos refractários industriais: construção, reconstrução e isolamento de fornos para alta temperatura. Atuação B2B internacional, com mais de 30 anos de experiência ao serviço da indústria pesada.',
  // Contacts — real facts only.
  phoneDisplay: '+351 21 760 41 50',
  phoneHref: 'tel:+351217604150',
  phones: [
    { display: '+351 21 760 41 50', href: 'tel:+351217604150' },
    { display: '+351 21 760 41 58', href: 'tel:+351217604158' },
    { display: '+351 21 760 41 59', href: 'tel:+351217604159' },
  ],
  email: 'geral@fornoportugal.com',
  emailHref: 'mailto:geral@fornoportugal.com',
  address: 'Rua das Pedralvas 23A, 1500-487 Lisboa',
  mapsQuery: 'Rua das Pedralvas 23A, 1500-487 Lisboa',
  hours: 'Seg–Sex · horário comercial',
  domain: 'fornoportugal.com',
  since: 1991,
}

export const nav = [
  { label: 'Início', to: '' },
  { label: 'Serviços', to: 'servicos' },
  { label: 'Sobre', to: 'sobre' },
  { label: 'Contacto', to: 'contacto' },
]

// ── Stats / authority ────────────────────────────────────────────────────────
export const stats = [
  { value: '1991', label: 'Fundada em' },
  { value: '30+', label: 'Anos de experiência' },
  { value: '27', label: 'Países de atuação' },
  { value: '100%', label: 'Satisfação dos clientes' },
]

// ── Trust strip (highlights) ─────────────────────────────────────────────────
export const highlights = [
  { icon: Thermometer, title: 'Alta temperatura', text: 'Fornos industriais concebidos para os ambientes térmicos mais exigentes.' },
  { icon: Globe2, title: 'Atuação internacional', text: 'Obras executadas em 27 países, de Portugal ao Médio Oriente e às Américas.' },
  { icon: ShieldCheck, title: 'Certificação ISO', text: 'ISO 9001 (desde 2010) e ISO 45001 — qualidade e segurança no terreno.' },
  { icon: HardHat, title: 'Foco em zero acidentes', text: 'Métodos operativos e análise de riscos em cada intervenção.' },
]

// ── Services (the 6 core) ────────────────────────────────────────────────────
export const services = [
  {
    icon: Hammer,
    title: 'Construção e reconstrução refractária',
    short: 'Construção e reconstrução',
    desc: 'Montagem e remontagem completa de revestimentos refractários para fornos de alta temperatura, do projeto à entrega.',
    detail:
      'Executamos a construção integral de fornos refractários novos e a reconstrução de unidades em fim de campanha — assentamento de tijolo refractário, betões e isolamentos, com controlo dimensional e térmico rigoroso.',
  },
  {
    icon: Flame,
    title: 'Reparações a frio e a quente',
    short: 'Reparações a frio e a quente',
    desc: 'Intervenções de manutenção com o forno parado ou em operação, para prolongar a campanha sem paragens desnecessárias.',
    detail:
      'Reparações localizadas a frio durante paragens programadas e reparações a quente com o forno em serviço, minimizando perdas de produção e maximizando a vida útil do revestimento.',
  },
  {
    icon: Trash2,
    title: 'Demolição e gestão de resíduos',
    short: 'Demolição mecânica e manual',
    desc: 'Demolição mecânica e manual de revestimentos, com triagem e gestão responsável dos resíduos refractários.',
    detail:
      'Demolição controlada de revestimentos esgotados, por meios mecânicos e manuais, seguida de triagem, remoção e gestão dos resíduos de acordo com as exigências ambientais.',
  },
  {
    icon: ClipboardCheck,
    title: 'Supervisão de obra',
    short: 'Supervisão de obra',
    desc: 'Acompanhamento técnico e coordenação no terreno para garantir qualidade, prazos e segurança.',
    detail:
      'Supervisão de execução com equipas próprias ou em apoio ao cliente, assegurando conformidade com o projeto, controlo de qualidade e cumprimento dos planos de segurança.',
  },
  {
    icon: Calculator,
    title: 'Avaliação e orçamentação de obras',
    short: 'Avaliação e orçamentação',
    desc: 'Levantamento técnico e orçamentação detalhada de intervenções refractárias.',
    detail:
      'Análise do estado dos revestimentos, definição de soluções e orçamentação transparente, com estimativa de materiais, mão de obra e calendário de intervenção.',
  },
  {
    icon: Layers,
    title: 'Métodos operativos e análise de riscos',
    short: 'Métodos e análise de riscos',
    desc: 'Elaboração de métodos operativos de intervenção e análise de riscos para cada obra.',
    detail:
      'Preparamos métodos operativos detalhados e análises de risco específicas por obra, base do nosso compromisso com a segurança e com o objetivo de zero acidentes.',
  },
]

// ── Sectors / furnace types ──────────────────────────────────────────────────
export const sectors = [
  { icon: Layers, title: 'Floats', text: 'Fornos de vidro float para produção de vidro plano.' },
  { icon: Boxes, title: 'Fornos de embalagens', text: 'Fornos para vidro de embalagem — garrafas e frascos.' },
  { icon: Flame, title: 'Fornos de fibras', text: 'Unidades de fusão para produção de fibras.' },
  { icon: Factory, title: 'Siderurgias', text: 'Revestimentos refractários para a indústria do aço.' },
  { icon: Building2, title: 'Cimenteiras', text: 'Fornos rotativos e instalações para produção de cimento.' },
  { icon: FlaskConical, title: 'Refinarias', text: 'Equipamentos térmicos para a indústria petroquímica.' },
]

// ── Global footprint ─────────────────────────────────────────────────────────
export const countries = [
  'Portugal', 'França', 'Bélgica', 'Luxemburgo', 'Alemanha', 'Áustria', 'Espanha',
  'Itália', 'Finlândia', 'Reino Unido', 'Suíça', 'Roménia', 'Kuwait', 'Irão',
  'Arábia Saudita', 'China', 'Taiwan', 'Índia', 'Egito', 'Argélia', 'Líbia',
  'RD Congo', 'EUA', 'Costa Rica', 'México', 'Colômbia', 'Brasil',
]

// ── Certifications ───────────────────────────────────────────────────────────
export const certifications = [
  {
    icon: Award,
    code: 'ISO 9001',
    title: 'Sistema de Gestão da Qualidade',
    text: 'Certificada desde 2010 pela Bureau Veritas. Processos auditados para garantir consistência e rigor em cada obra.',
  },
  {
    icon: ShieldCheck,
    code: 'ISO 45001',
    title: 'Segurança e Saúde no Trabalho',
    text: 'Sistema de gestão da segurança orientado para a prevenção e para o objetivo permanente de zero acidentes.',
  },
]

// ── Process / how we work ────────────────────────────────────────────────────
export const process = [
  { step: '01', icon: Calculator, title: 'Avaliação', text: 'Levantamento técnico, diagnóstico do revestimento e orçamentação detalhada.' },
  { step: '02', icon: Layers, title: 'Planeamento', text: 'Elaboração de métodos operativos de intervenção e análise de riscos.' },
  { step: '03', icon: Hammer, title: 'Execução', text: 'Demolição, construção ou reparação com equipas especializadas no terreno.' },
  { step: '04', icon: ClipboardCheck, title: 'Supervisão', text: 'Controlo de qualidade, prazos e segurança até à entrega do forno.' },
]

// ── Why us / values ──────────────────────────────────────────────────────────
export const values = [
  {
    icon: Gauge,
    title: 'Engenharia rigorosa',
    text: 'Cada forno é um sistema térmico exigente. Trabalhamos com controlo dimensional e material para entregar revestimentos fiáveis.',
  },
  {
    icon: HardHat,
    title: 'Segurança em primeiro lugar',
    text: 'Métodos operativos e análise de riscos por obra. A meta é simples e inegociável: zero acidentes.',
  },
  {
    icon: CheckCircle2,
    title: 'Compromisso com o cliente',
    text: 'Mais de três décadas de obras a sustentar uma reputação de rigor e o nosso objetivo de 100% de satisfação.',
  },
]

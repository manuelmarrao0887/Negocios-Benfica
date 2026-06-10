import {
  Tv,
  Cpu,
  Search,
  FileText,
  Wrench,
  ShieldCheck,
  Lightbulb,
  MonitorOff,
  MonitorDot,
  Zap,
  AlertTriangle,
  Sparkles,
  Activity,
  Gauge,
  CircuitBoard,
  Radar,
  ScanLine,
  Waves,
  Phone,
  PhoneCall,
  Headphones,
  Clock,
} from 'lucide-react'

// ── Brand ────────────────────────────────────────────────────────────────────
export const slug = 'reparacao-tv-lisboa'

export const brand = {
  name: 'Reparação TV Lisboa',
  full: 'Reparação TV Lisboa — Assistência Técnica',
  tagline: 'Especialistas exclusivos em reparação de televisores.',
  intro:
    'Assistência técnica dedicada em exclusivo à reparação de televisores — LED, LCD, Plasma e Smart TV. Diagnóstico rigoroso, orçamento gratuito e reparação só após a sua aprovação.',
  phoneDisplay: '917 616 515',
  phoneHref: 'tel:+351917616515',
  whatsapp: 'https://wa.me/351917616515',
  email: 'reparacaotvlisboa@gmail.com',
  emailHref: 'mailto:reparacaotvlisboa@gmail.com',
  address: 'Calçada do Tojal 53B, 1500-592 Lisboa',
  mapsQuery: 'Calçada do Tojal 53B, 1500-592 Lisboa',
  hours: 'Seg–Sex · 9h30–13h00 e 14h00–19h30',
  hoursWeekend: 'Sáb e Dom · Encerrado',
  since: 1990,
}

export const nav = [
  { label: 'Início', to: '' },
  { label: 'Serviços', to: 'servicos' },
  { label: 'Sobre', to: 'sobre' },
  { label: 'Contacto', to: 'contacto' },
]

// ── Trust strip (under hero) ─────────────────────────────────────────────────
export const trust = [
  { icon: ShieldCheck, title: 'Garantia real', text: '1 ano nas reparações e 2 anos na substituição de LEDs.' },
  { icon: FileText, title: 'Orçamento gratuito', text: 'Diagnóstico e orçamento sem compromisso, antes de avançar.' },
  { icon: Cpu, title: 'Foco exclusivo', text: 'Só reparamos televisores. Sem dispersão, mais precisão.' },
  { icon: PhoneCall, title: 'Apoio por telefone', text: 'Aconselhamento técnico direto, mesmo antes de trazer a TV.' },
]

// ── Process (3 steps) ────────────────────────────────────────────────────────
export const process = [
  {
    step: '01',
    icon: Search,
    title: 'Diagnóstico',
    desc: 'Avaliamos a avaria com equipamento de medição profissional e identificamos a causa real — não o sintoma.',
  },
  {
    step: '02',
    icon: FileText,
    title: 'Orçamento gratuito',
    desc: 'Explicamos o que falhou e quanto custa reparar, em linguagem clara e sem custos de avaliação.',
  },
  {
    step: '03',
    icon: Wrench,
    title: 'Reparação',
    desc: 'Avançamos apenas após a sua aprovação. A reparação é feita com peças adequadas e testada antes da entrega.',
  },
]

// ── Symptoms ("reconhece estes sinais?") ─────────────────────────────────────
export const symptoms = [
  { icon: MonitorOff, label: 'Ecrã preto com som', desc: 'Ouve o áudio, mas a imagem não aparece.' },
  { icon: MonitorDot, label: 'Imagem fraca ou escura', desc: 'O brilho caiu e a imagem mal se vê.' },
  { icon: Activity, label: 'LED de presença a piscar', desc: 'A luz pisca em sequência e a TV não liga.' },
  { icon: ShieldCheck, label: 'Modo de proteção ativado', desc: 'A televisão entra em proteção e desliga.' },
  { icon: ScanLine, label: 'Escurecimento parcial', desc: 'Zonas do ecrã ficam visivelmente mais escuras.' },
  { icon: Lightbulb, label: 'Manchas de luz', desc: 'Halos ou manchas luminosas no painel.' },
  { icon: Waves, label: 'Tom azulado', desc: 'A imagem ganha uma dominante de cor anormal.' },
]

// ── Services ─────────────────────────────────────────────────────────────────
export const services = [
  {
    icon: Tv,
    title: 'Reparação de televisores',
    desc: 'Reparamos televisores de quase todas as marcas — Samsung, LG e outras. LED, LCD, Plasma e Smart TV.',
    points: ['Quase todas as marcas', 'Painéis LED, LCD e Plasma', 'Smart TV incluída'],
  },
  {
    icon: Lightbulb,
    title: 'Substituição de kits de LED',
    desc: 'A nossa especialidade. Substituição de kits de retroiluminação LED em quase todas as marcas, com garantia alargada.',
    points: ['Especialidade da casa', 'Quase todas as marcas', '2 anos de garantia'],
    featured: true,
  },
  {
    icon: Search,
    title: 'Diagnóstico detalhado',
    desc: 'Medição rigorosa com equipamento profissional para identificar a origem exata da avaria antes de qualquer intervenção.',
    points: ['Causa real, não o sintoma', 'Equipamento de medição', 'Orçamento gratuito'],
  },
]

// ── Symptom → solution mapping (Serviços page) ───────────────────────────────
export const diagnosis = [
  {
    symptom: 'Ecrã preto, mas com som',
    cause: 'Falha na retroiluminação — tipicamente LEDs ou a placa que os alimenta.',
    icon: MonitorOff,
  },
  {
    symptom: 'LED de presença a piscar',
    cause: 'Código de erro do televisor. Lemos o padrão e localizamos a etapa em falha.',
    icon: Activity,
  },
  {
    symptom: 'Imagem escura ou com manchas',
    cause: 'Desgaste parcial dos LEDs ou difusor — corrige-se com substituição do kit.',
    icon: ScanLine,
  },
  {
    symptom: 'Modo de proteção / não liga',
    cause: 'Curto-circuito ou tensão fora de gama na fonte de alimentação.',
    icon: ShieldCheck,
  },
]

// ── Equipment (credibility) ──────────────────────────────────────────────────
export const equipment = [
  { icon: ScanLine, title: 'Verificador de ecrã e motherboard', desc: 'Testa painel e placa principal para isolar a origem da avaria.' },
  { icon: Radar, title: 'Detetor de curto-circuitos', desc: 'Miliohmímetro de precisão para localizar curtos na placa.' },
  { icon: Gauge, title: 'Multímetro com câmara de infravermelhos', desc: 'Mede e identifica componentes em sobreaquecimento.' },
  { icon: Activity, title: 'Osciloscópio digital 100 MHz', desc: 'Análise de sinais para validar o funcionamento dos circuitos.' },
]

// ── Brands strip (text only, no fake logos) ──────────────────────────────────
export const brands = ['Samsung', 'LG', 'Sony', 'Philips', 'Panasonic', 'TCL', 'Hisense', 'Toshiba']

// ── Guarantee ────────────────────────────────────────────────────────────────
export const guarantees = [
  { icon: Wrench, period: '1 ano', label: 'de garantia em todas as reparações' },
  { icon: Lightbulb, period: '2 anos', label: 'de garantia na substituição de LEDs' },
]

// ── Stats ────────────────────────────────────────────────────────────────────
export const stats = [
  { value: '35', label: 'Anos de experiência' },
  { value: '1990', label: 'No setor desde' },
  { value: '100%', label: 'Recomendado no Facebook' },
  { value: 'TV', label: 'Foco exclusivo' },
]

// ── About / philosophy values ────────────────────────────────────────────────
export const values = [
  {
    icon: Headphones,
    title: 'Atendimento pessoal',
    text: 'Explicamos a avaria e o custo em linguagem clara. Damos apoio técnico mesmo por telefone, antes de qualquer compromisso.',
  },
  {
    icon: ShieldCheck,
    title: 'Garantia sem desculpas',
    text: '“Quando se fala em garantia, não se pode negar a mesma em caso algum.” É esse o princípio que assumimos.',
  },
  {
    icon: CircuitBoard,
    title: 'Rigor de eletrónica',
    text: 'Diagnóstico ao nível do componente, com instrumentação profissional e formação de origem em eletrónica.',
  },
]

// Re-exports for convenience in pages
export { Phone, Zap, AlertTriangle, Sparkles, Clock }

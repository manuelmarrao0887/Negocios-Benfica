import {
  Sparkles,
  Stethoscope,
  Smile,
  ShieldCheck,
  Microscope,
  Activity,
  Bone,
  ScanLine,
  Zap,
  Wind,
  Layers,
  HeartPulse,
  Clock,
  Users,
  Award,
  HandHeart,
} from 'lucide-react'

// ── Brand ────────────────────────────────────────────────────────────────────
// All content below is sourced from the live clinic site (dentofisis.pt) and the
// Google business listing. No phones, emails, prices or testimonials invented.
export const slug = 'dentofisis'

export const brand = {
  name: 'DentoFisis',
  full: 'Clínica Dentária DentoFisis',
  tagline: 'Excelência na prevenção e reabilitação oral.',
  intro:
    'Clínica médica dentária em Entrecampos, Lisboa. Combinamos tecnologia avançada com um atendimento humanizado para transformar a sua saúde oral — diagnóstico rigoroso, tratamentos minimamente invasivos e resultados duradouros.',
  // Contacts — verified on the live site
  phoneDisplay: '+351 217 957 491',
  phoneHref: 'tel:+351217957491',
  mobileDisplay: '+351 912 257 463',
  mobileHref: 'tel:+351912257463',
  whatsapp: 'https://wa.me/351912257463',
  whatsappDisplay: '+351 912 257 463',
  email: 'dentofisis@gmail.com',
  emailHref: 'mailto:dentofisis@gmail.com',
  address: 'Rua de Entrecampos N.º 5, D · 1000-151 Lisboa',
  addressShort: 'Rua de Entrecampos 5D · Lisboa',
  mapsQuery: 'Rua de Entrecampos 5D, 1000-151 Lisboa',
  transport: 'Metro Campo Pequeno · estacionamento nas imediações',
  hours: '2ª a 6ª · 08h00 – 19h00',
  hoursShort: 'Seg–Sex · 08h00–19h00',
  // Google rating (real)
  rating: '4,7',
  reviews: '39',
  // Regulatory (real, from site footer)
  ers: '21346',
  licenca: '12781/2016',
  estabelecimento: 'E132767',
}

export const nav = [
  { label: 'Início', to: '' },
  { label: 'Tratamentos', to: 'tratamentos' },
  { label: 'Sobre', to: 'sobre' },
  { label: 'Contacto', to: 'contacto' },
]

// ── Highlights / trust strip ─────────────────────────────────────────────────
export const highlights = [
  { icon: Award, title: '20+ anos', text: 'Duas décadas de experiência clínica ao serviço do seu sorriso.' },
  { icon: Users, title: '10.000+ pacientes', text: 'Milhares de tratamentos realizados com confiança e rigor.' },
  { icon: ShieldCheck, title: 'Tecnologia avançada', text: 'Equipamento de última geração, minimamente invasivo.' },
  { icon: HandHeart, title: 'Atendimento humanizado', text: 'Cuidamos da pessoa, não apenas do dente.' },
]

// ── Treatments (specialidades) — from the live site ──────────────────────────
export const treatments = [
  {
    icon: Bone,
    title: 'Implantologia',
    desc: 'Soluções fixas e duradouras para substituir dentes perdidos, recuperando a estética e a função mastigatória total.',
  },
  {
    icon: Smile,
    title: 'Ortodontia',
    desc: 'Correção da posição dos dentes e maxilares para um sorriso harmonioso — aparelhos fixos convencionais e estéticos.',
  },
  {
    icon: Sparkles,
    title: 'Facetas',
    desc: 'Transforme o seu sorriso com facetas cerâmicas que mimetizam a beleza natural dos dentes.',
  },
  {
    icon: Stethoscope,
    title: 'Higiene Oral',
    desc: 'Prevenção e manutenção da saúde oral através de limpezas profissionais e destartarizações profundas.',
  },
  {
    icon: Activity,
    title: 'Oclusão e Bruxismo',
    desc: 'Diagnóstico e tratamento de problemas de mordida e da articulação temporomandibular, para eliminar dores e desconforto.',
  },
  {
    icon: HeartPulse,
    title: 'Periodontologia',
    desc: 'Tratamento especializado das gengivas e tecidos de suporte para garantir a saúde dos seus dentes.',
  },
]

// ── Exclusive protocols (serviços diferenciadores) ───────────────────────────
export const protocols = [
  { icon: Microscope, title: 'Microscopia Clínica Avançada', text: 'Precisão milimétrica em cada intervenção, com ampliação clínica.' },
  { icon: Zap, title: 'Tratamentos Assistidos por Laser', text: 'Procedimentos mais rápidos, suaves e com recuperação facilitada.' },
  { icon: Layers, title: 'Reabilitação Oral Completa', text: 'Planos integrados que devolvem função, conforto e estética.' },
  { icon: HandHeart, title: 'Anestesia Sem Dor', text: 'Técnicas que minimizam o desconforto da anestesia local.' },
]

// ── Technology (tecnologia de ponta) ─────────────────────────────────────────
export const technology = [
  { icon: Smile, title: 'Ortodontia Invisível', text: 'Alinhadores transparentes de última geração para um sorriso perfeito, sem metais.' },
  { icon: Wind, title: 'Ozonoterapia', text: 'Tratamento natural que elimina bactérias e acelera a cicatrização, de forma indolor.' },
  { icon: ScanLine, title: 'Scanner Intraoral', text: 'Moldes digitais em 3D com precisão milimétrica e conforto total, sem a massa tradicional.' },
  { icon: Bone, title: 'Cirurgia Guiada', text: 'Planeamento digital para implantes mais seguros, rápidos e com pós-operatório tranquilo.' },
  { icon: Sparkles, title: 'Airflow', text: 'Limpeza profunda e suave que remove manchas e biofilme sem agredir o esmalte.' },
  { icon: ScanLine, title: 'CBCT', text: 'Tomografia de feixe cónico para diagnóstico 3D preciso e planeamento cirúrgico avançado.' },
]

// ── Values / approach ────────────────────────────────────────────────────────
export const values = [
  {
    icon: ShieldCheck,
    title: 'Rigor e segurança',
    text: 'Diagnóstico cuidado e protocolos clínicos exigentes em cada fase do tratamento.',
  },
  {
    icon: HandHeart,
    title: 'Atendimento humanizado',
    text: 'Tempo para ouvir, explicar e tranquilizar. Uma experiência diferente no dentista.',
  },
  {
    icon: Microscope,
    title: 'Tecnologia ao serviço de si',
    text: 'Equipamento minimamente invasivo para tratamentos mais previsíveis e confortáveis.',
  },
]

export const stats = [
  { value: '20+', label: 'Anos de experiência' },
  { value: '10.000+', label: 'Pacientes' },
  { value: '4,7★', label: 'Avaliação Google' },
  { value: 'ERS', label: 'Clínica licenciada' },
]

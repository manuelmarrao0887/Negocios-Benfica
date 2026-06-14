import {
  Stethoscope,
  Bone,
  Sparkles,
  Smile,
  AlignHorizontalDistributeCenter,
  Layers,
  Activity,
  Baby,
  Moon,
  ScanLine,
  HeartPulse,
  Microscope,
  ShieldCheck,
  GraduationCap,
  Clock,
  Accessibility,
  Cpu,
  HandHeart,
} from 'lucide-react'

// ── Brand ────────────────────────────────────────────────────────────────────
// Real business: Clínica das Avenidas — Dr. Rui Delfim (medicina dentária), Lisboa.
// All contacts, team and treatments below are taken from the clinic's own site
// (clinicadasavenidas.com / archived) — no invented data.
export const slug = 'clinica-das-avenidas'

export const brand = {
  name: 'Clínica das Avenidas',
  full: 'Clínica das Avenidas — Dr. Rui Delfim',
  tagline: 'Medicina dentária de confiança, no centro de Lisboa.',
  intro:
    'A Clínica das Avenidas — Dr. Rui Delfim dispõe de todas as especialidades na área da medicina dentária e dos cuidados de saúde oral, com tecnologia moderna e uma equipa dedicada, no coração de Lisboa.',
  // Contacts (real)
  phoneDisplay: '21 797 5519',
  phoneHref: 'tel:+351217975519',
  mobileDisplay: '91 758 7000',
  mobileHref: 'tel:+351917587000',
  whatsapp: 'https://wa.me/351917587000',
  email: 'clinicadasavenidas@gmail.com',
  emailHref: 'mailto:clinicadasavenidas@gmail.com',
  address: 'Av. das Forças Armadas, n.º 4, 8.º J · 1600-082 Lisboa',
  addressShort: 'Av. das Forças Armadas 4, 8.º J · Lisboa',
  mapsQuery: 'Avenida das Forças Armadas 4, Lisboa',
  hours: '2ª a 6ª · 10h – 19h (almoço 13h – 15h)',
  hoursLines: ['Segunda a sexta-feira', '10h00 – 13h00 · 15h00 – 19h00'],
  // Public clinic registration (Ordem dos Médicos Dentistas)
  omd: 'Dr. Rui Delfim · OM 30450',
}

export const nav = [
  { label: 'Início', to: '' },
  { label: 'Tratamentos', to: 'tratamentos' },
  { label: 'Sobre', to: 'sobre' },
  { label: 'Contacto', to: 'contacto' },
]

// ── Trust strip (facts only) ─────────────────────────────────────────────────
export const highlights = [
  {
    icon: Stethoscope,
    title: 'Todas as especialidades',
    text: 'Medicina dentária completa e cuidados de saúde oral, sob o mesmo teto.',
  },
  {
    icon: Cpu,
    title: 'Tecnologia moderna',
    text: 'Scanners intra-orais, impressoras 3D, TAC 3D e Smile Design.',
  },
  {
    icon: Moon,
    title: 'Sedação e anestesia',
    text: 'Sedação consciente e anestesia geral para quem tem medo do dentista.',
  },
  {
    icon: HandHeart,
    title: 'Para toda a família',
    text: 'Da odontopediatria à odontogeriatria — cuidamos de todas as idades.',
  },
]

// ── Treatments (from the clinic's real service list) ─────────────────────────
export const treatments = [
  {
    icon: Stethoscope,
    title: 'Medicina Dentária Geral',
    desc: 'Consulta, diagnóstico e cuidados de rotina para manter a saúde do seu sorriso.',
  },
  {
    icon: Bone,
    title: 'Implantologia',
    desc: 'Implantes unitários ou em conjuntos de 4 e 6 para suportar próteses ou coroas, com garantia Straumann®.',
  },
  {
    icon: Layers,
    title: 'Reabilitação Oral',
    desc: 'Reconstrução completa do sorriso combinando implantes, próteses e estética.',
  },
  {
    icon: AlignHorizontalDistributeCenter,
    title: 'Ortodontia',
    desc: 'Aparelhos invisíveis, aparelhos Damon® e aparelhos estéticos para alinhar os dentes.',
  },
  {
    icon: Sparkles,
    title: 'Estética & Branqueamento',
    desc: 'Branqueamento e estética dentária para um sorriso mais harmonioso e luminoso.',
  },
  {
    icon: Smile,
    title: 'Próteses Dentárias',
    desc: 'Próteses fixas sobre implantes, próteses acrílicas, flexíveis e esqueléticas (cromo-cobalto).',
  },
  {
    icon: Activity,
    title: 'Endodontia',
    desc: 'Tratamento de canais com técnicas, materiais e tecnologia que o tornam simples e indolor.',
  },
  {
    icon: HeartPulse,
    title: 'Periodontologia',
    desc: 'Prevenção, diagnóstico e tratamento das doenças das gengivas e do osso de suporte.',
  },
  {
    icon: Sparkles,
    title: 'Higiene Oral',
    desc: 'Destartarização e cuidados preventivos — a sua visita recomendada de 6 em 6 meses.',
  },
  {
    icon: Baby,
    title: 'Odontopediatria',
    desc: 'Profissionais especializados no atendimento a crianças, com sedação consciente disponível.',
  },
  {
    icon: Accessibility,
    title: 'Odontogeriatria',
    desc: 'Cuidados de medicina dentária pensados especificamente para a 3.ª idade.',
  },
  {
    icon: Moon,
    title: 'Anestesia Geral & Sedação',
    desc: 'A alternativa para todos os que não conseguem enfrentar o medo de ir ao dentista.',
  },
]

// ── Technology / equipment (facts only) ──────────────────────────────────────
export const technology = [
  {
    icon: ScanLine,
    title: 'TAC 3D e Panorâmicas',
    text: 'Imagem 3D e radiografia panorâmica no local, para diagnósticos rigorosos.',
  },
  {
    icon: Cpu,
    title: 'Scanner & Impressão 3D',
    text: 'Scanners intra-orais e impressoras 3D para planeamento e próteses precisas.',
  },
  {
    icon: ShieldCheck,
    title: 'Implantes Straumann®',
    text: 'A mais recente e avançada tecnologia em implantes, com garantia Straumann®.',
  },
  {
    icon: Microscope,
    title: 'Fibrina & fatores de crescimento',
    text: 'Técnicas avançadas em cirurgia que favorecem uma recuperação mais rápida.',
  },
]

// ── Team (real — names, specialties and OMD numbers from the clinic) ─────────
export const team = [
  {
    name: 'Dr. Rui Delfim',
    role: 'Implantologia & Cirurgia',
    reg: 'OM 30450',
    initials: 'RD',
    bio: 'Médico dentista responsável pela clínica, dedicado à implantologia e à cirurgia oral.',
  },
  {
    name: 'Dra. Patrícia Mendes Delfim',
    role: 'Periodontologia · Diretora Clínica',
    reg: 'OMD 10001',
    initials: 'PD',
    bio: 'Diretora clínica, especialista em periodontologia — saúde das gengivas e tecidos de suporte.',
  },
  {
    name: 'Dr. Alexandre Maldonado',
    role: 'Medicina Dentária, Implantologia & Estética Facial',
    reg: 'OMD 93875',
    initials: 'AM',
    bio: 'Medicina dentária generalista, implantologia e estética facial e rejuvenescimento.',
  },
  {
    name: 'Dra. Bárbara Martins',
    role: 'Ortodontia',
    reg: 'OMD 10811',
    initials: 'BM',
    bio: 'Especialista em ortodontia, do alinhamento estético aos aparelhos invisíveis.',
  },
]

// ── Why choose / values ──────────────────────────────────────────────────────
export const values = [
  {
    icon: GraduationCap,
    title: 'Equipa especializada',
    text: 'Médicos dentistas inscritos na Ordem, com diferentes especialidades a trabalhar em conjunto.',
  },
  {
    icon: ShieldCheck,
    title: 'Tecnologia de excelência',
    text: 'Equipamentos 3D, scanners e implantes de marca para resultados previsíveis e seguros.',
  },
  {
    icon: HandHeart,
    title: 'Acompanhamento próximo',
    text: 'Cuidamos de si em todo o processo — da marcação ao acompanhamento pós-tratamento.',
  },
]

// ── How it works (from the clinic's own "agendamento" steps) ─────────────────
export const steps = [
  { n: '01', title: 'Pede a marcação', text: 'Preenche o formulário ou liga para a clínica.' },
  { n: '02', title: 'Confirmamos os dados', text: 'A nossa equipa verifica a informação do seu pedido.' },
  { n: '03', title: 'Ligamos para si', text: 'Combinamos consigo o melhor horário para a consulta.' },
  { n: '04', title: 'Faz a sua consulta', text: 'É recebido pela equipa para a avaliação ou tratamento.' },
]

export const stats = [
  { value: '4', label: 'Especialistas na equipa' },
  { value: '12+', label: 'Áreas de tratamento' },
  { value: '3D', label: 'Imagem e impressão' },
  { value: 'Straumann®', label: 'Implantes com garantia' },
]

// Subjects for the marcação form select (mirrors the clinic's real specialty list)
export const subjects = [
  'Medicina dentária geral',
  'Implantologia',
  'Reabilitação oral',
  'Ortodontia',
  'Estética e branqueamento',
  'Próteses dentárias',
  'Endodontia',
  'Periodontologia',
  'Higiene oral',
  'Odontopediatria',
  'Anestesia geral / sedação',
  'Outro assunto',
]

export const transports = [
  { label: 'Metro', text: 'Linha Amarela · saída de Entrecampos' },
  { label: 'Comboio', text: 'Estação de Entrecampos' },
  { label: 'Estacionamento', text: 'Piso -1 (estacionamento pago)' },
]

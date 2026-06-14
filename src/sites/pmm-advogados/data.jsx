import {
  Building2,
  RefreshCw,
  FileSignature,
  Briefcase,
  Gavel,
  Banknote,
  Landmark,
  KeyRound,
  Home as HomeIcon,
  Users,
  Stamp,
  ScrollText,
  ShieldCheck,
  Scale,
  Handshake,
  Target,
  Phone,
  Mail,
  MapPin,
  Clock,
} from 'lucide-react'

// ── Brand ────────────────────────────────────────────────────────────────────
// Real firm: Pereira Mouta Mendes & Associados, Sociedade de Advogados, SP, RL.
// Facts (contacts, address, team, practice areas, institutional copy) verified
// from the official site pmmadvogados.pt. Nothing invented.
export const slug = 'pmm-advogados'

export const brand = {
  name: 'Pereira Mouta Mendes & Associados',
  short: 'PMM & Associados',
  full: 'Pereira Mouta Mendes & Associados, Sociedade de Advogados, SP, RL',
  tagline: 'Ao serviço dos seus direitos, com rigor.',
  intro:
    'A Pereira Mouta Mendes & Associados é uma sociedade de advogados de referência, independente e inovadora, que assume como compromisso a qualidade dos serviços prestados e a satisfação dos interesses dos seus Clientes.',
  // Real contacts (pmmadvogados.pt/contactos)
  phoneDisplay: '217 160 319',
  phoneHref: 'tel:+351217160319',
  mobileDisplay: '913 119 772',
  mobileHref: 'tel:+351913119772',
  whatsapp: 'https://wa.me/351913119772',
  email: 'geral@pmmadvogados.pt',
  emailHref: 'mailto:geral@pmmadvogados.pt',
  address: 'Rua Dr. Bastos Gonçalves, N.º 5 B, 1600-898 Lisboa',
  addressShort: 'R. Dr. Bastos Gonçalves 5B · Lisboa',
  mapsQuery: 'Rua Doutor Bastos Gonçalves 5B, Lisboa',
  hours: 'Segunda a Sexta · 9h00 – 18h00',
  hoursNote: 'Atendimento presencial mediante marcação prévia.',
  linkedin:
    'https://www.linkedin.com/company/pereira-mouta-mendes-&-associados-sociedade-de-advogados-r.l.',
  since: 2016,
  rating: '4,8',
  reviews: '55',
}

export const nav = [
  { label: 'Início', to: '' },
  { label: 'Áreas de Prática', to: 'areas' },
  { label: 'A Sociedade', to: 'sobre' },
  { label: 'Contacto', to: 'contacto' },
]

// ── Values strip (verbatim institutional pillars from the firm) ──────────────
export const pillars = ['Excelência', 'Rigor', 'Profissionalismo', 'Ética']

// ── Highlights / trust strip ─────────────────────────────────────────────────
export const highlights = [
  {
    icon: Scale,
    title: 'Aconselhamento integral',
    text: 'Assessoria jurídica nas diferentes áreas do Direito e setores de atividade.',
  },
  {
    icon: Handshake,
    title: 'Proximidade com o Cliente',
    text: 'Acompanhamento próximo, atento às especificidades de cada situação.',
  },
  {
    icon: ShieldCheck,
    title: 'Conduta deontológica',
    text: 'Atuação pautada pela ética e pelo cumprimento dos deveres deontológicos.',
  },
  {
    icon: Target,
    title: 'Soluções à medida',
    text: 'Propomos as soluções que melhor respondem aos seus objetivos e interesses.',
  },
]

// ── Practice areas (exact names from pmmadvogados.pt/areas-de-atividade) ──────
export const areas = [
  {
    icon: Building2,
    title: 'Direito Societário e Comercial',
    desc: 'Constituição e reestruturação de sociedades, governo das empresas, operações comerciais e acompanhamento corrente da vida societária.',
  },
  {
    icon: RefreshCw,
    title: 'Insolvência e Recuperação',
    desc: 'Processos de insolvência e processos especiais de revitalização, com defesa dos interesses de devedores e credores.',
  },
  {
    icon: FileSignature,
    title: 'Contratos',
    desc: 'Negociação, elaboração e revisão de contratos nas mais diversas áreas, com rigor técnico e segurança jurídica.',
  },
  {
    icon: Briefcase,
    title: 'Direito do Trabalho',
    desc: 'Contratação laboral, cessação de contratos, conflitos individuais e coletivos e assessoria a empregadores e trabalhadores.',
  },
  {
    icon: Gavel,
    title: 'Direito Penal e Contraordenacional',
    desc: 'Defesa e assistência em processos de natureza penal e contraordenacional, em todas as fases do processo.',
  },
  {
    icon: Banknote,
    title: 'Recuperação de Crédito',
    desc: 'Cobrança de créditos por via extrajudicial e judicial, com soluções eficazes para a recuperação de valores em dívida.',
  },
  {
    icon: Landmark,
    title: 'Direito Fiscal',
    desc: 'Aconselhamento e contencioso tributário, planeamento fiscal e acompanhamento perante a Autoridade Tributária.',
  },
  {
    icon: KeyRound,
    title: 'Arrendamento',
    desc: 'Contratos de arrendamento urbano, atualização de rendas, incumprimento e ações de despejo.',
  },
  {
    icon: HomeIcon,
    title: 'Imobiliário e Construção',
    desc: 'Compra e venda, due diligence imobiliária, urbanismo, empreitadas e operações de construção.',
  },
  {
    icon: Users,
    title: 'Direito da Família e das Sucessões',
    desc: 'Divórcios, regulação das responsabilidades parentais, partilhas, heranças e planeamento sucessório.',
  },
  {
    icon: Stamp,
    title: 'Registos e Notariado',
    desc: 'Atos de registo predial, comercial e automóvel e tratamento de procedimentos notariais.',
  },
  {
    icon: ScrollText,
    title: 'Direito Administrativo',
    desc: 'Relações com a Administração Pública, contratação pública e contencioso administrativo.',
  },
]

// ── Team (real names & roles, pmmadvogados.pt/equipa) ────────────────────────
// Only public facts: name + role as published. No invented biographies.
export const team = [
  { name: 'Fátima Pereira Mouta', role: 'Sócia', initials: 'FP' },
  { name: 'Iolanda Mouta Mendes', role: 'Sócia', initials: 'IM' },
  { name: 'Flávio Mouta Mendes', role: 'Sócio e Administrador (Managing Partner)', initials: 'FM' },
  { name: 'Filipa Pereira Henriques', role: 'Advogada Associada', initials: 'FH' },
  { name: 'Mariana São Pedro', role: 'Advogada Associada', initials: 'MS' },
  { name: 'Cátia Flores Silvestre', role: 'Advogada Associada', initials: 'CF' },
  { name: 'Ana Catarina Santos', role: 'Advogada', initials: 'AC' },
  { name: 'Vera Lacueva', role: 'Advogada', initials: 'VL' },
]

// ── Values / approach (institutional copy, faithful to the firm) ─────────────
export const values = [
  {
    icon: Target,
    title: 'Excelência e rigor',
    text: 'A nossa conduta e atividade são pautadas pelos mais elevados padrões de excelência, rigor, profissionalismo e ética.',
  },
  {
    icon: Handshake,
    title: 'Foco no Cliente',
    text: 'Privilegiamos uma abordagem direcionada para a satisfação e superação dos interesses, objetivos e pretensões dos nossos Clientes.',
  },
  {
    icon: Scale,
    title: 'Independência e inovação',
    text: 'Uma sociedade de advogados de referência, independente e inovadora, comprometida com a qualidade dos serviços prestados.',
  },
]

// ── Approach steps ───────────────────────────────────────────────────────────
export const approach = [
  {
    step: '01',
    icon: Phone,
    title: 'Contacto inicial',
    text: 'Entendemos a sua questão e enquadramos juridicamente a situação que nos apresenta.',
  },
  {
    step: '02',
    icon: ScrollText,
    title: 'Análise e estratégia',
    text: 'Estudamos o processo em detalhe e definimos a estratégia mais adequada aos seus objetivos.',
  },
  {
    step: '03',
    icon: Scale,
    title: 'Acompanhamento',
    text: 'Acompanhamos o Cliente em todas as fases, com proximidade e informação clara.',
  },
  {
    step: '04',
    icon: ShieldCheck,
    title: 'Resolução',
    text: 'Procuramos a melhor solução, judicial ou extrajudicial, na defesa dos seus interesses.',
  },
]

export const stats = [
  { value: '12', label: 'Áreas de prática' },
  { value: '4,8', label: 'Avaliação Google' },
  { value: 'Lisboa', label: 'Escritório' },
  { value: 'PMM&A', label: 'Sociedade' },
]

// Contact channels reused across pages
export const contacts = [
  { icon: Phone, label: 'Telefone', value: brand.phoneDisplay, href: brand.phoneHref },
  { icon: Phone, label: 'Telemóvel', value: brand.mobileDisplay, href: brand.mobileHref },
  { icon: Mail, label: 'Email', value: brand.email, href: brand.emailHref },
  { icon: MapPin, label: 'Morada', value: brand.address },
  { icon: Clock, label: 'Horário', value: brand.hours },
]

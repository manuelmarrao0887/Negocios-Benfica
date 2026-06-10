import {
  Home as HomeIcon,
  KeyRound,
  LineChart,
  Sofa,
  Scale,
  Handshake,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
  Building2,
  Landmark,
  BedDouble,
  Bath,
  Ruler,
  Award,
  Compass,
  HeartHandshake,
} from 'lucide-react'

// ── Brand ────────────────────────────────────────────────────────────────────
export const slug = 'imobenfica'

export const brand = {
  name: 'ImoBenfica',
  signature: 'by Marta Pereira',
  full: 'ImoBenfica by Marta Pereira',
  tagline: 'Especialistas reconhecidos no mercado imobiliário de Benfica.',
  mission: 'Transformamos cada transação imobiliária numa experiência única.',
  intro:
    'Agência imobiliária especialista em Benfica e São Domingos de Benfica. Uma marca pessoal de confiança, com mais de 20 anos de experiência ao serviço de quem compra, vende e arrenda em Lisboa.',
  ami: 'AMI 17039',
  // Telemóvel / WhatsApp
  phoneDisplay: '(+351) 925 401 166',
  phoneHref: 'tel:+351925401166',
  whatsapp: 'https://wa.me/351925401166',
  // Fixo
  landlineDisplay: '(+351) 211 632 494',
  landlineHref: 'tel:+351211632494',
  email: 'geral@imobenfica.pt',
  emailHref: 'mailto:geral@imobenfica.pt',
  address: 'Av. Gomes Pereira, 28-B, 1500 Lisboa (Benfica)',
  mapsQuery: 'Avenida Gomes Pereira 28B, Lisboa',
  hours: 'Seg–Sex · 9h30–13h00 e 15h00–19h00 · Sáb 10h00–13h00',
  hoursLines: [
    { day: 'Segunda a Sexta', time: '9h30 – 13h00 · 15h00 – 19h00' },
    { day: 'Sábado', time: '10h00 – 13h00' },
    { day: 'Domingo', time: 'Encerrado' },
  ],
  since: 2020,
}

export const nav = [
  { label: 'Início', to: '' },
  { label: 'Imóveis', to: 'imoveis' },
  { label: 'Sobre', to: 'sobre' },
  { label: 'Contacto', to: 'contacto' },
]

// ── Trust strip / highlights ─────────────────────────────────────────────────
export const highlights = [
  { icon: MapPin, title: 'Especialistas locais', text: 'Conhecimento profundo de Benfica e São Domingos de Benfica.' },
  { icon: Handshake, title: 'Partilha 50/50', text: 'Partilhamos negócios com todas as imobiliárias, sem exceção.' },
  { icon: Award, title: '20+ anos', text: 'Experiência reconhecida ao serviço dos nossos clientes.' },
  { icon: ShieldCheck, title: 'Licença AMI 17039', text: 'Atividade regulada, com total segurança jurídica.' },
]

// ── Services ─────────────────────────────────────────────────────────────────
export const services = [
  {
    icon: HomeIcon,
    title: 'Compra e Venda',
    desc: 'Acompanhamento completo na compra e na venda do seu imóvel, com estratégia, marketing e negociação dedicada.',
  },
  {
    icon: KeyRound,
    title: 'Arrendamento',
    desc: 'Gestão do arrendamento de A a Z — seleção criteriosa de inquilinos, contratos e tranquilidade para o proprietário.',
  },
  {
    icon: LineChart,
    title: 'Avaliação e Análise de Mercado',
    desc: 'Avaliação rigorosa e análise comparativa de mercado para definir o preço certo, sustentado em dados reais.',
  },
  {
    icon: Sofa,
    title: 'Home Staging',
    desc: 'Valorizamos o seu imóvel para que se destaque, encurte o tempo de venda e alcance o melhor valor.',
  },
  {
    icon: Scale,
    title: 'Apoio Jurídico e Financeiro',
    desc: 'Intermediação de crédito e apoio jurídico através de parceiros de confiança, do início ao fim do processo.',
  },
  {
    icon: Sparkles,
    title: 'Método Imobenfica',
    desc: 'O nosso serviço próprio, lançado em Janeiro de 2024: um processo estruturado que torna cada transação única.',
    featured: true,
  },
]

// ── Differentiator ───────────────────────────────────────────────────────────
export const differentiator = {
  eyebrow: 'O nosso compromisso',
  title: 'Partilhamos negócios com todas as imobiliárias, sem exceção.',
  text:
    'Acreditamos que a melhor forma de servir quem nos confia um imóvel é alargar ao máximo a rede de potenciais compradores. Por isso trabalhamos em partilha 50/50 com todas as agências — sem exceção — para vender mais depressa e pelo melhor valor.',
  points: [
    'Maior alcance: o seu imóvel chega a toda a rede de mediação.',
    'Venda mais rápida, com mais propostas qualificadas.',
    'Transparência total em cada etapa da negociação.',
  ],
}

// ── Areas served ─────────────────────────────────────────────────────────────
export const primaryAreas = ['Benfica', 'São Domingos de Benfica']
export const otherAreas = ['Lisboa', 'Sintra', 'Cascais', 'Sesimbra', 'Odivelas', 'Almada', 'Amadora']

// ── Listings (illustrative) ──────────────────────────────────────────────────
// All listings are illustrative — picsum placeholders, realistic ranges only.
export const operations = ['Todas', 'Venda', 'Arrendamento']
export const propertyTypes = ['Todos', 'Apartamento', 'Moradia', 'Loja']

export const listings = [
  {
    id: 1,
    title: 'Apartamento T4 com terraço',
    type: 'Apartamento',
    operation: 'Venda',
    zone: 'Benfica, Lisboa',
    price: '650.000 €',
    beds: 4,
    baths: 3,
    area: '168 m²',
    icon: Building2,
    desc: 'T4 amplo e luminoso, com terraço e excelente exposição solar, no coração de Benfica.',
  },
  {
    id: 2,
    title: 'Moradia T6 Duplex',
    type: 'Moradia',
    operation: 'Venda',
    zone: 'São Domingos de Benfica, Lisboa',
    price: '1.000.000 €',
    beds: 6,
    baths: 4,
    area: '320 m²',
    icon: HomeIcon,
    desc: 'Moradia duplex de grande dimensão, com logradouro privativo e garagem, em zona prestigiada.',
  },
  {
    id: 3,
    title: 'Apartamento T2 renovado',
    type: 'Apartamento',
    operation: 'Venda',
    zone: 'São Domingos de Benfica, Lisboa',
    price: '385.000 €',
    beds: 2,
    baths: 1,
    area: '78 m²',
    icon: Building2,
    desc: 'T2 totalmente remodelado, pronto a habitar, próximo de transportes e comércio.',
  },
  {
    id: 4,
    title: 'Apartamento T2 para arrendar',
    type: 'Apartamento',
    operation: 'Arrendamento',
    zone: 'Benfica, Lisboa',
    price: '4.950 €/mês',
    beds: 2,
    baths: 2,
    area: '110 m²',
    icon: BedDouble,
    desc: 'Arrendamento premium, mobilado e equipado, ideal para quem procura conforto e localização.',
  },
  {
    id: 5,
    title: 'Loja com montra de rua',
    type: 'Loja',
    operation: 'Venda',
    zone: 'Amadora — Falagueira',
    price: '310.000 €',
    beds: 0,
    baths: 1,
    area: '140 m²',
    icon: Landmark,
    desc: 'Espaço comercial com excelente visibilidade e montra de rua, com forte movimento pedonal.',
  },
  {
    id: 6,
    title: 'Apartamento T4 de charme',
    type: 'Apartamento',
    operation: 'Venda',
    zone: 'Benfica, Lisboa',
    price: '540.000 €',
    beds: 4,
    baths: 2,
    area: '155 m²',
    icon: Building2,
    desc: 'T4 clássico com pormenores de época, varandas e zonas comuns cuidadas.',
  },
]

// ── Testimonials (REAL — verbatim) ───────────────────────────────────────────
export const testimonials = [
  {
    name: 'Teresa Maciel',
    quote:
      'Recomendo 100% a Marta e a Imobenfica e destaco o alto profissionalismo de toda a equipa.',
    initials: 'TM',
  },
  {
    name: 'Filipa Rito',
    quote:
      "A Marta é efetivamente de confiança e recomendo muito o seu trabalho. A Imobenfica segue os seus princípios e na minha opinião é 'a' agência imobiliária de referência na zona de Benfica.",
    initials: 'FR',
  },
  {
    name: 'Ana Lúcia Roque Rodrigues',
    quote: 'Só temos pontos positivos a referir. Recomendamos!!',
    initials: 'AR',
  },
  {
    name: 'David Gil',
    quote:
      'Muito obrigado por um negócio bem sucedido e não podia deixar de recomendar os seus serviços.',
    initials: 'DG',
  },
  {
    name: 'Lino Nascimento',
    quote: 'Profissionalismo, entrega e dedicação aos objetivos traçados.',
    initials: 'LN',
  },
  {
    name: 'Ana Fraga',
    quote: 'Sempre todos eles resolvidos pela Marta com muita eficiência e rapidez.',
    initials: 'AF',
  },
]

// ── Team ─────────────────────────────────────────────────────────────────────
export const team = [
  {
    name: 'Marta Pereira',
    role: 'Gerente · Consultora Imobiliária',
    initials: 'MP',
    bio: 'Mais de 20 anos no mercado imobiliário e o rosto da ImoBenfica. Conhece Benfica e São Domingos de Benfica como ninguém e faz de cada transação uma experiência próxima e personalizada.',
    lead: true,
  },
  {
    name: 'Pedro Esteves',
    role: 'Consultor Imobiliário',
    initials: 'PE',
    bio: 'Consultor dedicado ao acompanhamento de clientes na compra, venda e arrendamento, com foco no rigor e na confiança que distinguem a equipa.',
  },
]

// ── Partners ─────────────────────────────────────────────────────────────────
export const partners = [
  {
    icon: Scale,
    title: 'Apoio Jurídico',
    name: 'Advogados Florbela Santos & Paulo Santos',
    text: 'Acompanhamento jurídico de cada processo, com segurança e clareza em todas as etapas.',
  },
  {
    icon: Landmark,
    title: 'Intermediação de Crédito',
    name: 'Luís Varela',
    text: 'Apoio financeiro e intermediação de crédito para encontrar a melhor solução para a sua compra.',
  },
]

// ── History timeline ─────────────────────────────────────────────────────────
export const timeline = [
  { year: '2020', title: 'Fundação', text: 'Nasce a ImoBenfica, com Marta Pereira à frente, dedicada à zona de Benfica.' },
  { year: '2023', title: 'Nova casa', text: 'A agência muda para as atuais instalações na Av. Gomes Pereira.' },
  { year: '2024', title: 'Método Imobenfica', text: 'Em Janeiro lançamos o Método Imobenfica, o nosso serviço próprio de acompanhamento.' },
]

// ── Mission & Vision ─────────────────────────────────────────────────────────
export const purpose = [
  {
    icon: HeartHandshake,
    title: 'Missão',
    text: 'Transformamos cada transação imobiliária numa experiência única, próxima e de confiança.',
  },
  {
    icon: Compass,
    title: 'Visão',
    text: 'Ser a agência de referência em Benfica, reconhecida pelo profissionalismo e pela dedicação.',
  },
  {
    icon: Users,
    title: 'Valores',
    text: 'Confiança, transparência e partilha — porque trabalhamos com todas as imobiliárias, sem exceção.',
  },
]

export const stats = [
  { value: '20+', label: 'Anos de experiência' },
  { value: '2020', label: 'Agência desde' },
  { value: '50/50', label: 'Partilha com todos' },
  { value: 'AMI 17039', label: 'Licença' },
]

// Shared icon set used across pages for property spec rows.
export const specIcons = { beds: BedDouble, baths: Bath, area: Ruler }

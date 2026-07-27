export interface NewsItem {
  id: string;
  title: string;
  desc: string;
  image: string;
  date: string;
  category: string;
  author?: string;
  content?: string;
}

export interface EkskulItem {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  img: string;
  desc: string;
  schedule?: string;
  coach?: string;
}

export interface FasilitasItem {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  img: string;
  desc: string;
  fullDesc: string;
  capacity?: string;
  time?: string;
  isFeatured?: boolean;
}

export interface PrestasiItem {
  id: string;
  title: string;
  category: string;
  level: string;
  meta: string;
  img: string;
  description?: string;
  winnerName?: string;
  date?: string;
}

export interface TestimonialItem {
  id?: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  companyLogo?: string;
}

export interface PartnerItem {
  id?: string;
  name: string;
  src: string;
  url?: string;
}

export interface FAQItem {
  id?: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ServiceDeskItem {
  id?: string;
  title: string;
  desc: string;
  icon?: string;
  status: "Operational" | "Maintenance" | "Degraded" | string;
  href: string;
}

export interface JurusanDetail {
  title: string;
  desc: string;
  icon: string;
}

export interface JurusanData {
  id: string;
  title: string;
  code: string;
  description: string;
  headOfProgram?: string;
  features: JurusanDetail[];
  careerProspects?: string[];
}

export interface TeacherProfile {
  id: string;
  name: string;
  position: string;
  image: string;
  description?: string;
}

import { LucideIcon } from 'lucide-react';

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

export interface ProgramDetail {
  id: string;
  title: string;
  desc: string;
  longDesc: string;
  tags: string[];
  image: string;
  heroImage: string;
  icon: LucideIcon;
  curriculum: {
    title: string;
    icon: LucideIcon;
  }[];
  careers: {
    title: string;
    description: string;
    icon: LucideIcon;
    iconBgClass: string;
    iconColorClass: string;
  }[];
}

export interface QuizQuestion {
  question: string;
  options: {
    text: string;
    type: string;
  }[];
}

export interface JurusanInfo {
  title: string;
  desc: string;
  icon: LucideIcon;
  color: string;
  slug: string;
}

export interface LivingCost {
  title: string;
  range: string;
  desc: string;
  icon: LucideIcon;
  color: string;
}

export interface KosRecommendation {
  area: string;
  distance: string;
  price: string;
  features: string[];
}

export interface FoodRecommendation {
  name: string;
  type: string;
  desc: string;
  icon: LucideIcon;
}

export interface TelkomProduct {
  id: number;
  name: string;
  category: string;
  desc: string;
  image: string;
  link: string;
}

export interface UserEventRole {
  role: string;
  status: string;
  user_id: string;
  created_by: string;
  updated_by: string;
  verify_at: Date | string;
}

export interface MexpoEvent {
  id: string | number;
  name: string;
  location: string;
  description: string;
  start_date: string;
  end_date: string;
  quota: number;
  organizer_name: string;
  created_by: string;
  updated_by: string;
  photo: string;
  registration_start: string;
  registration_deadline: string;
  approved_by: string;
  userEventRoles?: UserEventRole[];
}

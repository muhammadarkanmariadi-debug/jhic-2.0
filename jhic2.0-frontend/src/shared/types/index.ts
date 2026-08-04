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
  level?: 'PRINCIPAL' | 'VP' | 'TEACHER';
  category?: 'PRODUCTIVE' | 'NON_PRODUCTIVE' | 'STAFF';
  division?: string;
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

// ---- Curriculum v2 (MokletKurikulum) ----

export interface CurriculumSyncPartner {
  id: string;
  name: string;
  logo: string;
  academicYear: string; // e.g. "2025/2026" — partner is tied to a specific year for versioning
  description?: string;
  programCode?: string; // RPL | TKJ | PG
}

export interface Expertise {
  id: string;
  programCode: string; // RPL | TKJ | PG
  name: string;
  description: string;
  isIcp?: boolean; // ICP shows full-stack + mobile expertise
}

export interface Certification {
  id: string;
  programCode: string; // RPL | TKJ | PG
  name: string;
  level: string;
  provider: string;
}

export interface LearningJourney {
  grade: string; // "Kelas 10"
  title: string;
  items: string[];
}

export interface GraduateProfile {
  title: string;
  description: string;
}

export interface ProgramPageContent {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  learningJourney: LearningJourney[];
  graduateProfile: GraduateProfile[];
}

export interface FeaturedProgram {
  id: string;
  name: string;
  slug: string;
  description: string;
  programId?: string;
  isActive: boolean;
  ctaLabel?: string;
}

export interface OrganizationItem {
  id: string;
  name: string;
  description: string;
  logo?: string;
}

/** Konsentrasi Keahlian codes (RPL / TKJ / PG) */
export type ProgramCode = "RPL" | "TKJ" | "PG";

// ---- MokletHubin (JHI-08 / JHI-09) ----

export interface IndustryPartner {
  id: string;
  name: string;
  logo: string;
  url?: string;
  isFeatured?: boolean;
}

export interface JobVacancyItem {
  id: string;
  title: string;
  company: string;
  description: string;
  programCode?: string;
  location?: string;
  salaryRange?: string;
  applicationDeadline?: string;
  contact?: string;
  link?: string;
}

export interface ScholarshipItem {
  id: string;
  title: string;
  description: string;
  provider: string;
  programCode?: string;
  deadline?: string;
  requirements?: string[];
  link?: string;
  image?: string;
}

export interface CompetitionItem {
  id: string;
  title: string;
  description: string;
  organizer?: string;
  location?: string;
  registrationDeadline?: string;
  date?: string;
  level?: string;
  source?: string;
  link?: string;
  image?: string;
}

// ---- Curriculum reference pages (kurikulum.smktelkom-mlg.sch.id mirror) ----

export interface GalleryImage {
  src: string;
  alt?: string;
  caption?: string;
}

export type ContentSection =
  | { type: "paragraph"; title?: string; text: string; image?: { src: string; alt?: string } }
  | { type: "checklist"; title?: string; items: string[] }
  | { type: "cards"; title?: string; items: { title: string; desc: string; icon?: string }[] }
  | { type: "tracks"; title?: string; items: { title: string; image?: string; description?: string; points?: string[] }[] }
  | { type: "steps"; title?: string; items: string[] }
  | { type: "gallery"; title?: string; images: GalleryImage[] }
  | { type: "table"; title?: string; headers: string[]; rows: string[][] }
  | { type: "accordion"; title?: string; items: { title: string; desc: string }[] }
  | { type: "testimonials"; title?: string; items: { name: string; role: string; quote: string }[] }
  | { type: "badges"; title?: string; items: string[] }
  | { type: "partners"; title?: string; items: { name: string; desc: string; logo?: string }[] };

export interface CurriculumTab {
  key: string;
  label: string;
  icon?: string; // lucide icon name
  intro?: string;
  sections: ContentSection[];
}



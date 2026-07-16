import { StaticImageData } from "next/image";

export type PageId =
  | 'home'
  | 'about'
  | 'products'
  | 'process'
  | 'projects'
  | 'investor'
  | 'blog'
  | 'gallery'
  | 'contact'
  | 'sustainability'
  | 'csr'
  | 'faq';

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  category: 'board' | 'management' | 'ops' | 'sales';
  division: string,
  bio: string;
  longBio?: string;
  imageAlt?: string;
  image?: StaticImageData;
}

export interface Project {
  id: string;
  name: string;
  image: string;
  category: 'tunnels' | 'hydro' | 'transmission' | 'government' | 'residential';
  scale?: string;
  contractor: string;
  location: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  image: string;
  category: string;
  excerpt: string;
  content: string[];
  readTime: string;
  date: string;
  faqs?: FAQItem[];
}

export interface ProductSpec {
  feature: string;
  fe500: string;
  fe500d: string;
}

export interface QuoteRequest {
  fullName: string;
  phone: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  productName?: string;
  quantity?: string;
}

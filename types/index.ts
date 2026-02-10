export interface NavLink {
  href: string;
  label: string;
}

export interface Language {
  code: string;
  name: string;
  nativeName: string;
}

export interface NewsItem {
  id: string;
  type: "news" | "insight";
  title: string;
  description: string;
  link: string;
  icon: "document" | "trend" | "award";
  image?: string;
}

export interface CaseStudy {
  id: string;
  tag: string;
  title: string;
  description: string;
  highlights: string[];
  link: string;
}

export interface QuickLink {
  icon: any;
  title: string;
  description: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink {
  icon: any;
  href: string;
  label: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Highlight {
  icon: any;
  title: string;
  description: string;
}

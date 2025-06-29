export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  companyUrl: string;
  period: string;
  year: string;
}

export interface SkillItem {
  img: string;
  alt: string;
  title: string;
  date: string;
}

export interface PortfolioProject {
  category: string;
  href: string;
  imageUrl: string;
  title: string;
  description: string;
}

export interface Quote {
  text: string;
  author: string;
}

export interface Filter {
  id: string;
  label: string;
  cssClass: string;
  active?: boolean;
}
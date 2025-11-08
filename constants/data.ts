export interface ServiceCardData {
  id: number;
  title: string;
  texte: string;
  img: string;
}

export const servicesCardData: ServiceCardData[] = [
  {
    id: 1,
    title: 'Performance & SEO Optimization',
    texte:
      'I help websites load faster, perform better, and rank higher on search engines by optimizing their code, images, and metadata.',
    img: '/seo.png',
  },
  {
    id: 2,
    title: 'Custom Web Development',
    texte: 'Building modern, responsive, and fast websites tailored to your business goals.',
    img: '/coding.png',
  },
  {
    id: 3,
    title: 'CMS Integration',
    texte: 'Integrating headless CMS solutions like Sanity or Strapi for easy content management.',
    img: '/cms.png',
  },
];

// =============================
// Portfolio
// =============================
export interface Project {
  id: number;
  title: string;
  image: string; // path under public/
  tags: string[];
  href?: string; // optional external/internal link
}

export const projects: Project[] = [
  {
    id: 101,
    title: 'Figma to Nextjs Conversion',
    image: '/jayek.png',
    tags: ['Nextjs', 'Reactjs'],
    href: 'https://jayek.sa/',
  },
  {
    id: 102,
    title: 'Henka Saudi – Design & Development',
    image: '/henka.png',
    tags: ['UI Design', 'Reactjs', 'Tailwindcss'],
    href: 'https://henka.com.sa/',
  },
  {
    id: 103,
    title: 'Judo Federation Management Platform',
    image: '/sportlicmanager.png',
    tags: ['ExpressJS', 'Reactjs', 'Tailwindcss'],
    href: '#',
  },
  {
    id: 104,
    title: 'TechLines – Design & Development',
    image: '/techlines.png',
    tags: ['UI Design', 'Reactjs', 'Tailwindcss'],
    href: 'https://techlines.sa/',
  },
];

// =============================
// Feedbacks (testimonials)
// =============================
export interface Feedback {
  id: number;
  quote: string;
  author: string;
  role: string;
}

export const feedbacks: Feedback[] = [
  {
    id: 201,
    quote: 'Fast delivery and clean code. Totally recommend!',
    author: 'Saud Faical',
    role: 'CEO of web design',
  },
  {
    id: 202,
    quote: 'Reliable communication and pixel-perfect results. Great collaboration!',
    author: 'Maya Benali',
    role: 'Product Manager, Nexa',
  },
  {
    id: 203,
    quote: 'Performance improved dramatically and SEO rankings followed.',
    author: 'Omar El Idrissi',
    role: 'Founder, Henka Saudi',
  },
  {
    id: 204,
    quote: 'Thoughtful UX and robust engineering — shipped ahead of schedule.',
    author: 'Lina Haddad',
    role: 'CTO, TechLines',
  },
  {
    id: 205,
    quote: 'Thoughtful UX and robust engineering — shipped ahead of schedule.',
    author: 'Lina Haddad',
    role: 'CTO, TechLines',
  },
  {
    id: 206,
    quote: 'Thoughtful UX and robust engineering — shipped ahead of schedule.',
    author: 'Lina Haddad',
    role: 'CTO, TechLines',
  },
];

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  description_en: string;
  url: string;
}

export const allProjects: Project[] = [
  {
    id: 1,
    image: '/8.png',
    title: 'Prestige Clean',
    description: 'Site vitrine pour une entreprise de nettoyage professionnel haut de gamme.',
    description_en: 'Showcase site for a high-end professional cleaning company.',
    category: 'WEB',
    url: 'https://prestige-clean4-d.vercel.app/'
  },
  {
    id: 9,
    image: '/public/3.png',
    title: 'Faire',
    description: 'Plateforme Marketplace B2B connectant commerçants et marques.',
    description_en: 'B2B Marketplace platform connecting retailers and brands.',
    category: 'WEB',
    url: 'https://www.faire.com/'
  },
  {
    id: 2,
    image: '/2.png',
    title: 'Krid Energy',
    description: 'Plateforme en ligne optimisée pour présenter des solutions énergétiques et générer des leads.',
    description_en: 'Online platform optimized for presenting energy solutions and generating leads.',
    category: 'WEB',
    url: 'https://kridenergy.fr/'
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80',
    title: 'Eco Mobile App',
    description: 'Application mobile de suivi de consommation énergétique en temps réel.',
    description_en: 'Mobile application for real-time energy consumption tracking.',
    category: 'MOBILE',
    url: '#'
  },
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80',
    title: 'Brand Identity - Artisans',
    description: 'Création d\'une identité visuelle complète pour un collectif d\'artisans.',
    description_en: 'Creation of a complete visual identity for an artisans collective.',
    category: 'DESIGN',
    url: '#'
  },
  {
    id: 12,
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80',
    title: 'Sponsoring Campaign 2024',
    description: 'Gestion stratégique de partenariats et sponsoring pour événements tech.',
    description_en: 'Strategic management of partnerships and sponsoring for tech events.',
    category: 'SPONSORING',
    url: '#'
  },
  {
    id: 13,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    title: 'Performance Ads Strategy',
    description: 'Campagnes publicitaires ciblées à haute conversion sur Meta et Google.',
    description_en: 'Targeted high-conversion advertising campaigns on Meta and Google.',
    category: 'ADS',
    url: '#'
  },
  {
    id: 3,
    image: '/9.png',
    title: 'Dclik Serrure',
    description: 'Site vitrine pour services de serrurerie d\'urgence.',
    description_en: 'Showcase site for emergency locksmith services.',
    category: 'WEB',
    url: 'https://www.dclik-serrure.com/'
  },
  {
    id: 4,
    image: '/10.png',
    title: 'Serrure Safe',
    description: 'Portail de services de sécurité avec un fort accent sur l\'UX.',
    description_en: 'Security services portal with a strong focus on UX.',
    category: 'WEB',
    url: 'https://www.serruresafe.fr/'
  },
  {
    id: 8,
    image: '/public/11.png',
    title: 'Résidence Ilyes',
    description: 'Site vitrine pour promotion immobilière et résidences de standing.',
    description_en: 'Showcase site for real estate promotion and luxury residences.',
    category: 'WEB',
    url: 'https://residenceilyes.com/'
  }
];

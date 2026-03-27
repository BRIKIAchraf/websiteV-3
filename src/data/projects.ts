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
    description: 'Site professionnel pour une entreprise de nettoyage professionnel haut de gamme.',
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
    id: 3,
    image: '/public/11.png',
    title: 'Résidence Ilyes',
    description: 'Site professionnel pour promotion immobilière et résidences de standing.',
    description_en: 'Showcase site for real estate promotion and luxury residences.',
    category: 'WEB',
    url: 'https://residenceilyes.com/'
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
    image: '/Maitrio.png',
    title: 'Eco Mobile App',
    description: 'Application mobile de suivi de consommation énergétique en temps réel.',
    description_en: 'Mobile application for real-time energy consumption tracking.',
    category: 'MOBILE',
    url: '#'
  },
  {
    id: 11,
    image: '/capture2.png',
    title: 'Brand Identity - Artisans',
    description: 'Création d\'une identité visuelle complète pour un collectif d\'artisans.',
    description_en: 'Creation of a complete visual identity for an artisans collective.',
    category: 'DESIGN',
    url: '#'
  },
  {
    id: 12,
    image: '/capture3.png',
    title: 'Sponsoring Campaign 2024',
    description: 'Gestion stratégique de partenariats et sponsoring pour événements tech.',
    description_en: 'Strategic management of partnerships and sponsoring for tech events.',
    category: 'SPONSORING',
    url: '#'
  },
  {
    id: 13,
    image: '/capture4.png',
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
    description: 'Site professionnel pour services de serrurerie d\'urgence.',
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
    id: 14,
    image: '/4.png',
    title: 'Pro Inox Dépannage',
    description: 'Site professionnel vitrine pour services de dépannage, maintenance et installation.',
    description_en: 'Professional showcase site for repair, maintenance, and installation services.',
    category: 'WEB',
    url: 'https://pro-inox-depannage.fr/'
  },
  {
    id: 15,
    image: '/5.png',
    title: 'Eco Tech Energy',
    description: 'Plateforme dédiée aux solutions énergétiques avancées et écologiques.',
    description_en: 'Platform dedicated to advanced and ecological energy solutions.',
    category: 'WEB',
    url: 'https://www.eco-tech-energy.fr/'
  },
  {
    id: 16,
    image: '/2 copy.png',
    title: 'Campagne d\'Affichage',
    description: 'Conception graphique d\'affiches publicitaires grand format pour des événements événementiels.',
    description_en: 'Graphic design of large format advertising posters for events and campaigns.',
    category: 'DESIGN',
    url: '#'
  },
  {
    id: 17,
    image: '/1 copy.png',
    title: 'Flyers & Prospectus',
    description: 'Design de flyers promotionnels percutants pour développer l\'acquisition client locale.',
    description_en: 'Design of impactful promotional flyers to drive local customer acquisition.',
    category: 'DESIGN',
    url: '#'
  }
];

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  url: string;
}

export const allProjects: Project[] = [
  {
    id: 1,
    image: '/8.png',
    title: 'Prestige Clean',
    description: 'Site vitrine pour une entreprise de nettoyage professionnel haut de gamme.',
    category: 'Web Development',
    url: 'https://prestige-clean4-d.vercel.app/'
  },
  {
    id: 2,
    image: '/2.png',
    title: 'Krid Energy',
    description: 'Plateforme en ligne optimisée pour présenter des solutions énergétiques et générer des leads.',
    category: 'Energy Solutions',
    url: 'https://kridenergy.fr/'
  },
  {
    id: 3,
    image: '/9.png',
    title: 'Dclik Serrure',
    description: 'Site vitrine pour services de serrurerie d\'urgence, améliorant la visibilité locale.',
    category: 'Web Services',
    url: 'https://www.dclik-serrure.com/'
  },
  {
    id: 4,
    image: '/10.png',
    title: 'Serrure Safe',
    description: 'Portail de services de sécurité avec un fort accent sur l\'UX et le SEO local.',
    category: 'Web Services',
    url: 'https://www.serruresafe.fr/'
  },
  {
    id: 5,
    image: '/1.png',
    title: 'Débarras Environnement',
    description: 'Site spécialiste en gestion des déchets dangereux et désamiantage.',
    category: 'Environmental',
    url: '#'
  },
  {
    id: 6,
    image: '/public/5.png',
    title: 'Eco Tech Energy',
    description: 'Site axé sur la transition énergétique et l\'écologie pour les particuliers.',
    category: 'Energy Solutions',
    url: '2.png'
  },
  {
    id: 7,
    image: '/public/4.png',
    title: 'Pro Inox Dépannage',
    description: 'Services de dépannage et réparation professionnels pour matériel de cuisine.',
    category: 'Maintenance',
    url: 'https://pro-inox-depannage.fr/'
  },
  {
    id: 8,
    image: '/public/11.png',
    title: 'Résidence Ilyes',
    description: 'Site vitrine pour promotion immobilière et résidences de standing.',
    category: 'Real Estate',
    url: 'https://residenceilyes.com/'
  },
  {
    id: 9,
    image: '/public/3.png',
    title: 'Faire',
    description: 'Plateforme Marketplace B2B connectant commerçants et marques.',
    category: 'E-commerce',
    url: 'https://www.faire.com/'
  }
];

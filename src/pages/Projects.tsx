import { ExternalLink } from 'lucide-react';

const allProjects = [
  {
    id: 1,
    image: '/projects/prestige-clean.png',
    title: 'Prestige Clean',
    description: 'Site vitrine pour une entreprise de nettoyage professionnel haut de gamme.',
    category: 'Web Development',
    url: 'https://prestige-clean4-d.vercel.app/'
  },
  {
    id: 2,
    image: '/projects/kridenergy.png',
    title: 'Krid Energy',
    description: 'Plateforme en ligne optimisée pour présenter des solutions énergétiques et générer des leads.',
    category: 'Energy Solutions',
    url: 'https://kridenergy.fr/'
  },
  {
    id: 3,
    image: '/projects/dclik-serrure.png',
    title: 'Dclik Serrure',
    description: 'Site vitrine pour services de serrurerie d\'urgence, améliorant la visibilité locale.',
    category: 'Web Services',
    url: 'https://www.dclik-serrure.com/'
  },
  {
    id: 4,
    image: '/projects/ads-pizzwitchs.png',
    title: 'Serrure Safe',
    description: 'Portail de services de sécurité avec un fort accent sur l\'UX et le SEO local.',
    category: 'Web Services',
    url: 'https://www.serruresafe.fr/'
  },
  {
    id: 5,
    image: '/projects/ecotech.png',
    title: 'Débarras Environnement',
    description: 'Site spécialiste en gestion des déchets dangereux et désamiantage.',
    category: 'Environmental',
    url: '#'
  },
  {
    id: 6,
    image: '/projects/ecotech.png',
    title: 'Eco Tech Energy',
    description: 'Site axé sur la transition énergétique et l\'écologie pour les particuliers.',
    category: 'Energy Solutions',
    url: '2.png'
  },
  {
    id: 7,
    image: '/projects/proinox.png',
    title: 'Pro Inox Dépannage',
    description: 'Services de dépannage et réparation professionnels pour matériel de cuisine.',
    category: 'Maintenance',
    url: 'https://pro-inox-depannage.fr/'
  },
  {
    id: 8,
    image: '/projects/prestige-clean.png',
    title: 'Résidence Ilyes',
    description: 'Site vitrine pour promotion immobilière et résidences de standing.',
    category: 'Real Estate',
    url: 'https://residenceilyes.com/'
  },
  {
    id: 9,
    image: '/projects/faire.png',
    title: 'Faire',
    description: 'Plateforme Marketplace B2B connectant commerçants et marques.',
    category: 'E-commerce',
    url: 'https://www.faire.com/'
  }
];

export default function Projects() {
  return (
    <div className="pt-24 pb-10 px-6 md:px-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-fade-in text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-on-surface mb-6">
            Tous Mes <span className="text-gold italic font-serif">Projets</span>
          </h1>
          <div className="h-1 w-24 bg-gold mx-auto mb-8"></div>
          <p className="text-xl text-on-surface/60 max-w-2xl mx-auto leading-relaxed">
            Une collection complète de mes travaux en design et développement,
            axée sur la performance et l'expérience utilisateur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-surface rounded-3xl overflow-hidden border border-on-surface/5 hover:border-gold/30 transition-all duration-500 animate-fade-in-up shadow-sm hover:shadow-xl block"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
              </div>

              <div className="p-8">
                <span className="text-gold text-xs font-bold tracking-widest mb-2 block uppercase">{project.category}</span>
                <h3 className="text-xl font-bold text-on-surface mb-4 group-hover:text-gold transition-colors">{project.title}</h3>
                <p className="text-on-surface/60 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gold opacity-0 group-hover:opacity-100 transition-opacity">Voir Le Projet</span>
                  <ExternalLink size={18} className="text-on-surface/40 group-hover:text-gold transition-colors" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

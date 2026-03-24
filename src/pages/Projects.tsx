import { ExternalLink } from 'lucide-react';

const allProjects = [
  {
    id: 1,
    image: '/projects/proinox.png',
    title: 'Pro Inox Dépannage - Froid & Cuisine',
    description: 'Site vitrine haute performance pour un expert en dépannage de cuisines professionnelles.',
    category: 'Web Development'
  },
  {
    id: 2,
    image: '/projects/cleansene.png',
    title: 'Clean & Séné - Hygiène de Luxe',
    description: 'Plateforme élégante pour une entreprise de nettoyage haut de gamme.',
    category: 'Brand Identity'
  },
  {
    id: 3,
    image: '/projects/ecotech.png',
    title: 'Eco Tech Energy - CVC & Plomberie',
    description: 'Présentation moderne des services d’installation et maintenance énergétique.',
    category: 'UI/UX Design'
  },
  {
    id: 4,
    image: '/projects/ads-proinox.png',
    title: 'Campagne Google Ads - Pro Inox',
    description: 'Stratégie publicitaire ciblée ayant généré un retour sur investissement significatif.',
    category: 'Digital Marketing'
  },
  {
    id: 5,
    image: '/projects/ads-pizzwitchs.png',
    title: 'Campagne Google Ads - Pizzwitchs',
    description: 'Accroissement de la visibilité locale et des commandes via Google Ads.',
    category: 'Digital Marketing'
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
            <div 
              key={project.id} 
              className="group relative bg-surface rounded-3xl overflow-hidden border border-on-surface/5 hover:border-gold/30 transition-all duration-500 animate-fade-in-up shadow-sm hover:shadow-xl"
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
                <span className="text-gold text-xs font-bold tracking-widest mb-2 block">{project.category}</span>
                <h3 className="text-xl font-bold text-on-surface mb-4 group-hover:text-gold transition-colors">{project.title}</h3>
                <p className="text-on-surface/60 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                   <div className="h-[1px] flex-grow bg-on-surface/10 mr-4"></div>
                   <ExternalLink size={18} className="text-on-surface/40 group-hover:text-gold transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

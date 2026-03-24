import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const projects = [
  {
    id: 1,
    image: '/projects/proinox.png',
    title: 'Pro Inox Dépannage',
    description: 'Site vitrine haute performance pour un expert en cuisines professionnelles.',
    category: 'Web Development',
    link: '/projects',
  },
  {
    id: 2,
    image: '/projects/cleansene.png',
    title: 'Clean & Séné',
    description: 'Plateforme élégante pour une entreprise de nettoyage haut de gamme.',
    category: 'Brand Identity',
    link: '/projects',
  },
  {
    id: 3,
    image: '/projects/ecotech.png',
    title: 'Eco Tech Energy',
    description: "Présentation moderne des services d'installation énergétique.",
    category: 'UI/UX Design',
    link: '/projects',
  },
  {
    id: 4,
    image: '/projects/ads-proinox.png',
    title: 'Stratégie Google Ads',
    description: 'Campagne publicitaire ciblée optimisant le ROI.',
    category: 'Digital Marketing',
    link: '/projects',
  },
];

export default function ProjectsGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="projects" className="py-12 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section heading */}
        <div className="mb-8 animate-fade-in">
          <h2 className="text-4xl md:text-6xl  tracking-tighter text-charcoal mb-3">
            Projets{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold animate-shimmer bg-[length:200%_auto]">
              Sélectionnés
            </span>
          </h2>
          <div className="h-[2px] w-20 bg-gold rounded-full" />
        </div>

        {/* Horizontal scroll strip */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 hide-scrollbar snap-x snap-mandatory"
          style={{ scrollBehavior: 'smooth' }}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group flex-shrink-0 w-[320px] md:w-[400px] snap-start bg-surface rounded-3xl overflow-hidden border border-on-surface/5 hover:border-gold/30 transition-all duration-500 shadow-sm hover:shadow-xl animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                {/* Category pill */}
                <span className="absolute top-4 left-4 text-[10px] font-black text-gold/90 bg-charcoal/60 backdrop-blur-sm px-3 py-1 rounded-full tracking-widest border border-gold/20">
                  {project.category}
                </span>
              </div>

              {/* Text */}
              <div className="p-7 relative">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-headline font-bold text-charcoal group-hover:text-gold transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <div className="bg-on-surface/5 p-2.5 rounded-full group-hover:bg-gold transition-colors duration-500 flex-shrink-0 ml-3">
                    <ExternalLink size={16} className="text-on-surface group-hover:text-white transition-colors" />
                  </div>
                </div>
                <p className="text-charcoal/50 text-sm font-body leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="h-[1px] w-0 bg-gold group-hover:w-full transition-all duration-700 mt-5" />
              </div>
            </div>
          ))}
        </div>

        {/* "Voir tous les projets" button below the scroll */}
        <div className="flex justify-center mt-10 animate-fade-in">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-charcoal text-white font-headline font-bold tracking-widest text-sm rounded-full border border-gold/20 hover:bg-gold hover:text-charcoal hover:border-gold transition-all duration-400 shadow-lg hover:shadow-[0_10px_40px_rgba(212,175,55,0.3)]"
          >
            Voir Tous Les Projets
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

import { allProjects } from '../data/projects';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <div className="pt-24 pb-10 px-6 md:px-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-fade-in text-center">
          <h1 className="font-bold text-on-surface mb-3 font-headline">
            Tous Mes <span className="shimmer-text">Projets</span>
          </h1>
          <div className="h-[2px] w-20 bg-gold rounded-full mx-auto mb-8" />
          <p className="text-on-surface/60 max-w-2xl mx-auto leading-relaxed">
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
                <span className="text-gold text-xs font-bold tracking-wider mb-2 block uppercase font-label">
                  {project.category}
                </span>
                <h3 className="font-bold text-on-surface mb-4 group-hover:text-gold transition-colors font-headline">
                  {project.title}
                </h3>
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

import { allProjects } from '../data/projects';
import { ExternalLink, Filter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useState, useMemo } from 'react';

export default function Projects() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', 'WEB', 'MOBILE', 'DESIGN', 'SPONSORING', 'ADS'];

  const filteredProjects = useMemo(() => {
    return activeCategory === 'ALL' 
      ? allProjects 
      : allProjects.filter(p => p.category.toUpperCase() === activeCategory);
  }, [activeCategory]);
  return (
    <div className="pt-24 pb-10 px-6 md:px-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 animate-fade-in text-center">
          <h1 className="font-bold text-on-surface mb-3 font-headline">
            {t('projects_page_title_1')} <span className="shimmer-text">{t('projects_page_title_2')}</span>
          </h1>
          <div className="h-[2px] w-20 bg-gold rounded-full mx-auto mb-8" />
          <p className="text-on-surface/60 max-w-2xl mx-auto leading-relaxed">
            {t('projects_page_subtitle')}
          </p>
        </div>

        {/* Filter UI */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-fade-in">
          <div className="flex items-center gap-2 px-4 py-2 bg-charcoal/5 rounded-full text-charcoal/40 font-headline text-[10px] font-black mb-2 md:mb-0">
            <Filter size={12} />
            Filter By
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-headline text-[10px] font-black transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-gold border-gold text-white shadow-lg'
                  : 'bg-white border-charcoal/10 text-charcoal/60 hover:border-gold/50'
              }`}
            >
              {cat === 'ALL' ? 'Tous' : cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
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
                <span className="text-gold text-xs font-bold mb-2 block font-label">
                  {project.category}
                </span>
                <h3 className="font-bold text-on-surface mb-4 group-hover:text-gold transition-colors font-headline">
                  {project.title}
                </h3>
                <p className="text-on-surface/60 text-sm mb-6 line-clamp-2">
                  {language === 'en' ? project.description_en : project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gold opacity-0 group-hover:opacity-100 transition-opacity">{t('projects_view_project')}</span>
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

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { allProjects as projects } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';

export default function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(projects[(currentIndex + i) % projects.length]);
    }
    return visible;
  };

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <section className="w-full bg-surface px-8 py-20 m-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="font-headline font-black text-primary mb-2">
              {t('carousel_title_1')} <span className="shimmer-text">{t('carousel_title_2')}</span>
            </h2>
            <p className="text-secondary opacity-80 font-body">
              {t('carousel_subtitle')}
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-primary text-surface flex items-center justify-center hover:shadow-[0_10px_40px_rgba(212,175,55,0.2)] transition-all hover:scale-105"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-primary text-surface flex items-center justify-center hover:shadow-[0_10px_40px_rgba(212,175,55,0.2)] transition-all hover:scale-105"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {getVisibleProjects().map((project, idx) => (
            <div
              key={project.id}
              className={`group overflow-hidden rounded-[2.5rem] transition-all duration-500 cursor-pointer border border-primary/10 hover:border-gold/30 ${
                idx === 0 ? 'md:col-span-1 md:row-span-2 h-96 md:h-auto' : 'h-96'
              }`}
            >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gold-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <h3 className="text-white font-headline font-bold mb-2">{project.title}</h3>
                  <p className="text-white/80 text-sm font-body">{project.category}</p>
                </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setAutoplay(false);
                setCurrentIndex(idx);
              }}
              className={`h-1.5 rounded-full transition-all ${
                idx === currentIndex
                  ? 'bg-primary w-12'
                  : 'bg-primary/20 hover:bg-primary/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

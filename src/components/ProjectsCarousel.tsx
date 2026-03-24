import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Site Vitrine Architecture',
    category: 'Web Design',
    image: 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
  },
  {
    id: 2,
    title: 'App Mobile Immobilier',
    category: 'App Development',
    image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
  },
  {
    id: 3,
    title: 'Dashboard Analytics',
    category: 'UI/UX Design',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
  },
  {
    id: 4,
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
  },
  {
    id: 5,
    title: 'Brand Identity System',
    category: 'Branding',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
  },
  {
    id: 6,
    title: 'SaaS Dashboard',
    category: 'Product Design',
    image: 'https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
  }
];

export default function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

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
            <h2 className="text-5xl md:text-6xl font-headline font-black text-primary mb-2">
              Voir mes travaux
            </h2>
            <p className="text-secondary opacity-80 text-lg font-body">
              Découvrez une sélection de mes projets récents
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
              <div className="relative w-full h-full overflow-hidden rounded-[2.5rem]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gold-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <h3 className="text-white font-headline font-bold text-2xl mb-2">{project.title}</h3>
                  <p className="text-white/80 text-sm font-body tracking-widest">{project.category}</p>
                </div>
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

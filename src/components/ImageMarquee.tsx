import { useLanguage } from '../context/LanguageContext';

const images = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop', // Modern desk/laptop
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop', // Code on screen
  'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop', // UI/UX Design system
  'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop', // Programming/Code
  'https://images.unsplash.com/photo-1618477247222-ac60c802b52d?q=80&w=800&auto=format&fit=crop', // Mechanical keyboard setup
  'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=800&auto=format&fit=crop', // Tech workspace
];

export default function ImageMarquee() {
  const { t } = useLanguage();
  return (
    <section className="py-10 bg-surface-container-low overflow-hidden transition-colors duration-1000">
      <div className="flex flex-col gap-16">
        <div className="mb-1 animate-fade-in text-center">
          <h1 className="font-bold text-on-surface mb-3 font-headline">
            {t('marquee_title_1')} <span className="shimmer-text">{t('marquee_title_2')}</span>
          </h1>
          <div className="h-[2px] w-20 bg-gold rounded-full mx-auto mb-8" />
          <p className="text-on-surface/60 max-w-2xl mx-auto leading-relaxed">
            {t('marquee_subtitle')}
          </p>
        </div>


        <div className="relative group/marquee">
          <div className="flex animate-marquee hover:[animation-play-state:paused] transition-all duration-700">
            {[...images, ...images].map((img, i) => (
              <div
                key={i}
                className="relative min-w-[300px] md:min-w-[550px] aspect-[16/10] mx-4 rounded-[2.5rem] overflow-hidden bg-surface-container shadow-[0_20px_60px_rgba(28,28,26,0.04)]"
              >
                <img
                  src={img}
                  alt="Tech"
                  className="w-full h-full object-cover opacity-100 transition-all duration-1000"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

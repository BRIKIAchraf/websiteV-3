import { useLanguage } from '../context/LanguageContext';

const images = [
  'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3182792/pexels-photo-3182792.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3182743/pexels-photo-3182743.jpeg?auto=compress&cs=tinysrgb&w=800',
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

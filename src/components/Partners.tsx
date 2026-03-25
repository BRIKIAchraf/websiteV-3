import { useLanguage } from '../context/LanguageContext';

const partners = [
  { name: 'Zarzis Park', logo: '/partners/zarzis.png' },
  { name: 'O Pizzwitchs', logo: '/partners/opizz.png' },
  { name: 'Ecotech Energy', logo: '/partners/ecotech.png' },
  { name: 'Serrure Safe', logo: '/partners/safe.png' },
  { name: 'D Clik Serrure', logo: '/partners/dclik.png' },
];

export default function Partners() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-headline font-bold text-charcoal text-3xl md:text-4xl mb-4">
            {t('partners_title_1')} <span className="shimmer-text">{t('partners_title_2')}</span>
          </h2>
          <div className="h-1 w-20 bg-gold rounded-full mb-6" />
          <p className="text-charcoal/60 max-w-xl font-medium">
            {t('partners_subtitle')}
          </p>
        </div>
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="flex animate-marquee py-4 hover:[animation-play-state:paused] transition-all duration-500">
          {[...partners, ...partners, ...partners].map((partner, i) => (
            <div
              key={i}
              className="flex-none mx-6 w-48 h-32 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-charcoal/5 flex items-center justify-center p-6 group/item hover:border-gold/30 hover:shadow-gold/10 transition-all duration-500"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain filter grayscale group-hover/item:grayscale-0 transition-all duration-700 scale-90 group-hover/item:scale-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

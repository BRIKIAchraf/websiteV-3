import { useLanguage } from '../context/LanguageContext';

const partners = [
  { name: 'Zarzis Park', logo: '/partners/5.png' },
  { name: 'O Pizzwitchs', logo: '/partners/55.png' },
  { name: 'Ecotech Energy', logo: '/partners/8.png' },
  { name: 'Serrure Safe', logo: '/partners/6.webp' },
  { name: 'D Clik Serrure', logo: '/partners/logo 4.svg' },
  { name: 'D Clik Serrure', logo: '/partners/zone.png' },

  { name: 'Briki', logo: '/partners/Logo 3.png' },
  { name: 'Faire', logo: '/partners/Logo 2.webp' },
  { name: 'donc', logo: '/partners/11.png' },
  { name: 'Bellavita', logo: '/partners/logo33.svg' },
  { name: 'qsmldkfj', logo: '/partners/22.png' },
  { name: 'Clean', logo: '/partners/Clean.jpeg' },
];

export default function Partners() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-surface-container-low overflow-hidden">
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

      <div className="max-w-[85rem] mx-auto px-6">
        <div className="relative bg-white rounded-[2.5rem] lg:rounded-[4rem] p-10 md:p-16 lg:p-24 border border-charcoal/5 shadow-[0_20px_60px_rgba(0,0,0,0.03)] overflow-hidden">
          
          {/* Subtle High-End Glow Effects */}
          <div className="absolute top-0 right-1/4 w-[40%] h-[40%] bg-gold/5 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[40%] h-[40%] bg-charcoal/5 blur-[80px] rounded-full pointer-events-none" />

          {/* Seamless Showcase Layout */}
          <div className="relative z-10 flex flex-wrap justify-center content-center gap-x-12 sm:gap-x-16 lg:gap-x-24 gap-y-12 sm:gap-y-16">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="group flex items-center justify-center w-24 sm:w-32 lg:w-40 h-16 sm:h-20 transition-all duration-500"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

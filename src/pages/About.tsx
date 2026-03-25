import { useLanguage } from '../context/LanguageContext';
import AnimatedText from '../components/AnimatedText';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="font-headline font-bold text-charcoal tracking-tighter mb-3 leading-[0.9]">
            <span className="shimmer-text"><AnimatedText text={t('about_title')} /></span>
          </h1>
          <div className="h-[2px] w-20 bg-gold rounded-full mb-8" />
          <p className="text-charcoal/60 font-medium leading-relaxed max-w-2xl">
            {t('about_subtitle_2')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <p className="text-lg text-charcoal/80 leading-relaxed font-light">
              {t('about_description')}
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed font-light">
              Notre équipe d'artisans numériques s'engage à transformer vos idées en réalité, avec une précision et un soin apportés à chaque détail. Nous croyons que la technologie doit être à la fois puissante et esthétique.
            </p>
          </div>
          <div className="relative group">
            <div className="aspect-[4/5] bg-charcoal/5 rounded-2xl overflow-hidden">
              {/* Use generate_image later if needed, for now a placeholder style */}
              <div className="w-full h-full bg-gradient-to-br from-gold/20 to-charcoal/5 flex items-center justify-center">
                <span className="text-gold/40 font-headline text-8xl font-black">AB</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 aspect-square bg-gold/10 rounded-2xl -z-10 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4" />
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Projets Réalisés', value: '50+' },
            { label: 'Clients Satisfaits', value: '30+' },
            { label: 'Années d\'Expérience', value: '4+' },
            { label: 'Technologies', value: '15+' }
          ].map((stat, i) => (
            <div key={i} className="text-center p-8 bg-charcoal/2 rounded-2xl border border-charcoal/5">
              <div className="text-3xl font-headline font-bold text-gold mb-2">{stat.value}</div>
              <div className="text-xs font-label font-bold text-charcoal/40 tracking-wider font-bold text-charcoal/40">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

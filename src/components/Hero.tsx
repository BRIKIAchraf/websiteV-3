import { ChevronDown } from 'lucide-react';

// Pool of photos — add more paths here as you add images to /public/photos/
const heroPhotos = [
  '/ChatGPT_Image_Mar_16,_2026,_02_03_38_PM.png',
  // Duplicate so every slot has a fallback until more photos are added
  '/ChatGPT_Image_Mar_16,_2026,_02_03_38_PM.png',
  '/ChatGPT_Image_Mar_16,_2026,_02_03_38_PM.png',
  '/ChatGPT_Image_Mar_16,_2026,_02_03_38_PM.png',
  '/ChatGPT_Image_Mar_16,_2026,_02_03_38_PM.png',
  '/ChatGPT_Image_Mar_16,_2026,_02_03_38_PM.png',
  '/ChatGPT_Image_Mar_16,_2026,_02_03_38_PM.png',
];

function getDailyPhoto(): string {
  // Use the day-of-year to pick a photo — changes every day
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  return heroPhotos[dayOfYear % heroPhotos.length];
}

export default function Hero() {
  const photo = getDailyPhoto();

  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-stretch overflow-hidden bg-white">
      
      {/* PHOTO - Full Background on Mobile, Right Column on Desktop */}
      <div className="absolute lg:relative inset-0 lg:inset-auto w-full lg:w-1/2 h-full lg:h-auto order-1 lg:order-2">
        <div className="w-full h-full relative group overflow-hidden">
          {/* Main Photo */}
          <img
            src={photo}
            alt="AB Portfolio"
            className="absolute inset-0 w-full h-full object-cover object-[center_20%] lg:object-top transition-transform duration-1000 group-hover:scale-110"
            style={{ filter: 'brightness(1.02) contrast(1.05)' }}
          />
          
          {/* Mobile-only Overlay Gradients (Ensures legibility on the bottom 1/3) */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent lg:hidden" />
          
          {/* Desktop-only Editorial depth divider */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/5 to-transparent z-10 hidden lg:block" />
        </div>
        
        {/* Desktop-only Decorative Diamond */}
        <div className="absolute top-1/2 -left-12 -translate-y-1/2 w-24 h-24 bg-white rotate-45 hidden lg:block shadow-[-10px_10px_30px_rgba(0,0,0,0.05)] z-20 border-l border-b border-gold/10" />
      </div>

      {/* TEXT & LOGO - Overlay on Mobile Bottom 1/3, Left Column on Desktop */}
      <div className="relative z-20 w-full lg:w-1/2 flex flex-col justify-end lg:justify-center items-center lg:items-start px-6 md:px-12 lg:pl-28 pb-16 lg:pb-0 py-0 lg:py-0 text-center lg:text-left order-2 lg:order-1 bg-transparent lg:bg-white min-h-screen lg:min-h-0">
        
        {/* The dominant 3D Logo - Reduced bottom margin */}
        <div className="animate-fade-in-up mb-0 lg:mb-2">
          <div className="relative group text-center lg:text-left">
            <img 
              src="/ChatGPT Image 24 mars 2026, 22_08_45.png" 
              alt="AB Web & Digital Solutions" 
              className="w-64 md:w-80 lg:w-[32rem] h-auto transition-transform duration-700 group-hover:scale-105 select-none inline-block"
            />
            {/* Subtle gold glow */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gold/10 blur-[100px] -z-10" />
          </div>
        </div>

        {/* Catchphrase / Subtitle - Title Case and tight spacing */}
        <div className="animate-fade-in-up delay-150 max-w-xl">
           <p className="text-white/40 lg:text-charcoal/40 font-headline font-bold text-xs md:text-sm tracking-[0.2em] mb-3 lg:mb-4 flex items-center gap-4 justify-center lg:justify-start">
             <span className="w-8 h-px bg-gold/30" />
             Expertise & Innovation
             <span className="w-8 h-px bg-gold/30" />
           </p>
           <h2 className="text-2xl md:text-3xl lg:text-5xl font-headline font-black text-white lg:text-charcoal leading-tight mb-6 lg:mb-6">
             L'expertise technologique au service de <span className="text-gold italic">l'élégance</span> numérique.
           </h2>
           
           {/* Primary Button */}
           <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start mt-2 lg:mt-4">
              <a 
                href="#projects" 
                className="group relative px-10 py-3.5 lg:py-4 bg-white lg:bg-charcoal text-charcoal lg:text-white rounded-full font-headline font-bold tracking-widest text-sm uppercase overflow-hidden shadow-2xl transition-all active:scale-95"
              >
                <span className="relative z-10 font-bold uppercase">Nos Projets</span>
                <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
           </div>
        </div>
      </div>

      {/* Mobile-only scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-30 lg:hidden text-white/40">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}

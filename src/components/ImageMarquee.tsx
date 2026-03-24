

const images = [
  'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3182792/pexels-photo-3182792.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3182743/pexels-photo-3182743.jpeg?auto=compress&cs=tinysrgb&w=800',
];

export default function ImageMarquee() {
  return (
    <section className="py-10 bg-surface-container-low overflow-hidden transition-colors duration-1000">
      <div className="flex flex-col gap-16">
        <div className="text-center px-6 animate-fade-in-up">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-8 bg-primary"></div>
            <span className="text-[10px] font-headline font-black tracking-[0.4em] text-primary leading-none">
              Atmosphere & Craft
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-headline font-extrabold tracking-[-0.05em] leading-none mb-10 text-on-surface">
            Immersion dans mon <span className="italic font-light text-primary">univers.</span>
          </h2>
          <p className="text-on-surface/50 text-xl max-w-2xl mx-auto font-body font-light leading-relaxed px-4">
            Un aperçu des environnements et des technologies qui façonnent mon quotidien d'artisan digital.
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
                  className="w-full h-full object-cover grayscale opacity-60 group-hover/marquee:opacity-90 transition-all duration-1000 group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

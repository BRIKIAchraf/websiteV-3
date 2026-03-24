import { Award, BookOpen, GraduationCap } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: 'Développement Web Full Stack',
    issuer: 'Certification Professionnelle',
    date: '2024',
    icon: <GraduationCap className="text-primary" size={32} />
  },
  {
    id: 2,
    title: 'Spécialiste Google Ads',
    issuer: 'Google Digital Academy',
    date: '2023',
    icon: <Award className="text-primary" size={32} />
  },
  {
    id: 3,
    title: 'UI/UX Design Avancé',
    issuer: 'Design Institute',
    date: '2023',
    icon: <BookOpen className="text-primary" size={32} />
  }
];

export default function Certifications() {
  return (
    <div className="pt-28 pb-12 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="mb-10 animate-fade-in text-center">
        <h1 className="text-5xl md:text-8xl font-headline tracking-tighter text-charcoal mb-8 leading-tight">
          Études & <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-dark to-gold animate-shimmer bg-[length:200%_auto]">Certifications</span>
        </h1>
        <p className="text-charcoal/60 text-xl md:text-2xl max-w-2xl mx-auto font-body leading-relaxed">
          Mon parcours académique et professionnel pour garantir une expertise à la pointe du digital.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {certifications.map((cert) => (
          <div key={cert.id} className="group flex flex-col md:flex-row gap-8 p-10 md:p-14 bg-white rounded-[3rem] shadow-2xl border border-charcoal/5 hover:border-gold/30 transition-all duration-700 items-center text-center md:text-left">
            <div className="w-24 h-24 rounded-3xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
              {cert.icon === <GraduationCap className="text-gold" size={40} /> || cert.icon.type === GraduationCap ? <GraduationCap className="text-gold" size={40} /> : cert.icon.type === Award ? <Award className="text-gold" size={40} /> : <BookOpen className="text-gold" size={40} />}
            </div>
            <div>
              <span className="text-[10px] font-black text-gold opacity-60 tracking-[0.4em] mb-3 block">{cert.date}</span>
              <h3 className="text-3xl md:text-4xl font-headline font-bold text-charcoal mb-3 group-hover:text-gold transition-colors">{cert.title}</h3>
              <p className="text-charcoal/50 text-xl font-body leading-relaxed">{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

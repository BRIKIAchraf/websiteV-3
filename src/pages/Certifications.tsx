import { Award, GraduationCap, Briefcase, Calendar, MapPin, Code2 } from 'lucide-react';

const education = [
  {
    degree: "Master’s Degree (LM-18) in Computer Science and Digital Innovation",
    institution: "Università Degli Studi Di Urbino Carlo Bo",
    location: "Urbino, Italy",
    period: "Sept 2025 – En Cours",
  },
  {
    degree: "Bachelor’s Degree in Information Systems Technologies",
    institution: "Higher Institute of Technological Studies",
    location: "Djerba, Tunisia",
    period: "Sept 2021 – Juin 2024",
  }
];

const experience = [
  {
    role: "Embedded Systems & DevOps Developer (PFE)",
    company: "Omegup",
    location: "Zarzis, Tunisia",
    period: "Jan 2024 – Juin 2024",
    description: "Développement d'un module de gestion de présence et d'un SDK pour les appareils ZKTeco, réduisant les erreurs système de 15%. Travail dans des environnements Linux avec des applications conteneurisées.",
    technologies: ["Python", "ReactJs", "Docker", "Linux", "Raspberry Pi", "NodeJs", "MongoDb"]
  },
  {
    role: "WordPress Developer Intern",
    company: "TeftefProduction",
    location: "Zarzis, Tunisia",
    period: "Juil 2022 – Août 2022",
    description: "Création d'un site portfolio professionnel et gestion de campagnes publicitaires Facebook. Augmentation de la visibilité en ligne de 25% en deux mois.",
    technologies: ["Wordpress", "Figma", "Php", "Css", "OVH", "FTP"]
  },
  {
    role: "Full Stack Developer Intern",
    company: "Bimatech",
    location: "Zarzis, Tunisia",
    period: "Jan 2022 – Fév 2022",
    description: "Conception et développement d'une plateforme E-commerce responsive.",
    technologies: ["Reactjs", "ExpressJs", "Mongodb", "NodeJs", "Redux", "AWS"]
  }
];

const certifications = [
  {
    id: 1,
    title: 'Foundations of Project Management',
    issuer: 'Google | Coursera',
    date: 'Mai 2023',
  },
  {
    id: 2,
    title: 'Version Control',
    issuer: 'Google | Coursera',
    date: 'Juin 2023',
  },
  {
    id: 3,
    title: 'Agile Project Management',
    issuer: 'Google | Coursera',
    date: 'Juillet 2023',
  },
  {
    id: 4,
    title: 'Foundations of UX Design',
    issuer: 'Google | Coursera',
    date: 'Août 2023',
  },
  {
    id: 5,
    title: 'IOPC (International Odoo Programming)',
    issuer: 'Odoo Academy',
    date: 'Mai 2025',
  }
];

export default function Certifications() {
  return (
    <div className="pt-28 pb-20 px-6 md:px-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-20 animate-fade-in text-center">
          <h1 className="text-5xl md:text-8xl font-headline tracking-tighter text-black mb-8 leading-tight">
            Études & <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-dark to-gold animate-shimmer bg-[length:200%_auto]">Certifications</span>
          </h1>
          <p className="text-black font-bold text-xl md:text-2xl max-w-2xl mx-auto font-body leading-relaxed">
            Un parcours académique et professionnel rigoureux pour garantir une expertise à la pointe du digital.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          
          {/* Education Block */}
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-gold/10 rounded-2xl text-gold">
                <GraduationCap size={28} />
              </div>
              <h2 className="text-[17px] font-headline font-black text-black tracking-tighter">
                Études <span className="text-gold italic">Académiques</span>
              </h2>
            </div>
            
            <div className="space-y-12">
              {education.map((item, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-gold/10 hover:border-gold/30 transition-colors">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-gold" />
                  <div className="mb-2 flex items-center gap-3 text-gold/60 text-[10px] font-black tracking-[0.2em] uppercase">
                    <Calendar size={12} />
                    {item.period}
                  </div>
                  <h3 className="text-[17px] font-headline font-bold text-black mb-2 leading-tight">
                    {item.degree}
                  </h3>
                  <p className="text-black font-bold mb-2">{item.institution}</p>
                  <div className="flex items-center gap-2 text-charcoal/40 text-xs text-capitalize">
                    <MapPin size={12} />
                    {item.location}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Block */}
          <div className="animate-fade-in-up delay-200">
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-gold/10 rounded-2xl text-gold">
                <Briefcase size={28} />
              </div>
              <h2 className="text-[17px] font-headline font-black text-black tracking-tighter">
                Parcours <span className="text-gold italic">Professionnel</span>
              </h2>
            </div>

            <div className="space-y-12">
              {experience.map((item, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-gold/10 hover:border-gold/30 transition-colors">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-gold" />
                  <div className="mb-2 flex items-center gap-3 text-gold/60 text-[10px] font-black tracking-[0.2em] uppercase">
                    <Calendar size={12} />
                    {item.period}
                  </div>
                  <h3 className="text-[17px] font-headline font-bold text-black mb-1 leading-tight">
                    {item.role}
                  </h3>
                  <p className="text-gold font-bold mb-4">{item.company}</p>
                  <p className="text-black font-bold text-sm mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, tIndex) => (
                      <span key={tIndex} className="px-3 py-1 bg-charcoal/5 text-charcoal/40 text-[9px] font-black tracking-widest rounded-full flex items-center gap-1.5 grayscale hover:grayscale-0 transition-all border border-transparent hover:border-gold/20 leading-none">
                        <Code2 size={10} className="text-gold/60" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Certifications Section (Full Width Bottom) */}
        <div className="animate-fade-in-up delay-400">
          <div className="flex items-center gap-4 mb-12 justify-center">
            <div className="p-3 bg-gold/10 rounded-2xl text-gold">
              <Award size={28} />
            </div>
            <h2 className="text-[17px] font-headline font-black text-black tracking-tighter">
              Mes <span className="text-gold italic">Certifications</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div key={cert.id} className="group p-8 bg-white rounded-[2.5rem] shadow-xl border border-charcoal/5 hover:border-gold/30 transition-all duration-700">
                <div className="mb-4 flex items-center gap-3 text-gold/60 text-[9px] font-black tracking-[0.2em] uppercase">
                  <Calendar size={12} />
                  {cert.date}
                </div>
                <h3 className="text-[17px] font-headline font-bold text-black mb-2 group-hover:text-gold transition-colors leading-tight">{cert.title}</h3>
                <p className="text-black font-bold text-sm font-body">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

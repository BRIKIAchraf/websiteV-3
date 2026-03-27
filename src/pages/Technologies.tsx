import { 
  Code2, 
  Cpu, 
  Globe, 
  Layout, 
  Layers, 
  Smartphone, 
  Database, 
  ShieldCheck, 
  Zap,
  Wind
} from 'lucide-react';

const technologies = [
  {
    category: "Frontend Excellence",
    icon: <Layout className="text-gold" size={32} />,
    items: [
      { name: "React", icon: <Code2 size={16} />, level: "Expert" },
      { name: "TypeScript", icon: <ShieldCheck size={16} />, level: "Expert" },
      { name: "Tailwind CSS", icon: <Wind size={16} />, level: "Expert" },
      { name: "Next.js", icon: <Globe size={16} />, level: "Advanced" },
      { name: "Framer Motion", icon: <Zap size={16} />, level: "Advanced" },
    ]
  },
  {
    category: "Architecture & Logic",
    icon: <Cpu className="text-gold" size={32} />,
    items: [
      { name: "Node.js", icon: <Layers size={16} />, level: "Advanced" },
      { name: "PostgreSQL", icon: <Database size={16} />, level: "Advanced" },
      { name: "REST APIs", icon: <Globe size={16} />, level: "Expert" },
      { name: "GraphQL", icon: <Zap size={16} />, level: "Intermediate" },
    ]
  },
  {
    category: "Mobile & Beyond",
    icon: <Smartphone className="text-gold" size={32} />,
    items: [
      { name: "React Native", icon: <Smartphone size={16} />, level: "Advanced" },
      { name: "PWA", icon: <Globe size={16} />, level: "Expert" },
      { name: "Responsive Design", icon: <Layout size={16} />, level: "Expert" },
    ]
  }
];

import { useLanguage } from '../context/LanguageContext';
import AnimatedText from '../components/AnimatedText';

export default function Technologies() {
  const { t } = useLanguage();
  return (
    <div className="pt-24 pb-10 px-6 md:px-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-fade-in text-center">
          <h1 className="font-bold text-on-surface mb-3 font-headline">
            <AnimatedText text={t('tech_title_1')} delay={0} /> <span className="shimmer-text"><AnimatedText text={t('tech_title_2')} delay={300} /></span>
          </h1>
          <div className="h-[2px] w-20 bg-gold rounded-full mx-auto mb-8" />
          <p className="text-on-surface/30 max-w-3xl mx-auto leading-relaxed">
            {t('tech_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((group, index) => (
            <div 
              key={index} 
              className="bg-surface p-10 rounded-3xl border border-on-surface/5 hover:border-gold/30 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-8 p-4 bg-background inline-block rounded-2xl shadow-sm">
                {group.icon}
              </div>
              <h2 className="font-bold text-on-surface mb-8 tracking-tighter font-headline">
                {group.category}
              </h2>
              
              <div className="space-y-4">
                {group.items.map((tech, tIndex) => (
                  <div 
                    key={tIndex} 
                    className="flex items-center justify-between p-3 rounded-xl bg-background/50 border border-on-surface/5 hover:border-gold/20 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-gold">{tech.icon}</span>
                      <span className="text-sm font-semibold text-on-surface">{tech.name}</span>
                    </div>
                    <span className="text-[10px] font-bold text-gold/60">{tech.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

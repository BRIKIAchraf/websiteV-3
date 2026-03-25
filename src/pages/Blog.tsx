import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Blog() {
  const { t, language } = useLanguage();
  return (
    <div className="pt-24 pb-10 px-6 md:px-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-fade-in text-center">
          <h1 className="font-bold text-on-surface mb-3 font-headline">
            {t('blog_title_1')} <span className="shimmer-text">{t('blog_title_2')}</span>
          </h1>
          <div className="h-[2px] w-20 bg-gold rounded-full mx-auto mb-8" />
          <p className="text-on-surface/60 max-w-2xl mx-auto leading-relaxed">
            {t('blog_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link 
              to={`/blog/${post.id}`} 
              key={post.id}
              className="group bg-surface rounded-3xl overflow-hidden border border-on-surface/5 hover:border-gold/30 transition-all duration-500 animate-fade-in-up flex flex-col h-full shadow-sm hover:shadow-xl"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gold text-white text-[10px] font-bold tracking-widest rounded-full shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-[10px] font-bold text-on-surface/40 tracking-widest mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} className="text-gold" />
                    {post.date}
                  </div>
                  <div className="w-1 h-1 bg-gold/30 rounded-full"></div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} className="text-gold" />
                    {post.readTime}
                  </div>
                </div>
                <h2 className="font-bold text-on-surface mb-4 group-hover:text-gold transition-colors line-clamp-2 font-headline">
                  {language === 'en' ? post.title_en : post.title}
                </h2>
                <p className="text-on-surface/60 text-sm mb-8 line-clamp-3">
                  {language === 'en' ? post.excerpt_en : post.excerpt}
                </p>

                <div className="mt-auto flex items-center gap-2 text-gold font-bold text-xs group-hover:gap-4 transition-all">
                  {t('blog_cta')}
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

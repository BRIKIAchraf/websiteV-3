import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function BlogPost() {
  const { id } = useParams();
  const { t, language } = useLanguage();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="pt-32 pb-20 px-6 text-center bg-background min-h-screen">
        <h1 className="text-4xl font-headline text-primary">{t('blog_not_found')}</h1>
        <Link to="/blog" className="mt-8 inline-block text-gold hover:underline">{t('blog_back')}</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-8 px-6 md:px-12 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <Link to="/blog" className="inline-flex items-center gap-4 mb-8 text-[10px] font-headline font-black tracking-[0.4em] text-primary/40 hover:text-gold transition-colors group">
          <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
          {t('blog_back')}
        </Link>

        {/* Header */}
        <div className="mb-10 animate-fade-in-up">
          <div className="flex items-center gap-6 mb-8 text-[10px] font-headline font-black tracking-[0.3em] text-gold">
            <span className="italic">{post.category}</span>
            <div className="w-1.5 h-1.5 rounded-full bg-gold/20"></div>
            <div className="flex items-center gap-2">
              <Calendar size={12} />
              {post.date}
            </div>
          </div>
          <h1 className="font-headline tracking-tighter text-black leading-[0.9] mb-12 shimmer-text">
            {language === 'en' ? post.title_en : post.title}
          </h1>
        </div>

        {/* Featured Image */}
        <div className="aspect-[21/9] mb-16 rounded-[3rem] overflow-hidden border border-gold/10">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Side Info */}
          <div className="lg:col-span-3 space-y-12">
            <div>
              <span className="block text-[10px] font-headline font-black tracking-widest text-primary/30 mb-4">{t('blog_read_time')}</span>
              <p className="flex items-center gap-2 font-headline text-primary">
                <Clock size={16} className="text-gold" />
                {post.readTime}
              </p>
            </div>
            <div>
              <button className="flex items-center gap-2 text-[10px] font-headline font-black tracking-widest text-primary/40 hover:text-gold transition-colors">
                <Share2 size={16} />
                {t('blog_share')}
              </button>
            </div>
          </div>

          {/* Body Text */}
          <div className="lg:col-span-9">
            <div 
              className="prose prose-xl prose-gold max-w-none text-secondary/80 font-body font-light leading-relaxed [&>h3]:text-primary [&>h3]:font-headline [&>h3]:text-3xl [&>h3]:mt-12 [&>h3]:mb-6 [&>p]:mb-8"
              dangerouslySetInnerHTML={{ __html: language === 'en' ? post.content_en : post.content }}
            />
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-24 pt-12 border-t border-gold/10 flex justify-center">
            <Link to="/blog" className="relative px-12 py-5 bg-gold text-white font-headline font-bold text-xs tracking-[0.3em] overflow-hidden transition-all duration-500 hover:shadow-2xl">
                {t('blog_explore_more')}
            </Link>
        </div>
      </div>
    </div>
  );
}

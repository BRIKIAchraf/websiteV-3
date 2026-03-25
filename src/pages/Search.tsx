import { useSearchParams, Link } from 'react-router-dom';
import { allProjects } from '../data/projects';
import { blogPosts } from '../data/blog';
import { useLanguage } from '../context/LanguageContext';
import { Search as SearchIcon, ArrowRight } from 'lucide-react';

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';
  const { t, language } = useLanguage();

  const projectResults = allProjects.filter(p => 
    p.title.toLowerCase().includes(query) || 
    p.description.toLowerCase().includes(query) ||
    p.description_en.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query)
  );

  const blogResults = blogPosts.filter(p => 
    p.title.toLowerCase().includes(query) || 
    p.excerpt.toLowerCase().includes(query) ||
    (p.title_en && p.title_en.toLowerCase().includes(query)) ||
    (p.excerpt_en && p.excerpt_en.toLowerCase().includes(query))
  );

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-gold font-headline font-bold text-xs mb-4">
            {t('search_results_for')}
          </p>
          <h1 className="text-4xl font-headline font-black text-charcoal flex items-center gap-4">
            <SearchIcon size={32} />
            "{query}"
          </h1>
          <div className="h-[2px] w-20 bg-gold mt-6" />
        </div>

        {projectResults.length === 0 && blogResults.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-charcoal/40 font-headline text-lg">
              {t('no_results_found')}
            </p>
          </div>
        ) : (
          <div className="space-y-16">
            {projectResults.length > 0 && (
              <section>
                <h2 className="text-xl font-headline font-bold mb-8 flex items-center gap-3">
                  <span className="w-8 h-px bg-gold/30" />
                  {t('nav_projects')} ({projectResults.length})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projectResults.map(project => (
                    <Link
                      key={project.id}
                      to="/projects"
                      className="group bg-white border border-charcoal/5 rounded-2xl overflow-hidden hover:shadow-2xl transition-all"
                    >
                      <div className="aspect-[16/10] overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                        <p className="text-charcoal/60 text-sm line-clamp-2">
                          {language === 'en' ? project.description_en : project.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {blogResults.length > 0 && (
              <section>
                <h2 className="text-xl font-headline font-bold mb-8 flex items-center gap-3">
                  <span className="w-8 h-px bg-gold/30" />
                  {t('nav_blog')} ({blogResults.length})
                </h2>
                <div className="space-y-6">
                  {blogResults.map(post => (
                    <Link
                      key={post.id}
                      to={`/blog/${post.id}`}
                      className="flex items-center justify-between p-6 bg-white border border-charcoal/5 rounded-2xl group hover:border-gold/30 transition-all"
                    >
                      <div>
                        <h3 className="font-bold text-lg mb-1 group-hover:text-gold transition-colors">
                          {language === 'en' ? post.title_en : post.title}
                        </h3>
                        <p className="text-charcoal/60 text-xs">
                          {post.date} • {post.category}
                        </p>
                      </div>
                      <ArrowRight className="text-charcoal/20 group-hover:text-gold transform translate-x-0 group-hover:translate-x-2 transition-all" />
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

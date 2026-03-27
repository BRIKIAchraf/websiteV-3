import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('nav_home'), path: '/' },
        { name: t('nav_about'), path: '/about' },
        { name: t('nav_projects'), path: '/projects' },

        { name: t('nav_technologies'), path: '/technologies' },
        { name: t('nav_blog'), path: '/blog' },
        { name: t('nav_certifications'), path: '/certifications' },
    ];

    const toggleLanguage = () => {
        setLanguage(language === 'fr' ? 'en' : 'fr');
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)] border-b border-charcoal/8'
                    : 'bg-white/95 border-b border-charcoal/5'
                    }`}
            >
                <div className="w-full px-6 md:px-12 lg:px-12 flex items-center justify-between relative" style={{ height: '80px' }}>

                    {/* Left Slot: Logo & Global Search/Lang Group */}
                    <div className="flex items-center gap-12">
                        {/* Logo */}
                        <div className="flex-none flex items-center">
                            {location.pathname !== '/' && (
                                <Link to="/" className="flex items-center group">
                                    <img
                                        src="/ChatGPT Image 24 mars 2026, 22_08_45.png"
                                        alt="AB Web & Digital Solutions"
                                        className="h-16 md:h-20 lg:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                    />
                                </Link>
                            )}
                        </div>
                        {/* Right Slot: Navigation Links (Menu a droit) */}
                        <div className="hidden lg:flex items-center gap-1">
                            <nav className="flex items-center gap-2 xl:gap-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className={`relative px-4 py-2 font-headline text-[13px] font-bold tracking-tighter transition-all duration-300 rounded-lg group ${location.pathname === link.path
                                            ? 'text-gold'
                                            : 'text-charcoal hover:text-gold'
                                            }`}
                                    >
                                        {link.name}
                                        <span
                                            className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gold rounded-full transition-all duration-300 ${location.pathname === link.path ? 'w-4' : 'w-0 group-hover:w-4'
                                                }`}
                                        />
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Search & Language (The "Other" Group) - Aligned exactly with Hero Title Baseline */}
                        <div className="hidden lg:flex items-center gap-4 lg:absolute lg:right-28 h-full">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const formData = new FormData(e.currentTarget);
                                    const q = formData.get('search');
                                    if (q) window.location.href = `/search?q=${encodeURIComponent(q as string)}`;
                                }}
                                className="relative group w-48 xl:w-64"
                            >
                                <input
                                    type="text"
                                    name="search"
                                    placeholder={t('search_placeholder')}
                                    className="w-full bg-charcoal/5 border border-charcoal/10 rounded-full py-2 pl-10 pr-4 text-xs font-label focus:outline-none focus:ring-1 focus:ring-gold/30 transition-all"
                                />
                                <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/40 group-focus-within:text-gold transition-colors" />
                            </form>

                            <button
                                onClick={toggleLanguage}
                                className="group flex items-center gap-2 w-max py-1 pl-1 pr-3 rounded-full bg-charcoal/5 hover:bg-gold/10 transition-all duration-300 border border-charcoal/10"
                            >
                                <div className="flex items-center bg-white border border-charcoal/10 rounded-full p-0.5 shadow-sm group-hover:border-gold/30 transition-all">
                                    <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full overflow-hidden flex items-center justify-center transition-all ${language === 'fr' ? 'border-2 border-gold scale-110 shadow-sm' : 'opacity-40'}`}>
                                        <img src="https://flagcdn.com/w40/fr.png" alt="Français" className="w-full h-full object-cover" />
                                    </div>
                                    <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full overflow-hidden flex items-center justify-center transition-all ${language === 'en' ? 'border-2 border-gold scale-110 shadow-sm' : 'opacity-40'}`}>
                                        <img src="https://flagcdn.com/w40/gb.png" alt="English" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <span className="font-label text-[9px] font-black tracking-widest text-charcoal group-hover:text-gold transition-colors">
                                    {language.toUpperCase()}
                                </span>
                            </button>
                        </div>
                    </div>



                    {/* Mobile toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2.5 rounded-xl bg-charcoal/5 text-charcoal hover:bg-charcoal/10 transition-all active:scale-95"
                        aria-label="Menu"
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </header>

            {/* Mobile full-screen overlay */}
            <div
                className={`fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-6 transition-all duration-400 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent" />

                {navLinks.map((link, i) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`font-headline text-3xl font-bold tracking-tighter transition-all duration-300 ${location.pathname === link.path
                            ? 'text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-dark'
                            : 'text-charcoal/60 hover:text-charcoal'
                            }`}
                        style={{ transitionDelay: `${i * 40}ms` }}
                    >
                        {link.name}
                    </Link>
                ))}

                {/* Mobile Language Switcher */}
                <button
                    onClick={() => {
                        toggleLanguage();
                        setIsMenuOpen(false);
                    }}
                    className="mt-8 flex items-center gap-4 px-6 py-3 bg-charcoal/5 rounded-full border border-charcoal/10 transition-all active:scale-95"
                >
                    <div className={`w-12 h-12 rounded-full overflow-hidden flex items-center justify-center transition-all ${language === 'fr' ? 'ring-4 ring-gold shadow-lg' : 'opacity-40'}`}>
                        <img src="https://flagcdn.com/w80/fr.png" alt="Français" className="w-full h-full object-cover" />
                    </div>
                    <div className={`w-12 h-12 rounded-full overflow-hidden flex items-center justify-center transition-all ${language === 'en' ? 'ring-4 ring-gold shadow-lg' : 'opacity-40'}`}>
                        <img src="https://flagcdn.com/w80/gb.png" alt="English" className="w-full h-full object-cover" />
                    </div>
                </button>
            </div>
        </>
    );
}

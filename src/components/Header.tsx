import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Accueil', path: '/' },
        { name: 'Projets', path: '/projects' },
        { name: 'Technologies', path: '/technologies' },
        { name: 'Journal', path: '/blog' },
        { name: 'Études & Certifs', path: '/certifications' },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)] border-b border-charcoal/8'
                    : 'bg-white/95 backdrop-blur-md border-b border-charcoal/5'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-14 flex items-center justify-between" style={{ height: '80px' }}>

                    {/* Enlarged 3D Logo (Matches Hero) */}
                    <Link to="/" className="flex items-center group">
                        <img
                            src="/ChatGPT Image 24 mars 2026, 22_08_45.png"
                            alt="AB Web & Digital Solutions"
                            className="h-20 md:h-24 lg:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`relative px-4 py-2 font-label text-[11px] font-bold tracking-[0.18em] transition-all duration-300 rounded-lg group ${location.pathname === link.path
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

                        <a
                            href="mailto:achraf@briki.dev"
                            className="ml-4 px-6 py-2.5 bg-gold text-white rounded-full font-label font-black text-[11px] tracking-[0.18em] hover:bg-gold-dark transition-all duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.4)] active:scale-95"
                        >
                            Me contacter
                        </a>
                    </nav>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2.5 rounded-xl bg-charcoal/5 text-charcoal hover:bg-charcoal/10 transition-all active:scale-95"
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

                <a
                    href="mailto:achraf@briki.dev"
                    className="mt-6 px-10 py-4 bg-gold text-white rounded-full font-label font-black text-sm tracking-widest hover:bg-gold-dark transition-all"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Me contacter
                </a>
            </div>
        </>
    );
}

import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

// Custom X (Twitter) Logo Component
const XIcon = ({ size }: { size: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.482 3.239H4.293L17.607 20.65z"/>
  </svg>
);

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-background border-t border-on-surface/10 py-3">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Logo - Slightly reduced for minimal footer height */}
        <Link to="/" className="flex items-center group">
          <img
            src="/ChatGPT Image 24 mars 2026, 22_08_45.png"
            alt="AB Web & Digital Solutions"
            className="h-32 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Copyright - Reduced margin/gap */}
        <p className="text-on-surface/40 text-[2px] font-bold tracking-[1px] text-center -mt-1 uppercase">
          © {new Date().getFullYear()} AB Web & Digital Solutions — {t('footer_rights')}
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          {[
            { icon: <Linkedin size={18} />, url: 'https://linkedin.com', color: '#0077b5' },
            { icon: <XIcon size={16} />, url: 'https://twitter.com', color: '#000000' },
            { icon: <Github size={18} />, url: 'https://github.com', color: '#333333' },
            { icon: <MessageCircle size={18} />, url: 'https://wa.me/216', color: '#25D366' },
            { icon: <Mail size={18} />, url: 'mailto:contact@achrafbriki.com', color: '#D4AF37' },
          ].map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-md hover:scale-110 active:scale-95"
              style={{ backgroundColor: social.color }}
              title={social.url}
            >
              {social.icon}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}

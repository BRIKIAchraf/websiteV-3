import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
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
        <p className="text-black text-[9px] font-bold tracking-[0.2em] text-center -mt-2">
          © 2024 AB Web & Digital Solutions — Tous Droits Réservés
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          {[
            { icon: <Linkedin size={16} />, url: 'https://linkedin.com' },
            { icon: <Twitter size={16} />, url: 'https://twitter.com' },
            { icon: <Github size={16} />, url: 'https://github.com' },
            { icon: <Mail size={16} />, url: 'mailto:contact@achrafbriki.com' },
          ].map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-on-surface/5 flex items-center justify-center text-on-surface/40 hover:bg-gold hover:text-white transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}

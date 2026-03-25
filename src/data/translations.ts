export type Language = 'fr' | 'en';

export type TranslationKeys = 
  | 'nav_home'
  | 'nav_projects'
  | 'nav_technologies'
  | 'nav_blog'
  | 'nav_certifications'
  | 'nav_about'
  | 'contact_me'
  | 'search_placeholder'
  | 'about_title'
  | 'about_subtitle'
  | 'about_description'
  | 'footer_rights';

export const translations: Record<Language, Record<string, string>> = {
  fr: {
    nav_home: 'Accueil',
    nav_projects: 'Projets',
    nav_technologies: 'Technologies',
    nav_blog: 'Journal',
    nav_certifications: 'Études & Certifs',
    nav_about: 'À propos',
    contact_me: 'Me contacter',
    search_placeholder: 'Rechercher...',
    about_title: 'À Propos de Nous',
    about_subtitle: 'Artisans du Digital et Passionnés d\'Innovation',
    about_description: 'Nous sommes une équipe dédiée à la création d\'expériences numériques d\'exception. Notre approche combine design sophistiqué et expertise technique pour propulser votre présence en ligne.',
    footer_rights: 'Tous droits réservés.'
  },
  en: {
    nav_home: 'Home',
    nav_projects: 'Projects',
    nav_technologies: 'Technologies',
    nav_blog: 'Journal',
    nav_certifications: 'Studies & Certs',
    nav_about: 'About',
    contact_me: 'Contact me',
    search_placeholder: 'Search...',
    about_title: 'About Us',
    about_subtitle: 'Digital Artisans Passionate About Innovation',
    about_description: 'We are a team dedicated to creating exceptional digital experiences. Our approach combines sophisticated design and technical expertise to propel your online presence.',
    footer_rights: 'All rights reserved.'
  }
};

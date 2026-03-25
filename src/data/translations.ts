export type Language = 'fr' | 'en';

export type TranslationKeys = 
  | 'nav_home'
  | 'nav_projects'
  | 'nav_technologies'
  | 'nav_blog'
  | 'nav_certifications'
  | 'nav_about'
  | 'contact_me'
  | 'switch_lang'
  | 'search_placeholder'
  | 'about_title'
  | 'about_subtitle'
  | 'about_subtitle_2'
  | 'about_description'
  | 'footer_rights'
  | 'hero_expertise'
  | 'hero_title'
  | 'hero_cta'
  | 'projects_title_1'
  | 'projects_title_2'
  | 'projects_cta'
  | 'projects_page_title_1'
  | 'projects_page_title_2'
  | 'projects_page_subtitle'
  | 'projects_view_project'
  | 'carousel_title_1'
  | 'carousel_title_2'
  | 'carousel_subtitle'
  | 'cert_title_1'
  | 'cert_title_2'
  | 'cert_subtitle'
  | 'education_title_1'
  | 'education_title_2'
  | 'experience_title_1'
  | 'experience_title_2'
  | 'cert_list_title_1'
  | 'cert_list_title_2'
  | 'footer_services'
  | 'footer_design'
  | 'footer_web'
  | 'footer_seo'
  | 'footer_cloud'
  | 'footer_contact'
  | 'footer_location'
  | 'footer_follow'
  | 'tech_title_1'
  | 'tech_title_2'
  | 'tech_subtitle'
  | 'marquee_title_1'
  | 'marquee_title_2'
  | 'marquee_subtitle'
  | 'blog_title_1'
  | 'blog_title_2'
  | 'blog_subtitle'
  | 'blog_cta'
  | 'blog_back'
  | 'blog_not_found'
  | 'blog_read_time'
  | 'blog_share'
  | 'blog_explore_more'
  | 'service_design'
  | 'service_web'
  | 'service_mobile'
  | 'service_sponsoring'
  | 'service_ads';

export const translations: Record<Language, Record<string, string>> = {
  fr: {
    nav_home: 'Accueil',
    nav_projects: 'Projets',
    nav_technologies: 'Technologies',
    nav_blog: 'Journal',
    nav_certifications: 'Études & Certifs',
    nav_about: 'À propos',
    contact_me: 'Me contacter',
    switch_lang: 'English',
    search_placeholder: 'Rechercher...',
    about_title: 'À Propos de Nous',
    about_subtitle: 'Artisans du Digital et Passionnés d\'Innovation',
    about_subtitle_2: 'Notre équipe d\'artisans numériques s\'engage à transformer vos idées en réalité, avec une précision et un soin apportés à chaque détail. Nous croyons que la technologie doit être à la fois puissante et esthétique.',
    about_description: 'Nous sommes une équipe dédiée à la création d\'expériences numériques d\'exception. Notre approche combine design sophistiqué et expertise technique pour propulser votre présence en ligne.',
    footer_rights: 'Tous droits réservés.',
    hero_expertise: 'Expertise & Innovation',
    hero_title: 'L\'expertise technologique au service de l\'élégance numérique.',
    hero_cta: 'Nos Projets',
    projects_title_1: 'Projets',
    projects_title_2: 'Sélectionnés',
    projects_cta: 'Voir Tous Les Projets',
    projects_page_title_1: 'Tous Mes',
    projects_page_title_2: 'Projets',
    projects_page_subtitle: 'Une collection complète de mes travaux en design et développement, axée sur la performance et l\'expérience utilisateur.',
    projects_view_project: 'Voir Le Projet',
    carousel_title_1: 'Voir mes',
    carousel_title_2: 'travaux',
    carousel_subtitle: 'Découvrez une sélection de mes projets récents',
    cert_title_1: 'Études &',
    cert_title_2: 'Certifications',
    cert_subtitle: 'Un parcours académique et professionnel rigoureux pour garantir une expertise à la pointe du digital.',
    education_title_1: 'Études',
    education_title_2: 'Académiques',
    experience_title_1: 'Parcours',
    experience_title_2: 'Professionnel',
    cert_list_title_1: 'Mes',
    cert_list_title_2: 'Certifications',
    footer_services: 'Services & Expertise',
    footer_design: 'Design UI/UX',
    footer_web: 'Développement Web',
    footer_seo: 'SEO & Performance',
    footer_cloud: 'Solutions Cloud',
    footer_contact: 'Contact',
    footer_location: 'Localisation',
    footer_follow: 'Suivez-moi',
    tech_title_1: 'Maîtrise',
    tech_title_2: 'Technique',
    tech_subtitle: 'Un aperçu des environnements et des technologies qui façonnent mon quotidien d\'artisan digital.',
    marquee_title_1: 'Immersion dans mon',
    marquee_title_2: 'univers',
    marquee_subtitle: 'Un aperçu des environnements et des technologies qui façonnent mon quotidien d\'artisan digital.',
    blog_title_1: 'Mon',
    blog_title_2: 'Journal',
    blog_subtitle: 'Réflexions sur le design, le développement et l\'innovation technologique.',
    blog_cta: 'Lire La Suite',
    blog_back: 'Retour Au Journal',
    blog_not_found: 'Article non trouvé',
    blog_read_time: 'Temps de lecture',
    blog_share: 'Partager',
    blog_explore_more: 'Découvrir D\'autres Récits',
    service_design: 'DESIGN',
    service_web: 'WEB',
    service_mobile: 'MOBILE',
    service_sponsoring: 'SPONSORING',
    service_ads: 'ADS'
  },
  en: {
    nav_home: 'Home',
    nav_projects: 'Projects',
    nav_technologies: 'Technologies',
    nav_blog: 'Journal',
    nav_certifications: 'Studies & Certs',
    nav_about: 'About',
    contact_me: 'Contact me',
    switch_lang: 'Français',
    search_placeholder: 'Search...',
    about_title: 'About Us',
    about_subtitle: 'Digital Artisans Passionate About Innovation',
    about_subtitle_2: 'Our team of digital artisans is committed to transforming your ideas into reality, with precision and care given to every detail. We believe technology should be both powerful and aesthetic.',
    about_description: 'We are a dedicated team creating exceptional digital experiences. Our approach combines sophisticated design and technical expertise to propel your online presence.',
    footer_rights: 'All rights reserved.',
    hero_expertise: 'Expertise & Innovation',
    hero_title: 'Technological expertise at the service of digital elegance.',
    hero_cta: 'Our Projects',
    projects_title_1: 'Selected',
    projects_title_2: 'Projects',
    projects_cta: 'View All Projects',
    projects_page_title_1: 'All My',
    projects_page_title_2: 'Projects',
    projects_page_subtitle: 'A complete collection of my work in design and development, focused on performance and user experience.',
    projects_view_project: 'View Project',
    carousel_title_1: 'View my',
    carousel_title_2: 'work',
    carousel_subtitle: 'Discover a selection of my recent projects',
    cert_title_1: 'Studies &',
    cert_title_2: 'Certifications',
    cert_subtitle: 'A rigorous academic and professional path to guarantee expertise at the forefront of digital.',
    education_title_1: 'Academic',
    education_title_2: 'Studies',
    experience_title_1: 'Professional',
    experience_title_2: 'Path',
    cert_list_title_1: 'My',
    cert_list_title_2: 'Certifications',
    footer_services: 'Services & Expertise',
    footer_design: 'UI/UX Design',
    footer_web: 'Web Development',
    footer_seo: 'SEO & Performance',
    footer_cloud: 'Cloud Solutions',
    footer_contact: 'Contact',
    footer_location: 'Location',
    footer_follow: 'Follow me',
    tech_title_1: 'Technical',
    tech_title_2: 'Mastery',
    tech_subtitle: 'An overview of the environments and technologies that shape my daily life as a digital artisan.',
    marquee_title_1: 'Immersion in my',
    marquee_title_2: 'universe',
    marquee_subtitle: 'An overview of the environments and technologies that shape my daily life as a digital artisan.',
    blog_title_1: 'My',
    blog_title_2: 'Journal',
    blog_subtitle: 'Reflections on design, development, and technological innovation.',
    blog_cta: 'Read More',
    blog_back: 'Back To Journal',
    blog_not_found: 'Article not found',
    blog_read_time: 'Read time',
    blog_share: 'Share',
    blog_explore_more: 'Discover More Stories',
    service_design: 'DESIGN',
    service_web: 'WEB',
    service_mobile: 'MOBILE',
    service_sponsoring: 'SPONSORING',
    service_ads: 'ADS'
  }
};

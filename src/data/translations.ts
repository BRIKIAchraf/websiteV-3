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
  | 'search_results_for'
  | 'no_results_found'
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
    nav_home: 'accueil',
    nav_projects: 'projets',
    nav_technologies: 'technologies',
    nav_blog: 'journal',
    nav_certifications: 'études & certifs',
    nav_about: 'à propos',
    contact_me: 'me contacter',
    switch_lang: 'English',
    search_placeholder: 'Rechercher...',
    search_results_for: 'Résultats pour',
    no_results_found: 'Aucun résultat trouvé pour cette recherche.',
    about_title: 'à propos de nous',
    about_subtitle: 'artisans du digital et passionnés d\'innovation',
    about_subtitle_2: 'notre équipe d\'artisans numériques s\'engage à transformer vos idées en réalité, avec une précision et un soin apportés à chaque détail. nous croyons que la technologie doit être à la fois puissante et esthétique.',
    about_description: 'nous sommes une équipe dédiée à la création d\'expériences numériques d\'exception. notre approche combine design sophistiqué et expertise technique pour propulser votre présence en ligne.',
    footer_rights: 'tous droits réservés.',
    hero_expertise: 'expertise & innovation',
    hero_title: 'l\'expertise technologique au service de l\'élégance numérique.',
    hero_cta: 'nos projets',
    projects_title_1: 'projets',
    projects_title_2: 'sélectionnés',
    projects_cta: 'voir tous les projets',
    projects_page_title_1: 'tous mes',
    projects_page_title_2: 'projets',
    projects_page_subtitle: 'une collection complète de mes travaux en design et développement, axée sur la performance et l\'expérience utilisateur.',
    projects_view_project: 'voir le projet',
    carousel_title_1: 'voir mes',
    carousel_title_2: 'travaux',
    carousel_subtitle: 'découvrez une sélection de mes projets récents',
    cert_title_1: 'études &',
    cert_title_2: 'certifications',
    cert_subtitle: 'un parcours académique et professionnel rigoureux pour garantir une expertise à la pointe du digital.',
    education_title_1: 'études',
    education_title_2: 'académiques',
    experience_title_1: 'parcours',
    experience_title_2: 'professionnel',
    cert_list_title_1: 'mes',
    cert_list_title_2: 'certifications',
    footer_services: 'services & expertise',
    footer_design: 'design ui/ux',
    footer_web: 'développement web',
    footer_seo: 'seo & performance',
    footer_cloud: 'solutions cloud',
    footer_contact: 'contact',
    footer_location: 'localisation',
    footer_follow: 'suivez-moi',
    tech_title_1: 'maîtrise',
    tech_title_2: 'technique',
    tech_subtitle: 'un aperçu des environnements et des technologies qui façonnent mon quotidien d\'artisan digital.',
    marquee_title_1: 'immersion dans mon',
    marquee_title_2: 'univers',
    marquee_subtitle: 'un aperçu des environnements et des technologies qui façonnent mon quotidien d\'artisan digital.',
    blog_title_1: 'mon',
    blog_title_2: 'journal',
    blog_subtitle: 'réflexions sur le design, le développement et l\'innovation technologique.',
    blog_cta: 'lire la suite',
    blog_back: 'retour au journal',
    blog_not_found: 'article non trouvé',
    blog_read_time: 'temps de lecture',
    blog_share: 'partager',
    blog_explore_more: 'découvrir d\'autres récits',
    service_design: 'DESIGN',
    service_web: 'WEB',
    service_mobile: 'MOBILE',
    service_sponsoring: 'SPONSORING',
    service_ads: 'ADS'
  },
  en: {
    nav_home: 'home',
    nav_projects: 'projects',
    nav_technologies: 'technologies',
    nav_blog: 'journal',
    nav_certifications: 'studies & certs',
    nav_about: 'about',
    contact_me: 'contact me',
    switch_lang: 'Français',
    search_placeholder: 'Search...',
    search_results_for: 'Results for',
    no_results_found: 'No results found for this search.',
    about_title: 'about us',
    about_subtitle: 'digital artisans passionate about innovation',
    about_subtitle_2: 'our team of digital artisans is committed to transforming your ideas into reality, with precision and care given to every detail. we believe technology should be both powerful and aesthetic.',
    about_description: 'we are a dedicated team creating exceptional digital experiences. our approach combines sophisticated design and technical expertise to propel your online presence.',
    footer_rights: 'all rights reserved.',
    hero_expertise: 'expertise & innovation',
    hero_title: 'technological expertise at the service of digital elegance.',
    hero_cta: 'our projects',
    projects_title_1: 'Selected',
    projects_title_2: 'Projects',
    projects_cta: 'View All Projects',
    projects_page_title_1: 'all my',
    projects_page_title_2: 'projects',
    projects_page_subtitle: 'a complete collection of my work in design and development, focused on performance and user experience.',
    projects_view_project: 'view project',
    carousel_title_1: 'view my',
    carousel_title_2: 'work',
    carousel_subtitle: 'discover a selection of my recent projects',
    cert_title_1: 'studies &',
    cert_title_2: 'certifications',
    cert_subtitle: 'a rigorous academic and professional path to guarantee expertise at the forefront of digital.',
    education_title_1: 'academic',
    education_title_2: 'studies',
    experience_title_1: 'professional',
    experience_title_2: 'path',
    cert_list_title_1: 'my',
    cert_list_title_2: 'certifications',
    footer_services: 'services & expertise',
    footer_design: 'ui/ux design',
    footer_web: 'web development',
    footer_seo: 'seo & performance',
    footer_cloud: 'cloud solutions',
    footer_contact: 'contact',
    footer_location: 'location',
    footer_follow: 'follow me',
    tech_title_1: 'technical',
    tech_title_2: 'mastery',
    tech_subtitle: 'an overview of the environments and technologies that shape my daily life as a digital artisan.',
    marquee_title_1: 'immersion in my',
    marquee_title_2: 'universe',
    marquee_subtitle: 'an overview of the environments and technologies that shape my daily life as a digital artisan.',
    blog_title_1: 'my',
    blog_title_2: 'journal',
    blog_subtitle: 'reflections on design, development, and technological innovation.',
    blog_cta: 'read more',
    blog_back: 'back to journal',
    blog_not_found: 'article not found',
    blog_read_time: 'read time',
    blog_share: 'share',
    blog_explore_more: 'discover more stories',
    service_design: 'DESIGN',
    service_web: 'WEB',
    service_mobile: 'MOBILE',
    service_sponsoring: 'SPONSORING',
    service_ads: 'ADS'
  }
};

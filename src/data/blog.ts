export interface BlogPost {
  id: string;
  title: string;
  title_en: string;
  excerpt: string;
  excerpt_en: string;
  content: string;
  content_en: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: "L'importance de l'expérience utilisateur dans le luxe",
    title_en: "The Importance of User Experience in Luxury",
    excerpt: "Pourquoi chaque détail compte quand on s'adresse à une clientèle exigeante.",
    excerpt_en: "Why every detail matters when addressing a demanding clientele.",
    content: `
      <p>Dans l'univers du luxe, l'expérience utilisateur (UX) ne se limite pas à la fonctionnalité. C'est un voyage émotionnel, une immersion dans un univers de prestige.</p>
      
      <h3>1. Le souci du détail</h3>
      <p>Chaque pixel, chaque transition, chaque micro-animation doit refléter la qualité et l'exclusivité de la marque.</p>
      
      <h3>2. La performance sans compromis</h3>
      <p>Un temps de chargement trop long est l'équivalent d'un service médiocre dans un palace. L'excellence technique est le socle de l'excellence digitale.</p>
      
      <h3>3. L'esthétique au service de l'émotion</h3>
      <p>Le design ne doit pas seulement être beau, il doit raconter une histoire et susciter le désir.</p>
    `,
    content_en: `
      <p>In the luxury universe, user experience (UX) is not limited to functionality. It's an emotional journey, an immersion into a world of prestige.</p>
      
      <h3>1. Attention to Detail</h3>
      <p>Every pixel, every transition, every micro-animation must reflect the quality and exclusivity of the brand.</p>
      
      <h3>2. Performance Without Compromise</h3>
      <p>A loading time that's too long is the equivalent of mediocre service in a palace. Technical excellence is the foundation of digital excellence.</p>
      
      <h3>3. Aesthetics at the Service of Emotion</h3>
      <p>Design must not only be beautiful, it must tell a story and spark desire.</p>
    `,
    date: "24 Mars 2024",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Stratégie Design",
    readTime: "5 min"
  },
  {
    id: '2',
    title: "Pourquoi choisir React pour vos projets premium",
    title_en: "Why Choose React for Your Premium Projects",
    excerpt: "Analyse des avantages techniques pour des interfaces fluides et performantes.",
    excerpt_en: "Analysis of the technical advantages for fluid and high-performing interfaces.",
    content: `
      <p>React s'est imposé comme le standard pour le développement d'interfaces modernes. Mais pourquoi est-ce le choix idéal pour le haut de gamme ?</p>
      
      <h3>La modularité</h3>
      <p>La conception par composants permet de créer des systèmes de design cohérents et évolutifs.</p>
      
      <h3>La fluidité</h3>
      <p>Grâce au Virtual DOM, React offre une réactivité exemplaire, essentielle pour une sensation de "soie" lors de la navigation.</p>
    `,
    content_en: `
      <p>React has established itself as the standard for modern interface development. But why is it the ideal choice for high-end projects?</p>
      
      <h3>Modularity</h3>
      <p>Component-based design allows for the creation of coherent and scalable design systems.</p>
      
      <h3>Fluidity</h3>
      <p>Thanks to the Virtual DOM, React offers exemplary responsiveness, essential for a "silk" feel during navigation.</p>
    `,
    date: "18 Mars 2024",
    image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Technologie",
    readTime: "7 min"
  },
  {
    id: '3',
    title: "L'art du storytelling digital",
    title_en: "The Art of Digital Storytelling",
    excerpt: "Comment transformer une simple visite en une expérience mémorable.",
    excerpt_en: "How to transform a simple visit into a memorable experience.",
    content: `
      <p>Le storytelling est l'âme du luxe. Sur le web, cela passe par une mise en page narrative et des interactions signifiantes.</p>
    `,
    content_en: `
      <p>Storytelling is the soul of luxury. On the web, this means a narrative layout and meaningful interactions.</p>
    `,
    date: "12 Mars 2024",
    image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Marketing",
    readTime: "4 min"
  }
];

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: "L'importance de l'expérience utilisateur dans le luxe",
    excerpt: "Pourquoi chaque détail compte quand on s'adresse à une clientèle exigeante.",
    content: `
      <p>Dans l'univers du luxe, l'expérience utilisateur (UX) ne se limite pas à la fonctionnalité. C'est un voyage émotionnel, une immersion dans un univers de prestige.</p>
      
      <h3>1. Le souci du détail</h3>
      <p>Chaque pixel, chaque transition, chaque micro-animation doit refléter la qualité et l'exclusivité de la marque.</p>
      
      <h3>2. La performance sans compromis</h3>
      <p>Un temps de chargement trop long est l'équivalent d'un service médiocre dans un palace. L'excellence technique est le socle de l'excellence digitale.</p>
      
      <h3>3. L'esthétique au service de l'émotion</h3>
      <p>Le design ne doit pas seulement être beau, il doit raconter une histoire et susciter le désir.</p>
    `,
    date: "24 Mars 2024",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Stratégie Design",
    readTime: "5 min"
  },
  {
    id: '2',
    title: "Pourquoi choisir React pour vos projets premium",
    excerpt: "Analyse des avantages techniques pour des interfaces fluides et performantes.",
    content: `
      <p>React s'est imposé comme le standard pour le développement d'interfaces modernes. Mais pourquoi est-ce le choix idéal pour le haut de gamme ?</p>
      
      <h3>La modularité</h3>
      <p>La conception par composants permet de créer des systèmes de design cohérents et évolutifs.</p>
      
      <h3>La fluidité</h3>
      <p>Grâce au Virtual DOM, React offre une réactivité exemplaire, essentielle pour une sensation de "soie" lors de la navigation.</p>
    `,
    date: "18 Mars 2024",
    image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Technologie",
    readTime: "7 min"
  },
  {
    id: '3',
    title: "L'art du storytelling digital",
    excerpt: "Comment transformer une simple visite en une expérience mémorable.",
    content: `
      <p>Le storytelling est l'âme du luxe. Sur le web, cela passe par une mise en page narrative et des interactions signifiantes.</p>
    `,
    date: "12 Mars 2024",
    image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Marketing",
    readTime: "4 min"
  }
];

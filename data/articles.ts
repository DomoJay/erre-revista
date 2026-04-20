export type Article = {
  id: number;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  image: string;
  featured: boolean;
};

export const articles: Article[] = [
  {
    id: 1,
    slug: "el-sonido-que-nadie-esperaba",
    category: "Entrevistas",
    title: "El sonido que nadie esperaba: cómo construí mi identidad desde cero",
    excerpt:
      "Hay artistas que llegan al mundo con un sonido ya formado. Otros lo construyen en silencio, capa por capa, error por error. Esta es la historia de lo segundo — y de por qué ese camino es el más honesto.",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1400&q=80",
    featured: true,
  },
  {
    id: 2,
    slug: "de-daw-a-distribuidor",
    category: "Producción Musical",
    title: "De DAW a distribuidor: el flujo completo en 2024",
    excerpt:
      "Desde la idea hasta el stream. Una guía sin rodeos para entender cada paso del proceso de producción y distribución independiente.",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    featured: false,
  },
  {
    id: 3,
    slug: "lo-que-nadie-te-dice-spotify",
    category: "Distribución & Regalías",
    title: "Lo que nadie te dice sobre Spotify for Artists",
    excerpt:
      "Las métricas que importan, las que engañan y cómo leer tus datos para tomar decisiones reales sobre tu carrera.",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=800&q=80",
    featured: false,
  },
  {
    id: 4,
    slug: "el-auge-del-artista-independiente",
    category: "Tendencias",
    title: "El auge del artista independiente y el fin del sello tradicional",
    excerpt:
      "El poder está cambiando de manos. Entender por qué — y cómo posicionarse — es la diferencia entre subirse a la ola o verla pasar.",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    featured: false,
  },
  {
    id: 5,
    slug: "plugins-que-cambiaron-mi-forma-de-mezclar",
    category: "Herramientas",
    title: "5 plugins que cambiaron mi forma de mezclar",
    excerpt:
      "No se trata del precio ni de la marca. Se trata de entender qué herramienta sirve para qué momento. Aquí cinco que realmente marcaron diferencia.",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&q=80",
    featured: false,
  },
];
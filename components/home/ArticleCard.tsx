import type { Article } from "@/data/articles";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group cursor-pointer flex flex-col">

      {/* Imagen */}
      <div className="overflow-hidden mb-5 aspect-[4/3] bg-white/5 relative">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        {/* Overlay sutil en hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-0 transition-opacity duration-500" />
      </div>

      {/* Categoría + tiempo */}
      <div className="flex items-center gap-2 mb-3">
        <span className="font-inter text-xs tracking-widest uppercase text-white/40 group-hover:text-white/60 transition-colors duration-300">
          {article.category}
        </span>
        <span className="text-white/20">·</span>
        <span className="font-inter text-xs tracking-widest uppercase text-white/25 group-hover:text-white/40 transition-colors duration-300">
          {article.readTime}
        </span>
      </div>

      {/* Línea animada */}
      <div className="h-px bg-white/20 mb-4 origin-left transition-all duration-500 ease-out w-8 group-hover:w-full group-hover:bg-white/10" />

      {/* Título */}
      <h2 className="font-playfair text-lg font-bold leading-snug mb-3 group-hover:opacity-60 transition-opacity duration-300">
        {article.title}
      </h2>

      {/* Extracto */}
      <p className="font-inter text-sm text-white/35 leading-relaxed line-clamp-3 group-hover:text-white/50 transition-colors duration-300">
        {article.excerpt}
      </p>

      {/* Leer más — aparece en hover */}
      <div className="mt-4 overflow-hidden h-0 group-hover:h-6 transition-all duration-300">
        <span className="font-inter text-xs tracking-widest uppercase text-white/30">
          Leer artículo →
        </span>
      </div>

    </article>
  );
}
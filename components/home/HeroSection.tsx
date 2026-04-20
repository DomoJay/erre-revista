"use client";

import { useEffect, useState } from "react";
import type { Article } from "@/data/articles";

export default function HeroSection({ article }: { article: Article }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-[92vh] min-h-[600px] flex items-end overflow-hidden">

      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-[2000ms] ease-out"
        style={{
          backgroundImage: `url(${article.image})`,
          transform: visible ? "scale(1)" : "scale(1.05)",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/10" />

      {/* Línea superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />

      {/* Contenido */}
      <div
        className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-20 transition-all duration-1000 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
        }}
      >
        {/* Categoría + tiempo */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-inter text-xs tracking-widest uppercase text-white/90 bg-white/10 px-3 py-1 border border-white/20">
            {article.category}
          </span>
          <span className="font-inter text-xs tracking-widest uppercase text-white/40">
            {article.readTime} de lectura
          </span>
        </div>

        {/* Titular */}
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] max-w-4xl mb-6">
          {article.title}
        </h1>

        {/* Línea divisoria */}
        <div className="w-16 h-px bg-white/30 mb-6" />

        {/* Extracto */}
        <p className="font-inter text-white/60 text-base md:text-lg max-w-2xl leading-relaxed mb-10">
          {article.excerpt}
        </p>

        {/* CTA */}
        <button className="font-inter text-xs tracking-widest uppercase px-8 py-4 border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300">
          Leer historia
        </button>
      </div>

    </section>
  );
}
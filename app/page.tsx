import { articles } from "@/data/articles";
import HeroSection from "@/components/home/HeroSection";
import ArticleCard from "@/components/home/ArticleCard";
import CallToAction from "@/components/home/CallToAction";

export default function Home() {
  const hero = articles.find((a) => a.featured)!;
  const rest = articles.filter((a) => !a.featured);

  return (
    <>
      {/* Portada */}
      <HeroSection article={hero} />

      {/* Grilla editorial */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        {/* Encabezado de sección */}
        <div className="flex items-center gap-6 mb-12">
          <span className="font-inter text-xs tracking-widest uppercase text-white/30">
            Últimas entregas
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {rest.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

      </section>

      {/* Puente hacia herramientas */}
      <CallToAction />
    </>
  );
}
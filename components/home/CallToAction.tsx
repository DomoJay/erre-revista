import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="border-t border-b border-white/10 py-20 my-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Puente editorial */}
        <p className="font-inter text-xs tracking-widest uppercase text-white/30 mb-4">
          Del conocimiento a la acción
        </p>

        <h2 className="font-playfair text-4xl md:text-5xl font-bold max-w-2xl leading-tight mb-16">
          La información es el primer paso.{" "}
          <span className="italic text-white/40">Las herramientas, el segundo.</span>
        </h2>

        {/* Dos herramientas */}
        <div className="grid md:grid-cols-2 gap-px bg-white/10">

          {/* Assistant */}
          <Link
            href="/assistant"
            className="group bg-[#0a0a0a] p-10 hover:bg-white/5 transition-colors"
          >
            <span className="font-inter text-xs tracking-widest uppercase text-white/30 mb-4 block">
              Herramienta 01
            </span>
            <h3 className="font-playfair text-3xl font-bold mb-4">
              AI Music Assistant
            </h3>
            <p className="font-inter text-white/50 text-sm leading-relaxed mb-8">
              Preguntas sobre producción, distribución, regalías y estrategia.
              Respuestas directas, sin rodeos, en tu idioma.
            </p>
            <span className="font-inter text-xs tracking-widest uppercase text-white/30 group-hover:text-white transition-colors">
              Abrir asistente →
            </span>
          </Link>

          {/* Insights */}
          <Link
            href="/insights"
            className="group bg-[#0a0a0a] p-10 hover:bg-white/5 transition-colors"
          >
            <span className="font-inter text-xs tracking-widest uppercase text-white/30 mb-4 block">
              Herramienta 02
            </span>
            <h3 className="font-playfair text-3xl font-bold mb-4">
              Insight Analyzer
            </h3>
            <p className="font-inter text-white/50 text-sm leading-relaxed mb-8">
              Ingresa tus métricas y obtén un análisis real de tu momento
              artístico con recomendaciones concretas.
            </p>
            <span className="font-inter text-xs tracking-widest uppercase text-white/30 group-hover:text-white transition-colors">
              Analizar mis datos →
            </span>
          </Link>

        </div>
      </div>
    </section>
  );
}
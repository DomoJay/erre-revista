type Props = {
  analysis: string;
  onReset: () => void;
};

function parseAnalysis(text: string) {
  const diagnosticMatch = text.match(/DIAGNÓSTICO\n([\s\S]*?)(?=RECOMENDACIÓN 01)/);
  const rec1Match = text.match(/RECOMENDACIÓN 01\n([\s\S]*?)(?=RECOMENDACIÓN 02)/);
  const rec2Match = text.match(/RECOMENDACIÓN 02\n([\s\S]*?)(?=RECOMENDACIÓN 03)/);
  const rec3Match = text.match(/RECOMENDACIÓN 03\n([\s\S]*?)$/);

  return {
    diagnostic: diagnosticMatch?.[1]?.trim() ?? "",
    recommendations: [
      rec1Match?.[1]?.trim() ?? "",
      rec2Match?.[1]?.trim() ?? "",
      rec3Match?.[1]?.trim() ?? "",
    ],
  };
}

export default function InsightResult({ analysis, onReset }: Props) {
  const { diagnostic, recommendations } = parseAnalysis(analysis);

  return (
    <div className="flex flex-col gap-8">

      {/* Diagnóstico */}
      <div className="border border-white/10 px-8 py-10">
        <span className="font-inter text-xs tracking-widest uppercase text-white/30 mb-6 block">
          Diagnóstico
        </span>
        <p className="font-inter text-white/70 text-base leading-relaxed">
          {diagnostic}
        </p>
      </div>

      {/* Recomendaciones */}
      <div className="grid md:grid-cols-3 gap-px bg-white/10">
        {recommendations.map((rec, i) => {
          const lines = rec.split("\n").filter(Boolean);
          const title = lines[0] ?? "";
          const body = lines.slice(1).join(" ").trim();

          return (
            <div key={i} className="bg-[#0a0a0a] px-8 py-10">
              <span className="font-inter text-xs tracking-widest uppercase text-white/30 mb-4 block">
                Recomendación {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-playfair text-xl font-bold mb-4 leading-snug">
                {title}
              </h3>
              <p className="font-inter text-sm text-white/50 leading-relaxed">
                {body}
              </p>
            </div>
          );
        })}
      </div>

      {/* Volver a analizar */}
      <div className="flex justify-end">
        <button
          onClick={onReset}
          className="font-inter text-xs tracking-widest uppercase px-8 py-4 border border-white/20 text-white/50 hover:border-white/50 hover:text-white transition-all duration-300"
        >
          Nuevo análisis
        </button>
      </div>

    </div>
  );
}
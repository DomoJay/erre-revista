type Props = {
  onSelectQuestion: (question: string) => void;
};

const SUGGESTED_QUESTIONS = [
  "¿Cuánto paga Spotify por stream en 2024?",
  "¿Qué distribuidor independiente me conviene más?",
  "¿Cómo funciona el split de regalías en una coautoría?",
  "¿Qué es un PRO y por qué necesito registrarme?",
  "¿Cómo preparo un lanzamiento en 4 semanas?",
  "¿Qué métricas debo revisar después de un lanzamiento?",
];

export default function AssistantSidebar({ onSelectQuestion }: Props) {
  return (
    <aside className="flex flex-col gap-8">

      {/* Identidad del asistente */}
      <div className="border border-white/10 px-6 py-8">
        <span className="font-inter text-xs tracking-widest uppercase text-white/30 mb-4 block">
          Asistente técnico
        </span>
        <h2 className="font-playfair text-2xl font-bold mb-4">
          ErrE AI
        </h2>
        <p className="font-inter text-sm text-white/50 leading-relaxed">
          Experto en la industria musical independiente. Respuestas precisas
          sobre producción, distribución, regalías y estrategia artística.
        </p>
      </div>

      {/* Qué sabe */}
      <div className="border border-white/10 px-6 py-8">
        <span className="font-inter text-xs tracking-widest uppercase text-white/30 mb-6 block">
          Áreas de conocimiento
        </span>
        <ul className="flex flex-col gap-3">
          {[
            "Producción musical",
            "Distribución digital",
            "Regalías y licencias",
            "Estrategia de lanzamiento",
            "Plataformas de streaming",
            "Crecimiento artístico",
          ].map((area) => (
            <li key={area} className="flex items-center gap-3">
              <div className="w-1 h-1 bg-white/30 rounded-full flex-shrink-0" />
              <span className="font-inter text-sm text-white/50">{area}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Preguntas sugeridas */}
      <div className="border border-white/10 px-6 py-8">
        <span className="font-inter text-xs tracking-widest uppercase text-white/30 mb-6 block">
          Preguntas sugeridas
        </span>
        <ul className="flex flex-col gap-2">
          {SUGGESTED_QUESTIONS.map((q) => (
            <li key={q}>
              <button
                onClick={() => onSelectQuestion(q)}
                className="w-full text-left font-inter text-sm text-white/40 hover:text-white py-2 border-b border-white/5 hover:border-white/20 transition-all duration-200"
              >
                {q}
              </button>
            </li>
          ))}
        </ul>
      </div>

    </aside>
  );
}
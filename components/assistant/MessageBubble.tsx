type Role = "user" | "assistant";

type Props = {
  role: Role;
  content: string;
};

export default function MessageBubble({ role, content }: Props) {
  const isUser = role === "user";

  return (
    <div className={`flex flex-col gap-1 ${isUser ? "items-end" : "items-start"}`}>

      {/* Etiqueta de rol */}
      <span className="font-inter text-xs tracking-widest uppercase text-white/25 px-1">
        {isUser ? "Tú" : "Asistente"}
      </span>

      {/* Burbuja */}
      <div
        className={`
          max-w-[80%] px-5 py-4 font-inter text-sm leading-relaxed
          ${isUser
            ? "bg-white text-black"
            : "bg-white/5 text-white/80 border border-white/10"
          }
        `}
      >
        {content}
      </div>

    </div>
  );
}
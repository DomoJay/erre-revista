"use client";

import { useState, useRef, useEffect } from "react";
import MessageBubble from "./MessageBubble";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type Props = {
  onSuggestedQuestion?: (question: string) => void;
  suggestedQuestionTrigger?: string;
};

export default function ChatWindow({ suggestedQuestionTrigger }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll al último mensaje
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Recibir pregunta sugerida desde el sidebar
  useEffect(() => {
    if (suggestedQuestionTrigger) {
      setInput(suggestedQuestionTrigger);
    }
  }, [suggestedQuestionTrigger]);

  async function sendMessage() {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const userMessage: Message = { role: "user", content: trimmed };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Error desconocido");

      setMessages([...updatedMessages, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setError("No se pudo obtener respuesta. Verifica tu conexión e intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  function clearChat() {
    setMessages([]);
    setInput("");
    setError(null);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="flex flex-col h-[75vh] border border-white/10">

      {/* Barra superior */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <span className="font-inter text-xs tracking-widest uppercase text-white/30">
          Conversación
        </span>
        {messages.length > 0 && (
          <button
            onClick={clearChat}
            className="font-inter text-xs tracking-widest uppercase text-white/30 hover:text-white transition-colors"
          >
            Limpiar
          </button>
        )}
      </div>

      {/* Historial de mensajes */}
      <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-6">
        {messages.length === 0 && (
          <div className="flex-1 flex items-center justify-center">
            <p className="font-inter text-sm text-white/20 tracking-wide text-center">
              Haz una pregunta o selecciona una sugerencia para comenzar.
            </p>
          </div>
        )}

        {messages.map((msg, i) => (
          <MessageBubble key={i} role={msg.role} content={msg.content} />
        ))}

        {/* Indicador de escritura */}
        {loading && (
          <div className="flex flex-col gap-1 items-start">
            <span className="font-inter text-xs tracking-widest uppercase text-white/25 px-1">
              Asistente
            </span>
            <div className="bg-white/5 border border-white/10 px-5 py-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:0ms]" />
              <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:150ms]" />
              <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:300ms]" />
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <p className="font-inter text-xs text-red-400/70 text-center py-2">
            {error}
          </p>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="border-t border-white/10 px-6 py-4 flex gap-4 items-end">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Escribe tu pregunta..."
          rows={2}
          className="flex-1 bg-transparent border border-white/10 text-white placeholder-white/20 font-inter text-sm px-4 py-3 resize-none focus:outline-none focus:border-white/30 transition-colors"
        />
        <button
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          className="font-inter text-xs tracking-widest uppercase px-6 py-3 border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
        >
          Enviar
        </button>
      </div>

    </div>
  );
}
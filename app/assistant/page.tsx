"use client";

import { useState } from "react";
import ChatWindow from "@/components/assistant/ChatWindow";
import AssistantSidebar from "@/components/assistant/AssistantSidebar";

export default function AssistantPage() {
  const [suggestedQuestion, setSuggestedQuestion] = useState("");

  function handleSelectQuestion(question: string) {
    setSuggestedQuestion(question + "__" + Date.now());
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* Encabezado de página */}
      <div className="mb-12">
        <p className="font-inter text-xs tracking-widest uppercase text-white/30 mb-4">
          Herramienta 01
        </p>
        <h1 className="font-playfair text-5xl font-bold mb-4">
          AI Music Assistant
        </h1>
        <div className="w-16 h-px bg-white/20" />
      </div>

      {/* Layout dos columnas */}
      <div className="grid md:grid-cols-[1fr_2fr] gap-10">
        <AssistantSidebar onSelectQuestion={handleSelectQuestion} />
        <ChatWindow suggestedQuestionTrigger={suggestedQuestion} />
      </div>

    </div>
  );
}
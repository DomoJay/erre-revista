"use client";

import { useState } from "react";
import InsightForm from "@/components/insights/InsightForm";
import InsightResult from "@/components/insights/InsightResult";

type FormData = {
  streams: string;
  listeners: string;
  country: string;
  platform: string;
  releases: string;
};

type View = "form" | "result";

export default function InsightsPage() {
  const [view, setView] = useState<View>("form");
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState("");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(data: FormData) {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/insights", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          streams: data.streams,
          listeners: data.listeners,
          country: data.country,
          platform: data.platform,
          releases: data.releases,
        }),
      });

      const json = await res.json();

      if (!res.ok) throw new Error(json.error || "Error desconocido");

      setAnalysis(json.analysis);
      setView("result");
    } catch (err) {
      setError("No se pudo generar el análisis. Verifica tu conexión e intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  function handleReset() {
    setView("form");
    setAnalysis("");
    setError(null);
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* Encabezado */}
      <div className="mb-12">
        <p className="font-inter text-xs tracking-widest uppercase text-white/30 mb-4">
          Herramienta 02
        </p>
        <h1 className="font-playfair text-5xl font-bold mb-4">
          Insight Analyzer
        </h1>
        <div className="w-16 h-px bg-white/20" />
      </div>

      {/* Error global */}
      {error && (
        <p className="font-inter text-xs text-red-400/70 mb-8">
          {error}
        </p>
      )}

      {/* Vista activa */}
      {view === "form" ? (
        <InsightForm onSubmit={handleSubmit} loading={loading} />
      ) : (
        <InsightResult analysis={analysis} onReset={handleReset} />
      )}

    </div>
  );
}
"use client";

import { useState } from "react";

type FormData = {
  streams: string;
  listeners: string;
  country: string;
  platform: string;
  releases: string;
};

type Props = {
  onSubmit: (data: FormData) => void;
  loading: boolean;
};

const PLATFORMS = [
  "Spotify",
  "Apple Music",
  "YouTube Music",
  "Tidal",
  "Amazon Music",
  "Otro",
];

export default function InsightForm({ onSubmit, loading }: Props) {
  const [form, setForm] = useState<FormData>({
    streams: "",
    listeners: "",
    country: "",
    platform: "",
    releases: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  function validate(): boolean {
    const newErrors: Partial<FormData> = {};

    if (!form.streams || isNaN(Number(form.streams)))
      newErrors.streams = "Ingresa un número válido";
    if (!form.listeners || isNaN(Number(form.listeners)))
      newErrors.listeners = "Ingresa un número válido";
    if (!form.country.trim())
      newErrors.country = "Ingresa tu país principal";
    if (!form.platform)
      newErrors.platform = "Selecciona una plataforma";
    if (!form.releases || isNaN(Number(form.releases)))
      newErrors.releases = "Ingresa un número válido";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit() {
    if (validate()) onSubmit(form);
  }

  function handleChange(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  return (
    <div className="border border-white/10 px-8 py-10">

      {/* Encabezado del formulario */}
      <div className="mb-10">
        <span className="font-inter text-xs tracking-widest uppercase text-white/30 mb-4 block">
          Ingresa tus datos
        </span>
        <p className="font-inter text-sm text-white/50 leading-relaxed max-w-lg">
          Completa los campos con tus métricas actuales. El análisis se genera
          en base a datos reales — mientras más precisos, mejor el diagnóstico.
        </p>
      </div>

      {/* Campos */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">

        {/* Streams */}
        <div className="flex flex-col gap-2">
          <label className="font-inter text-xs tracking-widest uppercase text-white/40">
            Streams totales
          </label>
          <input
            type="number"
            value={form.streams}
            onChange={(e) => handleChange("streams", e.target.value)}
            placeholder="Ej: 250000"
            className="bg-transparent border border-white/10 text-white placeholder-white/20 font-inter text-sm px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
          />
          {errors.streams && (
            <span className="font-inter text-xs text-red-400/70">{errors.streams}</span>
          )}
        </div>

        {/* Oyentes mensuales */}
        <div className="flex flex-col gap-2">
          <label className="font-inter text-xs tracking-widest uppercase text-white/40">
            Oyentes mensuales
          </label>
          <input
            type="number"
            value={form.listeners}
            onChange={(e) => handleChange("listeners", e.target.value)}
            placeholder="Ej: 18000"
            className="bg-transparent border border-white/10 text-white placeholder-white/20 font-inter text-sm px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
          />
          {errors.listeners && (
            <span className="font-inter text-xs text-red-400/70">{errors.listeners}</span>
          )}
        </div>

        {/* País */}
        <div className="flex flex-col gap-2">
          <label className="font-inter text-xs tracking-widest uppercase text-white/40">
            País principal
          </label>
          <input
            type="text"
            value={form.country}
            onChange={(e) => handleChange("country", e.target.value)}
            placeholder="Ej: Colombia"
            className="bg-transparent border border-white/10 text-white placeholder-white/20 font-inter text-sm px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
          />
          {errors.country && (
            <span className="font-inter text-xs text-red-400/70">{errors.country}</span>
          )}
        </div>

        {/* Plataforma */}
        <div className="flex flex-col gap-2">
          <label className="font-inter text-xs tracking-widest uppercase text-white/40">
            Plataforma principal
          </label>
          <select
            value={form.platform}
            onChange={(e) => handleChange("platform", e.target.value)}
            className="bg-[#0a0a0a] border border-white/10 text-white font-inter text-sm px-4 py-3 focus:outline-none focus:border-white/30 transition-colors appearance-none cursor-pointer"
          >
            <option value="" disabled className="text-white/20">
              Selecciona una plataforma
            </option>
            {PLATFORMS.map((p) => (
              <option key={p} value={p} className="bg-[#0a0a0a]">
                {p}
              </option>
            ))}
          </select>
          {errors.platform && (
            <span className="font-inter text-xs text-red-400/70">{errors.platform}</span>
          )}
        </div>

        {/* Lanzamientos */}
        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="font-inter text-xs tracking-widest uppercase text-white/40">
            Número de lanzamientos
          </label>
          <input
            type="number"
            value={form.releases}
            onChange={(e) => handleChange("releases", e.target.value)}
            placeholder="Ej: 5"
            className="bg-transparent border border-white/10 text-white placeholder-white/20 font-inter text-sm px-4 py-3 focus:outline-none focus:border-white/30 transition-colors md:w-1/2"
          />
          {errors.releases && (
            <span className="font-inter text-xs text-red-400/70">{errors.releases}</span>
          )}
        </div>

      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="font-inter text-xs tracking-widest uppercase px-10 py-4 border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
      >
        {loading ? "Analizando..." : "Generar análisis"}
      </button>

    </div>
  );
}
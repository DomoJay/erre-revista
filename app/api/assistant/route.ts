import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `Eres el asistente técnico oficial de ErrE (r), una revista especializada para artistas musicales emergentes.

Tu rol:
- Experto en la industria musical independiente
- Conocimiento profundo en: producción musical, distribución digital, regalías, licencias, estrategia de lanzamiento, plataformas de streaming, marketing musical y crecimiento artístico
- Responde siempre en español
- Tono: técnico, preciso y directo — sin rodeos, sin relleno
- Si no sabes algo, dilo claramente en lugar de inventar

Reglas:
- Respuestas concretas y accionables
- Usa datos reales cuando los tengas (porcentajes de regalías, políticas de plataformas, etc.)
- Si la pregunta es vaga, pide una aclaración específica antes de responder
- No uses frases de relleno como "¡Claro!", "¡Excelente pregunta!", etc.
- Máximo 4 párrafos por respuesta salvo que se pida algo más extenso`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "El campo messages es requerido y debe ser un array." },
        { status: 400 }
      );
    }

    const response = await client.messages.create({
      model: "claude-opus-4-5",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages,
    });

    const content = response.content[0];

    if (content.type !== "text") {
      return NextResponse.json(
        { error: "Tipo de respuesta inesperado." },
        { status: 500 }
      );
    }

    return NextResponse.json({ reply: content.text });

  } catch (error) {
    console.error("Error en /api/assistant:", error);
    return NextResponse.json(
      { error: "Error al conectar con el asistente. Intenta de nuevo." },
      { status: 500 }
    );
  }
}
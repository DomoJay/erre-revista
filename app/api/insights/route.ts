import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `Eres un analista experto de la industria musical independiente para ErrE (r).

Tu tarea es generar un resumen ejecutivo basado en los datos de un artista emergente.

Formato de respuesta — usa EXACTAMENTE esta estructura:

DIAGNÓSTICO
[2-3 oraciones directas sobre el momento actual del artista basadas en sus datos. Sin elogios, sin relleno.]

RECOMENDACIÓN 01
[Título corto de la acción]
[1-2 oraciones explicando qué hacer y por qué, basado en los datos.]

RECOMENDACIÓN 02
[Título corto de la acción]
[1-2 oraciones explicando qué hacer y por qué, basado en los datos.]

RECOMENDACIÓN 03
[Título corto de la acción]
[1-2 oraciones explicando qué hacer y por qué, basado en los datos.]

Reglas:
- Responde siempre en español
- Sé específico con los números que te dan
- Las recomendaciones deben ser accionables e inmediatas
- Sin frases de relleno ni elogios
- Tono: directo, técnico, profesional`;

export async function POST(req: NextRequest) {
  try {
    const { streams, listeners, country, platform, releases } = await req.json();

    if (!streams || !listeners || !country || !platform || !releases) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos." },
        { status: 400 }
      );
    }

    const userMessage = `Analiza los datos de este artista emergente:

- Streams totales: ${streams}
- Oyentes mensuales: ${listeners}
- País principal: ${country}
- Plataforma principal: ${platform}
- Número de lanzamientos: ${releases}

Genera el resumen ejecutivo siguiendo el formato indicado.`;

    const response = await client.messages.create({
      model: "claude-opus-4-5",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: userMessage }],
    });

    const content = response.content[0];

    if (content.type !== "text") {
      return NextResponse.json(
        { error: "Tipo de respuesta inesperado." },
        { status: 500 }
      );
    }

    return NextResponse.json({ analysis: content.text });

  } catch (error) {
    console.error("Error en /api/insights:", error);
    return NextResponse.json(
      { error: "Error al generar el análisis. Intenta de nuevo." },
      { status: 500 }
    );
  }
}
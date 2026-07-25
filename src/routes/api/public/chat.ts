import { createFileRoute } from "@tanstack/react-router";

type ChatMessage = { role: "system" | "user" | "assistant"; content: string };

const SYSTEM_PROMPT = `You are "AZ Assistant", the friendly virtual concierge for AZ Design Studio & Contractor — a full-service architecture, engineering and turnkey construction firm based in Narowal, Punjab, Pakistan (also serving Zafarwal, Sialkot, Lahore and wider Punjab).

Company facts you MUST use when answering:
- Services: Construction, Architectural Design, Renovation & Upgrades, Interior Design, Project Management, Turnkey Delivery (concept to handover).
- Experience: 10+ years, 160+ delivered projects.
- Contact: WhatsApp / Phone +92 300 0641786, email azcontractor786@gmail.com.
- Location: Satellite Town, CM-1 Main Boulevard, Narowal.
- Typical timeline: 10-marla turnkey home ≈ 9–12 months (renovations vary).
- Pricing: quotes are custom; always invite the user to WhatsApp with plot size, city, and finish preference for a tailored estimate.

Style:
- Warm, concise, professional. Reply in the user's language (English, Urdu, Roman Urdu, or Hindi) — match their tone.
- Keep answers under 90 words unless the user asks for detail.
- For quotes, timelines, or site visits, always end by pointing to WhatsApp (+92 300 0641786).
- Never invent prices, guarantees, or services we don't offer. If unsure, say so and hand off to WhatsApp.`;

export const Route = createFileRoute("/api/public/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = (await request.json()) as { messages?: ChatMessage[] };
          const messages = Array.isArray(body.messages) ? body.messages : [];
          if (!messages.length) {
            return new Response(JSON.stringify({ error: "messages required" }), {
              status: 400,
              headers: { "content-type": "application/json" },
            });
          }

          const apiKey = process.env.LOVABLE_API_KEY;
          if (!apiKey) {
            return new Response(JSON.stringify({ error: "AI is not configured" }), {
              status: 500,
              headers: { "content-type": "application/json" },
            });
          }

          const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              "Lovable-API-Key": apiKey,
            },
            body: JSON.stringify({
              model: "google/gemini-3.6-flash",
              messages: [
                { role: "system", content: SYSTEM_PROMPT },
                ...messages.slice(-12).map((m) => ({
                  role: m.role === "assistant" ? "assistant" : m.role === "system" ? "system" : "user",
                  content: String(m.content ?? "").slice(0, 2000),
                })),
              ],
            }),
          });

          if (!res.ok) {
            const text = await res.text();
            console.error("Gateway error", res.status, text);
            if (res.status === 429) {
              return new Response(JSON.stringify({ error: "Too many requests — please try again in a moment." }), {
                status: 429, headers: { "content-type": "application/json" },
              });
            }
            if (res.status === 402) {
              return new Response(JSON.stringify({ error: "AI credits exhausted. Please contact us on WhatsApp." }), {
                status: 402, headers: { "content-type": "application/json" },
              });
            }
            return new Response(JSON.stringify({ error: "AI request failed" }), {
              status: 502, headers: { "content-type": "application/json" },
            });
          }

          const data = (await res.json()) as {
            choices?: Array<{ message?: { content?: string } }>;
          };
          const reply = data?.choices?.[0]?.message?.content?.trim() || "Sorry, I couldn't process that. Please try again or WhatsApp us at +92 300 0641786.";

          return new Response(JSON.stringify({ reply }), {
            headers: { "content-type": "application/json" },
          });
        } catch (err) {
          console.error("chat handler error", err);
          return new Response(JSON.stringify({ error: "Unexpected error" }), {
            status: 500, headers: { "content-type": "application/json" },
          });
        }
      },
    },
  },
});

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Loader2 } from "lucide-react";

const WHATSAPP = "https://wa.me/923000641786";

type Msg = { role: "user" | "assistant"; content: string };

const INITIAL: Msg = {
  role: "assistant",
  content: "Hi! 👋 I'm AZ Assistant. Ask me anything about our services, timelines, or pricing — or just say Hi in Urdu/English.",
};

const QUICK = [
  "Get a quote for 10 marla home",
  "What services do you offer?",
  "Do you work in Lahore?",
  "How long does a house take?",
];

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([INITIAL]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open, loading]);

  const send = async (text: string) => {
    const t = text.trim();
    if (!t || loading) return;
    const next: Msg[] = [...messages, { role: "user", content: t }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/public/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setMessages((m) => [...m, {
          role: "assistant",
          content: data?.error || "Something went wrong. Please WhatsApp us at +92 300 0641786.",
        }]);
      } else {
        setMessages((m) => [...m, { role: "assistant", content: data.reply as string }]);
      }
    } catch {
      setMessages((m) => [...m, {
        role: "assistant",
        content: "Network error. Please WhatsApp us at +92 300 0641786.",
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        aria-label="Open chat assistant"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-24 right-5 z-[190] flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg shadow-black/40 transition-transform hover:scale-110 active:scale-95 sm:bottom-28 sm:right-6 hidden"
      >
        {open ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>

      {open && (
        <div className="fixed bottom-44 right-5 z-[190] flex h-[70vh] max-h-[560px] w-[min(370px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-3xl border border-white/15 bg-[oklch(0.14_0.04_240)] shadow-2xl shadow-black/60 sm:bottom-48 sm:right-6">
          <div className="flex items-center gap-3 border-b border-white/10 bg-[oklch(0.10_0.04_240)] px-4 py-3">
            <img src="/logo.jpg" alt="" className="h-8 w-8 rounded-md bg-white object-contain p-0.5" />
            <div className="leading-tight">
              <p className="text-sm font-semibold text-white">AZ Assistant</p>
              <p className="text-[10px] uppercase tracking-widest text-white/60">
                {loading ? "Typing…" : "Online · AI powered"}
              </p>
            </div>
          </div>

          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "rounded-br-sm bg-accent text-accent-foreground"
                    : "rounded-bl-sm bg-white/10 text-white"
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-sm bg-white/10 px-3.5 py-2.5 text-white">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </div>
              </div>
            )}
            {messages.length <= 1 && !loading && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {QUICK.map((q) => (
                  <button key={q} onClick={() => send(q)}
                    className="rounded-full border border-white/25 px-3 py-1 text-[11px] font-medium text-white/85 hover:border-accent hover:text-accent">
                    {q}
                  </button>
                ))}
                <a href={WHATSAPP} target="_blank" rel="noreferrer"
                  className="rounded-full bg-[#25D366] px-3 py-1 text-[11px] font-semibold text-white hover:brightness-110">
                  WhatsApp
                </a>
              </div>
            )}
          </div>

          <form onSubmit={(e) => { e.preventDefault(); send(input); }}
                className="flex items-center gap-2 border-t border-white/10 bg-[oklch(0.10_0.04_240)] p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message…"
              className="flex-1 rounded-full bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/50 outline-none ring-1 ring-white/10 focus:ring-accent"
            />
            <button type="submit" aria-label="Send" disabled={loading || !input.trim()}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground hover:brightness-110 disabled:opacity-50">
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            </button>
          </form>
        </div>
      )}
    </>
  );
}

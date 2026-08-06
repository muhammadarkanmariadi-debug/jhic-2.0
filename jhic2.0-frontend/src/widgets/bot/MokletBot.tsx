"use client";

import React, { useEffect, useRef, useState } from "react";
import { Bot, Send, X, MessageCircle } from "lucide-react";
import { getBotIntents, sendBotMessage, BotIntent } from "@/services/bot";

interface Msg {
  from: "user" | "bot";
  text: string;
}

function useSessionId(): string {
  const [id] = useState(() => {
    if (typeof window === "undefined") return "";
    const key = "jhic.bot.session";
    let sid = localStorage.getItem(key);
    if (!sid) {
      sid = crypto.randomUUID ? crypto.randomUUID() : `s-${Date.now()}`;
      localStorage.setItem(key, sid);
    }
    return sid;
  });
  return id;
}

export function MokletBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [intents, setIntents] = useState<BotIntent[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const sessionId = useSessionId();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getBotIntents().then(setIntents);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  const say = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((m) => [...m, { from: "user", text: trimmed }]);
    setInput("");
    setTyping(true);
    sendBotMessage(trimmed, sessionId)
      .then((res) => {
        setTyping(false);
        setMessages((m) => [...m, { from: "bot", text: res.reply }]);
      })
      .catch(() => {
        setTyping(false);
      });
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Tutup MokletBot" : "Buka MokletBot"}
        className="fixed bottom-5 right-5 z-[110] w-14 h-14 rounded-full bg-accent text-text-inverse flex items-center justify-center shadow-[0_12px_30px_rgba(215,25,32,0.4)] hover:scale-105 transition-transform"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-5 z-[110] w-[360px] max-w-[calc(100vw-2rem)] rounded-lg border border-border-light bg-surface shadow-2xl overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-accent text-text-inverse px-4 py-3 flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-surface/20 flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm">MokletBot</div>
              <div className="text-[11px] text-text-inverse/80 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                Tanya cepat — online
              </div>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[380px] bg-bg-main">
            {messages.length === 0 && (
              <>
                <BotBubble text="Halo! Selamat datang di SMK Telkom Malang. Ada yang bisa saya bantu?" />
                <div className="flex flex-wrap gap-2">
                  {intents.slice(0, 5).map((i) => (
                    <button
                      key={i.intent}
                      type="button"
                      onClick={() => say(i.label)}
                      className="px-3 py-1.5 rounded-full border border-border-light bg-surface text-xs font-bold text-text-muted hover:border-accent hover:text-accent transition-colors"
                    >
                      {i.label}
                    </button>
                  ))}
                </div>
              </>
            )}
            {messages.map((m, idx) =>
              m.from === "bot" ? <BotBubble key={idx} text={m.text} /> : <UserBubble key={idx} text={m.text} />
            )}
            {typing && <BotBubble text="Sedang mengetik..." typing />}
          </div>

          {/* Input */}
          <div className="border-t border-border-light p-3 flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && say(input)}
              placeholder="Tulis pertanyaan..."
              className="flex-1 rounded-xl border border-border-light px-3 py-2 text-sm bg-surface focus:outline-none focus:ring-2 focus:ring-accent/30"
            />
            <button
              type="button"
              onClick={() => say(input)}
              aria-label="Kirim"
              className="shrink-0 w-9 h-9 rounded-xl bg-accent text-text-inverse flex items-center justify-center hover:bg-accent-hover"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function BotBubble({ text, typing }: { text: string; typing?: boolean }) {
  return (
    <div className="flex items-end gap-2">
      <div className="w-7 h-7 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
        <Bot className="w-4 h-4" />
      </div>
      <div
        className={`bg-surface border border-border-light rounded-lg rounded-bl-sm px-3 py-2 text-sm text-text-main max-w-[80%] ${
          typing ? "italic text-text-muted" : ""
        }`}
      >
        {text}
      </div>
    </div>
  );
}

function UserBubble({ text }: { text: string }) {
  return (
    <div className="flex justify-end">
      <div className="bg-accent text-text-inverse rounded-lg rounded-br-sm px-3 py-2 text-sm max-w-[80%]">{text}</div>
    </div>
  );
}
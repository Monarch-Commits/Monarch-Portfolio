'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { useState, useRef, useEffect } from 'react';

import { SendHorizontal, Sparkles, User, Bot } from 'lucide-react';
import { askGeminiAction } from '@/app/actions/Ai/ai.action';
import Animabot from './AiRobot';

type ChatMessage = {
  role: 'user' | 'ai';
  content: string;
};

export default function ChatBox() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'ai',
      content: "Hello! I'm your AI assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto scroll sa latest message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  // Simplified send function
  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: ChatMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('prompt', userMsg.content);

      const result = await askGeminiAction(formData);

      const aiMsg: ChatMessage = {
        role: 'ai',
        content: result?.output || 'Something went wrong.',
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: 'ai', content: 'Error calling AI. Please try again.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      {/* Floating Button */}
      <DialogTrigger asChild>
        <button className="fixed right-4 bottom-4 z-100 p-1 sm:right-8 sm:bottom-8">
          <div className="relative">
            <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full border-2 border-white bg-green-500" />
            <Animabot width={70} height={70} />
          </div>
        </button>
      </DialogTrigger>

      <DialogContent
        aria-describedby={undefined}
        className="w-full max-w-[95vw] overflow-hidden border-none bg-transparent p-0 shadow-none md:max-w-2xl"
      >
        <div className="flex h-[80vh] flex-col overflow-hidden rounded-[2.5rem] border border-white/50 bg-white/80 backdrop-blur-2xl">
          {/* Header */}
          <DialogHeader className="flex flex-row items-center justify-between border-b border-black/5 bg-white/40 px-8 py-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#452829] p-2">
                <Sparkles className="h-5 w-5 text-[#F3E8DF]" />
              </div>
              <div>
                <DialogTitle className="text-lg font-bold text-[#452829]">
                  Monarch AI Assistant
                </DialogTitle>
                <p className="flex items-center gap-1 text-[10px] text-[#452829]/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  ONLINE
                </p>
              </div>
            </div>
          </DialogHeader>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-6 overflow-y-auto p-6">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} items-end gap-2`}
              >
                {msg.role === 'ai' && (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EBD1C5]">
                    <Bot className="h-4 w-4 text-[#452829]" />
                  </div>
                )}

                <div
                  className={`whitespace- pre-wrap max-w-[80%] rounded-[1.5rem] px-5 py-3.5 text-sm leading-relaxed wrap-break-word ${
                    msg.role === 'user'
                      ? 'rounded-br-none bg-[#452829] text-[#F3E8DF]'
                      : 'rounded-bl-none border border-black/5 bg-white text-[#452829]'
                  }`}
                >
                  {msg.content}
                </div>

                {msg.role === 'user' && (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#452829]">
                    <User className="h-4 w-4 text-[#F3E8DF]" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2 text-xs text-[#452829]/50">
                <Bot className="h-4 w-4" />
                AI is typing...
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-black/5 bg-white/40 p-6">
            <div className="relative flex items-center">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="w-full rounded-2xl border border-[#EBD1C5] bg-white py-4 pr-14 pl-6 text-sm focus:outline-none"
              />
              <button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="absolute right-3 rounded-xl bg-[#452829] p-2.5 text-white disabled:opacity-30"
              >
                <SendHorizontal className="h-5 w-5" />
              </button>
            </div>

            <p className="mt-4 text-center text-[10px] font-bold tracking-widest text-[#452829]/40">
              Designed by Monarch
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

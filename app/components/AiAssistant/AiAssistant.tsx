'use client';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { useState, useRef, useEffect } from 'react';
import { SendHorizontal, User, XIcon } from 'lucide-react';

import { askGeminiAction } from '@/app/actions/Ai/ai.action';
import Animabot from './AiRobot';

import { Avatar } from '@/components/ui/avatar';
import Image from 'next/image';

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

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

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
        className="w-full max-w-[95vw] border-none bg-transparent p-0 shadow-none md:max-w-2xl"
      >
        {/* Main Container */}
        <div className="flex h-[80vh] flex-col overflow-hidden rounded-[2.5rem] border border-white/30 bg-white/50 shadow-xl shadow-black/10 backdrop-blur-md">
          {/* Header */}
          <DialogHeader className="flex flex-row items-center justify-between border-b border-black/5 bg-white/60 px-8 py-5 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="hidden h-10 w-10 items-center justify-center rounded-full bg-amber-800 sm:flex">
                <Avatar className="relative h-8 w-8 overflow-hidden">
                  <Image
                    src="/robot.png"
                    alt="AI avatar"
                    fill
                    sizes="32px"
                    className="object-contain"
                  />
                </Avatar>
              </div>

              <DialogTitle className="bg-linear-to-r from-slate-800 via-orange-700 to-blue-700 bg-clip-text text-lg font-bold text-transparent">
                Monarch AI Assistant
              </DialogTitle>
            </div>
            <DialogClose className="rounded-full p-2 transition-colors outline-none hover:bg-black/5">
              <XIcon className="h-5 w-5 text-[#452829]/60" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </DialogHeader>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="scrollbar-thin scrollbar-thumb-black/10 flex-1 space-y-5 overflow-y-auto p-6"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-end gap-2 ${
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.role === 'ai' && (
                  <Avatar className="relative h-8 w-8 overflow-hidden">
                    <Image
                      src="/robot.png"
                      alt="AI avatar"
                      fill
                      className="object-contain"
                    />
                  </Avatar>
                )}

                <div
                  className={`max-w-[78%] rounded-[1.5rem] px-5 py-3 text-[13px] leading-relaxed wrap-break-word whitespace-pre-wrap ${
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
                <Avatar className="relative h-8 w-8 overflow-hidden">
                  <Image
                    src="/robot.png"
                    alt="AI avatar"
                    fill
                    sizes="32px"
                    className="object-contain"
                  />
                </Avatar>
                AI is typing...
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-black/5 bg-white/50 p-6 backdrop-blur-sm">
            <div className="relative flex items-center">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="w-full rounded-2xl border border-[#EBD1C5]/70 bg-white/90 py-3.5 pr-14 pl-6 text-sm focus:ring-2 focus:ring-[#452829]/20 focus:outline-none"
              />

              <button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="absolute right-3 rounded-xl bg-[#452829] p-2.5 text-white shadow-md transition hover:scale-105 active:scale-95 disabled:opacity-30"
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

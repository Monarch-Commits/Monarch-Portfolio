'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { SendHorizontal, Sparkles, User, Bot } from 'lucide-react'; // Nagdagdag ng icons

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
  const [isPending, setIsPending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages, isPending]);

  const handleSend = async () => {
    if (!input.trim() || isPending) return;

    const userMsg: ChatMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsPending(true);

    try {
      const formData = new FormData();
      formData.append('prompt', userMsg.content);

      const result = await askGeminiAction(formData);
      const aiMsg: ChatMessage = {
        role: 'ai',
        content: result.output || 'Something went wrong.',
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: 'ai', content: 'Error calling Gemini AI.' },
      ]);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed right-2 bottom-4 z-100 p-1 sm:right-8 sm:bottom-8"
        >
          <div className="relative">
            <div className="absolute -top-1 -right-1 h-4 w-4 animate-pulse rounded-full border-2 border-white bg-green-500" />
            <Animabot width={70} height={70} />
          </div>
        </motion.button>
      </DialogTrigger>

      <DialogContent className="w-full max-w-[95vw] overflow-hidden border-none bg-transparent p-0 shadow-none md:max-w-2xl">
        {/* Main Glass Container */}
        <div className="relative flex h-[80vh] flex-col overflow-hidden rounded-[2.5rem] border border-white/50 bg-white/80 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.2)] backdrop-blur-2xl">
          {/* Header */}
          <DialogHeader className="flex flex-row items-center justify-between border-b border-black/5 bg-white/40 px-8 py-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#452829] p-2">
                <Sparkles className="h-5 w-5 text-[#F3E8DF]" />
              </div>
              <div>
                <DialogTitle className="text-lg font-bold tracking-tight text-[#452829]">
                  Monarch Ai Assistant
                </DialogTitle>
                <p className="flex items-center gap-1 text-[10px] font-medium text-[#452829]/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />{' '}
                  ONLINE
                </p>
              </div>
            </div>
          </DialogHeader>

          {/* Messages Area */}
          <div
            ref={scrollRef}
            className="custom-scrollbar flex-1 space-y-6 overflow-y-auto p-6"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#45282920 transparent',
            }}
          >
            <AnimatePresence mode="popLayout">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} items-end gap-2`}
                >
                  {msg.role === 'ai' && (
                    <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#EBD1C5]">
                      <Bot className="h-4 w-4 text-[#452829]" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] rounded-[1.5rem] px-5 py-3.5 text-sm leading-relaxed shadow-sm transition-all md:max-w-[70%] ${
                      msg.role === 'user'
                        ? 'rounded-br-none bg-[#452829] text-[#F3E8DF]'
                        : 'rounded-bl-none border border-black/5 bg-white text-[#452829]'
                    }`}
                  >
                    {msg.content}
                  </div>

                  {msg.role === 'user' && (
                    <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#452829]">
                      <User className="h-4 w-4 text-[#F3E8DF]" />
                    </div>
                  )}
                </motion.div>
              ))}

              {isPending && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center justify-start gap-3"
                >
                  <div className="h-8 w-8 animate-pulse rounded-full bg-[#EBD1C5]" />
                  <div className="rounded-2xl border border-black/5 bg-white/50 px-5 py-3">
                    <div className="flex gap-1.5">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#452829]/40" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#452829]/40 [animation-delay:0.2s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#452829]/40 [animation-delay:0.4s]" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Input Area */}
          <div className="border-t border-black/5 bg-white/40 p-6 backdrop-blur-md">
            <div className="relative mx-auto flex w-full max-w-3xl items-center transition-all duration-300 focus-within:scale-[1.02]">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="w-full rounded-2xl border border-[#EBD1C5] bg-white/80 py-4 pr-14 pl-6 text-[15px] text-[#452829] shadow-xl transition-all placeholder:text-[#452829]/30 focus:ring-4 focus:ring-[#452829]/5 focus:outline-none"
              />
              <button
                onClick={handleSend}
                disabled={isPending || !input.trim()}
                className="absolute right-3 rounded-xl bg-[#452829] p-2.5 text-white shadow-lg shadow-[#452829]/20 transition-all hover:scale-105 active:scale-95 disabled:opacity-20 disabled:hover:scale-100"
              >
                <SendHorizontal className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4 flex items-center justify-center gap-4">
              <div className="h-px w-8 bg-black/5" />
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#452829]/40 uppercase">
                Powered by Gemini Ultra
              </p>
              <div className="h-px w-8 bg-black/5" />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

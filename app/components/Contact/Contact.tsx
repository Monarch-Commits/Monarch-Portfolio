'use client';
import { motion } from 'framer-motion';

export default function ContactForm() {
  return (
    <section
      id="Contact"
      className="overflow-hidden bg-white py-12 font-sans md:overflow-visible md:py-20"
    >
      <div className="relative max-w-full px-4">
        {/* Decorative Tape - Top Left (Hidden on mobile to keep it clean) */}
        <div className="absolute -top-4 -left-2 z-10 hidden h-8 w-24 -rotate-12 bg-green-200/50 shadow-sm md:block" />

        <motion.div
          // Sa mobile (initial rotate: 0), sa md pataas (rotate: 2)
          initial={{ rotate: 0, opacity: 0, y: 20 }}
          whileInView={{
            rotate:
              typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : -1,
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="relative border border-orange-100 bg-[#FDFBF7] p-6 shadow-xl md:-rotate-1 md:p-12"
        >
          <h2
            className="mb-6 text-center text-2xl font-bold tracking-tight text-gray-800 md:text-left md:text-3xl"
            style={{ fontFamily: 'var(--font-rounded)' }}
          >
            Lets Collaborate! 📮
          </h2>

          <form className="space-y-6">
            <div className="relative">
              <label className="text-[10px] font-bold tracking-widest text-orange-400 uppercase md:text-xs">
                Your Name
              </label>
              <input
                type="text"
                className="w-full border-b-2 border-gray-200 bg-transparent py-2 text-sm transition-colors outline-none focus:border-orange-300 md:text-base"
                placeholder="Juan Dela Cruz"
              />
            </div>

            <div className="relative">
              <label className="text-[10px] font-bold tracking-widest text-orange-400 uppercase md:text-xs">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border-b-2 border-gray-200 bg-transparent py-2 text-sm transition-colors outline-none focus:border-orange-300 md:text-base"
                placeholder="juan@example.com"
              />
            </div>

            <div className="relative">
              <label className="text-[10px] font-bold tracking-widest text-orange-400 uppercase md:text-xs">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full resize-none border-b-2 border-gray-200 bg-transparent py-2 text-sm transition-colors outline-none focus:border-orange-300 md:text-base"
                placeholder="Tell me about your project..."
              />
            </div>

            <button className="w-full transform rounded-full bg-gray-900 px-8 py-3 font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-orange-500 active:scale-95 md:py-4 md:hover:-translate-y-1">
              Send Message
            </button>
          </form>

          {/* Decorative Tape - Bottom Right (Hidden on mobile) */}
          <div className="absolute -right-4 -bottom-4 z-10 hidden h-8 w-28 rotate-12 bg-orange-200/40 shadow-sm md:block" />
        </motion.div>

        {/* Floating Note Tag - Adjusted for better visibility on small desktops */}
        <div className="absolute top-20 -right-4 hidden rotate-12 border border-yellow-200 bg-yellow-100 p-2 text-xs shadow-sm lg:block">
          📍 Available for Freelance
        </div>
      </div>
    </section>
  );
}

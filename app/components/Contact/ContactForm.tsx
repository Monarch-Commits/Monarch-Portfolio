'use client';

import sendContact from '@/app/actions/contact/contact.action';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { Send, Loader2, CheckCircle2, ArrowLeft } from 'lucide-react';
import ContactTitle from './ContactTitle';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const isDisabled =
    loading || !name.trim() || !email.trim() || !message.trim();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);

      await sendContact(formData);

      toast.success('Message sent successfully 🚀');
      setIsSubmitted(true);

      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputStyles =
    'w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-5 py-4 text-sm transition-all outline-none focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 md:text-base';

  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute top-0 left-1/2 -z-10 h-125 w-200 -translate-x-1/2 rounded-full bg-linear-to-tr from-orange-100/40 to-amber-50/30 blur-3xl" />

      <div className="mx-auto max-w-2xl px-2 sm:px-6">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="contact-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              {/* Header */}
              <ContactTitle />

              {/* Form Container */}
              <div className="rounded-3xl border border-orange-300 p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl sm:p-7 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="ml-1 text-[11px] font-bold tracking-widest text-gray-600 uppercase"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className={inputStyles}
                        required
                        autoComplete="name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="ml-1 text-[11px] font-bold tracking-widest text-gray-600 uppercase"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className={inputStyles}
                        required
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="ml-1 text-[11px] font-bold tracking-widest text-gray-600 uppercase"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about your project..."
                      className={`${inputStyles} resize-none`}
                      required
                      autoComplete="off"
                    />
                  </div>

                  <Button
                    disabled={isDisabled}
                    className="group relative h-14 w-full overflow-hidden rounded-2xl bg-orange-600 text-white shadow-lg transition-all hover:bg-orange-700 hover:shadow-orange-500/20 active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
                  >
                    <div className="relative z-10 flex items-center justify-center gap-2 text-xs font-bold tracking-widest uppercase">
                      {loading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </>
                      )}
                    </div>
                  </Button>
                </form>
              </div>
            </motion.div>
          ) : (
            /* Success View */
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center space-y-6 rounded-3xl border border-white bg-white/90 p-12 text-center shadow-2xl backdrop-blur-md"
            >
              <div className="rounded-full bg-green-100 p-4 ring-8 ring-green-50">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Message Sent!
                </h2>
                <p className="text-gray-500">
                  Thanks for reaching out! I will respond to your message as
                  soon as possible.
                </p>
              </div>
              <Button
                variant="ghost"
                onClick={() => setIsSubmitted(false)}
                className="group flex items-center gap-2 rounded-xl text-gray-500 hover:bg-orange-50 hover:text-orange-600"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Go back to form
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {!isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex items-center justify-center gap-2 text-[13px] font-medium text-gray-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Available for freelance projects
          </motion.div>
        )}
      </div>
    </section>
  );
}

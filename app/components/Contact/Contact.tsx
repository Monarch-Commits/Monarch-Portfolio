'use client';

import ContactForm from './ContactForm';
import ContactTitle from './ContactTitle';

export default function Contact() {
  return (
    <section
      id="Contact"
      className="flex w-full max-w-7xl flex-col items-center justify-center gap-2 px-1 pt-10 md:gap-12 md:px-6 md:pt-28 lg:mx-0"
    >
      <ContactTitle />
      <ContactForm />
    </section>
  );
}

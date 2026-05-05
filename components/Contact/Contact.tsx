'use client';

import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section
      id="Contact"
      className="flex w-full max-w-7xl flex-col items-center justify-center px-2 pt-14 md:px-6 md:pt-28 lg:mx-0"
    >
      <ContactForm />
    </section>
  );
}

import Image from 'next/image';
import React from 'react';

export default function AboutMe() {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center gap-5 p-10 px-6 sm:flex-col md:p-1 lg:flex-row dark:bg-gray-900">
      <div className="flex w-full max-w-3xl flex-col gap-3 rounded-xl bg-white p-8 shadow-sm dark:text-gray-900">
        <div className="relative max-w-lg rounded-lg bg-[#F6F1E7] p-6 shadow-md">
          <h2
            className="mb-4 text-2xl font-bold"
            style={{ fontFamily: "'Momo Signature', cursive" }}
          >
            About Me
          </h2>
          <p className="text-gray-600">
            Hello 👋 I’m Monarch, a developer who loves building clean,
            responsive, and user-friendly web applications.
          </p>
          <div className="absolute top-0 right-0 flex h-30 w-30 items-end justify-center sm:h-20 sm:w-20 md:-top-20 md:-right-20 md:h-60 lg:w-60">
            <Image src="/1.png" alt="profile" fill className="object-cover" />
          </div>
        </div>
        <div className="max-w-full rounded-lg bg-[#F6F1E7] p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-bold">About Me</h2>
          <p className="text-gray-600">
            Hello 👋 I’m Monarch, a developer who loves building clean,
            responsive, and user-friendly web applications.
          </p>
        </div>
      </div>

      {/* Image */}

      <div className="relative flex h-72 w-72 items-end justify-center border bg-white sm:h-72 sm:w-72 md:h-80 md:w-80">
        <Image
          src="/wc.png"
          alt="profile"
          fill
          className="object-cover p-5 pb-10"
        />
        <div className="absolute top-0 -right-10 z-100 h-6 w-25 rotate-30 bg-orange-200 md:max-w-40" />
        <div className="absolute top-0 -left-10 z-100 h-6 w-25 rotate-160 bg-orange-200 md:max-w-40" />
      </div>
    </section>
  );
}

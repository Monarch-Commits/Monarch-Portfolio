export default function ContactTitle() {
  return (
    <div className="mb-10 space-y-3 text-center">
      <h2
        className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
        style={{ fontFamily: 'var(--font-rounded), sans-serif' }}
      >
        Let&apos;s{' '}
        <span className="bg-linear-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
          Collaborate
        </span>
      </h2>
      <p className="mx-auto max-w-md text-balance text-gray-500">
        Have an idea in mind? Let&apos;s talk about it and turn it into reality.
      </p>
    </div>
  );
}

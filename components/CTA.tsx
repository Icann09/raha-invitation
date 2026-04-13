export default function CTA() {
  return (
    <section className="py-24 px-6 text-center bg-primary text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,166,107,0.25),transparent_70%)]" />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif leading-tight">
          Create Your Dream Wedding Invitation
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-gray-300">
          Beautiful, elegant, and ready in minutes.  
          Start designing your invitation today.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-3 bg-white text-primary rounded-full font-medium hover:bg-gray-200 transition">
            Create Now
          </button>

          <button className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-primary transition">
            View Demo
          </button>
        </div>

        {/* Trust note */}
        <p className="mt-6 text-sm text-gray-400">
          No coding required • Ready in minutes
        </p>
      </div>
    </section>
  );
}
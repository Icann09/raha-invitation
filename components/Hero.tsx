export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/wedding-bg.jpg')] bg-cover bg-center opacity-50" />

      <div className="relative z-10 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-serif leading-tight">
          Create Your Elegant Digital Wedding Invitation
        </h1>

        <p className="mt-6 text-base text-muted font-semibold">
          Beautiful, modern, and fully customizable wedding invitations
          — ready in minutes.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <button className="px-6 py-3 bg-primary text-white rounded-full cursor-pointer">
            Create Invitation
          </button>

          <button className="px-6 py-3 border border-primary text-color-text rounded-full hover:bg-primary hover:text-white transition">
            View Demo
          </button>
        </div>
      </div>
    </section>
  );
}
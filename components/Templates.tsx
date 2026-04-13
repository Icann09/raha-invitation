import Image from "next/image";

export default function Templates() {
  const templates = [
    { name: "Limapera", image: "Limapera.jpg" },
    { name: "Sadajiwa", image: "Sadajiwa.jpg" },
    { name: "Sipalora", image: "Sipalora.jpg" },
  ];

  return (
    <section className="py-24 px-6 bg-primary w-full flex flex-col items-center text-accent rounded-xl">
      {/* Heading */}
      <div className="text-center max-w-2xl mb-14">
        <h2 className="text-4xl font-serif">
          Choose Your Style
        </h2>
        <p className=" mt-4">
          Select from beautifully crafted templates designed
          to match your wedding theme and personality.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
        {templates.map((t) => (
          <div
            key={t.name}
            className="group relative rounded-2xl overflow-hidden shadow-lg"
          >
            {/* Image */}
            <Image
              src={`/images/${t.image}`}
              alt={t.name}
              width={500}
              height={600}
              className="object-cover w-full h-[420px] group-hover:scale-105 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300">
              <p className="text-xl font-semibold mb-3">
                {t.name}
              </p>

              <button className="px-5 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
                Preview
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
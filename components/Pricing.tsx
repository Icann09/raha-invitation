import { Check } from "lucide-react";

export default function Pricing() {
  const features = [
    "Unlimited Guests",
    "RSVP Management",
    "Custom Domain",
    "Elegant Templates",
    "Music & Animation",
  ];

  return (
    <section className="py-24 px-6 bg-white flex flex-col items-center text-center">
      {/* Heading */}
      <div className="max-w-2xl mb-12">
        <h2 className="text-4xl font-serif">Simple Pricing</h2>
        <p className="text-gray-600 mt-4">
          One plan, everything you need to create a beautiful
          digital wedding invitation.
        </p>
      </div>

      {/* Card */}
      <div className="relative max-w-md w-full bg-primary text-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition">
        
        {/* Badge */}
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C9A66B] text-white text-xs px-4 py-1 rounded-full">
          Most Popular
        </span>

        {/* Plan */}
        <p className="text-lg text-gray-300">Premium Plan</p>

        {/* Price */}
        <p className="text-5xl font-bold my-4">
          Rp 99K
        </p>
        <p className="text-gray-400 text-sm mb-6">
          One-time payment
        </p>

        {/* Features */}
        <ul className="space-y-3 text-left">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-3">
              <Check className="w-5 h-5 text-[#C9A66B]" />
              <span className="text-gray-200">{f}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="mt-8 w-full px-6 py-3 bg-white text-primary rounded-full font-medium hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>
    </section>
  );
}
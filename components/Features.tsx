import {
  Heart,
  Smartphone,
  Mail,
  Link,
  Music,
  Share2,
  MapPin,
  Image,
  MessageCircle,
  Gift,
  Clock,
  BookOpen,
} from "lucide-react";

export default function Features() {
  const features = [
    { title: "Elegant Templates", icon: Heart },
    { title: "Mobile Friendly", icon: Smartphone },
    { title: "RSVP Management", icon: Mail },
    { title: "Custom Guest Links", icon: Link },
    { title: "Music & Animation", icon: Music },
    { title: "Easy Sharing", icon: Share2 },
    { title: "Location Map", icon: MapPin },
    { title: "Photo Gallery", icon: Image },
    { title: "Wishes & Messages", icon: MessageCircle },
    { title: "Gift Registry", icon: Gift },
    { title: "Countdown", icon: Clock },
    { title: "Love Story Section", icon: BookOpen },
  ];

  return (
    <section className="py-24 px-6 bg-primary text-center flex flex-col items-center">
      {/* Heading */}
      <div className="max-w-2xl mb-14">
        <h2 className="text-4xl font-serif text-white">
          Everything You Need
        </h2>
        <p className="text-gray-300 mt-4">
          Create a beautiful and memorable wedding invitation
          with powerful features designed for your special day.
        </p>
      </div>

      {/* Grid */}
      <div className="grid max-w-6xl w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {features.map((f) => {
          const Icon = f.icon;

          return (
            <div
              key={f.title}
              className="group p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 
              hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent text-black mb-4 
                group-hover:scale-110 transition">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Title */}
                <p className="text-white font-medium">
                  {f.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
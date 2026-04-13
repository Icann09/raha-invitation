import { LayoutTemplate, Edit3, Send } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Choose Template",
      desc: "Pick from a variety of elegant and modern designs.",
      icon: LayoutTemplate,
    },
    {
      title: "Customize Details",
      desc: "Add your names, event details, and personal touches.",
      icon: Edit3,
    },
    {
      title: "Share with Guests",
      desc: "Send your invitation instantly with a unique link.",
      icon: Send,
    },
  ];

  return (
    <section className="py-24 px-6 bg-white w-full flex flex-col items-center">
      {/* Heading */}
      <div className="text-center max-w-2xl mb-16">
        <h2 className="text-4xl font-serif">
          How It Works
        </h2>
        <p className="text-gray-600 mt-4">
          Create and share your wedding invitation in just a few simple steps.
        </p>
      </div>

      {/* Steps */}
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-10 max-w-5xl w-full">
        
        {/* Connector line (desktop) */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gray-200 -translate-y-1/2" />

        {steps.map((step, i) => {
          const Icon = step.icon;

          return (
            <div
              key={step.title}
              className="relative z-10 flex flex-col items-center text-center max-w-xs"
            >
              {/* Icon Circle */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary text-white mb-4 shadow-md">
                <Icon className="w-6 h-6" />
              </div>

              {/* Step Number */}
              <p className="text-sm text-gray-400 mb-1">
                Step {i + 1}
              </p>

              {/* Title */}
              <h3 className="font-semibold text-lg mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm">
                {step.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
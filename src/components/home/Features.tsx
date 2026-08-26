import { FaBolt, FaDownload, FaPalette, FaStar } from "react-icons/fa";
import { FiLayout, FiMousePointer } from "react-icons/fi";
const features = [
  {
    icon: FiMousePointer,
    title: "Easy to customize",
    description:
      "Build your CV with a simple editor designed to keep everything fast and easy.",
  },
  {
    icon: FiLayout,
    title: "Professional templates",
    description:
      "Choose from clean, professional templates designed to make your experience stand out.",
  },
  {
    icon: FaBolt,
    title: "Real-time preview",
    description: "See every change instantly while you're building your CV.",
  },
  {
    icon: FaDownload,
    title: "Export as PDF",
    description:
      "Download your finished CV as a high-quality PDF whenever you're ready.",
  },
  {
    icon: FaPalette,
    title: "Customize your style",
    description:
      "Choose colors, sections and layouts that match your personal style.",
  },
  {
    icon: FaStar,
    title: "Add custom sections",
    description:
      "Add languages, certifications, hobbies and any other information you need.",
  },
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-20 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#0D47A1]">
            Everything you need
          </span>

          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Build your CV without the hassle.
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Everything is designed to help you focus on your experience instead
            of fighting with formatting.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-gray-200 bg-white p-7"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-[#0D47A1]">
                  <Icon size={21} />
                </div>

                <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

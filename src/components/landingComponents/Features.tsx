const features = [
  {
    icon: "visibility",
    title: "Real-time Preview",
    description:
      "See your changes instantly as you type. No more guessing how your final CV will look.",
  },
  {
    icon: "design_services",
    title: "Pro Templates",
    description:
      "Choose from a variety of ATS-friendly designs crafted by industry professionals.",
  },
  {
    icon: "smart_toy",
    title: "AI Suggestions",
    description:
      "Stuck on what to write? Our AI generates impactful bullet points tailored to your role.",
  },
  {
    icon: "picture_as_pdf",
    title: "PDF Export",
    description:
      "Download your polished resume as a high-quality PDF ready for any application.",
  },
];

export default function Features() {
  return (
    <section className="bg-surface-container-low py-xxl">
      <div className="mx-auto max-w-container-max px-gutter">
        <div className="mb-xl text-center">
          <h2 className="mb-sm font-headline-lg text-headline-lg">
            Everything you need to succeed
          </h2>

          <p className="font-body-md text-body-md text-on-surface-variant">
            Powerful features designed to make resume creation effortless.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-surface-container-highest bg-surface-container-lowest p-lg shadow-[0_4px_6px_-1px_rgb(0,0,0,0.1),0_2px_4px_-2px_rgb(0,0,0,0.1)] transition-transform hover:-translate-y-1"
            >
              <div className="mb-md flex h-12 w-12 items-center justify-center rounded-full bg-surface-variant text-primary">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {feature.icon}
                </span>
              </div>

              <h3 className="mb-xs font-headline-md text-xl">
                {feature.title}
              </h3>

              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

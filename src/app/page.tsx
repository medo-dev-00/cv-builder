import Link from "next/link";
import { BiCheck } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { FaBolt, FaDownload, FaPalette, FaStar } from "react-icons/fa";

import { FiFileText, FiLayout, FiMousePointer } from "react-icons/fi";
import { GiSparkles } from "react-icons/gi";
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
const steps = [
  {
    number: "01",
    title: "Add your information",
    description:
      "Enter your personal information, experience, education and skills.",
  },
  {
    number: "02",
    title: "Customize your CV",
    description:
      "Choose a template and customize the sections to match your profile.",
  },
  {
    number: "03",
    title: "Download your CV",
    description: "Preview your CV and export it as a professional PDF.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F9FF] text-[#171923]">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-[#F8F9FF]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex size-9 items-center justify-center rounded-lg bg-[#0D47A1] text-white shadow-sm">
              <FiFileText size={19} />
            </div>

            <span className="text-lg font-bold tracking-tight">
              CV<span className="text-[#0D47A1]">Builder</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-sm font-medium text-gray-600 transition hover:text-[#0D47A1]"
            >
              Features
            </a>

            <a
              href="#how-it-works"
              className="text-sm font-medium text-gray-600 transition hover:text-[#0D47A1]"
            >
              How it works
            </a>

            <a
              href="#templates"
              className="text-sm font-medium text-gray-600 transition hover:text-[#0D47A1]"
            >
              Templates
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden px-3 py-2 text-sm font-medium text-gray-600 transition hover:text-[#0D47A1] sm:block"
            >
              Log in
            </Link>

            <Link
              href="/builder"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0D47A1] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#093575]"
            >
              Create CV
              <BsArrowRight size={16} />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background decorations */}
        <div className="pointer-events-none absolute -left-40 top-20 size-96 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 top-10 size-96 rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-20 lg:grid-cols-2 lg:px-8 lg:pb-32 lg:pt-28">
          {/* Hero content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-sm font-medium text-[#0D47A1]">
              <GiSparkles size={15} />
              Build your professional CV
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-[#111827] sm:text-6xl lg:text-7xl">
              Create a CV that{" "}
              <span className="text-[#0D47A1]">gets noticed.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
              Create a professional CV in minutes with an easy-to-use builder,
              beautiful templates, real-time preview and high-quality PDF
              export.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/builder"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#0D47A1] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/15 transition hover:-translate-y-0.5 hover:bg-[#093575]"
              >
                Create your CV
                <BsArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#templates"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-gray-400 hover:bg-gray-50"
              >
                View templates
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {[
                "No design skills required",
                "Real-time preview",
                "PDF export",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-gray-500"
                >
                  <span className="flex size-5 items-center justify-center rounded-full bg-blue-100 text-[#0D47A1]">
                    <BiCheck size={12} strokeWidth={3} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* CV Preview */}
          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div className="absolute -inset-5 rounded-[2rem] bg-blue-200/30 blur-3xl" />

            <div className="relative rotate-1 rounded-2xl border border-gray-200 bg-white p-3 shadow-2xl shadow-blue-900/10">
              <div className="rounded-xl border border-gray-100 bg-white p-7 sm:p-9">
                {/* CV header */}
                <div className="border-b border-gray-200 pb-5">
                  <div className="h-5 w-48 rounded bg-[#0D47A1]" />
                  <div className="mt-3 flex gap-2">
                    <div className="h-2 w-20 rounded bg-gray-200" />
                    <div className="h-2 w-24 rounded bg-gray-200" />
                    <div className="h-2 w-16 rounded bg-gray-200" />
                  </div>
                </div>

                {/* Summary */}
                <div className="mt-6">
                  <div className="mb-3 h-3 w-20 rounded bg-[#0D47A1]" />

                  <div className="space-y-2">
                    <div className="h-2 w-full rounded bg-gray-200" />
                    <div className="h-2 w-[92%] rounded bg-gray-200" />
                    <div className="h-2 w-[80%] rounded bg-gray-200" />
                  </div>
                </div>

                {/* Experience */}
                <div className="mt-7">
                  <div className="mb-4 h-3 w-32 rounded bg-[#0D47A1]" />

                  <div className="flex justify-between">
                    <div className="h-3 w-40 rounded bg-gray-300" />
                    <div className="h-2 w-20 rounded bg-gray-200" />
                  </div>

                  <div className="mt-3 space-y-2">
                    <div className="h-2 w-full rounded bg-gray-200" />
                    <div className="h-2 w-[95%] rounded bg-gray-200" />
                    <div className="h-2 w-[87%] rounded bg-gray-200" />
                  </div>
                </div>

                <div className="mt-7">
                  <div className="mb-4 h-3 w-24 rounded bg-[#0D47A1]" />

                  <div className="flex justify-between">
                    <div className="h-3 w-36 rounded bg-gray-300" />
                    <div className="h-2 w-20 rounded bg-gray-200" />
                  </div>

                  <div className="mt-3 space-y-2">
                    <div className="h-2 w-full rounded bg-gray-200" />
                    <div className="h-2 w-[90%] rounded bg-gray-200" />
                  </div>
                </div>

                {/* Skills */}
                <div className="mt-7">
                  <div className="mb-3 h-3 w-28 rounded bg-[#0D47A1]" />

                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "TypeScript", "UI/UX"].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="rounded-md bg-blue-50 px-2.5 py-1 text-[9px] font-medium text-[#0D47A1]"
                        >
                          {skill}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-gray-200 bg-white p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
                  <BiCheck size={20} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">Your CV</p>
                  <p className="text-sm font-semibold text-gray-800">
                    Ready to download
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-200 bg-white">
        <div className="mx-auto grid max-w-5xl grid-cols-2 divide-x divide-gray-200 sm:grid-cols-4">
          {[
            ["10 min", "Average build time"],
            ["100%", "Customizable"],
            ["PDF", "Export format"],
            ["24/7", "Available"],
          ].map(([value, label]) => (
            <div key={label} className="px-5 py-7 text-center">
              <p className="text-2xl font-bold text-[#0D47A1]">{value}</p>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
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
              Everything is designed to help you focus on your experience
              instead of fighting with formatting.
            </p>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
                >
                  <div className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-[#0D47A1] transition group-hover:bg-[#0D47A1] group-hover:text-white">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="scroll-mt-20 border-y border-gray-200 bg-white py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-[#0D47A1]">
                How it works
              </span>

              <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                From blank page to professional CV.
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                No complicated design tools. Just add your information,
                customize your CV and download it.
              </p>

              <Link
                href="/builder"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#0D47A1] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#093575]"
              >
                Start building
                <BsArrowRight size={16} />
              </Link>
            </div>

            <div className="space-y-4">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex gap-5 rounded-2xl border border-gray-200 bg-[#F8F9FF] p-6"
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#0D47A1] text-sm font-bold text-white">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>

                    <p className="mt-1.5 text-sm leading-6 text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Templates */}
      <section id="templates" className="scroll-mt-20 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-[#0D47A1]">
                Templates
              </span>

              <h2 className="mt-3 text-4xl font-bold tracking-tight">
                Start with a professional design.
              </h2>

              <p className="mt-4 max-w-xl text-gray-600">
                Clean templates designed to make your experience easy to read
                and hard to ignore.
              </p>
            </div>

            <Link
              href="/templates"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D47A1] hover:underline"
            >
              View all templates
              <BsArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {["Simple", "Professional", "Modern"].map((template, index) => (
              <div
                key={template}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[4/5] bg-[#EEF3FC] p-5">
                  <div className="h-full rounded-lg bg-white p-5 shadow-md">
                    <div
                      className={`h-4 w-32 rounded ${
                        index === 1 ? "bg-gray-800" : "bg-[#0D47A1]"
                      }`}
                    />

                    <div className="mt-3 flex gap-2">
                      <div className="h-1.5 w-14 rounded bg-gray-200" />
                      <div className="h-1.5 w-20 rounded bg-gray-200" />
                    </div>

                    <div className="mt-7 space-y-5">
                      {[1, 2, 3, 4].map((item) => (
                        <div key={item}>
                          <div className="mb-2 h-2 w-20 rounded bg-gray-300" />
                          <div className="space-y-1.5">
                            <div className="h-1.5 w-full rounded bg-gray-200" />
                            <div className="h-1.5 w-[90%] rounded bg-gray-200" />
                            <div className="h-1.5 w-[75%] rounded bg-gray-200" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-5">
                  <div>
                    <h3 className="font-semibold">{template}</h3>
                    <p className="mt-1 text-xs text-gray-500">
                      Professional CV template
                    </p>
                  </div>

                  <Link
                    href="/builder"
                    className="rounded-lg bg-blue-50 px-3 py-2 text-xs font-semibold text-[#0D47A1] transition hover:bg-[#0D47A1] hover:text-white"
                  >
                    Use template
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 lg:px-8 lg:pb-32">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#0D47A1] px-8 py-16 text-center text-white shadow-2xl shadow-blue-900/20 sm:px-16 lg:py-20">
          <div className="mx-auto max-w-2xl">
            <GiSparkles className="mx-auto mb-5" size={28} />

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Your next opportunity starts with a better CV.
            </h2>

            <p className="mt-5 text-base leading-7 text-blue-100 sm:text-lg">
              Build a professional CV in minutes and put your best experience
              forward.
            </p>

            <Link
              href="/builder"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#0D47A1] shadow-lg transition hover:bg-blue-50"
            >
              Create your CV
              <BsArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-[#0D47A1] text-white">
              <FiFileText size={16} />
            </div>

            <span className="font-bold">
              CV<span className="text-[#0D47A1]">Builder</span>
            </span>
          </Link>

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} CVBuilder. All rights reserved.
          </p>

          <div className="flex gap-5 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-gray-800">
              Privacy
            </Link>

            <Link href="/terms" className="hover:text-gray-800">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

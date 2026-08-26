"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

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

export default function Steps() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 border-y border-gray-200 bg-white py-24 lg:py-32"
    >
      <motion.div
        initial={{ x: -600, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.6,
            ease: "easeOut",
          },
        }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-[#0D47A1]">
              How it works
            </span>

            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              From blank page to professional CV.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              No complicated design tools. Just add your information, customize
              your CV and download it.
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
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{
                  x: 500,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.45,
                    delay: index * 0.15,
                    ease: "easeOut",
                  },
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

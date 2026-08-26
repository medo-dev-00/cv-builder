"use client";
import Link from "next/link";
import { BiCheck } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "motion/react";
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-20 lg:grid-cols-2 lg:px-8 lg:pb-32 lg:pt-28">
        {/* Hero content */}
        <motion.div
          initial={{ x: -500 }}
          animate={{ x: 0, transition: { duration: 0.3 } }}
        >
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-[#111827] sm:text-6xl lg:text-7xl">
            Create a CV that{" "}
            <span className="text-[#0D47A1]">gets noticed.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
            Create a professional CV in minutes with an easy-to-use builder,
            beautiful templates, real-time preview and high-quality PDF export.
          </p>

          <Link
            href="/builder"
            className="group mt-6 w-fit flex items-center justify-center gap-2 rounded-lg bg-[#0D47A1] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/15 transition hover:-translate-y-0.5 hover:bg-[#164790]"
          >
            Create your CV
            <BsArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {[
              "No design skills required",
              "Real-time preview",
              "PDF export",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ y: -20, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.2 + index * 0.15,
                    duration: 0.1,
                  },
                }}
                className="flex items-center gap-2 text-sm text-gray-500"
              >
                <span className="flex size-5 items-center justify-center rounded-full bg-blue-100 text-[#0D47A1]">
                  <BiCheck size={12} strokeWidth={3} />
                </span>

                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CV Preview */}
        <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { delay: 0.1 } }}
            className="relative rotate-1 rounded-2xl border border-gray-200 bg-white p-3 shadow-2xl shadow-blue-900/5"
          >
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
                  {["React", "Next.js", "TypeScript", "UI/UX"].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-blue-50 px-2.5 py-1 text-[9px] font-medium text-[#0D47A1]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating card */}
          <motion.div
            initial={{ x: 800, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { delay: 0.11 } }}
            
            className="absolute -bottom-6 -left-6 hidden rounded-xl border border-gray-200 bg-white p-4 shadow-md sm:block"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}

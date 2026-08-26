"use client";

import { motion } from "motion/react";

export default function Stats() {
  return (
    <section className="border-y border-gray-200 bg-white">
      <div className="mx-auto grid max-w-5xl grid-cols-2 divide-x divide-gray-200 sm:grid-cols-4">
        {[
          ["10 min", "Average build time"],
          ["100%", "Customizable"],
          ["PDF", "Export format"],
          ["24/7", "Available"],
        ].map(([value, label], index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: -40 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.3,
                delay: index * 0.15,
              },
            }}
            className="px-5 py-7 text-center"
          >
            <p className="text-2xl font-bold text-[#0D47A1]">{value}</p>

            <p className="mt-1 text-xs text-gray-500 sm:text-sm">{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

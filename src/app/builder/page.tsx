"use client";

import { jsPDF } from "jspdf";

import { useRef, useState } from "react";

import { FaChevronDown, FaFileDownload } from "react-icons/fa";

import { toPng } from "html-to-image";

import CVForm from "@/components/CVForm";

import Simple from "@/templates/Simple";

// --- Constants ---

type Quality = "low" | "medium" | "large";

// pixelRatio controls html-to-image capture sharpness (higher = larger file)

const qualitySettings = {
  low: {
    label: "Low",

    pixelRatio: 2,
  },

  medium: {
    label: "Medium",

    pixelRatio: 4,
  },

  large: {
    label: "Large",

    pixelRatio: 6,
  },
};

// Builder page — form editor, live preview, and PDF export

export default function Builder() {
  // State

  const [quality, setQuality] = useState<Quality>("medium");

  const [open, setOpen] = useState(false);

  // Attached to the preview container for PDF rasterization

  const ref = useRef<HTMLDivElement>(null);

  // Handlers

  // Capture preview as PNG, embed full-page in A4 PDF, trigger download

  const handleDownloadPDF = async () => {
    const element = ref.current;

    if (!element) return;

    // Snapshot the preview DOM; quality tier sets capture resolution

    const dataUrl = await toPng(element, {
      pixelRatio: qualitySettings[quality].pixelRatio,

      backgroundColor: "#ffffff",

      cacheBust: true,
    });

    const pdf = new jsPDF({
      orientation: "portrait",

      unit: "mm",

      format: "a4",

      compress: true,
    });

    // 210 × 297 mm matches A4; image spans the full page

    pdf.addImage(dataUrl, "PNG", 0, 0, 210, 297, undefined, "FAST");

    pdf.save("CV.pdf");
  };

  // Render — two-column layout: editable form (left) and live preview (right)

  return (
    <main className="flex h-dvh">
      {/* Form */}

      <section className="flex flex-1 flex-col border-r border-gray-300 bg-[#F8F9FF] shadow-2xl">
        <div className="flex-1 overflow-hidden">
          <CVForm />
        </div>

        {/* Download */}

        <div className="ml-auto border-t border-gray-200 p-4">
          {/* Split button: download action + quality picker toggle */}

          <div className="relative inline-flex items-center rounded-lg border border-gray-300 bg-white text-[#0D47A1] shadow-sm">
            {/* Download */}

            <button
              type="button"
              onClick={handleDownloadPDF}
              className="inline-flex items-center justify-center gap-2 rounded-l-lg px-4 py-2.5 text-sm font-medium hover:bg-gray-50 focus:outline-none"
            >
              <FaFileDownload />
              Download PDF
            </button>

            {/* Dropdown button */}

            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-r-lg border-l border-gray-300 px-3 py-2.5 hover:bg-gray-50 focus:outline-none"
            >
              <FaChevronDown
                className={`h-3 w-3 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Quality options — selecting one updates export resolution and closes menu */}

            {/* Dropdown */}

            {open && (
              <div className="absolute bottom-full right-0 z-50 mb-2 w-44 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
                <ul className="p-2 text-sm font-medium text-gray-700">
                  {(Object.keys(qualitySettings) as Quality[]).map((item) => (
                    <li key={item}>
                      <button
                        type="button"
                        onClick={() => {
                          setQuality(item);

                          setOpen(false);
                        }}
                        className={`flex w-full items-center rounded-md px-3 py-2 hover:bg-gray-100 ${
                          quality === item ? "bg-blue-50 text-[#0D47A1]" : ""
                        }`}
                      >
                        {qualitySettings[item].label}

                        {quality === item && <span className="ml-auto">✓</span>}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Preview */}

      {/* A4-sized canvas; ref here is the PDF capture target */}

      <section className="flex h-full flex-3 items-center justify-center overflow-auto bg-[#E5EEFF]">
        <div
          ref={ref}
          className="h-280.75 w-198.5 origin-top bg-white font-inter"
        >
          <Simple />
        </div>
      </section>
    </main>
  );
}

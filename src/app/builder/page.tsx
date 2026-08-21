"use client";

import { jsPDF } from "jspdf";
import { useRef, useState } from "react";
import { FaChevronDown, FaFileDownload } from "react-icons/fa";
import { toPng } from "html-to-image";

import CVForm from "@/components/CVForm";
import Simple from "@/templates/Simple";

type Quality = "low" | "medium" | "large";

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

export default function Builder() {
  const [quality, setQuality] = useState<Quality>("medium");

  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    const element = ref.current;

    if (!element) return;

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

    pdf.addImage(dataUrl, "PNG", 0, 0, 210, 297, undefined, "FAST");

    pdf.save("CV.pdf");
  };

  return (
    <main className="flex h-dvh">
      {/* Form */}
      <section className="flex-1 flex flex-col bg-[#F8F9FF] shadow-2xl border-r border-gray-300">
        <div className="flex-1 overflow-hidden">
          <CVForm />
        </div>

        {/* Download */}
        <div className="ml-auto p-4 border-t border-gray-200">
          <div className="relative inline-flex items-center bg-white border border-gray-300 rounded-lg shadow-sm text-[#0D47A1]">
            {/* Download */}
            <button
              type="button"
              onClick={handleDownloadPDF}
              className="
        inline-flex
        items-center
        justify-center
        gap-2
        px-4
        py-2.5
        text-sm
        font-medium
        hover:bg-gray-50
        rounded-l-lg
        focus:outline-none
      "
            >
              <FaFileDownload />
              Download PDF
            </button>

            {/* Dropdown button */}
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="
        inline-flex
        items-center
        justify-center
        px-3
        py-2.5
        border-l
        border-gray-300
        hover:bg-gray-50
        rounded-r-lg
        focus:outline-none
      "
            >
              <FaChevronDown
                className={`w-3 h-3 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown */}
            {open && (
              <div
                className="
          absolute
          bottom-full
          right-0
          mb-2
          z-50
          w-44
          bg-white
          border
          border-gray-200
          rounded-lg
          shadow-lg
          overflow-hidden
        "
              >
                <ul className="p-2 text-sm text-gray-700 font-medium">
                  {(Object.keys(qualitySettings) as Quality[]).map((item) => (
                    <li key={item}>
                      <button
                        type="button"
                        onClick={() => {
                          setQuality(item);
                          setOpen(false);
                        }}
                        className={`
                  flex
                  items-center
                  w-full
                  px-3
                  py-2
                  rounded-md
                  hover:bg-gray-100
                  ${quality === item ? "bg-blue-50 text-[#0D47A1]" : ""}
                `}
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
      <section className="bg-[#E5EEFF] flex-3 h-full flex justify-center items-center overflow-auto">
        <div
          ref={ref}
          className="w-198.5 h-280.75 bg-white origin-top font-inter"
        >
          <Simple />
        </div>
      </section>
    </main>
  );
}

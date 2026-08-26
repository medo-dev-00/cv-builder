import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import logo from "@/logo.png";

export default function Header() {
  return (
    <>
      {" "}
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-[#F8F9FF]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex size-14 items-center justify-center rounded-lg">
              <Image src={logo} alt="logo" />
            </div>

            <span className="text-lg font-bold tracking-tight">
              Live <span className="text-[#0D47A1]"> CV</span>
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
              href="/builder"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0D47A1] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#093575]"
            >
              Create CV
              <BsArrowRight size={16} />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import logo from "@/logo.png";
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex size-14 items-center justify-center rounded-lg">
            <Image src={logo} alt="logo" />
          </div>

          <span className="font-bold">
            Live<span className="text-[#0D47A1]"> CV</span>
          </span>
        </Link>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} CVBuilder. All rights reserved to{" "}
          <a
            href="https://github.com/medo-dev-00"
            className="text-blue-500 font-semibold"
            target="_blank"
          >
            ahmed reda.
          </a>
        </p>
      </div>
    </footer>
  );
}

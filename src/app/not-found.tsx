import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8F9FF] px-6">
      <div className="text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#0D47A1]">
          Live CV
        </p>

        <h1 className="text-[120px] font-bold leading-none text-[#0D47A1]">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-bold text-gray-900">
          Page not found
        </h2>

        <p className="mx-auto mt-3 max-w-md text-gray-500">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#0D47A1] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#093575]"
        >
          <FaHome />
          Back to Home
        </Link>
      </div>
    </main>
  );
}

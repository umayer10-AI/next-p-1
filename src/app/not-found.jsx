"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
      <div className="text-center max-w-lg">
        <h1 className="text-8xl font-extrabold text-red-500">404</h1>
        <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
        <p className="text-gray-300 mt-3">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link href="/">
            <button className="px-6 py-2 rounded-2xl bg-red-500 hover:bg-red-600 transition shadow-lg">
              Go Home
            </button>
          </Link>

          <Link href="/contact">
            <button className="px-6 py-2 rounded-2xl bg-gray-700 hover:bg-gray-600 transition shadow-lg">
              Contact Support
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
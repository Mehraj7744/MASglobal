import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-indigo-500">404</h1>
        <p className="mt-4 text-slate-400">
          The page you’re looking for does not exist.
        </p>

        <Link
          href="/"
          className="inline-block mt-6 bg-indigo-600 px-6 py-3 rounded-full"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

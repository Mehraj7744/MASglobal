import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-6">
      <div className="text-center max-w-xl">

        {/* Error Code */}
        <h1 className="text-7xl md:text-8xl font-extrabold text-slate-50 tracking-tight">
          404
        </h1>

        {/* Message */}
        <h2 className="mt-4 text-xl md:text-2xl font-semibold text-slate-200">
          Oops! Page Not Found
        </h2>

        <p className="mt-3 text-sm md:text-base text-slate-400">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {/* Action Button */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-slate-50 transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Back to Home
            <span className="inline-block text-lg">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}

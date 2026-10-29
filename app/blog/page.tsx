import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Search, SlidersHorizontal, Calendar, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Insights & Engineering Blog | MAS Global AI",
  description: "Deep dives into scalable architecture, modern full-stack systems, and industrial AI implementations.",
};

type Props = {
  searchParams: Promise<{
    page?: string;
    search?: string;
    sort?: string;
  }>;
};

export default async function BlogPage({ searchParams }: Props) {
  const resolvedParams = await searchParams;
  const page = Number(resolvedParams.page || 1);
  const search = resolvedParams.search?.toLowerCase() || "";
  const sort = resolvedParams.sort || "newest";

  let posts = getAllPosts();

  // Filter Search
  if (search) {
    posts = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search) ||
        post.excerpt?.toLowerCase().includes(search)
    );
  }

  // Sort Logic
  posts = posts.sort((a, b) => {
    const timeA = new Date(a.date).getTime();
    const timeB = new Date(b.date).getTime();
    return sort === "oldest" ? timeA - timeB : timeB - timeA;
  });

  // Balanced Pagination Framework
  const POSTS_PER_PAGE = 6;
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const paginatedPosts = posts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  // Helper to maintain URL params during client clicks
  const createQueryString = (key: string, value: string | number) => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (sort !== "newest") params.set("sort", sort);
    params.set(key, String(value));
    return `?${params.toString()}`;
  };

  return (
    <section className="relative min-h-screen bg-[#050508] text-slate-300 px-4 sm:px-8 lg:px-16 py-16 lg:py-28 antialiased overflow-hidden border-t border-slate-900">

      {/* CANVAS GRID LINES BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-10 pointer-events-none" />

      {/* COMPONENT INFOGRAPHIC HEADER */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between border-b border-slate-900 pb-8 mb-16 gap-6 relative z-10">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-400">
            Engineering Insights & Articles
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-4 font-sans leading-[1.15]">
            Technical Perspectives & <span className="text-slate-400">Architecture Logs</span>
          </h1>
          <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-xl">
            Deep dives into enterprise architectures, cloud pipelines, modern AI integrations, and production-tested software systems.
          </p>
        </div>
        <div className="text-xs font-mono text-slate-400 tracking-wider bg-slate-900/60 px-3.5 py-1.5 rounded-lg border border-slate-800 shrink-0">
          Knowledge Base & Case Notes
        </div>
      </div>

      {/* CONTROL DECK CONTROLS BAR */}
      <div className="max-w-7xl mx-auto mb-12 relative z-10 bg-slate-950/40 rounded-2xl border border-slate-900 p-4 backdrop-blur-md flex flex-col sm:flex-row items-center gap-4">

        {/* Native Form Syncing Search Field */}
        <form method="GET" className="relative w-full sm:flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-600" />
          <input
            type="text"
            name="search"
            defaultValue={search}
            placeholder="Search system documentation manifests..."
            className="w-full rounded-xl border border-slate-900 bg-[#06060a] pl-10 pr-4 py-2.5 text-xs font-mono text-slate-200 placeholder-slate-700 focus:border-blue-500/40 focus:outline-none transition-all"
          />
          {sort && <input type="hidden" name="sort" value={sort} />}
        </form>

        {/* Sorting Engine Selector Dropdown */}
        <div className="relative w-full sm:w-auto flex items-center gap-2 shrink-0">
          <div className="absolute left-3.5 pointer-events-none text-slate-600 flex items-center">
            <SlidersHorizontal className="h-3.5 w-3.5" />
          </div>
          {/* Sorting Engine Selector Dropdown */}
          <form method="GET" className="relative w-full sm:w-auto flex items-center gap-2 shrink-0">
            {search && <input type="hidden" name="search" value={search} />}
            <div className="relative flex-1 sm:flex-none">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-600 flex items-center">
                <SlidersHorizontal className="h-3.5 w-3.5" />
              </div>
              <select
                name="sort"
                defaultValue={sort}
                className="w-full sm:w-auto appearance-none rounded-xl border border-slate-900 bg-[#06060a] pl-10 pr-10 py-2.5 text-xs font-mono text-slate-300 focus:border-blue-500/40 focus:outline-none cursor-pointer transition-all"
              >
                <option value="newest">SEQUENCE: NEWEST</option>
                <option value="oldest">SEQUENCE: OLDEST</option>
              </select>
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-600 text-[10px] font-mono">▼</div>
            </div>
            <button
              type="submit"
              className="rounded-xl border border-slate-900 bg-slate-900/40 px-3 py-2.5 text-xs font-mono text-slate-400 hover:text-white transition-all"
            >
              SORT
            </button>
          </form>
          <div className="absolute right-3.5 pointer-events-none text-slate-600 text-[10px] font-mono">▼</div>
        </div>
      </div>

      {/* BLOG ARCHITECTURE CONTENT GRID */}
      {paginatedPosts.length > 0 ? (
        <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 relative z-10">
          {paginatedPosts.map((post) => (
            <article
              key={post.id}
              className="group relative rounded-2xl border border-slate-900 bg-slate-950/40 backdrop-blur-md transition-all duration-300 hover:border-slate-800/80 hover:bg-slate-900/10 flex flex-col overflow-hidden shadow-2xl min-h-[460px]"
            >

              {/* INTERACTIVE MEDIA WRAPPER */}
              <div className="relative w-full h-48 sm:h-52 shrink-0 overflow-hidden bg-slate-900/50 border-b border-slate-900">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-w-7xl) 33vw, (max-w-4xl) 50vw, 100vw"
                  referrerPolicy="no-referrer"
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />

                {/* Meta Date Overlay Ribbon */}
                <div className="absolute top-4 left-4 font-mono text-[9px] text-slate-400 tracking-wider bg-slate-950/90 border border-slate-900/60 px-2.5 py-1 rounded-md backdrop-blur-sm flex items-center gap-1.5">
                  <Calendar className="h-3 w-3 text-blue-500" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
              </div>

              {/* POST CONTENT TEXT BLOCK */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 min-w-0">
                <div>
                  <h3 className="text-lg font-semibold tracking-wide text-white transition-colors group-hover:text-blue-400 line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-xs text-slate-500 leading-relaxed line-clamp-4">
                    {post.excerpt}
                  </p>
                </div>

                {/* BOTTOM COMPONENT ANCHOR HOVER UTILITIES */}
                <div className="mt-6 pt-4 border-t border-slate-900/60 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-slate-500 tracking-wider uppercase">
                    Architecture Note
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-xs text-indigo-400 font-mono font-semibold transition-all hover:text-indigo-300 gap-1 group-hover:underline decoration-indigo-500/30 underline-offset-4"
                  >
                    READ ARTICLE <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>

            </article>
          ))}
        </div>
      ) : (
        /* Empty System States Output Fallback Block */
        <div className="max-w-7xl mx-auto rounded-2xl border border-dashed border-slate-900 bg-slate-950/20 p-16 text-center relative z-10">
          <div className="font-mono text-xs text-slate-600">ZERO_LOGS_RETURNED</div>
          <p className="mt-2 text-sm text-slate-500">No content records found matching your specified search filter arrays.</p>
          <Link href="/blog" className="inline-block mt-4 font-mono text-xs text-blue-500 hover:underline">
            Reset Filter Constraints
          </Link>
        </div>
      )}

      {/* RE-ENGINEERED ARROW CONTROLS PAGINATION SLAT */}
      {totalPages > 1 && (
        <div className="mt-16 flex justify-center items-center gap-2 relative z-10">

          {/* Back Step Utility */}
          {page > 1 ? (
            <Link
              href={createQueryString("page", page - 1)}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-900 bg-[#06060a] text-slate-400 hover:text-white hover:border-slate-800 transition-all"
            >
              <ChevronLeft className="h-4 w-4" />
            </Link>
          ) : (
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-950 bg-slate-950/20 text-slate-800 cursor-not-allowed">
              <ChevronLeft className="h-4 w-4" />
            </div>
          )}

          {/* Numeric Links Arrays */}
          <div className="flex gap-1.5 font-mono text-xs">
            {Array.from({ length: totalPages }).map((_, index) => {
              const targetPage = index + 1;
              const isCurrent = page === targetPage;
              return (
                <Link
                  key={index}
                  href={createQueryString("page", targetPage)}
                  className={`flex h-9 min-w-[2.25rem] px-2 items-center justify-center rounded-xl font-medium transition-all ${isCurrent
                      ? "bg-blue-600 border border-blue-500 text-white shadow-lg shadow-blue-600/10"
                      : "border border-slate-900 bg-[#06060a] text-slate-400 hover:text-white hover:border-slate-800"
                    }`}
                >
                  {String(targetPage).padStart(2, "0")}
                </Link>
              );
            })}
          </div>

          {/* Forward Step Utility */}
          {page < totalPages ? (
            <Link
              href={createQueryString("page", page + 1)}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-900 bg-[#06060a] text-slate-400 hover:text-white hover:border-slate-800 transition-all"
            >
              <ChevronRight className="h-4 w-4" />
            </Link>
          ) : (
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-950 bg-slate-950/20 text-slate-800 cursor-not-allowed">
              <ChevronRight className="h-4 w-4" />
            </div>
          )}

        </div>
      )}

    </section>
  );
}
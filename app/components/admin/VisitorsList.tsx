import React, { useState, useMemo } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  Download,
  Filter,
  Globe,
  Eye,
  Users,
  Activity
} from "lucide-react";

interface VisitorLog {
  id: string | number;
  page: string;
  fullUrl?: string;
  userAgent: string;
  language: string;
  platform: string;
  screenWidth?: number;
  screenHeight?: number;
  viewportWidth?: number;
  viewportHeight?: number;
  timezone?: string;
  referrer?: string;
  visitedAt?: string;
  cookiesEnabled?: boolean;
  online?: boolean;
  hardwareConcurrency?: number;
  deviceMemory?: number;
  timestamp?: string;
  ip?: string;
  country?: string;
  city?: string;
  region?: string;
}

interface Props {
  visitors: VisitorLog[];
}

const VisitorsList = ({ visitors = [] }: Props) => {
  // States
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // 1. Data Aggregation & Analytics
  const totalVisitors = visitors.length;

  const uniqueVisitors = useMemo(() => {
    return new Set(visitors.map((v) => v.ip).filter(Boolean)).size;
  }, [visitors]);

  const uniquePages = useMemo(() => {
    return new Set(visitors.map((v) => v.page)).size;
  }, [visitors]);

  // Unique country list for filtering dropdown
  const countryList = useMemo(() => {
    const countries = visitors.map((v) => v.country).filter(Boolean);
    return ["All", ...Array.from(new Set(countries))];
  }, [visitors]);

  // Chart Data: Grouped by day
  const dailyVisitors = useMemo(() => {
    const grouped = visitors.reduce((acc: Record<string, any>, visitor) => {
      const targetDate = visitor.timestamp || visitor.visitedAt;
      if (!targetDate) return acc;

      const date = new Date(targetDate);
      if (isNaN(date.getTime())) return acc;

      const day = date.toISOString().split("T")[0];

      if (!acc[day]) {
        acc[day] = { date: day, visitors: 0 };
      }
      acc[day].visitors++;
      return acc;
    }, {});

    return Object.values(grouped).sort((a: any, b: any) =>
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }, [visitors]);

  // Insights Data: Top Pages Visited
  const topPages = useMemo(() => {
    const counts = visitors.reduce((acc: Record<string, number>, v) => {
      acc[v.page] = (acc[v.page] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(counts)
      .map(([page, count]) => ({ page, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);
  }, [visitors]);

  // 2. Filter & Search Logic
  const filteredVisitors = useMemo(() => {
    return visitors.filter((v) => {
      const matchesSearch =
        v.page?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        v.ip?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        v.country?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        v.platform?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCountry = selectedCountry === "All" || v.country === selectedCountry;

      return matchesSearch && matchesCountry;
    });
  }, [visitors, searchTerm, selectedCountry]);

  // 3. Pagination Logic
  const totalPages = Math.ceil(filteredVisitors.length / itemsPerPage) || 1;
  const paginatedVisitors = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredVisitors.slice(start, start + itemsPerPage);
  }, [filteredVisitors, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // 4. Export Data Helper
  const exportToCSV = () => {
    if (filteredVisitors.length === 0) return;

    const headers = ["ID", "Page", "IP", "Country", "City", "Platform", "Visited At"];
    const rows = filteredVisitors.map(v => [
      v.id,
      v.page,
      v.ip || "-",
      v.country || "Unknown",
      v.city || "Unknown",
      v.platform,
      v.visitedAt ? new Date(v.visitedAt).toISOString() : "Unknown"
    ]);

    const csvContent = "data:text/csv;charset=utf-8,"
      + [headers.join(","), ...rows.map(e => e.map(val => `"${val}"`).join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `visitor_logs_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6 p-1 text-card-foreground">

      {/* SUMMARY STAT CARDS */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex items-center justify-between rounded-xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:shadow-md">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Total Pageviews</p>
            <p className="mt-2 text-3xl font-black tracking-tight">{totalVisitors}</p>
          </div>
          <div className="rounded-lg bg-primary/10 p-3 text-primary">
            <Eye className="h-6 w-6" />
          </div>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:shadow-md">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Unique Visitors</p>
            <p className="mt-2 text-3xl font-black tracking-tight">{uniqueVisitors}</p>
          </div>
          <div className="rounded-lg bg-emerald-500/10 p-3 text-emerald-500">
            <Users className="h-6 w-6" />
          </div>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:shadow-md sm:col-span-2 lg:col-span-1">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Unique Pages Hooked</p>
            <p className="mt-2 text-3xl font-black tracking-tight">{uniquePages}</p>
          </div>
          <div className="rounded-lg bg-blue-500/10 p-3 text-blue-500">
            <Globe className="h-6 w-6" />
          </div>
        </div>
      </div>

      {/* VISITOR CHARTS SECTION */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Traffic Chart */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm lg:col-span-2">
          <div className="mb-6">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" /> Daily Visitor Traffic
            </h2>
            <p className="text-xs text-muted-foreground">Visual baseline of analytics logs over time</p>
          </div>

          <div className="h-70 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dailyVisitors}>
                <defs>
                  <linearGradient id="visitorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity={1} />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.4} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="date" tick={{ fill: "#9ca3af", fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "#9ca3af", fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip
                  cursor={{ fill: "rgba(59,130,246,0.04)" }}
                  contentStyle={{ background: "#fff", borderRadius: "12px", border: "1px solid #e5e7eb" }}
                />
                <Bar dataKey="visitors" fill="url(#visitorGradient)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Mini Insight Table */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold mb-1">Top Paths</h3>
            <p className="text-xs text-muted-foreground mb-4">Most visited routes on your app</p>
            <div className="space-y-3">
              {topPages.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm border-b border-border/40 pb-2">
                  <span className="font-mono bg-muted px-2 py-0.5 rounded text-xs truncate max-w-45">
                    {item.page}
                  </span>
                  <span className="font-semibold text-muted-foreground">{item.count} hits</span>
                </div>
              ))}
              {topPages.length === 0 && <div className="text-xs text-muted-foreground text-center py-8">No records available</div>}
            </div>
          </div>
          <div className="text-xs text-muted-foreground pt-4 border-t border-border/40">
            Realtime distribution metrics.
          </div>
        </div>
      </div>

      {/* VISITOR TABLE WITH FILTERS & PAGINATION */}
      <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">

        {/* Table Header Action Bar */}
        <div className="p-6 border-b border-border bg-muted/20 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-bold">Visitor Log Registry</h2>
            <p className="text-xs text-muted-foreground">Granular network metadata snapshots</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search IP, page, or country..."
                className="pl-9 pr-4 py-2 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 w-full sm:w-55"
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
              />
            </div>

            {/* Country Selector Filter */}
            <div className="relative flex items-center">
              <Filter className="absolute left-3 h-4 w-4 text-muted-foreground pointer-events-none" />
              <select
                className="pl-9 pr-3 py-2 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none min-w-30"
                value={selectedCountry}
                onChange={(e) => { setSelectedCountry(e.target.value); setCurrentPage(1); }}
              >
                {countryList.map((country, idx) => (
                  <option key={idx} value={country}>{country}</option>
                ))}
              </select>
            </div>

            {/* CSV Export Trigger */}
            <button
              onClick={exportToCSV}
              disabled={filteredVisitors.length === 0}
              className="flex items-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 disabled:opacity-50 text-sm px-4 py-2 rounded-lg font-medium transition"
            >
              <Download className="h-4 w-4" /> Export
            </button>
          </div>
        </div>

        {/* Data Container Table */}
        {paginatedVisitors.length === 0 ? (
          <div className="p-12 text-center text-muted-foreground text-sm">
            No dynamic log traces fit your target configurations.
          </div>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-left text-sm border-collapse min-w-250">
              <thead>
                <tr className="border-b border-border bg-muted/50 text-xs uppercase tracking-wider text-muted-foreground">
                  <th className="px-5 py-3.5 font-semibold">Session ID & Time</th>
                  <th className="px-5 py-3.5 font-semibold">Identity & Location</th>
                  <th className="px-5 py-3.5 font-semibold">Target Route & Origin</th>
                  <th className="px-5 py-3.5 font-semibold">Client Environment</th>
                  <th className="px-5 py-3.5 font-semibold">Hardware Footprint</th>
                  <th className="px-5 py-3.5 font-semibold">Client Signals</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {paginatedVisitors.map((visitor) => (
                  <tr key={visitor.id} className="hover:bg-muted/10 transition-colors group">

                    {/* COLUMN 1: ID & TIMESTAMP DATA */}
                    <td className="px-5 py-4">
                      <div className="font-mono text-xs font-bold text-foreground truncate max-w-[120px]" title={String(visitor.id)}>
                        ID: {visitor.id}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1 whitespace-nowrap">
                        {visitor.visitedAt && !isNaN(new Date(visitor.visitedAt).getTime())
                          ? new Date(visitor.visitedAt).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' })
                          : "Unknown Visited At"}
                      </div>
                      {visitor.timestamp && (
                        <div className="text-[10px] text-muted-foreground/70 font-mono mt-0.5">
                          TS: {visitor.timestamp}
                        </div>
                      )}
                    </td>

                    {/* COLUMN 2: GEOLOCATION & NETWORKING DATA */}
                    <td className="px-5 py-4">
                      <div className="font-mono text-xs font-semibold text-primary">
                        {visitor.ip || "0.0.0.0"}
                      </div>
                      <div className="text-xs font-medium text-foreground mt-0.5">
                        {visitor.city || "Unknown City"}, {visitor.region || "-"}
                      </div>
                      <div className="text-[11px] text-muted-foreground flex items-center gap-1.5 mt-0.5">
                        <span>{visitor.country || "Unknown Country"}</span>
                        {visitor.timezone && (
                          <span className="text-muted-foreground/60 font-mono text-[10px]">
                            ({visitor.timezone})
                          </span>
                        )}
                      </div>
                    </td>

                    {/* COLUMN 3: ROUTING & REFERRER DATA */}
                    <td className="px-5 py-4 max-w-[240px]">
                      <span className="inline-block text-xs font-mono bg-primary/5 text-primary border border-primary/10 px-2 py-0.5 rounded truncate max-w-full">
                        {visitor.page}
                      </span>
                      {visitor.fullUrl && (
                        <div className="text-[11px] text-muted-foreground truncate mt-1" title={visitor.fullUrl}>
                          URL: <span className="font-mono text-[10px]">{visitor.fullUrl}</span>
                        </div>
                      )}
                      <div className="text-[11px] text-muted-foreground/80 truncate mt-0.5" title={visitor.referrer || "Direct"}>
                        Ref: <span className="italic">{visitor.referrer || "Direct / None"}</span>
                      </div>
                    </td>

                    {/* COLUMN 4: ARCHITECTURE & BROWSER DATA */}
                    <td className="px-5 py-4 max-w-[260px]">
                      <div className="font-medium text-foreground text-xs">
                        {visitor.platform} <span className="text-muted-foreground/70 font-normal">({visitor.language})</span>
                      </div>
                      {/* User Agent explicitly contained inside a clean micro-layout */}
                      <div
                        className="text-[10px] text-muted-foreground font-mono bg-muted/40 p-1.5 rounded border border-border/40 mt-1.5 line-clamp-2 leading-tight select-all cursor-help"
                        title={visitor.userAgent}
                      >
                        {visitor.userAgent}
                      </div>
                    </td>

                    {/* COLUMN 5: REAL HARDWARE SPECIFICATIONS */}
                    <td className="px-5 py-4 text-xs">
                      <div className="text-foreground font-medium">
                        Screen: <span className="font-mono text-muted-foreground">{visitor.screenWidth ?? "-"} × {visitor.screenHeight ?? "-"}</span>
                      </div>
                      <div className="text-muted-foreground mt-0.5">
                        Viewport: <span className="font-mono">{visitor.viewportWidth ?? "-"} × {visitor.viewportHeight ?? "-"}</span>
                      </div>
                      <div className="flex gap-2 text-[11px] text-muted-foreground/80 mt-1 font-mono">
                        <span>CPU: {visitor.hardwareConcurrency ?? "-"} Cores</span>
                        <span>•</span>
                        <span>RAM: {visitor.deviceMemory ? `${visitor.deviceMemory} GB` : "-"}</span>
                      </div>
                    </td>

                    {/* COLUMN 6: LIVE TELEMETRY STATUS SIGNALS */}
                    <td className="px-5 py-4">
                      <div className="flex flex-col gap-1.5 items-start justify-center">
                        <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide border ${visitor.online
                            ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                            : "bg-rose-500/10 text-rose-600 border-rose-500/20"
                          }`}>
                          <span className={`h-1 w-1 rounded-full mr-1.5 ${visitor.online ? "bg-emerald-500" : "bg-rose-500"}`} />
                          {visitor.online ? "Online Status" : "Offline Status"}
                        </span>

                        <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium border ${visitor.cookiesEnabled
                            ? "bg-blue-500/10 text-blue-600 border-blue-500/20"
                            : "bg-amber-500/10 text-amber-600 border-amber-500/20"
                          }`}>
                          Cookies: {visitor.cookiesEnabled ? "Allowed" : "Blocked"}
                        </span>
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination Controls Footer Bar */}
        <div className="p-4 border-t border-border bg-muted/10 flex items-center justify-between flex-row">
          <p className="text-xs text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{Math.min(filteredVisitors.length, (currentPage - 1) * itemsPerPage + 1)}-{Math.min(filteredVisitors.length, currentPage * itemsPerPage)}</span> of <span className="font-semibold text-foreground">{filteredVisitors.length}</span> results
          </p>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-1.5 rounded-md border border-border bg-background hover:bg-muted disabled:opacity-40 transition"
              aria-label="Previous Page"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="text-xs px-2 font-medium">
              Page {currentPage} of {totalPages}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-1.5 rounded-md border border-border bg-background hover:bg-muted disabled:opacity-40 transition"
              aria-label="Next Page"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VisitorsList;
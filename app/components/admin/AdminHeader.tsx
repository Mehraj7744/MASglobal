"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AdminHeader = () => {
  const router = useRouter();
  const [adminEmail, setAdminEmail] = useState("");
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // GET EMAIL FROM LOCALSTORAGE
  useEffect(() => {
    const storedEmail = localStorage.getItem("admin_email");
    if (storedEmail) {
      setAdminEmail(storedEmail);
    }
  }, []);

  // LOGOUT
  const handleLogout = async () => {
    if (isLoggingOut) return;
    setIsLoggingOut(true);

    try {
      await fetch("/api/admin/logout", {
        method: "POST",
      });

      localStorage.removeItem("admin_email");
      router.replace("/login");
    } catch (error) {
      console.error("Logout process encountered an issue:", error);
      setIsLoggingOut(false);
    }
  };

  return (
    <header className="relative mb-8 w-full rounded-2xl border border-border bg-card p-6 shadow-md backdrop-blur-md">
      {/* Absolute top decorative brand indicator line using primary theme variable */}
      <div className="absolute top-0 left-6 right-6 h-0.5 bg-linear-to-r from-primary to-transparent opacity-70" />

      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        {/* LEFT COMPONENT: Corporate Branding and System Meta */}
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="font-sans text-2xl font-black tracking-tight text-foreground sm:text-3xl">
              Admin Dashboard
            </h1>

            {/* Premium minimal pill tag indicating protected state */}
            <div className="inline-flex items-center gap-1.5 rounded-md bg-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground border border-border/40">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Protected Panel
            </div>
          </div>

          <p className="font-sans text-xs font-semibold tracking-wide text-muted-foreground uppercase opacity-80">
            MAS Global AI Analytics Center
          </p>
        </div>

        {/* RIGHT COMPONENT: Context-aware User Badge and Interactive Trigger */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          {/* Identity context block styled cleanly */}
          {adminEmail && (
            <div className="flex flex-col sm:text-right">
              <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                Active Session
              </span>
              <span className="font-mono text-sm font-medium text-foreground opacity-90">
                {adminEmail}
              </span>
            </div>
          )}

          {/* Destructive state logout button utilizing themed oklch tokens */}
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-destructive/20 bg-destructive/5 px-5 py-2.5 font-sans text-xs font-bold uppercase tracking-widest text-destructive transition-all duration-300 hover:bg-destructive hover:text-white active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 focus:outline-none focus:ring-2 focus:ring-destructive focus:ring-offset-2"
          >
            {isLoggingOut ? (
              <>
                <svg className="h-3.5 w-3.5 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                <span>Terminating...</span>
              </>
            ) : (
              <span>Sign Out</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
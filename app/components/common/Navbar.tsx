"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "../ui/theme-toggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-6 lg:px-8">
        
        {/* Zone 1: Single element wordmark brand lockup */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-border/80 bg-card p-1 shadow-sm transition-transform duration-200 group-hover:scale-105">
            <Image
              src="/masLogo.png"
              alt="MAS Global AI Logo"
              width={36} 
              height={36}
              referrerPolicy="no-referrer"
              className="h-full w-full object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-base font-bold tracking-tight text-foreground leading-none">
              MAS Global AI
            </span>
            <span className="text-[10px] text-muted-foreground font-mono tracking-wider mt-0.5">
              Enterprise Software & AI
            </span>
          </div>
        </Link>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 whitespace-nowrap transition-colors duration-200 ${
                  active
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action + Theme Toggle */}
        <div className="flex items-center gap-3.5 shrink-0">
          <ThemeToggle />

          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-primary-foreground bg-primary rounded-xl hover:opacity-95 shadow-sm transition-all duration-200 whitespace-nowrap"
          >
            <span>Schedule Consultation</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card text-foreground md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-b border-border/60 bg-background/95 px-6 py-5 shadow-xl backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between py-2 text-sm font-medium transition-colors ${
                    active ? "text-primary font-bold" : "text-foreground hover:text-primary"
                  }`}
                >
                  <span>{link.label}</span>
                  {active && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-border/60 flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">Appearance</span>
              <ThemeToggle />
            </div>
            <div className="pt-1">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-2.5 text-xs font-bold text-primary-foreground shadow-sm transition-all"
              >
                <span>Schedule Consultation</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
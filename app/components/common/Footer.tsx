import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight, Lock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background border-t border-border/60 font-sans antialiased text-foreground">
      {/* Main Corporate Footer Panel */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand & Corporate Overview */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative h-8 w-8 overflow-hidden rounded-lg border border-border/80 bg-card p-0.5">
                <Image
                  src="/images/brand/mas-symbol.svg"
                  alt="MAS Global AI"
                  width={32}
                  height={32}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                MAS Global AI
              </span>
            </Link>
            
            <p className="text-sm leading-relaxed text-muted-foreground">
              MAS Global AI engineers enterprise-grade software architectures, artificial intelligence workflows, and scalable cloud solutions for high-growth businesses and global organizations.
            </p>

            <div className="pt-2 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">Engineering Headquarters:</span>
              <p className="mt-1">Ameerpet, Hyderabad, Telangana, India</p>
            </div>
          </div>

          {/* Solutions & Services */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-foreground">
              Solutions & Services
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {[
                { label: "AI & Autonomous Systems", href: "/services" },
                { label: "Custom Software Engineering", href: "/services" },
                { label: "Cloud & DevOps Architecture", href: "/services" },
                { label: "Enterprise Web Applications", href: "/services" },
                { label: "Digital Transformation", href: "/services" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-foreground transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation & Company */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-foreground">
              Organization
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Technical Insights", href: "/blog" },
                { label: "Contact Engineering", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-foreground transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Engagement Coordinates */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-foreground">
              Direct Contact
            </h4>
            <ul className="space-y-3.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-muted-foreground" />
                <span>Ameerpet, Hyderabad, Telangana, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-muted-foreground" />
                <a
                  href="tel:+918862065378"
                  className="hover:text-foreground transition-colors duration-200 font-mono text-xs"
                >
                  +91 8862065378
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-muted-foreground" />
                <a
                  href="mailto:contact@masglobalai.com"
                  className="hover:text-foreground transition-colors duration-200 underline underline-offset-4 decoration-border hover:decoration-foreground text-xs font-mono"
                >
                  contact@masglobalai.com
                </a>
              </li>
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary hover:opacity-85 transition-opacity"
                >
                  <span>Request Engineering Proposal</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Legal Copyright Bar */}
      <div className="border-t border-border/40 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} MAS Global AI. All rights reserved.</p>
          
          <div className="flex flex-wrap items-center gap-5 sm:gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center gap-1 text-[11px] font-mono hover:text-foreground transition-colors"
            >
              <Lock className="h-3 w-3" />
              <span>Staff Portal</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
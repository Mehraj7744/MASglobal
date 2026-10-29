import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

interface Props {
  title: string;
  desc: string;
  icon: LucideIcon;
  tags?: string[];
  id?: string;
}

const ServiceCard = ({ title, desc, icon: Icon, tags }: Props) => {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl shadow-sm">
      <div>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="h-6 w-6" strokeWidth={1.8} />
        </div>

        <h3 className="mt-6 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {desc}
        </p>

        {tags && tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border/70 bg-muted/60 px-2.5 py-1 text-xs font-mono text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mt-8 border-t border-border/60 pt-4">
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary transition-colors hover:opacity-85"
        >
          Request Technical Scope
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
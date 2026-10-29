import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { type EngagementModel } from "./constants/values";

interface Props {
  model: EngagementModel;
}

const PricingCard = ({ model }: Props) => {
  const { title, description, badge, icon: Icon, features, featured, ctaText } = model;

  return (
    <div
      className={`relative flex flex-col justify-between rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 shadow-sm ${
        featured
          ? "border-2 border-primary bg-card shadow-xl shadow-primary/10"
          : "border border-border/80 bg-card/60 backdrop-blur-sm"
      }`}
    >
      {featured && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-sm">
          Recommended
        </span>
      )}

      <div>
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
            <Icon className="h-6 w-6" />
          </div>
          <span className="text-xs font-mono font-medium text-primary uppercase">
            {badge}
          </span>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="mt-8 border-t border-border/60 pt-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Included Capabilities
          </span>
          <ul className="mt-4 space-y-3.5">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm text-foreground">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 border border-primary/30 text-primary">
                  <Check className="h-2.5 w-2.5" strokeWidth={3} />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <Link
          href="/contact"
          className={`flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold transition-all duration-200 active:scale-[0.98] ${
            featured
              ? "bg-primary text-primary-foreground hover:opacity-90 shadow-md shadow-primary/20"
              : "bg-secondary text-secondary-foreground hover:bg-muted border border-border"
          }`}
        >
          {ctaText}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
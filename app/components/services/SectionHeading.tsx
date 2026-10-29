interface Props {
  badge: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeading = ({
  badge,
  title,
  description,
  centered = false,
}: Props) => {
  return (
    <div
      className={
        centered
          ? "mx-auto max-w-3xl text-center"
          : "max-w-2xl"
      }
    >
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-400">
        {badge}
      </span>

      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-slate-400 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
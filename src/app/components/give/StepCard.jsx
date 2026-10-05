export default function StepCard({ number, title, hint, children }) {
  return (
    <section className="rounded-[2rem] border border-plum/10 bg-white p-5 shadow-[0_20px_60px_rgba(62,4,53,0.07)] sm:p-7 md:p-8">
      <div className="flex items-start gap-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-plum font-heading text-sm font-bold text-gold">
          {number}
        </span>
        <div>
          <h2 className="text-xl font-bold text-plum sm:text-2xl">{title}</h2>
          {hint && (
            <p className="mt-1 text-sm leading-relaxed text-muted">{hint}</p>
          )}
        </div>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}
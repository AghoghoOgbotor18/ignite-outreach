import TestimonyHero from "./TestimonyHero";
import FeaturedTestimonies from "./FeaturedTestimonies";
import TestimonySlider from "./TestimonySlider";

export default function TestimonyPage() {
  return (
    <main className="bg-cream">
      <TestimonyHero />

      <FeaturedTestimonies />

      <TestimonySlider />

      <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-plum px-6 py-14 text-center shadow-[0_30px_80px_rgba(62,4,53,0.16)] sm:px-10 md:px-16 md:py-20">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gold" />

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                Your Story Matters
              </span>

              <span className="h-px w-8 bg-gold" />
            </div>

            <h2 className="mt-5 font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
              What has God done{" "}
              <span className="text-orchid">in your life?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
              Every testimony carries a story of grace. Your story could
              encourage someone else to keep believing.
            </p>

            <button
              type="button"
              className="mt-8 inline-flex items-center rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-plum transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Share Your Testimony
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
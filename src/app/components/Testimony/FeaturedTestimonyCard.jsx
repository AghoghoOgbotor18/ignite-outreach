import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";

export default function FeaturedTestimonyCard({ testimony }) {
  const hasVideo = Boolean(testimony.videoUrl);

  return (
    <article className="group relative overflow-hidden rounded-[2rem] bg-plum shadow-[0_20px_60px_rgba(62,4,53,0.14)]">
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={testimony.image}
          alt={testimony.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-plum via-plum/35 to-transparent" />

        {/* Top badge */}
        <div className="absolute left-5 top-5">
          <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
            Testimony
          </span>
        </div>

        {/* Video button */}
        {hasVideo && (
          <a
            href={testimony.videoUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Watch ${testimony.name}'s testimony`}
            className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-plum shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white"
          >
            <Play className="ml-0.5 h-4 w-4 fill-current" />
          </a>
        )}

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
          <div className="max-w-md">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              {testimony.name}
            </p>

            <h3 className="mt-2 font-heading text-2xl font-semibold leading-tight text-white sm:text-3xl">
              {testimony.title}
            </h3>

            <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/70">
              {testimony.excerpt}
            </p>

            {hasVideo ? (
              <a
                href={testimony.videoUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-gold"
              >
                Watch testimony
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            ) : (
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/45">
                Video coming soon
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
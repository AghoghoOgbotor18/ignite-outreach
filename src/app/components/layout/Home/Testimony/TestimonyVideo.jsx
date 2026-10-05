"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";

export default function TestimonyVideo({ youtubeId, thumbnail, title }) {
    const [playing, setPlaying] = useState(false);

    return (
        <div className="relative aspect-video overflow-hidden rounded-[1.75rem] border-4 border-gold bg-plum shadow-2xl shadow-plum/25">
        {playing ? (
            <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            />
        ) : (
            <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${title}`}
            className="group absolute inset-0 block h-full w-full"
            >
            <Image
                src={thumbnail}
                alt=""
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-plum/70 via-plum/20 to-plum/10" />

            {/* Play button */}
            <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                <span className="absolute inset-0 animate-ping rounded-full bg-gold/40 motion-reduce:animate-none" />
                <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gold text-plum shadow-xl transition-transform group-hover:scale-110">
                <Play className="ml-1 h-8 w-8 fill-current" aria-hidden="true" />
                </span>
            </span>

            <span className="absolute bottom-4 left-4 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">
                Featured testimony
            </span>
            </button>
        )}
        </div>
    );
}
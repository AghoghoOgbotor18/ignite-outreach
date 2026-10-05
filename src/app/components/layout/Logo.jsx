import { useId } from "react";

export default function Logo() {
    const gid = "gom-" + useId().replace(/:/g, "");

    return (
        <div className="flex items-center gap-1.5">
            <svg
                viewBox="0 0 48 48"
                fill="none"
                aria-hidden="true"
                className="h-10 w-10 shrink-0 md:h-11 md:w-11"
            >
                <defs>
                <linearGradient id={gid} x1="8" y1="4" x2="40" y2="46">
                    <stop stopColor="#F3D57A" />
                    <stop offset="1" stopColor="#B98A1E" />
                </linearGradient>
                </defs>
                {/* Arch */}
                <path
                d="M8 44V22a16 16 0 0 1 32 0v22z"
                fill="#A43593"
                fillOpacity="0.28"
                stroke={`url(#${gid})`}
                strokeWidth="2"
                strokeLinejoin="round"
                />
                {/* Cross */}
                <path
                d="M24 14v24M16 22h16"
                stroke={`url(#${gid})`}
                strokeWidth="3.5"
                strokeLinecap="round"
                />
                {/* Base line */}
                <path
                d="M4 44h40"
                stroke={`url(#${gid})`}
                strokeWidth="2"
                strokeLinecap="round"
                />
            </svg>

            <span className="leading-none">
                <span className="block font-heading text-lg font-semibold text-white md:text-xl uppercase">
                    Ignite
                </span>
                <span className="mt-1 block text-[0.6rem] uppercase tracking-[0.35em] text-gold md:text-[0.65rem]">
                    Outreach
                </span>
            </span>
        </div>
    );
}
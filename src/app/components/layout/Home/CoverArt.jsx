import { useId } from "react";

const playfair = { fontFamily: "var(--font-playfair), Georgia, serif" };
const inter = { fontFamily: "var(--font-inter), system-ui, sans-serif" };

// [x, y, radius, opacity]
const embers = [
  [160, 190, 4, 0.8],
  [420, 120, 3, 0.5],
  [610, 230, 5, 0.7],
  [880, 170, 3, 0.6],
  [720, 400, 4, 0.5],
  [540, 60, 2, 0.6],
  [930, 470, 4, 0.5],
  [110, 610, 3, 0.35],
];

const grooves = [120, 150, 180, 210, 240, 270, 300, 320];

const rays = Array.from({ length: 28 }, (_, i) => {
  const a = (i / 28) * Math.PI * 2;
  return {
    x: (300 + Math.cos(a) * 1400).toFixed(1),
    y: (330 + Math.sin(a) * 1400).toFixed(1),
  };
});

export default function CoverArt() {
    const id = "cover-" + useId().replace(/:/g, "");

    return (
        <svg
        viewBox="0 0 1000 1000"
        role="img"
        aria-label="Ignite Outreach, Our Worship: album cover artwork"
        className="h-full w-full"
        >
            <defs>
                <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#4d0a42" />
                <stop offset="0.55" stopColor="#260222" />
                <stop offset="1" stopColor="#12010f" />
                </linearGradient>
                <radialGradient id={`${id}-glow`} cx="0.3" cy="0.33" r="0.65">
                <stop offset="0" stopColor="#A43593" stopOpacity="0.6" />
                <stop offset="1" stopColor="#A43593" stopOpacity="0" />
                </radialGradient>
                <linearGradient id={`${id}-gold`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#F3D57A" />
                <stop offset="1" stopColor="#B98A1E" />
                </linearGradient>
            </defs>

            {/* Background */}
            <rect width="1000" height="1000" fill={`url(#${id}-bg)`} />
            <rect width="1000" height="1000" fill={`url(#${id}-glow)`} />

            {/* Light rays */}
            <g stroke="#F3D57A" strokeWidth="2" opacity="0.09">
                {rays.map((r, i) => (
                <line key={i} x1="300" y1="330" x2={r.x} y2={r.y} />
                ))}
            </g>

            {/* Embers */}
            <g fill="#F3D57A">
                {embers.map(([x, y, r, o], i) => (
                <circle key={i} cx={x} cy={y} r={r} opacity={o} />
                ))}
            </g>

            {/* Vinyl record (spins on hover) */}
            <g className="origin-center [transform-box:fill-box] group-hover:animate-[spin_10s_linear_infinite] motion-reduce:animate-none">
                <circle
                cx="810"
                cy="910"
                r="330"
                fill="#0c010a"
                stroke="#fff"
                strokeOpacity="0.12"
                strokeWidth="2"
                />
                {grooves.map((r) => (
                <circle
                    key={r}
                    cx="810"
                    cy="910"
                    r={r}
                    fill="none"
                    stroke="#fff"
                    strokeOpacity="0.05"
                    strokeWidth="2"
                />
                ))}
                <path
                d="M810 910 L810 580 A330 330 0 0 1 895 591 Z"
                fill="#fff"
                fillOpacity="0.07"
                />
                <circle cx="810" cy="910" r="95" fill={`url(#${id}-gold)`} />
                <circle
                cx="810"
                cy="910"
                r="72"
                fill="none"
                stroke="#3e0435"
                strokeOpacity="0.35"
                strokeWidth="2"
                />
                <circle cx="810" cy="852" r="9" fill="#3e0435" fillOpacity="0.55" />
                <circle cx="810" cy="910" r="12" fill="#12010f" />
            </g>

            {/* Title block */}
            <text
                x="80"
                y="110"
                fill="#F3D57A"
                fontSize="30"
                fontWeight="600"
                letterSpacing="10"
                style={inter}
            >
                IGNITE OUTREACH
            </text>
            <path
                d="M80 145h80"
                stroke={`url(#${id}-gold)`}
                strokeWidth="3"
                strokeLinecap="round"
            />

            <text x="80" y="360" fill="#fff" fontSize="200" fontWeight="800" style={playfair}>
                OUR
            </text>
            <text
                x="80"
                y="520"
                fill={`url(#${id}-gold)`}
                fontSize="138"
                fontWeight="800"
                style={playfair}
            >
                WORSHIP
            </text>
            <path
                d="M80 565 Q360 540 640 558"
                fill="none"
                stroke={`url(#${id}-gold)`}
                strokeWidth="8"
                strokeLinecap="round"
            />

            {/* Tagline */}
            <g fontSize="24" letterSpacing="5" style={inter}>
                <text x="80" y="800" fill="#fff" fillOpacity="0.85">
                PRAISE THAT RISES.
                </text>
                <text x="80" y="842" fill="#fff" fillOpacity="0.85">
                HEARTS THAT BURN.
                </text>
                <text x="80" y="884" fill="#F3D57A">
                FAITH THAT IGNITES.
                </text>
            </g>
        </svg>
    );
}
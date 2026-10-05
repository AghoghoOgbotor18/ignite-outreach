export default function LocationWatermark({ light = false }) {
    return (
        <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-8 bottom-[-20px] select-none font-heading text-[7rem] font-bold leading-none tracking-[-0.08em] ${
            light ? "text-plum/[0.045]" : "text-white/[0.045]"
        }`}
        >
            IGNITE
        </div>
    );
}
import { Gift, MapPin } from "lucide-react";
import { givingIcons } from "./givingIcons";

export default function GivingSummary({ option, location, className = "" }) {
  const Icon = givingIcons[option.id] ?? Gift;

  return (
    <div
      aria-live="polite"
      className={`relative overflow-hidden rounded-[2rem] bg-plum p-7 text-white shadow-xl shadow-plum/20 ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-orchid/30 blur-2xl"
      />

      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          Your giving
        </p>

        <div className="mt-5 flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold text-plum">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-2xl font-bold">{option.label}</h3>
            <p className="mt-0.5 text-sm leading-snug text-white/70">
              {option.description}
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2.5 border-t border-white/15 pt-5 text-sm text-white/80">
          <MapPin className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
          {location || "No specific location"}
        </div>
      </div>
    </div>
  );
}
import { ChevronDown } from "lucide-react";

export default function LocationSelect({ locations, value, onChange }) {
  return (
    <div className="relative max-w-xl">
      <label htmlFor="giving-location" className="sr-only">
        Choose a location
      </label>
      <select
        id="giving-location"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full appearance-none rounded-2xl border border-plum/10 bg-cream px-5 py-4 pr-12 text-sm font-medium text-plum outline-none transition focus:border-orchid focus:ring-2 focus:ring-orchid/20"
      >
        <option value="">No specific location</option>
        {locations.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
        aria-hidden="true"
      />
    </div>
  );
}
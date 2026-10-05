import { Check, Gift } from "lucide-react";
import { givingIcons } from "./givingIcons";

export default function GivingTypeSelector({ options, value, onChange }) {
  return (
    <fieldset>
      <legend className="sr-only">Choose what you are giving to</legend>
      <div className="grid gap-3 sm:grid-cols-3">
        {options.map((option) => {
          const Icon = givingIcons[option.id] ?? Gift;
          const active = value === option.id;

          return (
            <label
              key={option.id}
              className={`relative cursor-pointer rounded-2xl border p-4 transition-all duration-300 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-orchid has-[:focus-visible]:ring-offset-2 ${
                active
                  ? "border-plum bg-plum text-white shadow-lg shadow-plum/20"
                  : "border-plum/10 bg-cream text-plum hover:border-orchid/40 hover:bg-lilac"
              }`}
            >
              <input
                type="radio"
                name="giving-type"
                value={option.id}
                checked={active}
                onChange={() => onChange(option.id)}
                className="sr-only"
              />

              <div className="flex items-center justify-between">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                    active ? "bg-gold text-plum" : "bg-white text-orchid"
                  }`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                {active && (
                  <Check className="h-5 w-5 text-gold" aria-hidden="true" />
                )}
              </div>

              <span className="mt-4 block font-semibold">{option.label}</span>
              <span
                className={`mt-1 block text-xs leading-5 ${
                  active ? "text-white/70" : "text-muted"
                }`}
              >
                {option.description}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
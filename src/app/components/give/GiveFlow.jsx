"use client";

import { useState } from "react";
import { givingOptions, locations, accounts } from "../../data/giving";
import StepCard from "./StepCard";
import GivingTypeSelector from "./GivingTypeSelector";
import LocationSelect from "./LocationSelect";
import GivingSummary from "./GivingSummary";
import BankAccounts from "./BankAccounts";
import TrustNote from "./TrustNote";

export default function GiveFlow({ initialType = "offering" }) {
  const [givingType, setGivingType] = useState(initialType);
  const [location, setLocation] = useState("");

  const selected = givingOptions.find((o) => o.id === givingType);
  const narration = location ? `${selected.label} - ${location}` : selected.label;

  return (
    <section className="bg-cream px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_22rem] lg:items-start lg:gap-10">
        <div className="space-y-6">
          <StepCard number={1} title="What are you giving to?">
            <GivingTypeSelector
              options={givingOptions}
              value={givingType}
              onChange={setGivingType}
            />
          </StepCard>

          <StepCard
            number={2}
            title="Which location?"
            hint="Optional. Choose the location you would like your gift associated with."
          >
            <LocationSelect
              locations={locations}
              value={location}
              onChange={setLocation}
            />
          </StepCard>

          {/* Summary on phone and tablet; the desktop one is in the sidebar */}
          <GivingSummary
            option={selected}
            location={location}
            className="lg:hidden"
          />

          <StepCard
            number={3}
            title="Make your transfer"
            hint="Use any of the accounts below."
          >
            <BankAccounts accounts={accounts} narration={narration} />
            <TrustNote />
          </StepCard>
        </div>

        <aside
          aria-label="Giving summary"
          className="hidden lg:sticky lg:top-28 lg:block"
        >
          <GivingSummary option={selected} location={location} />
        </aside>
      </div>
    </section>
  );
}
import { Landmark } from "lucide-react";
import CopyButton from "./CopyButton";

export default function AccountCard({ bank, accountName, accountNumber }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-plum/10 bg-cream p-4 transition duration-300 hover:border-orchid/30 hover:shadow-lg hover:shadow-plum/10 sm:flex-row sm:items-center sm:justify-between sm:p-5">
      <div className="flex items-center gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-plum text-gold">
          <Landmark className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <p className="font-semibold text-plum">{bank}</p>
          <p className="text-sm text-muted">{accountName}</p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 rounded-xl bg-white px-4 py-3 sm:min-w-[15rem]">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-muted">
            Account number
          </p>
          <p className="font-heading text-xl font-bold tracking-wide text-plum">
            {accountNumber}
          </p>
        </div>
        <CopyButton value={accountNumber} label={`Copy ${bank} account number`} />
      </div>
    </div>
  );
}
import { ShieldCheck } from "lucide-react";

export default function TrustNote() {
  return (
    <div className="mt-6 flex items-start gap-4 rounded-2xl border border-gold/30 bg-lilac/30 p-5">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-orchid">
        <ShieldCheck className="h-5 w-5" aria-hidden="true" />
      </span>
      <div>
        <h3 className="font-semibold text-plum">Giving with confidence</h3>
        <p className="mt-1 text-sm leading-6 text-muted">
          Please confirm the account name and bank details before completing
          your transfer. If you need assistance, contact the church office.
        </p>
      </div>
    </div>
  );
}
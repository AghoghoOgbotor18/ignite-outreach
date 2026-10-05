import AccountCard from "./AccountCard";
import CopyButton from "./CopyButton";

export default function BankAccounts({ accounts, narration }) {
  return (
    <div>
      {/* Narration */}
      <div className="rounded-2xl border border-gold/40 bg-lilac/40 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orchid">
          Use this as your transfer narration
        </p>
        <div className="mt-2 flex items-center justify-between gap-3">
          <p className="font-heading text-xl font-bold text-plum sm:text-2xl">
            {narration}
          </p>
          <CopyButton value={narration} label="Copy transfer narration" />
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Add this to your transfer so your gift can be matched to what you
          chose.
        </p>
      </div>

      {/* Accounts */}
      <ul className="mt-6 space-y-3">
        {accounts.map((account) => (
          <li key={`${account.bank}-${account.accountNumber}`}>
            <AccountCard {...account} />
          </li>
        ))}
      </ul>
    </div>
  );
}
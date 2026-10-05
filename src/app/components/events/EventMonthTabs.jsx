"use client";

export default function EventMonthTabs({
  groups,
  activeMonth,
  onChange,
}) {
  return (
    <div className="mb-12 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex min-w-max items-center gap-2 rounded-full border border-plum/10 bg-white p-1.5 shadow-sm">
        {groups.map((group) => {
          const isActive = group.key === activeMonth;

          return (
            <button
              key={group.key}
              type="button"
              onClick={() => onChange(group.key)}
              className={`
                rounded-full
                px-5
                py-2.5
                text-sm
                font-semibold
                transition-all
                duration-300
                ${
                  isActive
                    ? "bg-plum text-white shadow-md shadow-plum/15"
                    : "text-plum/70 hover:bg-lilac hover:text-plum"
                }
              `}
            >
              {group.month}
              <span
                className={`ml-2 text-xs ${
                  isActive
                    ? "text-gold"
                    : "text-muted"
                }`}
              >
                {group.events.length}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
import { Heart, Users, BookOpen } from "lucide-react";

const items = [
  {
    icon: Heart,
    title: "Worship",
    description:
      "Come into God's presence through worship and create space to encounter Him.",
  },
  {
    icon: BookOpen,
    title: "The Word",
    description:
      "Receive practical teaching and biblical truth that helps you grow in faith and purpose.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Stay connected to a family of people growing together in faith, purpose and love.",
  },
];

export default function OnlineWelcome() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Text */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-plum">
                You Are Welcome
              </span>
            </div>

            <h2 className="mt-5 font-heading text-4xl font-semibold leading-tight text-plum sm:text-5xl md:text-6xl">
              You don't have to be{" "}
              <span className="text-orchid">in the room.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
              Whether you are at home, travelling, or joining us for the
              first time, our online experience gives you a way to worship,
              learn and stay connected with the Ignite family.
            </p>
          </div>

          {/* Features */}
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[1.5rem] border border-plum/10 bg-cream p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orchid/20 hover:shadow-[0_20px_50px_rgba(62,4,53,0.08)] sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-plum text-gold transition-colors duration-300 group-hover:bg-orchid">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="font-heading text-xl font-semibold text-plum">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
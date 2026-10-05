import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/online", label: "Online Service" },
  { href: "/who-we-are", label: "Who we are" },
  { href: "/locations", label: "Our Locations" },
  { href: "/sermons", label: "Sermons" },
  { href: "/events", label: "Events" },
  { href: "/testimony", label: "Testimonies" },
];

// TODO: replace with the church's real service times
const serviceTimes = [
  { day: "Sunday", time: "8:00 AM & 10:30 AM" },
  { day: "Wednesday", time: "6:00 PM" },
  { day: "Friday", time: "6:00 PM" },
];

// TODO: replace with real contact details
const contact = {
  address: "Your church address, City, State",
  phone: "+234 000 000 0000",
  email: "info@godsownministry.org",
};

// TODO: replace "#" with real profile links (remove any the church doesn't use)
const socials = [
  {
    label: "YouTube",
    href: "#",
    icon: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="4" />
        <path d="M10 9l5 3-5 3z" fill="currentColor" />
      </>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </>
    ),
  },
];

const headingClass =
  "mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-gold";

export default function Footer() {
    return (
        <footer className="relative bg-plum text-white/70">
        {/* Gold accent line */}
            <div className="h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-16 lg:px-8">
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-10">
                {/* Brand */}
                <div>
                    <Link href="/" aria-label="God's Own Ministry, home">
                    <Logo />
                    </Link>
                    <p className="mt-5 max-w-xs text-sm leading-relaxed">
                    A place to worship, grow and belong. Wherever you are, you are
                    welcome here.
                    </p>
                    <div className="mt-6 flex gap-3">
                    {socials.map(({ label, href, icon }) => (
                        <a
                        key={label}
                        href={href}
                        aria-label={label}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-orchid hover:bg-orchid"
                        >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                            aria-hidden="true"
                        >
                            {icon}
                        </svg>
                        </a>
                    ))}
                    </div>
                </div>

                {/* Quick links */}
                <nav aria-label="Footer">
                    <h3 className={headingClass}>Explore</h3>
                    <ul className="space-y-1">
                    {quickLinks.map(({ href, label }) => (
                        <li key={href}>
                        <Link
                            href={href}
                            className="inline-block py-1.5 text-sm transition-colors hover:text-gold"
                        >
                            {label}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </nav>

                {/* Service times */}
                <div>
                    <h3 className={headingClass}>Service Times</h3>
                    <ul className="space-y-4">
                    {serviceTimes.map(({ day, time }) => (
                        <li key={day} className="flex items-start gap-3 text-sm">
                        <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                        <span>
                            <span className="block font-medium text-white">{day}</span>
                            {time}
                        </span>
                        </li>
                    ))}
                    </ul>
                </div>

                {/* Contact + Give */}
                    <div>
                        <h3 className={headingClass}>Get in Touch</h3>
                        <ul className="space-y-4 text-sm">
                        <li className="flex items-start gap-3">
                            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                            <span>{contact.address}</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                            <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-gold">
                            {contact.phone}
                            </a>
                        </li>
                        <li className="flex items-start gap-3">
                            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                            <a href={`mailto:${contact.email}`} className="break-all transition-colors hover:text-gold">
                            {contact.email}
                            </a>
                        </li>
                        </ul>

                        <Link
                        href="/give"
                        className="mt-7 inline-block rounded-full bg-gold px-7 py-3 text-sm font-semibold text-plum transition hover:bg-[#e2b84d]"
                        >
                        Give Online
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs sm:px-6 md:flex-row lg:px-8">
                    <p>&copy; {new Date().getFullYear()} God&apos;s Own Ministry. All rights reserved.</p>
                    <p className="text-white/50">Built with love and faith.</p>
                </div>
            </div>
        </footer>
    );
}
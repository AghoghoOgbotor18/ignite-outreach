"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PlayCircle, Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/online", label: "Online", icon: PlayCircle },
  { href: "/about", label: "Who we are" },
  { href: "/location", label: "Our Locations" },
  //{ href: "/sermons", label: "Sermons" },
  //{ href: "/events", label: "Events" },
  { href: "/give", label: "Give" },
];

const cta = { href: "/testimony", label: "Testimony" };

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const isHome = pathname === "/";
  const solid = scrolled || open || !isHome;

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Glass effect after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu: lock scroll, close on Escape or when resized to desktop
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;

    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1280 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          solid
            ? "border-white/10 bg-plum/75 shadow-lg shadow-black/10 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:h-20 lg:px-8">
          <Link href="/" aria-label="God's Own Ministry, home" onClick={() => setOpen(false)}>
            <Logo />
          </Link>

          {/* Desktop links */}
          <nav aria-label="Main" className="hidden items-center gap-1 xl:flex">
            {links.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                aria-current={isActive(href) ? "page" : undefined}
                className={`relative flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-gold after:transition-transform hover:text-white hover:after:scale-x-100 ${
                  isActive(href)
                    ? "text-gold after:scale-x-0"
                    : "text-white/80 after:scale-x-0"
                }`}
              >
                {Icon && <Icon className="h-4 w-4 text-gold" aria-hidden="true" />}
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href={cta.href}
            className="hidden rounded-full bg-orchid px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orchid/25 transition hover:bg-orchid-dark xl:inline-block"
          >
            {cta.label}
          </Link>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 items-center justify-center rounded-full text-white transition hover:bg-white/10 xl:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile / tablet menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col overflow-y-auto bg-plum/95 px-6 pb-8 pt-24 backdrop-blur-xl transition-all duration-300 xl:hidden ${
          open
            ? "visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="mx-auto w-full max-w-md">
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              aria-current={isActive(href) ? "page" : undefined}
              className={`flex min-h-14 items-center gap-3 border-b border-white/10 font-heading text-2xl transition-colors ${
                isActive(href) ? "text-gold" : "text-white hover:text-gold"
              }`}
            >
              {Icon && <Icon className="h-6 w-6 text-gold" aria-hidden="true" />}
              {label}
            </Link>
          ))}

          <Link
            href={cta.href}
            onClick={() => setOpen(false)}
            className="mt-8 block rounded-full bg-orchid py-4 text-center text-base font-semibold text-white transition hover:bg-orchid-dark"
          >
            {cta.label}
          </Link>
        </nav>
      </div>
    </>
  );
}
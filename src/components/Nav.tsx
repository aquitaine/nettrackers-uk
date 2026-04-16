"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/services", label: "SEO" },
  { href: "/services#local-seo", label: "Local SEO" },
  { href: "/services/web-development", label: "Web Design" },
  { href: "/services/ppc", label: "PPC" },
  { href: "/work", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 30);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open || !menuRef.current) return;
    const focusable = menuRef.current.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();

    function trap(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    }
    document.addEventListener("keydown", trap);
    return () => document.removeEventListener("keydown", trap);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="NetTrackers — home">
          <Image src="/logo.svg" alt="NetTrackers" width={140} height={32} priority />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href + l.label}>
              <Link
                href={l.href}
                className="text-[13px] font-medium text-gray-600 hover:text-brand-teal transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="rounded-lg bg-brand-teal px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-teal-700 transition-colors shadow-sm shadow-teal-900/10"
            >
              Request a Proposal
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          ref={buttonRef}
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-6 bg-gray-700 transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-700 transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-700 transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-all duration-200 ease-in-out bg-white ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <ul className="px-6 pb-5 flex flex-col gap-4 border-t border-gray-100 pt-4">
          {links.map((l) => (
            <li key={l.href + l.label}>
              <Link
                href={l.href}
                className="block text-sm font-medium text-gray-600 hover:text-brand-teal transition-colors"
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-brand-teal px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-700 transition-colors"
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
            >
              Request a Proposal
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

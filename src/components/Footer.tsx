import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-brand-navy text-gray-300">
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <p className="text-lg font-bold text-white">NetTrackers</p>
          <p className="mt-1 text-sm">SEO &amp; Programming Agency · London, UK</p>
        </div>
        <nav className="flex gap-8 text-sm">
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </nav>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} NetTrackers Ltd. All rights reserved.
      </div>
    </footer>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-6 py-32 text-center">
      <h1 className="text-6xl font-extrabold text-brand-navy">404</h1>
      <p className="mt-4 text-gray-600">This page doesn&apos;t exist.</p>
      <Link href="/" className="mt-8 inline-block rounded-lg bg-brand-teal px-6 py-3 font-semibold text-white hover:bg-teal-600 transition-colors">
        Go home
      </Link>
    </div>
  );
}

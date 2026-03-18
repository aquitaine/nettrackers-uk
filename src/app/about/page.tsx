import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bess Damm is a London SEO and programming agency. Meet the team behind the strategy and code.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-extrabold text-brand-navy mb-6">About Bess Damm</h1>
      <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-5">
        <p>
          Bess Damm is a London-based SEO and programming agency founded on a single belief:
          the best results come from combining deep technical knowledge with genuine craft.
        </p>
        <p>
          We work with growth-stage companies and established brands who want more from their
          digital presence — not just more traffic, but the right traffic that converts. Our
          work sits at the intersection of search strategy and software engineering, which means
          we can spot problems that generalist agencies miss and build the tools to fix them.
        </p>
        <p>
          Based in London, we operate across the UK and internationally, with a small team that
          stays close to every project.
        </p>
      </div>
    </div>
  );
}

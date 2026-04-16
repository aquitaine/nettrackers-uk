import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "NetTrackers is a London SEO and programming agency. Meet the team behind the strategy and code.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h1 className="text-4xl font-extrabold text-brand-navy mb-6">About NetTrackers</h1>
          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-5">
            <p>
              NetTrackers is a London-based SEO and programming agency founded on a single belief:
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
        <div className="rounded-2xl overflow-hidden shadow-lg bg-brand-light">
          <Image
            src="/images/about-team.webp"
            alt="The NetTrackers team collaborating"
            width={600}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}

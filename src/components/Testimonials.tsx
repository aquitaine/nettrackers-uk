interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

interface Props {
  testimonials: Testimonial[];
  heading?: string;
  variant?: "grid" | "single";
}

export function Testimonials({
  testimonials,
  heading = "What our clients say",
  variant = "grid",
}: Props) {
  if (variant === "single" && testimonials.length > 0) {
    const t = testimonials[0];
    return (
      <section className="bg-brand-navy py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <svg
            className="mx-auto mb-6 h-8 w-8 text-brand-teal/60"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-xl md:text-2xl font-medium text-white leading-relaxed">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <div className="mt-6">
            <p className="text-brand-teal font-semibold">{t.author}</p>
            <p className="text-gray-400 text-sm">{t.role}, {t.company}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-brand-light">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-brand-navy text-center mb-12">{heading}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col"
            >
              <svg
                className="h-6 w-6 text-brand-teal/40 mb-4 shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-gray-700 leading-relaxed flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-teal font-bold text-sm shrink-0">
                  {t.author[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-navy">{t.author}</p>
                  <p className="text-xs text-gray-600">{t.role}, {t.company}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

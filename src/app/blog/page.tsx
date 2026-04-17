import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "SEO and web development insights from NetTrackers — practical guides on technical SEO, Core Web Vitals, and building search-optimised websites.",
};

const POSTS_PER_PAGE = 10;

export default function BlogIndexPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = Math.max(1, parseInt(searchParams.page ?? "1", 10));
  const allPosts = getAllPosts();
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const posts = allPosts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  return (
    <>
      <section className="bg-brand-navy text-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-brand-teal font-semibold text-sm uppercase tracking-widest mb-3">
            Insights
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold">
            SEO &amp; Web Dev Resources
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Practical guides and opinions on technical SEO, Core Web Vitals, and
            building websites that rank.
          </p>
        </div>
      </section>

      <section className="py-16 bg-brand-light">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col"
              >
                <time
                  dateTime={post.datePublished}
                  className="text-xs text-gray-600 font-medium uppercase tracking-wide"
                >
                  {new Date(post.datePublished).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <h2 className="mt-2 text-lg font-bold text-brand-navy leading-snug flex-1">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-brand-teal transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 text-sm font-semibold text-brand-teal hover:underline"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>

          {totalPages > 1 && (
            <nav
              className="mt-12 flex justify-center gap-2"
              aria-label="Pagination"
            >
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <Link
                  key={p}
                  href={`/blog?page=${p}`}
                  aria-current={p === page ? "page" : undefined}
                  className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                    p === page
                      ? "bg-brand-teal text-white"
                      : "bg-white border border-gray-200 text-gray-600 hover:border-brand-teal hover:text-brand-teal"
                  }`}
                >
                  {p}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </section>
    </>
  );
}

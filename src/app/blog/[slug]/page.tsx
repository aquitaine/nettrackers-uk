import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/blog";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  let post;
  try {
    post = getPost(params.slug);
  } catch {
    return {};
  }
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.datePublished,
      authors: [post.author],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  let post;
  try {
    post = getPost(params.slug);
  } catch {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://bessdamm.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Bess Damm",
      url: "https://bessdamm.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd items={[{ name: "Insights", href: "/blog" }, { name: post.title, href: `/blog/${post.slug}` }]} />

      <article className="mx-auto max-w-3xl px-6 py-16">
        <header className="mb-10">
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
          <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-brand-navy leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-gray-600">{post.description}</p>
          <p className="mt-2 text-sm text-gray-600">By {post.author}</p>
        </header>

        <div className="prose prose-gray max-w-none prose-headings:text-brand-navy prose-a:text-brand-teal prose-a:no-underline hover:prose-a:underline prose-code:bg-gray-100 prose-code:rounded prose-code:px-1">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </>
  );
}

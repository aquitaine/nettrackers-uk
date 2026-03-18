import fs from "fs";
import path from "path";
import matter from "gray-matter";

const WORK_DIR = path.join(process.cwd(), "content/work");

export interface Metric {
  label: string;
  value: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface CaseStudyMeta {
  slug: string;
  title: string;
  description: string;
  client: string;
  industry: string;
  services: string[];
  metrics: Metric[];
  testimonial: Testimonial;
  datePublished: string;
}

export interface CaseStudy extends CaseStudyMeta {
  content: string;
}

export function getAllCaseStudies(): CaseStudyMeta[] {
  const files = fs.readdirSync(WORK_DIR).filter((f) => f.endsWith(".mdx"));
  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(WORK_DIR, filename), "utf8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title as string,
        description: data.description as string,
        client: data.client as string,
        industry: data.industry as string,
        services: data.services as string[],
        metrics: data.metrics as Metric[],
        testimonial: data.testimonial as Testimonial,
        datePublished: data.datePublished as string,
      };
    })
    .sort(
      (a, b) =>
        new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
    );
}

export function getCaseStudy(slug: string): CaseStudy {
  const raw = fs.readFileSync(path.join(WORK_DIR, `${slug}.mdx`), "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    client: data.client as string,
    industry: data.industry as string,
    services: data.services as string[],
    metrics: data.metrics as Metric[],
    testimonial: data.testimonial as Testimonial,
    datePublished: data.datePublished as string,
    content,
  };
}

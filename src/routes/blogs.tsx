import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Blogs } from "@/components/sections/Blogs";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Blogs — Sunny Sprouts Pediatric" },
      { name: "description", content: "Health tips, parenting guides and gentle wisdom from our pediatric team — written for real, busy parents." },
      { property: "og:title", content: "Pediatric Tips & Parenting Guides" },
      { property: "og:description", content: "Practical, compassionate articles by our pediatric team." },
    ],
  }),
  component: BlogsPage,
});

function BlogsPage() {
  return (
    <>
      <PageHeader eyebrow="Journal" title="Tips, tales and tiny wisdoms." subtitle="Practical advice from our pediatric team — written the way we'd explain things over a cup of tea." />
      <Blogs />
    </>
  );
}
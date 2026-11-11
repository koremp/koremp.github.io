import type { CollectionEntry } from "astro:content";
import { getSortedPosts } from "./getSortedPosts";
import { getPostSlug } from "./getPostPaths";

export function getPostCategories(posts: CollectionEntry<"posts">[]) {
  const categories = new Map<
    string,
    { slug: string; name: string; posts: CollectionEntry<"posts">[] }
  >();
  const uncategorized: CollectionEntry<"posts">[] = [];

  for (const post of getSortedPosts(posts)) {
    const segments = getPostSlug(post.id, post.filePath)
      .split("/")
      .filter(Boolean);
    if (segments.length < 2) {
      uncategorized.push(post);
      continue;
    }

    const slug = segments[0];
    const category = categories.get(slug) ?? {
      slug,
      name: slug,
      posts: [],
    };
    category.posts.push(post);
    categories.set(slug, category);
  }

  return {
    categories: [...categories.values()].sort((a, b) =>
      a.name.localeCompare(b.name)
    ),
    uncategorized,
  };
}

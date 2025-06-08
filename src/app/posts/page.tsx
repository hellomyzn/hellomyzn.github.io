import React from "react";
import Link from "next/link";

interface Post { slug: string; title: string; date: string; }

const posts: Post[] = [
  {
    "slug": "second-post",
    "title": "Second Post",
    "date": "2024-06-20T00:00:00.000Z"
  },
  {
    "slug": "first-post",
    "title": "First Post",
    "date": "2024-06-15T00:00:00.000Z"
  }
];

export default function PostsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl mb-4">Posts</h1>
      <ul className="space-y-2">
        {posts.map(p => (
          <li key={p.slug}>
            <Link href={"/posts/articles/" + p.slug}>{p.title}</Link>
            <span className="ml-2 text-sm text-gray-500">{p.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

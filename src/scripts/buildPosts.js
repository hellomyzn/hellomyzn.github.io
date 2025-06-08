const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const { marked } = require("marked");

const markdownDir = path.join(__dirname, "..", "public", "markdowns");
const articlesDir = path.join(__dirname, "..", "app", "posts", "articles");
const postsPagePath = path.join(__dirname, "..", "app", "posts", "page.tsx");

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function cleanDir(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true });
  }
  ensureDir(dir);
}

function build() {
  cleanDir(articlesDir);
  ensureDir(path.dirname(postsPagePath));

  const posts = [];
  const files = fs.readdirSync(markdownDir).filter((f) => f.endsWith(".md"));
  for (const file of files) {
    const slug = file.replace(/\.md$/, "");
    const filePath = path.join(markdownDir, file);
    let { data, content } = matter(fs.readFileSync(filePath, "utf8"));
    // Replace relative image paths (../images/...) with absolute ones (/images/...)
    content = content.replace(/\(\.\.\/images\//g, "(/images/");
    let html = marked.parse(content);
    html = html.replace(/<a /g, '<a class="highlight" ');

    const title = data.title || slug;
    const date = data.date || "";
    const formattedDate = date
      ? new Date(date).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
      : "";
    const dateMarkup = formattedDate
      ? `<p className="pt-6 italic"><strong>${formattedDate}</strong></p>`
      : "";

    const postDir = path.join(articlesDir, slug);
    ensureDir(postDir);
    const pageContent = `import React from "react";

export const metadata = { title: ${JSON.stringify(
      title
    )}, date: ${JSON.stringify(date)} };

export default function Page() {
  return (
    <article className="text-center mx-auto pt-36">
      <h1 className="text-[3.5rem] text-sky-900 inline-block">${title}</h1>
      ${dateMarkup}
      <div className="blog-content prose" dangerouslySetInnerHTML={{ __html: ${JSON.stringify(
        html
      )} }} />
    </article>
  );
}
`;
    fs.writeFileSync(path.join(postDir, "page.tsx"), pageContent);
    posts.push({ slug, title, date });
  }

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  const postsPage = `import React from "react";
import Link from "next/link";

interface Post { slug: string; title: string; date: string; }

const posts: Post[] = ${JSON.stringify(posts, null, 2)};

export default function PostsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl mb-4">Posts</h1>
      <ul className="space-y-2">
        {posts.map(p => (
          <li key={p.slug}>
            <Link href={"/posts/articles/" + p.slug}>{p.title}</Link>
            <span className="ml-2 text-sm text-gray-500">
              {new Date(p.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
`;
  fs.writeFileSync(postsPagePath, postsPage);
}

build();

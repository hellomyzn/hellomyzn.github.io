import React from "react";

export const metadata = { title: "Second Post", date: "2024-06-20T00:00:00.000Z" };

export default function Page() {
  return (
    <article className="prose mx-auto" dangerouslySetInnerHTML={{ __html: "<h1>Another Day</h1>\n<p>Here&#39;s another post with more content.</p>\n" }} />
  );
}

import React from "react";

export const metadata = { title: "Second Post", date: "2024-06-20T00:00:00.000Z" };

export default function Page() {
  return (
    <article className="prose text-center mx-auto">
      <h1 className="pt-20 text-[3.5rem] text-sky-900">Second Post</h1>
      <p><strong>20 June 2024</strong></p>
      <div dangerouslySetInnerHTML={{ __html: "<h1>Another Day</h1>\n<p>Here&#39;s another post with more content.</p>\n" }} />
    </article>
  );
}

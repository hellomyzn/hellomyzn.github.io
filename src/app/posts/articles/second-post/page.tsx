import React from "react";

export const metadata = { title: "Second Post", date: "2024-06-20T00:00:00.000Z" };

export default function Page() {
  return (
    <article className="text-center mx-auto pt-36">
      <h1 className="text-[3.5rem] text-sky-900 inline-block">Second Post</h1>
      <p className="pt-6 italic"><strong>20 June 2024</strong></p>
      <div className="blog-content prose" dangerouslySetInnerHTML={{ __html: "<h1>Another Day</h1>\n<p>Here&#39;s another post with more content.</p>\n" }} />
    </article>
  );
}

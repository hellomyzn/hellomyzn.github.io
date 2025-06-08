import React from "react";

export const metadata = { title: "First Post", date: "2024-06-15T00:00:00.000Z" };

export default function Page() {
  return (
    <article className="prose text-center mx-auto">
      <h1 className="pt-20 text-[3.5rem] text-sky-900">First Post</h1>
      <p><strong>15 June 2024</strong></p>
      <div dangerouslySetInnerHTML={{ __html: "<h1>My First Post</h1>\n<p>This is the <strong>first</strong> post in my static blog.\n<img src=\"/images/sample.png\" alt=\"hogea\"></p>\n" }} />
    </article>
  );
}

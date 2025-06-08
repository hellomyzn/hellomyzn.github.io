import React from "react";

export const metadata = { title: "First Post", date: "2024-06-15T00:00:00.000Z" };

export default function Page() {
  return (
    <article className="text-center mx-auto pt-20">
      <h1 className="text-[3.5rem] bg-sky-900 text-white inline-block px-8">First Post</h1>
      <p className="my-6 sm:mt-10 sm:mb-4"><strong>15 June 2024</strong></p>
      <div className="blog-content prose" dangerouslySetInnerHTML={{ __html: "<h1>My First Post</h1>\n<p>This is the <strong>first</strong> post in my static blog.\n<img src=\"/images/sample.png\" alt=\"hogea\"></p>\n" }} />
    </article>
  );
}

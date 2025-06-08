import React from "react";

export const metadata = { title: "First Post", date: "2024-06-15T00:00:00.000Z" };

export default function Page() {
  return (
    <article className="text-center mx-auto pt-36">
      <h1 className="text-[3.5rem] text-sky-900 inline-block">First Post</h1>
      <p className="pt-6 italic"><strong>15 June 2024</strong></p>
      <div className="blog-content prose" dangerouslySetInnerHTML={{ __html: "<p>This is the <strong>first</strong> post in my static blog.</p>\n<h3>My First Post</h3>\n<p>This is the <strong>first</strong> post in my static blog.</p>\n<p><img src=\"/images/sample.png\" alt=\"hogea\">\n<br>\n<img class=\"sm:w-2/3 m-auto\" src=\"/images/sample2.png\" alt=\"hogea\">\n<br>\n<img class=\"sm:w-2/3 m-auto\" src=\"/images/sample3.png\" alt=\"hogea\">\n<br>\n<a class=\"highlight\" href=\"https://youtube.com\">youtube</a></p>\n<h2>h2</h2>\n<h3>h3</h3>\n<h4>h4</h4>\n<h5>h5</h5>\n" }} />
    </article>
  );
}

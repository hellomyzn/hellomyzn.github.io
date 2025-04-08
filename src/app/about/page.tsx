import React from "react";
import SocialLinks from "./SocialLinks";

const AboutPage = () => {
  return (
    <div className="flex sm:h-screen flex-col-reverse sm:flex-row">
      <div className="sm:flex-1 border-t sm:border-t-0">
        <div className="grid w-full h-full grid-cols-2 grid-rows-[270px_270px] sm:grid-rows-2">
          <div className="border-r overflow-hidden flex items-end">
            <img
              src="/images/enjoy.jpg"
              alt="hero image"
              className="w-full object-cover"
              width="700"
              height="700"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="sm:border-r overflow-hidden flex items-center justify-center">
            <h3 className="sm:text-2xl w-9/12 uppercase"></h3>
          </div>
          <div className="border-r border-t overflow-hidden flex items-center px-8">
            <h3 className="sm:text-2xl"></h3>
          </div>
          <div className="sm:border-r border-t overflow-hidden flex">
            <img
              src="/images/me2.jpg"
              alt="hero image"
              className="w-full object-cover"
              width="500"
              height="700"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
      <div className="sm:flex-1 static sm:relative">
        <div className="py-20 px-10 sm:p-32">
          <h4 className="text-3xl highlight w-fit font-jp mb-8 py-1">よ。</h4>
          <p>Hi. Thanks for stopping by.</p>
          <p>I'm Eiji, a Japanese living in Tokyo.</p>
          <p>I write code for a living.</p>
          <p>I love traveling.</p>
          <p>I have short legs and enlarged pores.</p>
          <p>I live quite a low-key life.</p>
          <p>
            I'm usually not active when it comes to online conversations because
            I want to save the excitement till I meet that person in real life.
            Sometimes it turns out well, but most of the time people see me as a
            boring person :)
          </p>
          <br />
          <p className="text-sm">
            2025. Made with{" "}
            <a href="https://nextjs.org/" target="_blank" className="highlight">
              Next.js
            </a>
            .
          </p>
          <div className="flex gap-2 mt-8">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

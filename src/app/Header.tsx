"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed bg-main top-0 z-50 left-0 sm:left-auto sm:right-0 border-b border-r sm:border-l sm:border-r-0">
      <nav className="flex">
        {/* Home */}
        <div className="p-3 border-r">
          <Link
            href="/"
            className={`px-2 py-1 w-20 text-center ${
              pathname === "/" ? "highlight" : ""
            }`}
          >
            Home
          </Link>
        </div>
        {/* Posts */}
        <div className="p-3 border-r">
          <Link
            href="/posts"
            className={`px-2 py-1 w-20 text-center ${
              pathname === "/posts" ? "highlight" : ""
            }`}
          >
            Posts
          </Link>
        </div>
        {/* About */}
        <div className="p-3">
          <Link
            href="/about"
            className={`px-2 py-1 w-20 text-center ${
              pathname === "/about" ? "highlight" : ""
            }`}
          >
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}

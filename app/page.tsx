"use client";

import Link from "next/link";

export default function Home() {
  // TODO: Learn how to use react useState

  return (
    <div>
      <Link
        href="/about"
        className="text-cyan-300 hover:text-blue-800 hover:underline"
      >
        about us
      </Link>
    </div>
  );
}

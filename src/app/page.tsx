"use client";

import Header from "@/components/layout/Header";
import About from "@/components/sections/About";

export default function HomePage() {
  return (
    <main className="flex flex-col space-y-10 py-10">
      <Header />

      <About />
    </main>
  );
}

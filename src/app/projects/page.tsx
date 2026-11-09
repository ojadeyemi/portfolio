"use client";

import FullProjects from "@/components/sections/FullProjects";

export default function ProjectsPage() {
  return (
    <main className="flex flex-col space-y-10 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>

      <FullProjects />
    </main>
  );
}

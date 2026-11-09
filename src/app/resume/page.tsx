"use client";

import { DownloadIcon, EyeOpenIcon } from "@radix-ui/react-icons";

import Certification from "@/components/sections/Certification";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Work from "@/components/sections/Work";
import { buttonVariants } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { cn, withBase } from "@/lib/utils";

export default function ResumePage() {
  return (
    <main className="flex flex-col space-y-10 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold tracking-tight">Resume</h1>
        <div className="flex flex-wrap gap-2">
          <a
            href={withBase(DATA.resumeUrl)}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants(), "gap-2")}
          >
            <EyeOpenIcon />
            View resume
          </a>
          <a
            href={withBase(DATA.resumeUrl)}
            download="OJ_Adeyemi_Resume.pdf"
            className={cn(buttonVariants({ variant: "outline" }), "gap-2")}
          >
            <DownloadIcon />
            Download PDF
          </a>
        </div>
      </div>

      <Work />

      <Education />

      <Certification />

      <Skills />
    </main>
  );
}

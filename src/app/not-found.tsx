"use client";

import Link from "next/link";
import React from "react";

import FuzzyText from "@/components/FuzzyText";

export default function NotFound() {
  const enableHover = true;
  const hoverIntensity = 0.5;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="mb-8">
        <FuzzyText
          baseIntensity={0.2}
          hoverIntensity={hoverIntensity}
          enableHover={enableHover}
          fontSize="clamp(6rem, 20vw, 15rem)"
          fontWeight={900}
        >
          404
        </FuzzyText>
      </div>

      <h2 className="font-display mb-6 text-2xl font-bold md:text-3xl">
        Page Not Found
      </h2>
      <p className="mx-auto mb-10 max-w-md text-muted-foreground">
        The play you&apos;re looking for didn&apos;t make the highlight reel.
      </p>

      <Link
        href="/"
        className="rounded-full bg-primary px-8 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-105 hover:shadow-lg"
      >
        Return Home
      </Link>
    </div>
  );
}

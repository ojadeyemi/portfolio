"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { DATA } from "@/data/resume";

const linkClass =
  "inline-flex items-center gap-2 py-2 text-muted-foreground transition-colors hover:text-foreground";

export default function PageNav() {
  const pathname = usePathname().replace(/\/$/, "") || "/";
  const pages: readonly { href: string; label: string }[] = DATA.navbar;
  const index = pages.findIndex((page) => page.href === pathname);

  if (index === -1) return null;

  const previous = pages[index - 1];
  const next = pages[index + 1];

  return (
    <nav
      aria-label="Previous and next page"
      className="flex items-center justify-between border-t pt-4 text-sm"
    >
      {previous ? (
        <Link href={previous.href} className={linkClass}>
          <ArrowLeft className="size-4" />
          {previous.label}
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link href={next.href} className={linkClass}>
          Next: {next.label}
          <ArrowRight className="size-4" />
        </Link>
      )}
    </nav>
  );
}

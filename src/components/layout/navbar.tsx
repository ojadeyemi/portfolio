"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import ThemeButton from "@/components/layout/ThemeButton";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

const isCurrent = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b bg-background/90 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-3xl items-center justify-between gap-x-1 px-3 py-2 min-[360px]:gap-x-2 min-[360px]:px-4 sm:px-6"
      >
        <ul className="-ml-1 flex items-center text-[13px] min-[360px]:-ml-1.5 min-[360px]:gap-x-0.5 min-[360px]:text-sm sm:-ml-3 sm:gap-x-1">
          {DATA.navbar.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={
                  isCurrent(pathname, item.href) ? "page" : undefined
                }
                className={cn(
                  "block rounded-md px-1 py-2 transition-colors min-[360px]:px-1.5 sm:px-3",
                  isCurrent(pathname, item.href)
                    ? "bg-muted font-semibold text-foreground"
                    : "text-foreground/70 hover:bg-muted/60 hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeButton />
      </nav>
    </header>
  );
}

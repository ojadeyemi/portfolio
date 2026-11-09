import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { ChevronRightIcon } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn, withBase } from "@/lib/utils";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}

export const ResumeCard: React.FC<ResumeCardProps> = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const isInteractive = Boolean(description || href);

  const handleClick = () => {
    if (description) {
      setIsExpanded(!isExpanded);
    } else if (href) {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Card className="flex">
      <div className="flex-none">
        <Avatar className="bg-muted-background m-auto size-12 border dark:bg-foreground">
          <AvatarImage
            src={withBase(logoUrl)}
            alt={altText}
            className={cn(
              "object-contain",
              title === "Northscore" && "bg-black",
              title === "Maple Leaf Sports & Entertainment" && "bg-gray-800",
            )}
          />
          <AvatarFallback>{altText[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="group ml-4 flex-grow flex-col items-center">
        <CardHeader className="space-y-[2px]">
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h3 className="text-xs font-semibold leading-none sm:text-sm">
              <button
                type="button"
                onClick={handleClick}
                disabled={!isInteractive}
                aria-expanded={description ? isExpanded : undefined}
                className={cn(
                  "inline-flex items-center justify-center text-left font-semibold",
                  isInteractive && "cursor-pointer",
                )}
              >
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                {isInteractive && (
                  <ChevronRightIcon
                    className={cn(
                      "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                      isExpanded ? "rotate-90" : "rotate-0",
                    )}
                  />
                )}
              </button>
            </h3>
            <div className="text-right text-[9px] tabular-nums leading-4 text-muted-foreground sm:text-sm">
              {period}
            </div>
          </div>
          {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
        </CardHeader>
        {description && (
          <motion.div
            inert={!isExpanded}
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isExpanded ? 1 : 0,
              height: isExpanded ? "auto" : 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="flex items-center overflow-hidden text-xs sm:text-sm"
          >
            {href && href.startsWith("http") ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 mt-2 inline-flex items-center"
                aria-label={`Open ${title} website`}
              >
                <span>{description}</span>
                <ExternalLinkIcon className="mx-1 h-3 w-3" />
              </a>
            ) : (
              <Link
                href={href || "#"}
                className="ml-1 mt-2 inline-flex items-center"
                aria-label={`View ${title} details`}
              >
                <span>{description}</span>
                <ExternalLinkIcon className="mx-1 h-3 w-3" />
              </Link>
            )}
          </motion.div>
        )}
      </div>
    </Card>
  );
};

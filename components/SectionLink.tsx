"use client";

import Link from "next/link";
import { scrollToId } from "@/lib/scroll";

/**
 * An in-page link that animates to its section. Falls back to the plain
 * hash link if JavaScript hasn't loaded.
 */
const SectionLink = ({
  id,
  className,
  children,
  onNavigate,
  ...rest
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
  onNavigate?: () => void;
} & Omit<React.ComponentProps<typeof Link>, "href" | "onClick">) => (
  <Link
    href={`#${id}`}
    onClick={(e) => {
      e.preventDefault();
      onNavigate?.();
      scrollToId(id);
      // Keep the URL in step so the section stays linkable.
      window.history.replaceState(null, "", `#${id}`);
    }}
    className={className}
    {...rest}
  >
    {children}
  </Link>
);

export default SectionLink;

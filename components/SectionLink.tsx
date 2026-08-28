"use client";

import Link from "next/link";
import { scrollToId } from "@/lib/scroll";

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
      window.history.replaceState(null, "", `#${id}`);
    }}
    className={className}
    {...rest}
  >
    {children}
  </Link>
);

export default SectionLink;

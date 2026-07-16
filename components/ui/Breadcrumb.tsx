"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

const nameMap: Record<string, string> = {
  about: "About Us",
  products: "Products",
  gallery: "Gallery",
  projects: "Projects",
  blog: "Blog",
  contact: "Contact",
  certificates: "Certificates",
  careers: "Careers",
  "investor-relations": "Investor Relations",
};

function formatSegment(segment: string) {
  return (
    nameMap[segment] ??
    segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase())
  );
}

export default function Breadcrumb() {
  const pathname = usePathname();

  const segments = pathname
    .split("/")
    .filter(Boolean);

  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-4 md:mb-5 flex justify-center"
    >
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        <li className="flex items-center gap-1.5">
          <Link
            href="/"
            className="text-red-600 transition-colors hover:text-white uppercase"
          >
            Home
          </Link>

          {segments.length > 0 && (
            <ChevronRight size={15} className="text-gray-200" />
          )}
        </li>

        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/");
          const isLast = index === segments.length - 1;

          return (
            <li
              key={href}
              className="flex items-center gap-1.5 uppercase"
            >
              {isLast ? (
                <span
                  aria-current="page"
                  className="font-medium text-brand-skytext"
                >
                  {formatSegment(segment)}
                </span>
              ) : (
                <Link
                  href={href}
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  {formatSegment(segment)}
                </Link>
              )}

              {!isLast && (
                <ChevronRight
                  size={10}
                  className="text-gray-500"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
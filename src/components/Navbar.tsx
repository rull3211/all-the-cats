"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/src/lib/routes";

export default function Navbar() {
  const pathname = usePathname() ?? "/";

  const linkClass = (href: string) =>
    `text-sm ${
      pathname === href
        ? "text-blue-600 font-medium"
        : "text-gray-700 hover:text-gray-900"
    }`;

  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href={routes.home()}
              className="text-lg text-black font-semibold"
            >
              CatsApp
            </Link>
          </div>

          <nav className="flex items-center gap-4">
            <Link
              href={routes.home()}
              className={linkClass(routes.home())}
              aria-current={pathname === routes.home() ? "page" : undefined}
            >
              Home
            </Link>
            <Link
              href={routes.cats()}
              className={linkClass(routes.cats())}
              aria-current={pathname === routes.cats() ? "page" : undefined}
            >
              Cats
            </Link>
            <Link
              href={routes.user("1")}
              className={linkClass(
                routes.user("[userId]").replace("[userId]", "1")
              )}
              aria-current={
                pathname === routes.user("[userId]").replace("[userId]", "1")
                  ? "page"
                  : undefined
              }
            >
              User 1
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

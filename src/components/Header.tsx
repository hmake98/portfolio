"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const pathname = usePathname();
  const isOssPage = pathname === "/open-source";

  return (
    <header className="fixed w-full top-0 z-50 bg-bg-primary">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="font-mono text-sm font-bold text-accent-primary hover:opacity-80 transition-opacity"
          >
            hey 👋
          </Link>

          <Link
            href="/open-source"
            className={`text-sm font-medium transition-colors duration-200 ${
              isOssPage ? "text-accent-primary" : "text-text-secondary hover:text-text-primary"
            }`}
          >
            Open Source
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

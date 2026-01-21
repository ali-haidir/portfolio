"use client";

import { usePathname } from "next/navigation";

export function PageShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <main className={isHome ? "h-[100dvh] overflow-hidden" : "min-h-screen"}>
      {children}
    </main>
  );
}
"use client";

import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";
import CommandPalette from "@/components/ui/CommandPalette";
import InteractiveGrid from "@/components/ui/InteractiveGrid";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ScrollProgress />
      <InteractiveGrid />
      <BackToTop />
      <CommandPalette />
      {children}
    </>
  );
}

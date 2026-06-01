"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export function SettingsPageHeader() {
  const pathname = usePathname();
  const currentSegment = pathname.split("/").pop() || "";

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="mb-8 space-y-2"
    >
      <div className="flex items-baseline gap-3">
        <h1 className="text-2xl font-bold tracking-tight capitalize text-foreground">
          {currentSegment.replace(/-/g, " ")}
        </h1>
        <span className="text-[10px] font-medium font-mono text-muted-foreground tracking-widest uppercase hidden sm:inline">
          {pathname}
        </span>
      </div>
    </motion.div>
  );
}

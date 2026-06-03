"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@tamor/ui/components/button";
import { motion } from "motion/react";

const proofPoints = [
  { label: "Declared plan", value: "9 vertices" },
  { label: "Observed", value: "11 vertices" },
  { label: "Deviation", value: "+2 recovery" },
  { label: "Commitment match", value: "96%" },
];

const stats = [
  { value: "92%", label: "success rate" },
  { value: "1.4", label: "avg replans" },
  { value: "3%", label: "escalations" },
  { value: "127", label: "violations blocked" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.12) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-2 border border-border bg-background px-4 py-1.5 text-xs text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 bg-foreground" />
          Understand, govern, and control how AI agents operate
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.05, duration: 0.4 }}
          className="mx-auto mt-6 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-7xl xl:text-[5.2rem] font-heading"
        >
          Understand, govern,
          <span className="block text-foreground/70">and control how AI agents operate.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg"
        >
          Trajeckt turns every execution into a trajectory you can inspect, approve, replay,
          and improve. Observe decision paths, enforce boundaries before action, and learn
          from every recovery branch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.3 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button
            size="lg"
            className="group rounded-none border border-foreground bg-foreground text-background text-base hover:bg-foreground"
            render={<Link href="/auth/signup" />}
          >
            <span className="flex items-center gap-2">
              Start free trial
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-none border-border text-base"
            render={<Link href="#intelligence" />}
          >
            <Play className="mr-2 h-4 w-4" />
            View the platform
          </Button>
        </motion.div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {proofPoints.map((point, index) => (
            <motion.div
              key={point.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24 + index * 0.04, duration: 0.25 }}
              className="border border-border bg-background px-4 py-4 text-left"
            >
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {point.label}
              </div>
              <div className="mt-2 text-lg font-semibold tracking-tight tabular-nums">
                {point.value}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34 + index * 0.04, duration: 0.25 }}
              className="border border-border bg-muted/20 px-4 py-3 text-left"
            >
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </div>
              <div className="mt-1 text-2xl font-semibold tracking-[-0.04em] tabular-nums">
                {stat.value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

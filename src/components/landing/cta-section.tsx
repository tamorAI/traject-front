"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@tamor/ui/components/button";
import { motion } from "motion/react";

const trustItems = [
  "Trajectory-based analytics",
  "Human approvals",
  "Incident replay",
  "Policy enforcement",
];

export default function CTASection() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.03),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden border border-border bg-background px-6 py-12 shadow-[0_24px_80px_-60px_hsl(var(--foreground)/0.24)] sm:px-10 sm:py-16 lg:px-16"
        >
          <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center gap-2 border border-border bg-muted/20 px-4 py-1.5 text-xs text-muted-foreground"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Ready when your agents are
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ delay: 0.05, duration: 0.35 }}
                className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl font-heading"
              >
                Turn every trajectory into operating intelligence.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base"
              >
                Start with a control surface built for agent observability, governance,
                and investigation. Trajeckt makes it easier to see what happened,
                enforce what should happen, and improve what happens next.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.14, duration: 0.3 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <Button
                  size="lg"
                  className="group relative overflow-hidden rounded-none text-base"
                  render={<Link href="/auth/signup" />}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start free trial
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-none text-base"
                  render={<Link href="/auth/login" />}
                >
                  Sign in
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.18, duration: 0.3 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                {trustItems.map((item) => (
                  <span
                    key={item}
                    className="border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, duration: 0.35 }}
              className="border border-border bg-muted/15 p-5"
            >
              <div className="flex items-center justify-between gap-3 border-b border-border pb-4">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    Platform snapshot
                  </div>
                  <div className="mt-1 text-sm font-medium">
                    The high-level dashboard your team will actually use
                  </div>
                </div>
                <span className="border border-border bg-background px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  live
                </span>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Active trajectories", value: "48" },
                  { label: "Pending approvals", value: "3" },
                  { label: "Blocked actions", value: "127" },
                  { label: "Incident replays", value: "12" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="border border-border bg-background px-4 py-3"
                  >
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="mt-1 text-2xl font-semibold tracking-[-0.04em] tabular-nums">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 border border-border bg-background p-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Team outcome
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Trajectory intelligence replaces guesswork
                  </div>
                </div>
                <div className="mt-4 h-2 overflow-hidden bg-border">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "86%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.12, duration: 0.7 }}
                    className="h-full bg-foreground"
                  />
                </div>
                <div className="mt-3 grid grid-cols-3 gap-3 text-sm text-muted-foreground">
                  <div>
                    <div className="font-mono text-xs">Visibility</div>
                    <div className="mt-1 text-foreground">High</div>
                  </div>
                  <div>
                    <div className="font-mono text-xs">Governance</div>
                    <div className="mt-1 text-foreground">Strict</div>
                  </div>
                  <div>
                    <div className="font-mono text-xs">Learning</div>
                    <div className="mt-1 text-foreground">Continuous</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

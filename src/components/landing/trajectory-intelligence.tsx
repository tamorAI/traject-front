"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Gauge,
  Layers3,
  Search,
  Shield,
  Sparkles,
  TrendingDown,
  TrendingUp,
  Workflow,
} from "lucide-react";
import { motion, animate, useInView } from "motion/react";

const trajectoryGraph = [
  { title: "User request", icon: Workflow },
  { title: "Plan & decompose", icon: Layers3 },
  { title: "Search", icon: Search },
  { title: "Analyze", icon: Gauge },
  { title: "Validate", icon: Shield },
  { title: "Result", icon: Sparkles },
];

const metrics = [
  { value: "92%", label: "Success rate", trend: "up" as const },
  { value: "1.4", label: "Avg replans", trend: "down" as const },
  { value: "3%", label: "Escalations", trend: "down" as const },
  { value: "127", label: "Violations blocked", trend: "up" as const },
];

const insights = [
  {
    value: "+18%",
    label: "Success uplift",
    text: "Tasks with verification steps complete more reliably than straight-line runs.",
  },
  {
    value: "37%",
    label: "Fewer failures",
    text: "Fallback branches reduce the cost of missing information and stale context.",
  },
  {
    value: "22%",
    label: "Lower completion",
    text: "Long trajectories with too many vertices degrade finish quality.",
  },
];

const failures = [
  { label: "External API timeout", value: "31%" },
  { label: "Missing information", value: "24%" },
  { label: "Budget exceeded", value: "18%" },
  { label: "Tool permission denied", value: "15%" },
];

function AnimatedMetric({
  value,
  label,
  trend,
}: {
  value: string;
  label: string;
  trend: "up" | "down";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [displayValue, setDisplayValue] = useState(0);
  const numericValue = Number.parseFloat(value);
  const isPercent = value.endsWith("%");

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, numericValue, {
      duration: 1,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(Math.round(latest * 10) / 10),
    });

    return controls.stop;
  }, [isInView, numericValue]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -2 }}
      className="border border-border bg-background p-4 shadow-[0_20px_60px_-52px_hsl(var(--foreground)/0.24)]"
    >
      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {trend === "up" ? (
          <TrendingUp className="h-3.5 w-3.5" />
        ) : (
          <TrendingDown className="h-3.5 w-3.5" />
        )}
        {label}
      </div>
      <div className="mt-3 text-3xl font-semibold tracking-[-0.05em] tabular-nums">
        {isInView ? (
          <>
            {Number.isInteger(displayValue)
              ? Math.round(displayValue)
              : displayValue.toFixed(1)}
            {isPercent ? "%" : ""}
          </>
        ) : (
          "0"
        )}
      </div>
    </motion.div>
  );
}

function MiniList({
  title,
  items,
}: {
  title: string;
  items: Array<{ label: string; value: string }>;
}) {
  return (
    <div className="border border-border bg-background p-4">
      <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {title}
      </div>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between gap-3 border border-border/70 bg-muted/20 px-3 py-2 text-sm"
          >
            <span className="text-muted-foreground">{item.label}</span>
            <span className="font-mono text-xs text-foreground">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TrajectoryIntelligence() {
  return (
    <section id="intelligence" className="relative py-10 sm:py-16 lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.03),transparent_36%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 border border-border bg-background px-4 py-1.5 text-xs text-muted-foreground"
          >
            Trajectory intelligence
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.35 }}
            className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl font-heading"
          >
            Learn how your agents think
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base"
          >
            Trajeckt analyzes execution trajectories to uncover recurring failure modes,
            inefficient workflows, risky branches, and the patterns that actually lead
            to successful completion.
          </motion.p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7"
          >
            <div className="border border-border bg-background p-5 shadow-[0_20px_60px_-52px_hsl(var(--foreground)/0.24)]">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Observed trajectory
                  </div>
                  <div className="mt-1 text-sm font-medium">Declared plan vs real execution</div>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  <span className="border border-border bg-muted/30 px-3 py-1.5">
                    Declared 9 vertices
                  </span>
                  <span className="border border-border bg-muted/30 px-3 py-1.5">
                    Observed 11 vertices
                  </span>
                </div>
              </div>

              <div className="mt-5 grid gap-4 xl:grid-cols-[1fr_0.9fr]">
                <div className="border border-border bg-background p-4">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Execution map
                  </div>
                  <div className="mt-4 space-y-3">
                    {trajectoryGraph.map((step, index) => {
                      const Icon = step.icon;
                      const isRecovery = index === 2;

                      return (
                        <motion.div
                          key={step.title}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.04, duration: 0.3 }}
                          className={`flex items-center gap-3 border px-3 py-3 ${
                            isRecovery ? "border-border bg-muted/40" : "border-border/70 bg-background"
                          }`}
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-muted/30 text-foreground">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-3">
                              <span className="truncate text-sm font-medium">{step.title}</span>
                              <span className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                                {isRecovery ? "recovery" : "aligned"}
                              </span>
                            </div>
                            <div className="mt-2 h-1.5 overflow-hidden bg-border">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: isRecovery ? "74%" : "100%" }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.06 + index * 0.04, duration: 0.55 }}
                                className="h-full bg-foreground"
                              />
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-4">
                  <MiniList title="Common failure modes" items={failures} />

                  <div className="grid grid-cols-2 gap-4">
                    {metrics.map((metric) => (
                      <AnimatedMetric
                        key={metric.label}
                        value={metric.value}
                        label={metric.label}
                        trend={metric.trend}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 border border-border bg-background p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Commitment visibility
                    </div>
                    <div className="mt-1 text-sm font-medium">Declared vs observed fidelity</div>
                  </div>
                  <span className="border border-border bg-muted/30 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    96% match
                  </span>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {[
                    { label: "Declared", value: "9 vertices" },
                    { label: "Observed", value: "11 vertices" },
                    { label: "Deviation", value: "+2 recovery" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="border border-border bg-muted/20 px-4 py-3"
                    >
                      <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="mt-1 text-lg font-semibold tracking-[-0.03em] tabular-nums">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="lg:col-span-5"
          >
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {metrics.map((metric) => (
                  <AnimatedMetric
                    key={`sidebar-${metric.label}`}
                    value={metric.value}
                    label={metric.label}
                    trend={metric.trend}
                  />
                ))}
              </div>

              {insights.map((insight, index) => (
                <motion.div
                  key={insight.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 + index * 0.04, duration: 0.3 }}
                  className="border border-border bg-background p-4 shadow-[0_20px_60px_-52px_hsl(var(--foreground)/0.24)]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {insight.label}
                    </span>
                    <span className="text-xs font-medium tabular-nums text-foreground">
                      {insight.value}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {insight.text}
                  </p>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.14, duration: 0.3 }}
                className="border border-border bg-background p-4 shadow-[0_20px_60px_-52px_hsl(var(--foreground)/0.24)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Takeaway
                    </div>
                    <div className="mt-1 text-sm font-medium">Trajectory data is richer than logs</div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="mt-4 border border-border bg-muted/20 p-4 text-sm leading-6 text-muted-foreground">
                  Raw logs are a cost center. Trajectory intelligence is decision support.
                  That is the product story that closes the gap between visibility and control.
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

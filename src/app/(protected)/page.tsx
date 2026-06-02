"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@tamor/ui/components/card";
import { Badge } from "@tamor/ui/components/badge";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

const metrics = [
  {
    label: "Active trajectories",
    value: "24",
    change: "↑ 3 since last hour",
    up: true,
  },
  {
    label: "Success rate",
    value: "96%",
    change: "↑ 2% vs yesterday",
    up: true,
  },
  {
    label: "Policy interventions",
    value: "7",
    change: "3 open · 4 resolved",
    up: false,
  },
  {
    label: "Avg completion",
    value: "4m",
    change: "Baseline 4.2m",
    neutral: true,
  },
];

const trajectories = [
  {
    name: "Market Research",
    id: "TRJ-0041",
    agent: "Research Agent",
    status: "Running" as const,
    duration: "2m 14s",
  },
  {
    name: "Customer Support",
    id: "TRJ-0040",
    agent: "Support Agent",
    status: "Complete" as const,
    duration: "5m 02s",
  },
  {
    name: "Data Analysis",
    id: "TRJ-0039",
    agent: "Analyst Agent",
    status: "Escalated" as const,
    duration: "3m 07s",
  },
  {
    name: "User Onboarding",
    id: "TRJ-0038",
    agent: "Onboard Agent",
    status: "Running" as const,
    duration: "1m 03s",
  },
  {
    name: "Invoice Processing",
    id: "TRJ-0037",
    agent: "Finance Agent",
    status: "Awaiting approval" as const,
    duration: "6m 41s",
  },
];

const statusVariant: Record<
  string,
  "default" | "secondary" | "destructive" | "outline"
> = {
  Running: "default",
  Complete: "secondary",
  Escalated: "destructive",
  "Awaiting approval": "outline",
};

const incidents = [
  { name: "Scope violation", detail: "Finance Agent · 4m ago" },
  { name: "Budget exceeded", detail: "Research Agent · 12m ago" },
  { name: "Human approval required", detail: "Analyst Agent · 18m ago" },
  { name: "Policy override attempt", detail: "Support Agent · 31m ago" },
];

const auditLog = [
  { time: "0:02", message: "External API called", tag: "warn" as const },
  { time: "0:01", message: "Policy check passed", tag: "ok" as const },
  { time: "0:01", message: "Human review requested", tag: "warn" as const },
  { time: "-1m", message: "Budget limit reached", tag: "err" as const },
  { time: "-2m", message: "Trajectory completed", tag: "ok" as const },
  { time: "-3m", message: "New trajectory started", tag: "ok" as const },
];

const tagClass: Record<string, string> = {
  ok: "bg-success/10 text-success border-success/20",
  warn: "bg-warning/10 text-warning border-warning/20",
  err: "bg-destructive/10 text-destructive border-destructive/20",
};

const insights = [
  {
    value: "+14%",
    color: "text-success",
    text: "Verification steps increased success rate over the last 7 days",
  },
  {
    value: "1.2×",
    color: "text-foreground",
    text: "Average replans per task — down from 1.8 last week",
  },
  {
    value: "68%",
    color: "text-warning",
    text: "Of failures occur during external API access steps",
  },
];

const springConfig = {
  type: "spring" as const,
  stiffness: 320,
  damping: 28,
  mass: 0.8,
};

const cardReveal = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ...springConfig, stiffness: 300, damping: 26 },
  },
};

export default function DashboardPage() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl uppercase font-semibold tracking-tight">
            <span className="text-muted-foreground">Morning</span> , Victor
          </h1>
          <p className="text-sm text-muted-foreground">
            Observe, govern, and control how AI agents operate.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_220px] gap-5">
        <div className="min-w-0 space-y-5">
          <motion.div variants={item} className="grid grid-cols-4 gap-2.5">
            {metrics.map((m) => (
              <Card key={m.label}>
                <CardHeader>
                  <CardTitle>{m.label}</CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-[26px] font-light tracking-tight leading-none">
                    {m.value}
                  </CardDescription>
                </CardContent>

                <CardFooter>
                  <div className="text-[11px] text-muted-foreground">
                    {m.up && (
                      <span className="text-success">
                        {m.change.split("·")[0]}
                      </span>
                    )}
                    {/* {m.up && " · "} */}
                    {m.change.includes("·")
                      ? m.change.split("·")[1]?.trim()
                      : !m.up && !m.neutral
                        ? m.change
                        : ""}
                    {m.neutral && m.change}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </motion.div>

          <motion.div variants={cardReveal}>
            <Card className="card-gradient-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Trajectory activity</CardTitle>
                  <span className="text-[11px] text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
                    View all →
                  </span>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left px-4 py-2 text-[10.5px] font-medium text-muted-foreground uppercase tracking-wider">
                        Trajectory
                      </th>
                      <th className="text-left px-4 py-2 text-[10.5px] font-medium text-muted-foreground uppercase tracking-wider">
                        Agent
                      </th>
                      <th className="text-left px-4 py-2 text-[10.5px] font-medium text-muted-foreground uppercase tracking-wider">
                        Status
                      </th>
                      <th className="text-left px-4 py-2 text-[10.5px] font-medium text-muted-foreground uppercase tracking-wider">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {trajectories.map((t) => (
                      <tr
                        key={t.id}
                        className="border-b last:border-b-0 hover:bg-muted/30 cursor-pointer transition-colors"
                      >
                        <td className="px-4 py-2.5">
                          <div className="text-sm font-medium">{t.name}</div>
                          <div className="text-[10px] text-muted-foreground">
                            {t.id}
                          </div>
                        </td>
                        <td className="px-4 py-2.5">
                          <Badge
                            variant="secondary"
                            className="inline-flex items-center gap-1.5 text-[11px] px-2 py-0.5"
                          >
                            <span className="w-1 h-1 bg-primary/60" />
                            {t.agent}
                          </Badge>
                        </td>
                        <td className="px-4 py-2.5">
                          <Badge
                            className="inline-flex items-center"
                            variant={statusVariant[t.status]}
                          >
                            {t.status === "Running" && (
                              <span className="w-1.5 h-1.5 bg-current animate-pulse" />
                            )}
                            {t.status === "Escalated" && (
                              <span className="w-1.5 h-1.5 bg-current" />
                            )}
                            {t.status === "Awaiting approval" && (
                              <span className="w-1.5 h-1.5 bg-current" />
                            )}
                            {t.status}
                          </Badge>
                        </td>
                        <td className="px-4 py-2.5 text-xs text-muted-foreground tabular-nums">
                          {t.duration}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={cardReveal}>
            <Card className="card-gradient-border">
              <CardHeader>
                <div className="flex items-center gap-2.5">
                  <CardTitle>TRJ-0041 · Market Research</CardTitle>
                  <Badge variant="default">
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    Live
                  </Badge>
                  <span className="text-[11px] text-muted-foreground ml-auto">
                    Research Agent · 2m 14s
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center py-2">
                  <div className="inline-flex items-center justify-center px-5 py-1.5 border rounded text-xs text-muted-foreground bg-muted/50 min-w-[105px]">
                    User request
                  </div>
                  <div className="h-4 flex justify-center">
                    <svg width="1" height="14" viewBox="0 0 1 14">
                      <line
                        x1="0.5"
                        y1="0"
                        x2="0.5"
                        y2="10"
                        stroke="#d4d4d0"
                        strokeWidth="1"
                      />
                      <polygon points="0.5,14 -2.5,9 3.5,9" fill="#d4d4d0" />
                    </svg>
                  </div>
                  <div className="inline-flex items-center justify-center px-5 py-1.5 border rounded text-xs text-muted-foreground bg-muted/30 min-w-[120px]">
                    Plan &amp; Decompose
                  </div>
                  <div className="h-4 flex justify-center">
                    <svg width="1" height="14" viewBox="0 0 1 14">
                      <line
                        x1="0.5"
                        y1="0"
                        x2="0.5"
                        y2="10"
                        stroke="#d4d4d0"
                        strokeWidth="1"
                      />
                      <polygon points="0.5,14 -2.5,9 3.5,9" fill="#d4d4d0" />
                    </svg>
                  </div>
                  <div className="flex items-start justify-center gap-8">
                    <div className="flex flex-col items-center">
                      <div className="w-px h-3.5 bg-border" />
                      <div className="inline-flex items-center justify-center px-4 py-1.5 border rounded text-xs text-muted-foreground bg-muted/30 min-w-[100px]">
                        Source A
                      </div>
                      <div className="w-px h-3.5 bg-border" />
                    </div>
                    <div
                      style={{
                        width: 50,
                        height: 1,
                        background: "var(--border)",
                        marginTop: 14,
                        flexShrink: 0,
                      }}
                    />
                    <div className="flex flex-col items-center">
                      <div className="w-px h-3.5 bg-border" />
                      <div className="inline-flex items-center justify-center px-4 py-1.5 border rounded text-xs text-muted-foreground bg-muted/30 min-w-[100px]">
                        Source B
                      </div>
                      <div className="w-px h-3.5 bg-border" />
                    </div>
                  </div>
                  <div className="h-4 flex justify-center">
                    <svg width="1" height="14" viewBox="0 0 1 14">
                      <line
                        x1="0.5"
                        y1="0"
                        x2="0.5"
                        y2="10"
                        stroke="#d4d4d0"
                        strokeWidth="1"
                      />
                      <polygon points="0.5,14 -2.5,9 3.5,9" fill="#d4d4d0" />
                    </svg>
                  </div>
                  <div className="inline-flex items-center justify-center px-5 py-1.5 border-2 rounded text-xs font-medium text-indigo-700 bg-indigo-50 border-indigo-300 min-w-[120px]">
                    Analyze
                  </div>
                  <div className="h-4 flex justify-center">
                    <svg width="1" height="14" viewBox="0 0 1 14">
                      <line
                        x1="0.5"
                        y1="0"
                        x2="0.5"
                        y2="10"
                        stroke="#d4d4d0"
                        strokeWidth="1"
                      />
                      <polygon points="0.5,14 -2.5,9 3.5,9" fill="#d4d4d0" />
                    </svg>
                  </div>
                  <div className="inline-flex items-center justify-center px-5 py-1.5 border border-dashed rounded text-xs text-muted-foreground min-w-[120px]">
                    Report
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Trajectory insights</span>
          </div>
          <motion.div variants={item} className="grid grid-cols-3 gap-2.5">
            {insights.map((ins) => (
              <div
                key={ins.value}
                className="bg-card border rounded-lg p-3.5 hover:border-muted-foreground/20 transition-colors"
              >
                <div
                  className={`text-xl font-light tracking-tight mb-1 ${ins.color}`}
                >
                  {ins.value}
                </div>
                <div className="text-[11.5px] text-muted-foreground leading-relaxed">
                  {ins.text}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="space-y-3.5">
          <motion.div variants={item}>
            <Card className="card-gradient-border">
              <CardHeader>
                <CardTitle>Recent incidents</CardTitle>
              </CardHeader>
              <CardContent className="p-3.5 pt-0">
                {incidents.map((inc, i) => (
                  <div
                    key={inc.name}
                    className={`flex gap-2.5 py-2 ${i < incidents.length - 1 ? "border-b" : ""}`}
                  >
                    <div className="flex flex-col items-center pt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-destructive shrink-0" />
                      {i < incidents.length - 1 && (
                        <div className="w-px flex-1 min-h-[12px] bg-border mt-0.5" />
                      )}
                    </div>
                    <div>
                      <div className="text-[11.5px] font-medium">
                        {inc.name}
                      </div>
                      <div className="text-[10.5px] text-muted-foreground mt-0.5">
                        {inc.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="card-gradient-border">
              <CardHeader>
                <div className="flex items-center gap-1">
                  <CardTitle>Audit log</CardTitle>
                  <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                </div>
              </CardHeader>
              <CardContent className="p-3.5 pt-0">
                {auditLog.map((al) => (
                  <div
                    key={`${al.time}-${al.message}`}
                    className="flex gap-2 py-1.5 border-b last:border-b-0"
                  >
                    <span className="text-[10px] text-muted-foreground min-w-[26px] tabular-nums pt-0.5 shrink-0">
                      {al.time}
                    </span>
                    <span className="text-[11px] leading-relaxed">
                      {al.message}
                      <span
                        className={`inline-flex px-1 py-0.5 rounded text-[10px] font-semibold border ml-1 align-middle ${tagClass[al.tag]}`}
                      >
                        {al.tag}
                      </span>
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

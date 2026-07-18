"use client";

import {
  Activity,
  Bot,
  Rocket,
  ShieldCheck,
} from "lucide-react";

export default function TopStatus() {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 backdrop-blur-xl">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-zinc-800 px-8 py-6">

        <div>

          <h1 className="text-2xl font-bold">
            Atlas Mission Control
          </h1>

          <p className="mt-2 text-zinc-400">
            Workspace • CRM Platform
          </p>

        </div>

        <div className="flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2">

          <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />

          <span className="text-sm text-green-400">
            LIVE
          </span>

        </div>

      </div>

      {/* Metrics */}

      <div className="grid gap-6 p-8 md:grid-cols-4">

        <Metric
          icon={<Bot size={22} />}
          title="AI Engineers"
          value="8"
          subtitle="Active"
        />

        <Metric
          icon={<Activity size={22} />}
          title="Running Tasks"
          value="23"
          subtitle="Executing"
        />

        <Metric
          icon={<Rocket size={22} />}
          title="Deployments"
          value="3"
          subtitle="Preview"
        />

        <Metric
          icon={<ShieldCheck size={22} />}
          title="Health"
          value="99.98%"
          subtitle="Production"
        />

      </div>

    </div>
  );
}

function Metric({
  icon,
  title,
  value,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition hover:border-cyan-500">

      <div className="flex items-center justify-between">

        <div className="text-cyan-400">
          {icon}
        </div>

        <span className="text-xs text-zinc-500">
          {subtitle}
        </span>

      </div>

      <div className="mt-6 text-3xl font-bold">
        {value}
      </div>

      <div className="mt-2 text-zinc-400">
        {title}
      </div>

    </div>
  );
}
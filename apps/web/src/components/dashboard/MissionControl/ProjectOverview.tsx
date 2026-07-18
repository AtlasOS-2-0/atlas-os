"use client";

import {
  GitBranch,
  Rocket,
  Server,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    icon: GitBranch,
    label: "Repository",
    value: "atlas-os",
  },
  {
    icon: Rocket,
    label: "Deployments",
    value: "3 Active",
  },
  {
    icon: Server,
    label: "Environment",
    value: "Preview",
  },
  {
    icon: ShieldCheck,
    label: "Health",
    value: "99.98%",
  },
];

export default function ProjectOverview() {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 backdrop-blur-xl">

      <div className="border-b border-zinc-800 px-6 py-5">

        <h2 className="text-xl font-bold">
          Project Overview
        </h2>

      </div>

      <div className="grid grid-cols-2 gap-5 p-6">

        {stats.map((stat) => {

          const Icon = stat.icon;

          return (

            <div
              key={stat.label}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5"
            >

              <Icon className="text-cyan-400" size={22} />

              <div className="mt-4 text-2xl font-bold">
                {stat.value}
              </div>

              <div className="mt-2 text-sm text-zinc-400">
                {stat.label}
              </div>

            </div>

          );

        })}

      </div>

    </div>
  );
}
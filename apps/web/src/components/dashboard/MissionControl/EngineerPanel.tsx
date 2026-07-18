"use client";

import {
  Brain,
  Server,
  MonitorSmartphone,
  Database,
  FlaskConical,
  Rocket,
  Eye,
} from "lucide-react";

const engineers = [
  {
    name: "Architect AI",
    task: "Designing authentication architecture",
    progress: 100,
    status: "Completed",
    icon: Brain,
  },
  {
    name: "Backend AI",
    task: "Generating authentication APIs",
    progress: 82,
    status: "Working",
    icon: Server,
  },
  {
    name: "Frontend AI",
    task: "Building dashboard interface",
    progress: 67,
    status: "Working",
    icon: MonitorSmartphone,
  },
  {
    name: "Database AI",
    task: "Optimizing PostgreSQL schema",
    progress: 91,
    status: "Optimizing",
    icon: Database,
  },
  {
    name: "Testing AI",
    task: "Running 248 automated tests",
    progress: 55,
    status: "Testing",
    icon: FlaskConical,
  },
  {
    name: "Deployment AI",
    task: "Preparing preview deployment",
    progress: 28,
    status: "Deploying",
    icon: Rocket,
  },
  {
    name: "Monitoring AI",
    task: "Waiting for production traffic",
    progress: 0,
    status: "Idle",
    icon: Eye,
  },
];

export default function EngineerPanel() {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 backdrop-blur-xl">

      <div className="border-b border-zinc-800 px-6 py-5">

        <h2 className="text-xl font-bold">
          AI Engineering Team
        </h2>

        <p className="mt-2 text-sm text-zinc-400">
          Live status of every specialist working on this project.
        </p>

      </div>

      <div className="divide-y divide-zinc-800">

        {engineers.map((engineer) => {

          const Icon = engineer.icon;

          return (

            <div
              key={engineer.name}
              className="p-5 transition hover:bg-zinc-900/40"
            >

              <div className="flex items-start gap-4">

                <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
                  <Icon size={22} />
                </div>

                <div className="flex-1">

                  <div className="flex items-center justify-between">

                    <h3 className="font-semibold">
                      {engineer.name}
                    </h3>

                    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
                      {engineer.status}
                    </span>

                  </div>

                  <p className="mt-2 text-sm text-zinc-400">
                    {engineer.task}
                  </p>

                  <div className="mt-4 h-2 rounded-full bg-zinc-800">

                    <div
                      className="h-full rounded-full bg-cyan-400 transition-all duration-700"
                      style={{
                        width: `${engineer.progress}%`,
                      }}
                    />

                  </div>

                  <p className="mt-2 text-xs text-zinc-500">
                    {engineer.progress}% complete
                  </p>

                </div>

              </div>

            </div>

          );

        })}

      </div>

    </div>
  );
}
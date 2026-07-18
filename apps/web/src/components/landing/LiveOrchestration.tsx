"use client";

import { useEffect, useState } from "react";

const steps = [
  {
    agent: "Architect AI",
    tasks: [
      "Understanding project requirements...",
      "Designing software architecture...",
      "Planning database schema...",
      "Generating system blueprint...",
    ],
  },
  {
    agent: "Backend AI",
    tasks: [
      "Generating REST APIs...",
      "Writing authentication...",
      "Optimizing SQL queries...",
      "Building business logic...",
    ],
  },
  {
    agent: "Frontend AI",
    tasks: [
      "Designing UI...",
      "Building components...",
      "Connecting APIs...",
      "Optimizing performance...",
    ],
  },
  {
    agent: "Testing AI",
    tasks: [
      "Running unit tests...",
      "Running integration tests...",
      "Checking security...",
      "Validating deployment...",
    ],
  },
  {
    agent: "Deployment AI",
    tasks: [
      "Building production bundle...",
      "Creating preview deployment...",
      "Checking health...",
      "Deployment ready...",
    ],
  },
];

export default function LiveOrchestration() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const progress = ((tick % 20) + 1) * 5;

  return (
    <section
      id="orchestration"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <div className="mb-14 text-center">
        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
          Live AI Orchestration
        </span>

        <h2 className="mt-6 text-5xl font-bold">
          Atlas Never Stops Working
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
          Every feature is designed, implemented,
          tested and prepared for deployment by a
          coordinated team of specialized AI
          engineers.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 shadow-2xl">

        <div className="flex items-center gap-2 border-b border-zinc-800 px-6 py-4">

          <div className="h-3 w-3 rounded-full bg-red-500" />

          <div className="h-3 w-3 rounded-full bg-yellow-500" />

          <div className="h-3 w-3 rounded-full bg-green-500" />

          <span className="ml-4 text-sm text-zinc-500">
            atlas://live-orchestration
          </span>
        </div>

        <div className="space-y-6 p-8">

          {steps.map((step, index) => (

            <div
              key={step.agent}
              className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5"
            >
              <div className="flex items-center justify-between">

                <div>

                  <h3 className="font-semibold text-lg">
                    {step.agent}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400">
                    {
                      step.tasks[
                        (tick + index) %
                          step.tasks.length
                      ]
                    }
                  </p>

                </div>

                <div className="flex items-center gap-2">

                  <span className="h-3 w-3 animate-pulse rounded-full bg-green-500" />

                  <span className="text-sm text-green-400">
                    Active
                  </span>

                </div>

              </div>
            </div>

          ))}

          <div className="mt-10">

            <div className="mb-3 flex justify-between">

              <span className="text-sm text-zinc-400">
                Overall Progress
              </span>

              <span className="font-semibold">
                {progress}%
              </span>

            </div>

            <div className="h-4 overflow-hidden rounded-full bg-zinc-800">

              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-1000"
                style={{
                  width: `${progress}%`,
                }}
              />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
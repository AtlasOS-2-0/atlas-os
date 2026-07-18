"use client";

import { pipelineStages } from "@/data/pipeline";

export default function Pipeline() {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 backdrop-blur-xl">

      <div className="border-b border-zinc-800 px-6 py-5">

        <h2 className="text-xl font-bold">
          Software Delivery Pipeline
        </h2>

        <p className="mt-2 text-sm text-zinc-400">
          Follow your project from idea to production.
        </p>

      </div>

      <div className="p-8">

        {pipelineStages.map((stage, index) => (

          <div
            key={stage.id}
            className="flex gap-5"
          >

            {/* Timeline */}

            <div className="flex flex-col items-center">

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-full border text-2xl ${
                  stage.status === "completed"
                    ? "border-green-500 bg-green-500/20"
                    : stage.status === "active"
                    ? "border-cyan-400 bg-cyan-500/20 animate-pulse"
                    : "border-zinc-700 bg-zinc-900"
                }`}
              >
                {stage.icon}
              </div>

              {index !== pipelineStages.length - 1 && (
                <div className="h-16 w-px bg-zinc-700" />
              )}

            </div>

            {/* Content */}

            <div className="flex-1 pb-10">

              <div className="flex items-center justify-between">

                <h3 className="text-lg font-semibold">
                  {stage.title}
                </h3>

                <span className="text-sm text-zinc-500">
                  {stage.progress}%
                </span>

              </div>

              <p className="mt-2 text-sm text-zinc-400">
                {stage.description}
              </p>

              <div className="mt-4 h-2 rounded-full bg-zinc-800">

                <div
                  className={`h-full rounded-full transition-all duration-700 ${
                    stage.status === "completed"
                      ? "bg-green-500"
                      : "bg-cyan-400"
                  }`}
                  style={{
                    width: `${stage.progress}%`,
                  }}
                />

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}
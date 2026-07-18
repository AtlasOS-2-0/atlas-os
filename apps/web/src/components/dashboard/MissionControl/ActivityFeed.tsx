"use client";

import { activity } from "@/data/activity";
import { CheckCircle2, Loader2, Clock3 } from "lucide-react";

export default function ActivityFeed() {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 backdrop-blur-xl">

      <div className="border-b border-zinc-800 px-6 py-5">

        <h2 className="text-xl font-bold">
          Live Activity
        </h2>

        <p className="mt-2 text-sm text-zinc-400">
          Every action performed by your AI engineering team.
        </p>

      </div>

      <div className="divide-y divide-zinc-800">

        {activity.map((item) => {

          let Icon = Clock3;
          let color = "text-zinc-400";

          if (item.type === "success") {
            Icon = CheckCircle2;
            color = "text-green-400";
          }

          if (item.type === "working") {
            Icon = Loader2;
            color = "text-cyan-400";
          }

          return (

            <div
              key={item.id}
              className="flex gap-4 p-5 transition hover:bg-zinc-900/40"
            >

              <div className={color}>
                <Icon
                  size={20}
                  className={
                    item.type === "working"
                      ? "animate-spin"
                      : ""
                  }
                />
              </div>

              <div className="flex-1">

                <div className="flex items-center justify-between">

                  <h3 className="font-medium">
                    {item.actor}
                  </h3>

                  <span className="text-xs text-zinc-500">
                    {item.time}
                  </span>

                </div>

                <p className="mt-2 text-sm text-zinc-400">
                  {item.message}
                </p>

              </div>

            </div>

          );

        })}

      </div>

    </div>
  );
}
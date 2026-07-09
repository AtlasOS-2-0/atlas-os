"use client";

import { useState } from "react";

import Sidebar from "@/components/layout/Sidebar";
import RecentProjects from "@/components/dashboard/RecentProjects";
import SystemHealth from "@/components/dashboard/SystemHealth";
import QuickActions from "@/components/dashboard/QuickActions";
import Topbar from "@/components/layout/Topbar";
import CommandPalette from "@/components/command/CommandPalette";

export default function Home() {
  const [agentStatus, setAgentStatus] = useState({
    architect: {
      status: "Idle ⚪",
      task: "Waiting...",
    },

    backend: {
      status: "Idle ⚪",
      task: "Waiting...",
    },

    frontend: {
      status: "Idle ⚪",
      task: "Waiting...",
    },
  });

  const [agentActivity, setAgentActivity] = useState(
    "Waiting for commands..."
  );

  return (
    <main className="min-h-screen bg-black text-white">
      <CommandPalette
        setAgentActivity={setAgentActivity}
        setAgentStatus={setAgentStatus}
      />

      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <section className="flex-1 overflow-auto p-8">
          <Topbar />

          <div className="grid gap-6 md:grid-cols-2">
            <RecentProjects />
            <SystemHealth />
            <QuickActions />
          </div>
        </section>

        {/* AI Hub */}
        <aside className="w-80 border-l border-gray-800 p-6">
          <h2 className="mb-6 text-2xl font-bold">
            AI Hub
          </h2>

          <div className="space-y-4">

            {/* Architect Agent */}
            <div className="rounded-lg border border-gray-700 p-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium">
                    Architect Agent
                  </div>

                  <div className="text-xs text-gray-500 mt-1">
                    {agentStatus.architect.task}
                  </div>
                </div>

                <div
                  className={
                    agentStatus.architect.status.includes("Active")
                      ? "text-green-400 font-semibold"
                      : "text-gray-400"
                  }
                >
                  {agentStatus.architect.status}
                </div>
              </div>
            </div>

            {/* Backend Agent */}
            <div className="rounded-lg border border-gray-700 p-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium">
                    Backend Agent
                  </div>

                  <div className="text-xs text-gray-500 mt-1">
                    {agentStatus.backend.task}
                  </div>
                </div>

                <div
                  className={
                    agentStatus.backend.status.includes("Active")
                      ? "text-green-400 font-semibold"
                      : "text-gray-400"
                  }
                >
                  {agentStatus.backend.status}
                </div>
              </div>
            </div>

            {/* Frontend Agent */}
            <div className="rounded-lg border border-gray-700 p-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium">
                    Frontend Agent
                  </div>

                  <div className="text-xs text-gray-500 mt-1">
                    {agentStatus.frontend.task}
                  </div>
                </div>

                <div
                  className={
                    agentStatus.frontend.status.includes("Active")
                      ? "text-green-400 font-semibold"
                      : "text-gray-400"
                  }
                >
                  {agentStatus.frontend.status}
                </div>
              </div>
            </div>
          </div>

          {/* Activity Feed */}
          <div className="mt-8 rounded-lg border border-blue-900 bg-blue-950/20 p-4">
            <h3 className="mb-2 font-semibold text-blue-400">
              Agent Activity
            </h3>

            <p className="text-sm text-gray-400">
              {agentActivity}
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
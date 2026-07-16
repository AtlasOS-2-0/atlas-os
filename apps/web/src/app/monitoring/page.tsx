"use client";

import { useEffect, useState } from "react";

interface MonitoringEvent {
  id: number;
  event: string;
  severity: string;
  time: string;
}

export default function MonitoringPage() {
  const [cpu, setCpu] = useState(24);
  const [memory, setMemory] = useState(42);
  const [requests, setRequests] = useState(118);
  const [uptime, setUptime] = useState(0);

  const [events, setEvents] = useState<
    MonitoringEvent[]
  >([]);

  useEffect(() => {
    const savedEvents =
      localStorage.getItem(
        "atlas-monitoring"
      );

    if (savedEvents) {
      setEvents(
        JSON.parse(savedEvents)
      );
    }

    const interval = setInterval(() => {
      setCpu(
        Math.floor(
          Math.random() * 50
        ) + 10
      );

      setMemory(
        Math.floor(
          Math.random() * 40
        ) + 30
      );

      setRequests(
        Math.floor(
          Math.random() * 200
        ) + 50
      );

      setUptime(
        (prev) => prev + 5
      );
    }, 5000);

    return () =>
      clearInterval(interval);
  }, []);

  const formatUptime = (
    seconds: number
  ) => {
    const hrs = Math.floor(
      seconds / 3600
    );

    const mins = Math.floor(
      (seconds % 3600) / 60
    );

    const secs =
      seconds % 60;

    return `${hrs}h ${mins}m ${secs}s`;
  };

  const defaultLogs = [
    "AI Architect generated project structure 🤖",
    "Frontend Agent updated workspace 🖥️",
    "Backend Agent health check passed 🟢",
    "Monitoring metrics refreshed 📊",
  ];

  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Monitoring
        </h1>

        <p className="mt-2 text-gray-400">
          Monitor system health, logs, metrics and AI agent performance.
        </p>
      </div>

      {/* Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-gray-800 bg-[#0B0F19] p-6">
          <div className="text-gray-400">
            CPU Usage
          </div>

          <div className="mt-3 text-4xl font-bold text-green-400">
            {cpu}%
          </div>
        </div>

        <div className="rounded-xl border border-gray-800 bg-[#0B0F19] p-6">
          <div className="text-gray-400">
            Memory Usage
          </div>

          <div className="mt-3 text-4xl font-bold text-blue-400">
            {memory}%
          </div>
        </div>

        <div className="rounded-xl border border-gray-800 bg-[#0B0F19] p-6">
          <div className="text-gray-400">
            Requests/sec
          </div>

          <div className="mt-3 text-4xl font-bold text-purple-400">
            {requests}
          </div>
        </div>

        <div className="rounded-xl border border-gray-800 bg-[#0B0F19] p-6">
          <div className="text-gray-400">
            Uptime
          </div>

          <div className="mt-3 text-2xl font-bold text-yellow-400">
            {formatUptime(
              uptime
            )}
          </div>
        </div>
      </div>

      {/* System Health */}
      <div className="mt-8 rounded-xl border border-gray-800 bg-[#0B0F19] p-6">
        <h2 className="mb-4 text-2xl font-bold">
          System Health
        </h2>

        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-green-500"></div>

          <span className="font-semibold text-green-400">
            All Systems Operational
          </span>
        </div>
      </div>

      {/* Dynamic Events */}
      <div className="mt-8 rounded-xl border border-gray-800 bg-[#0B0F19] p-6">
        <h2 className="mb-6 text-2xl font-bold">
          Deployment Events
        </h2>

        {events.length === 0 ? (
          <div className="text-gray-500">
            No monitoring events yet.
          </div>
        ) : (
          <div className="space-y-4">
            {events.map(
              (event) => (
                <div
                  key={event.id}
                  className="rounded-lg border border-gray-700 p-4"
                >
                  <div className="font-semibold text-blue-400">
                    {event.event}
                  </div>

                  <div className="mt-1 text-sm text-gray-500">
                    {event.time}
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>

      {/* Static Logs */}
      <div className="mt-8 rounded-xl border border-gray-800 bg-[#0B0F19] p-6">
        <h2 className="mb-6 text-2xl font-bold">
          Recent Logs
        </h2>

        <div className="space-y-4">
          {defaultLogs.map(
            (
              log,
              index
            ) => (
              <div
                key={index}
                className="rounded-lg border border-gray-700 p-4 text-gray-300"
              >
                {log}
              </div>
            )
          )}
        </div>
      </div>

      {/* AI Agents */}
      <div className="mt-8 rounded-xl border border-gray-800 bg-[#0B0F19] p-6">
        <h2 className="mb-6 text-2xl font-bold">
          AI Agent Performance
        </h2>

        <div className="space-y-4">
          <div className="flex justify-between">
            <span>
              Architect Agent
            </span>

            <span className="text-green-400">
              99.9% uptime
            </span>
          </div>

          <div className="flex justify-between">
            <span>
              Backend Agent
            </span>

            <span className="text-green-400">
              99.7% uptime
            </span>
          </div>

          <div className="flex justify-between">
            <span>
              Frontend Agent
            </span>

            <span className="text-green-400">
              99.8% uptime
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
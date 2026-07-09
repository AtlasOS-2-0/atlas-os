"use client";

import { useEffect, useState } from "react";

interface AgentState {
  status: string;
  task: string;
}

interface CommandPaletteProps {
  setAgentActivity: React.Dispatch<React.SetStateAction<string>>;
  setAgentStatus: React.Dispatch<
    React.SetStateAction<{
      architect: AgentState;
      backend: AgentState;
      frontend: AgentState;
    }>
  >;
}

export default function CommandPalette({
  setAgentActivity,
  setAgentStatus,
}: CommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }

      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const commands = [
    {
      name: "Create Project",
      action: () => {
        setAgentActivity(
          "Project creation wizard initialized 🚀"
        );

        setAgentStatus({
          architect: {
            status: "Idle ⚪",
            task: "Waiting for project requirements",
          },
          backend: {
            status: "Idle ⚪",
            task: "Waiting for architecture",
          },
          frontend: {
            status: "Idle ⚪",
            task: "Waiting for UI requirements",
          },
        });
      },
    },

    {
      name: "Open Workspace",
      action: () => {
        setAgentActivity(
          "Frontend Agent opened workspace successfully 📂"
        );

        setAgentStatus({
          architect: {
            status: "Idle ⚪",
            task: "Waiting...",
          },
          backend: {
            status: "Idle ⚪",
            task: "Waiting...",
          },
          frontend: {
            status: "Active 🟢",
            task: "Loading workspace environment",
          },
        });
      },
    },

    {
      name: "Ask Architect Agent",
      action: () => {
        setAgentActivity(
          "Architect Agent activated and preparing system design 🤖"
        );

        setAgentStatus({
          architect: {
            status: "Active 🟢",
            task: "Designing project architecture",
          },
          backend: {
            status: "Idle ⚪",
            task: "Waiting for API contracts",
          },
          frontend: {
            status: "Idle ⚪",
            task: "Waiting for component specifications",
          },
        });
      },
    },

    {
      name: "Open Terminal",
      action: () => {
        setAgentActivity(
          "Backend Agent prepared terminal environment 💻"
        );

        setAgentStatus({
          architect: {
            status: "Idle ⚪",
            task: "Waiting...",
          },
          backend: {
            status: "Active 🟢",
            task: "Preparing development environment",
          },
          frontend: {
            status: "Idle ⚪",
            task: "Waiting...",
          },
        });
      },
    },

    {
      name: "Deploy Application",
      action: () => {
        setAgentActivity(
          "Deployment pipeline started 🚀"
        );

        setAgentStatus({
          architect: {
            status: "Idle ⚪",
            task: "Reviewing deployment",
          },
          backend: {
            status: "Active 🟢",
            task: "Deploying backend services",
          },
          frontend: {
            status: "Active 🟢",
            task: "Deploying frontend application",
          },
        });
      },
    },

    {
      name: "View Logs",
      action: () => {
        setAgentActivity(
          "Collecting logs from all active agents 📜"
        );

        setAgentStatus({
          architect: {
            status: "Idle ⚪",
            task: "Reviewing logs",
          },
          backend: {
            status: "Idle ⚪",
            task: "Reviewing logs",
          },
          frontend: {
            status: "Idle ⚪",
            task: "Reviewing logs",
          },
        });
      },
    },
  ];

  const filteredCommands = commands.filter((command) =>
    command.name.toLowerCase().includes(query.toLowerCase())
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 pt-32">
      <div className="w-[700px] rounded-2xl border border-gray-800 bg-[#0B0F19] shadow-2xl">
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type a command..."
          className="w-full border-b border-gray-800 bg-transparent p-5 text-lg outline-none"
        />

        <div className="p-2">
          {filteredCommands.map((command) => (
            <button
              key={command.name}
              onClick={() => {
                command.action();
                setOpen(false);
                setQuery("");
              }}
              className="w-full rounded-lg px-4 py-3 text-left transition hover:bg-gray-800"
            >
              {command.name}
            </button>
          ))}

          {filteredCommands.length === 0 && (
            <div className="p-4 text-center text-gray-400">
              No commands found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
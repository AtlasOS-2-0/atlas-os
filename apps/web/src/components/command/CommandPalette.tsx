"use client";

import { useEffect, useState } from "react";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }

      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!open) return null;
const commands = [
  {
    name: "Create Project",
    action: () => alert("Project creation coming soon 🚀"),
  },
  {
    name: "Open Workspace",
    action: () => alert("Workspace opened 📂"),
  },
  {
    name: "Ask Architect Agent",
    action: () => alert("Architect Agent activated 🤖"),
  },
  {
    name: "Open Terminal",
    action: () => alert("Terminal launching 💻"),
  },
  {
    name: "Deploy Application",
    action: () => alert("Deployment pipeline started 🚀"),
  },
  {
    name: "View Logs",
    action: () => alert("Fetching logs 📜"),
  },
];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 pt-32">
      <div className="w-[700px] rounded-2xl border border-gray-800 bg-[#0B0F19] shadow-2xl">
        <input
          autoFocus
          placeholder="Type a command..."
          className="w-full border-b border-gray-800 bg-transparent p-5 text-lg outline-none"
        />

          <div className="p-2">
  {commands.map((command) => (
    <button
      key={command.name}
      onClick={() => {
        command.action();
        setOpen(false);
      }}
      className="w-full rounded-lg px-4 py-3 text-left transition hover:bg-gray-800"
    >
      {command.name}
    </button>
     ))}
      </div>
      </div>
    </div>
  );
}
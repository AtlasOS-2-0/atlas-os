"use client";

import { useState } from "react";

interface Command {
  input: string;
  output: string;
}

export default function TerminalPage() {
  const [history, setHistory] = useState<Command[]>([
    {
      input: "",
      output:
        "Atlas Terminal v1.0 initialized 🚀",
    },
  ]);

  const [command, setCommand] =
    useState("");

  const executeCommand = () => {
    if (!command.trim()) return;

    let output = "Command not found.";

    switch (command.toLowerCase()) {
      case "help":
        output =
          "Available commands:\nhelp\nclear\nstatus\nagents\nprojects";
        break;

      case "status":
        output =
          "Atlas OS running normally ✅";
        break;

      case "agents":
        output =
          "Architect 🟢\nBackend 🟢\nFrontend 🟢";
        break;

      case "projects":
        output =
          localStorage.getItem(
            "atlas-projects"
          ) || "No projects found.";
        break;

      case "clear":
        setHistory([]);
        setCommand("");
        return;
    }

    setHistory((prev) => [
      ...prev,
      {
        input: command,
        output,
      },
    ]);

    setCommand("");
  };

  return (
    <main className="min-h-screen bg-black p-8 text-green-400 font-mono">
      <h1 className="mb-6 text-3xl font-bold text-white">
        Atlas Terminal
      </h1>

      <div className="rounded-xl border border-gray-800 bg-[#0B0F19] p-6 min-h-[600px]">
        <div className="space-y-4">
          {history.map((entry, index) => (
            <div key={index}>
              {entry.input && (
                <div>
                  <span className="text-blue-400">
                    atlas@os:~$
                  </span>{" "}
                  {entry.input}
                </div>
              )}

              <pre className="whitespace-pre-wrap text-gray-300">
                {entry.output}
              </pre>
            </div>
          ))}

          <div className="flex gap-2">
            <span className="text-blue-400">
              atlas@os:~$
            </span>

            <input
              value={command}
              onChange={(e) =>
                setCommand(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  executeCommand();
                }
              }}
              className="flex-1 bg-transparent outline-none"
              autoFocus
            />
          </div>
        </div>
      </div>
    </main>
  );
}
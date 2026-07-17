"use client";

import { useState } from "react";

interface Message {
  role: "user" | "agent";
  content: string;
}

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "agent",
      content:
        "Atlas AI ready. Describe what you want to build.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] =
    useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userInput = input;
    const currentProject =
      JSON.parse(
        localStorage.getItem(
          "atlas-current-project"
        ) || "null"
      );

    const allFiles =
      JSON.parse(
        localStorage.getItem(
          "atlas-files"
        ) || "{}"
      );

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userInput,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const currentFile =
        localStorage.getItem(
          "atlas-current-file"
        );

      let prompt = userInput;

      if (currentProject && currentFile) {
        const files = JSON.parse(
          localStorage.getItem(
            "atlas-files"
          ) || "{}"
        );

        const fileContent =
          files[currentProject.name]?.[
          currentFile
          ];

        if (fileContent) {
          prompt = `
Current file: ${currentFile}

Current content:
${fileContent}

User request:
${userInput}

Return ONLY the updated file using this format:

FILE: ${currentFile}
<updated code>
`;
        }
      }
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });

      const data = await res.json();

      let response =
        data.response ||
        "Atlas AI could not generate a response.";

      console.log(
        "RAW RESPONSE:",
        response
      );



      if (currentProject) {
        if (!allFiles[currentProject.name]) {
          allFiles[currentProject.name] = {};
        }
        let createdCount = 0;
        let updatedCount = 0;

        const parts = response.split("FILE:");

        parts.forEach((part: string) => {
          const trimmed = part.trim();

          if (!trimmed) return;

          const lines = trimmed.split("\n");

          const filename = lines[0].trim();

          const content = lines
            .slice(1)
            .join("\n")
            .trim();

          if (filename && content) {
            const existed =
              !!allFiles[currentProject.name][filename];

            allFiles[currentProject.name][filename] =
              content;

            if (existed) {
              updatedCount++;
            } else {
              createdCount++;
            }
          }
        });

        localStorage.setItem(
          "atlas-files",
          JSON.stringify(allFiles)
        );
        window.dispatchEvent(
          new Event("atlas-files-updated")
        );

        console.log(
          "SAVED FILES:",
          allFiles
        );

        if (createdCount > 0 && updatedCount > 0) {
          response =
            `Created ${createdCount} files and updated ${updatedCount} files 🚀`;
        }
        else if (createdCount > 0) {
          response =
            `Created ${createdCount} files successfully 🚀`;
        }
        else if (updatedCount > 0) {
          response =
            `Updated ${updatedCount} files successfully 🚀`;
        }
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "agent",
          content: response,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "agent",
          content:
            "Atlas AI failed to generate files.",
        },
      ]);
    }

    setLoading(false);
  };
  return (
    <div className="rounded-xl border border-gray-800 bg-[#0B0F19] p-6">
      <h2 className="mb-4 text-2xl font-bold">
        AI Assistant
      </h2>

      <div className="mb-4 h-80 space-y-3 overflow-y-auto">
        {messages.map(
          (message, index) => (
            <div
              key={index}
              className={`rounded-lg p-3 ${message.role ===
                "user"
                ? "bg-blue-600"
                : "bg-gray-900"
                }`}
            >
              {
                message.content
              }
            </div>
          )
        )}

        {loading && (
          <div className="rounded-lg bg-gray-900 p-3 text-gray-400">
            Atlas AI is thinking...
          </div>
        )}
      </div>

      <div className="flex gap-3">
        <input
          value={input}
          onChange={(e) =>
            setInput(
              e.target.value
            )
          }
          placeholder="Ask Atlas AI..."
          className="flex-1 rounded-lg border border-gray-800 bg-black p-3 outline-none"
          onKeyDown={(e) => {
            if (
              e.key === "Enter"
            ) {
              sendMessage();
            }
          }}
        />

        <button
          onClick={
            sendMessage
          }
          disabled={loading}
          className="rounded-lg bg-blue-600 px-6 transition hover:bg-blue-500 disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
}
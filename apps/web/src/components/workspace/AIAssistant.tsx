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

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input,
    };

    let response =
      "Architect Agent is analyzing your request.";

    if (
      input.toLowerCase().includes("login") ||
      input.toLowerCase().includes("auth")
    ) {
      response =
        "Frontend Agent: Creating login components.\nBackend Agent: Generating authentication APIs.";
    }

    if (
      input.toLowerCase().includes("dashboard")
    ) {
      response =
        "Architect Agent: Designing dashboard layout.\nFrontend Agent: Preparing UI components.";
    }

    setMessages((prev) => [
      ...prev,
      userMessage,
      {
        role: "agent",
        content: response,
      },
    ]);

    setInput("");
  };

  return (
    <div className="rounded-xl border border-gray-800 bg-[#0B0F19] p-6">
      <h2 className="mb-4 text-2xl font-bold">
        AI Assistant
      </h2>

      <div className="mb-4 h-80 overflow-y-auto space-y-3">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`rounded-lg p-3 ${
              message.role === "user"
                ? "bg-blue-600"
                : "bg-gray-900"
            }`}
          >
            {message.content}
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <input
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          placeholder="Ask Atlas AI..."
          className="flex-1 rounded-lg border border-gray-800 bg-black p-3 outline-none"
        />

        <button
          onClick={sendMessage}
          className="rounded-lg bg-blue-600 px-6 hover:bg-blue-500"
        >
          Send
        </button>
      </div>
    </div>
  );
}
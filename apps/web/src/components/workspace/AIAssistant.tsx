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

    const userMessage: Message = {
      role: "user",
      content: userInput,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setInput("");
    setLoading(true);

    try {
      const res = await fetch(
        "/api/ai",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            prompt: userInput,
          }),
        }
      );

      const data = await res.json();

      let response =
        data.response ||
        "Atlas AI could not generate a response.";

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

      // Local file generation fallback
      if (
        currentProject &&
        (
          userInput
            .toLowerCase()
            .includes("login") ||
          userInput
            .toLowerCase()
            .includes("auth")
        )
      ) {
        if (
          !allFiles[
            currentProject.name
          ]
        ) {
          allFiles[
            currentProject.name
          ] = {};
        }

        allFiles[
          currentProject.name
        ]["auth.py"] = `
from fastapi import APIRouter

router = APIRouter()

@router.post("/login")
async def login():
    return {
        "message": "Login successful"
    }
`;

        allFiles[
          currentProject.name
        ]["jwt_service.py"] = `
SECRET_KEY = "atlas-secret-key"
ALGORITHM = "HS256"
`;

        localStorage.setItem(
          "atlas-files",
          JSON.stringify(
            allFiles
          )
        );

        response +=
          "\n\nGenerated files:\n- auth.py\n- jwt_service.py";
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "agent",
          content: response,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "agent",
          content:
            "Atlas AI failed to connect to Gemini.",
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
              className={`rounded-lg p-3 ${
                message.role ===
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
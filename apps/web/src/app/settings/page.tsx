"use client";

import { useEffect, useState } from "react";

export default function SettingsPage() {
  const [username, setUsername] =
    useState("Atlas Developer");

  const [theme, setTheme] =
    useState("Dark");

  const [defaultStack, setDefaultStack] =
    useState("Next.js");

  const [architectAgent, setArchitectAgent] =
    useState(true);

  const [backendAgent, setBackendAgent] =
    useState(true);

  const [frontendAgent, setFrontendAgent] =
    useState(true);

  useEffect(() => {
    const savedSettings =
      localStorage.getItem("atlas-settings");

    if (savedSettings) {
      const parsed =
        JSON.parse(savedSettings);

      setUsername(parsed.username);
      setTheme(parsed.theme);
      setDefaultStack(
        parsed.defaultStack
      );
      setArchitectAgent(
        parsed.architectAgent
      );
      setBackendAgent(
        parsed.backendAgent
      );
      setFrontendAgent(
        parsed.frontendAgent
      );
    }
  }, []);

  const saveSettings = () => {
    localStorage.setItem(
      "atlas-settings",
      JSON.stringify({
        username,
        theme,
        defaultStack,
        architectAgent,
        backendAgent,
        frontendAgent,
      })
    );

    alert(
      "Settings saved successfully ✅"
    );
  };

  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Settings
        </h1>

        <p className="mt-2 text-gray-400">
          Configure Atlas OS preferences
          and environment settings.
        </p>
      </div>

      <div className="space-y-8">
        {/* General */}
        <div className="rounded-xl border border-gray-800 bg-[#0B0F19] p-6">
          <h2 className="mb-6 text-2xl font-bold">
            General
          </h2>

          <div className="space-y-4">
            <input
              value={username}
              onChange={(e) =>
                setUsername(
                  e.target.value
                )
              }
              placeholder="Username"
              className="w-full rounded-lg border border-gray-700 bg-black p-3"
            />

            <select
              value={theme}
              onChange={(e) =>
                setTheme(
                  e.target.value
                )
              }
              className="w-full rounded-lg border border-gray-700 bg-black p-3"
            >
              <option>Dark</option>
              <option>Light</option>
            </select>

            <select
              value={defaultStack}
              onChange={(e) =>
                setDefaultStack(
                  e.target.value
                )
              }
              className="w-full rounded-lg border border-gray-700 bg-black p-3"
            >
              <option>Next.js</option>
              <option>React</option>
              <option>FastAPI</option>
              <option>Spring Boot</option>
            </select>
          </div>
        </div>

        {/* AI Agents */}
        <div className="rounded-xl border border-gray-800 bg-[#0B0F19] p-6">
          <h2 className="mb-6 text-2xl font-bold">
            AI Agents
          </h2>

          <div className="space-y-4">
            <label className="flex justify-between">
              <span>
                Architect Agent
              </span>

              <input
                type="checkbox"
                checked={
                  architectAgent
                }
                onChange={() =>
                  setArchitectAgent(
                    !architectAgent
                  )
                }
              />
            </label>

            <label className="flex justify-between">
              <span>
                Backend Agent
              </span>

              <input
                type="checkbox"
                checked={
                  backendAgent
                }
                onChange={() =>
                  setBackendAgent(
                    !backendAgent
                  )
                }
              />
            </label>

            <label className="flex justify-between">
              <span>
                Frontend Agent
              </span>

              <input
                type="checkbox"
                checked={
                  frontendAgent
                }
                onChange={() =>
                  setFrontendAgent(
                    !frontendAgent
                  )
                }
              />
            </label>
          </div>
        </div>

        {/* Save */}
        <button
          onClick={saveSettings}
          className="rounded-lg bg-blue-600 px-8 py-3 font-semibold transition hover:bg-blue-500"
        >
          Save Settings
        </button>
      </div>
    </main>
  );
}
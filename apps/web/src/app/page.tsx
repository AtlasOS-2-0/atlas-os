"use client";

import { useEffect, useState } from "react";

import Sidebar from "@/components/layout/Sidebar";
import RecentProjects from "@/components/dashboard/RecentProjects";
import SystemHealth from "@/components/dashboard/SystemHealth";
import QuickActions from "@/components/dashboard/QuickActions";
import Topbar from "@/components/layout/Topbar";
import CommandPalette from "@/components/command/CommandPalette";
import CreateProjectModal, {
  Project,
} from "@/components/projects/CreateProjectModal";

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

  const [createProjectOpen, setCreateProjectOpen] =
    useState(false);

  const [projects, setProjects] = useState<Project[]>([]);

  const [isLoaded, setIsLoaded] =
    useState(false);

  // Load projects from localStorage
  useEffect(() => {
    const savedProjects =
      localStorage.getItem("atlas-projects");

    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    } else {
      setProjects([
        {
          name: "Atlas API",
          type: "Backend API",
          stack: "FastAPI",
          status: "Planning",
          files: [
            "README.md",
            "requirements.txt",
            "src/",
            "api/",
          ],
        },

        {
          name: "Atlas UI",
          type: "Frontend Application",
          stack: "Next.js",
          status: "Planning",
          files: [
            "README.md",
            "package.json",
            "src/",
            "public/",
          ],
        },

        {
          name: "AI Orchestrator",
          type: "AI Service",
          stack: "Python",
          status: "Planning",
          files: [
            "README.md",
            "model.py",
            "inference.py",
            "requirements.txt",
          ],
        },
      ]);
    }

    setIsLoaded(true);
  }, []);

  // Save projects only after first load
  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(
      "atlas-projects",
      JSON.stringify(projects)
    );
  }, [projects, isLoaded]);

  return (
    <main className="min-h-screen bg-black text-white">
      <CommandPalette
        setAgentActivity={setAgentActivity}
        setAgentStatus={setAgentStatus}
      />

      <CreateProjectModal
        open={createProjectOpen}
        onClose={() =>
          setCreateProjectOpen(false)
        }
        onCreateProject={(project) => {
          setProjects((prev) => [
            project,
            ...prev,
          ]);

          setAgentActivity(
            `Project "${project.name}" created successfully 🚀`
          );

          // Frontend App
          if (
            project.type ===
            "Frontend Application"
          ) {
            setAgentStatus({
              architect: {
                status: "Active 🟢",
                task: "Designing frontend architecture",
              },

              backend: {
                status: "Idle ⚪",
                task: "Not required for this project",
              },

              frontend: {
                status: "Active 🟢",
                task: `Building ${project.stack} interface`,
              },
            });
          }

          // Backend API
          else if (
            project.type === "Backend API"
          ) {
            setAgentStatus({
              architect: {
                status: "Active 🟢",
                task: "Designing API architecture",
              },

              backend: {
                status: "Active 🟢",
                task: `Generating ${project.stack} services`,
              },

              frontend: {
                status: "Idle ⚪",
                task: "Waiting for API completion",
              },
            });
          }

          // Full Stack
          else if (
            project.type ===
            "Full Stack Application"
          ) {
            setAgentStatus({
              architect: {
                status: "Active 🟢",
                task: "Preparing full system design",
              },

              backend: {
                status: "Active 🟢",
                task: `Building ${project.stack} backend`,
              },

              frontend: {
                status: "Active 🟢",
                task: `Building ${project.stack} frontend`,
              },
            });
          }

          // AI Service
          else if (
            project.type === "AI Service"
          ) {
            setAgentStatus({
              architect: {
                status: "Active 🟢",
                task: "Designing AI workflow",
              },

              backend: {
                status: "Active 🟢",
                task: `Preparing ${project.stack} inference service`,
              },

              frontend: {
                status: "Idle ⚪",
                task: "Waiting for AI endpoints",
              },
            });
          }
        }}
      />

      <div className="flex h-screen">
        <Sidebar />

        <section className="flex-1 overflow-auto p-8">
          <Topbar />

          <div className="grid gap-6 md:grid-cols-2">
            <RecentProjects
              projects={projects}
            />

            <SystemHealth />

            <QuickActions
              onCreateProject={() =>
                setCreateProjectOpen(true)
              }
            />
          </div>
        </section>

        <aside className="w-80 border-l border-gray-800 p-6">
          <h2 className="mb-6 text-2xl font-bold">
            AI Hub
          </h2>

          <div className="space-y-4">
            {Object.entries(agentStatus).map(
              ([name, data]) => (
                <div
                  key={name}
                  className="rounded-lg border border-gray-700 p-4"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium capitalize">
                        {name} Agent
                      </div>

                      <div className="mt-1 text-xs text-gray-500">
                        {data.task}
                      </div>
                    </div>

                    <div
                      className={
                        data.status.includes(
                          "Active"
                        )
                          ? "text-green-400 font-semibold"
                          : "text-gray-400"
                      }
                    >
                      {data.status}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>

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
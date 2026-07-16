"use client";

import { useEffect, useState } from "react";
import { Project } from "@/components/projects/CreateProjectModal";
import AIAssistant from "@/components/workspace/AIAssistant";
import { useRouter } from "next/navigation";

export default function WorkspacePage() {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);


  useEffect(() => {
    const savedProjects = localStorage.getItem(
      "atlas-projects"
    );

    const currentProject = localStorage.getItem(
      "atlas-current-project"
    );

    if (savedProjects) {
      const parsedProjects: Project[] =
        JSON.parse(savedProjects);

      setProjects(parsedProjects);

      if (currentProject) {
        setSelectedProject(
          JSON.parse(currentProject)
        );
      } else if (parsedProjects.length > 0) {
        setSelectedProject(parsedProjects[0]);
      }
    }
  }, []);

  const changeProject = (project: Project) => {
    setSelectedProject(project);

    localStorage.setItem(
      "atlas-current-project",
      JSON.stringify(project)
    );
  };

  const architectActive = true;

  const backendActive =
    selectedProject?.type === "Backend API" ||
    selectedProject?.type ===
    "Full Stack Application" ||
    selectedProject?.type === "AI Service";

  const frontendActive =
    selectedProject?.type ===
    "Frontend Application" ||
    selectedProject?.type ===
    "Full Stack Application";

  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">
            Workspace
          </h1>

          <p className="mt-2 text-gray-400">
            Project development environment
          </p>
        </div>

        <select
          value={selectedProject?.name || ""}
          onChange={(e) => {
            const project = projects.find(
              (p) => p.name === e.target.value
            );

            if (project) {
              changeProject(project);
            }
          }}
          className="rounded-lg border border-gray-800 bg-[#0B0F19] p-3"
        >
          {projects.map((project) => (
            <option
              key={project.name}
              value={project.name}
            >
              {project.name}
            </option>
          ))}
        </select>
      </div>

      {!selectedProject ? (
        <div className="rounded-xl border border-gray-800 p-8 text-center text-gray-500">
          No project selected.
        </div>
      ) : (
        <>
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Project Info */}
            <div className="rounded-xl border border-gray-800 bg-[#0B0F19] p-6">
              <h2 className="mb-4 text-2xl font-bold">
                Project Info
              </h2>

              <div className="space-y-3 text-gray-300">
                <div>
                  <span className="text-gray-500">
                    Name:
                  </span>{" "}
                  {selectedProject.name}
                </div>

                <div>
                  <span className="text-gray-500">
                    Type:
                  </span>{" "}
                  {selectedProject.type}
                </div>

                <div>
                  <span className="text-gray-500">
                    Stack:
                  </span>{" "}
                  {selectedProject.stack}
                </div>

                <div>
                  <span className="text-gray-500">
                    Status:
                  </span>{" "}
                  {selectedProject.status}
                </div>

                <div>
                  <span className="text-gray-500">
                    Files:
                  </span>{" "}
                  {selectedProject.files?.length || 0}
                </div>
              </div>
            </div>

            {/* File Explorer */}
            <div className="rounded-xl border border-gray-800 bg-[#0B0F19] p-6">
              <h2 className="mb-4 text-2xl font-bold">
                File Explorer
              </h2>

              {selectedProject.files &&
                selectedProject.files.length > 0 ? (
                <div className="space-y-2 text-gray-400">
                  {[
                    ...(selectedProject.files || []),
                    ...Object.keys(
                      JSON.parse(
                        localStorage.getItem(
                          "atlas-files"
                        ) || "{}"
                      )?.[selectedProject.name] || {}
                    ),
                  ].map(
                    (file, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          if (!file.endsWith("/")) {
                            localStorage.setItem(
                              "atlas-current-file",
                              file
                            );

                            router.push(
                              "/workspace/editor"
                            );
                          }
                        }}
                        className="cursor-pointer rounded-lg p-2 hover:bg-gray-800"
                      >
                        {file.endsWith("/")
                          ? `📁 ${file}`
                          : `📄 ${file}`}
                      </div>
                    )
                  )}
                </div>
              ) : (
                <div className="text-gray-500">
                  No files available for this project.
                </div>
              )}
            </div>

            {/* Active Agents */}
            <div className="rounded-xl border border-gray-800 bg-[#0B0F19] p-6">
              <h2 className="mb-4 text-2xl font-bold">
                Active Agents
              </h2>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Architect Agent</span>
                  <span className="text-green-400">
                    🟢 Active
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Backend Agent</span>

                  <span
                    className={
                      backendActive
                        ? "text-green-400"
                        : "text-gray-400"
                    }
                  >
                    {backendActive
                      ? "🟢 Active"
                      : "⚪ Idle"}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Frontend Agent</span>

                  <span
                    className={
                      frontendActive
                        ? "text-green-400"
                        : "text-gray-400"
                    }
                  >
                    {frontendActive
                      ? "🟢 Active"
                      : "⚪ Idle"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* AI Assistant */}
          <div className="mt-6">
            <AIAssistant />
          </div>

        </>
      )}
    </main>
  );
}
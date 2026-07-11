"use client";

import { useEffect, useState } from "react";
import { Project } from "@/components/projects/CreateProjectModal";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const savedProjects = localStorage.getItem(
      "atlas-projects"
    );

    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
  }, []);

  const deleteProject = (projectName: string) => {
    const updatedProjects = projects.filter(
      (project) => project.name !== projectName
    );

    setProjects(updatedProjects);

    localStorage.setItem(
      "atlas-projects",
      JSON.stringify(updatedProjects)
    );
  };

  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Projects
        </h1>

        <p className="mt-2 text-gray-400">
          Manage all Atlas OS projects here.
        </p>
      </div>

      {projects.length === 0 ? (
        <div className="rounded-xl border border-gray-800 p-8 text-center text-gray-500">
          No projects found.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.name}
              className="rounded-xl border border-gray-800 bg-[#0B0F19] p-6 transition hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <h2 className="text-xl font-semibold">
                {project.name}
              </h2>

              <div className="mt-4 space-y-2 text-sm text-gray-400">
                <p>
                  Type:
                  <span className="ml-2 text-purple-400">
                    {project.type}
                  </span>
                </p>

                <p>
                  Stack:
                  <span className="ml-2 text-blue-400">
                    {project.stack}
                  </span>
                </p>

                <p>
                  Status:
                  <span className="ml-2 text-yellow-400">
                    {project.status}
                  </span>
                </p>

                <p>
                  Created by:
                  <span className="ml-2 text-green-400">
                    Atlas OS
                  </span>
                </p>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  className="flex-1 rounded-lg bg-blue-600 py-2 transition hover:bg-blue-500"
                >
                  Open
                </button>

                <button
                  onClick={() =>
                    deleteProject(project.name)
                  }
                  className="rounded-lg bg-red-600 px-4 py-2 transition hover:bg-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
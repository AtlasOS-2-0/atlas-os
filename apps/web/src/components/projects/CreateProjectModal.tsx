"use client";

import { useState } from "react";

export interface Project {
  name: string;
  type: string;
  stack: string;
  status: string;
}

interface CreateProjectModalProps {
  open: boolean;
  onClose: () => void;
  onCreateProject: (project: Project) => void;
}

export default function CreateProjectModal({
  open,
  onClose,
  onCreateProject,
}: CreateProjectModalProps) {
  const [projectName, setProjectName] = useState("");
  const [projectType, setProjectType] = useState(
    "Frontend Application"
  );
  const [stack, setStack] = useState("Next.js");

  if (!open) return null;

  const handleCreate = () => {
    if (!projectName.trim()) return;

    onCreateProject({
      name: projectName,
      type: projectType,
      stack,
      status: "Planning",
    });

    setProjectName("");
    setProjectType("Frontend Application");
    setStack("Next.js");

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="w-[600px] rounded-2xl border border-gray-800 bg-[#0B0F19] p-8 shadow-2xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">
            Create Project
          </h2>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          <input
            value={projectName}
            onChange={(e) =>
              setProjectName(e.target.value)
            }
            placeholder="Project Name"
            className="w-full rounded-lg border border-gray-800 bg-black p-3 outline-none focus:border-blue-500"
          />

          <select
            value={projectType}
            onChange={(e) =>
              setProjectType(e.target.value)
            }
            className="w-full rounded-lg border border-gray-800 bg-black p-3"
          >
            <option>Frontend Application</option>
            <option>Backend API</option>
            <option>Full Stack Application</option>
            <option>AI Service</option>
          </select>

          <select
            value={stack}
            onChange={(e) =>
              setStack(e.target.value)
            }
            className="w-full rounded-lg border border-gray-800 bg-black p-3"
          >
            <option>Next.js</option>
            <option>React</option>
            <option>Express</option>
            <option>FastAPI</option>
            <option>Spring Boot</option>
          </select>

          <button
            onClick={handleCreate}
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold transition hover:bg-blue-500"
          >
            Create Project
          </button>
        </div>
      </div>
    </div>
  );
}
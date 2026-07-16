"use client";

import { useEffect, useState } from "react";

interface Deployment {
  id: number;
  project: string;
  environment: string;
  status: string;
  time: string;
}

export default function DeploymentsPage() {
  const [deployments, setDeployments] =
    useState<Deployment[]>([]);

  const [loaded, setLoaded] =
    useState(false);

  const [selectedProject, setSelectedProject] =
    useState("");

  const [environment, setEnvironment] =
    useState("Development");

  // Load deployments
  useEffect(() => {
    const savedDeployments =
      localStorage.getItem(
        "atlas-deployments"
      );

    if (savedDeployments) {
      setDeployments(
        JSON.parse(savedDeployments)
      );
    }

    setLoaded(true);
  }, []);

  // Save deployments only after initial load
  useEffect(() => {
    if (!loaded) return;

    localStorage.setItem(
      "atlas-deployments",
      JSON.stringify(deployments)
    );
  }, [deployments, loaded]);

  const deployProject = () => {
    if (!selectedProject.trim()) return;

    const deployment: Deployment = {
      id: Date.now(),
      project: selectedProject,
      environment,
      status: "Deploying 🚀",
      time: new Date().toLocaleString(),
    };

    setDeployments((prev) => [
      deployment,
      ...prev,
    ]);

    setTimeout(() => {
      setDeployments((prev) =>
        prev.map((item) =>
          item.id === deployment.id
            ? {
                ...item,
                status: "Success ✅",
              }
            : item
        )
      );
    }, 3000);

    setSelectedProject("");
  };

  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Deployments
        </h1>

        <p className="mt-2 text-gray-400">
          Deploy and track Atlas OS applications.
        </p>
      </div>

      {/* Deployment Form */}
      <div className="mb-8 rounded-xl border border-gray-800 bg-[#0B0F19] p-6">
        <h2 className="mb-4 text-2xl font-bold">
          New Deployment
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          <input
            value={selectedProject}
            onChange={(e) =>
              setSelectedProject(
                e.target.value
              )
            }
            placeholder="Project Name"
            className="rounded-lg border border-gray-700 bg-black p-3 outline-none focus:border-blue-500"
          />

          <select
            value={environment}
            onChange={(e) =>
              setEnvironment(
                e.target.value
              )
            }
            className="rounded-lg border border-gray-700 bg-black p-3"
          >
            <option>
              Development
            </option>

            <option>
              Staging
            </option>

            <option>
              Production
            </option>
          </select>

          <button
            onClick={deployProject}
            className="rounded-lg bg-blue-600 p-3 font-semibold transition hover:bg-blue-500"
          >
            Deploy Project
          </button>
        </div>
      </div>

      {/* Deployment History */}
      <div className="rounded-xl border border-gray-800 bg-[#0B0F19] p-6">
        <h2 className="mb-6 text-2xl font-bold">
          Deployment History
        </h2>

        {deployments.length === 0 ? (
          <div className="text-gray-500">
            No deployments yet.
          </div>
        ) : (
          <div className="space-y-4">
            {deployments.map(
              (deployment) => (
                <div
                  key={deployment.id}
                  className="rounded-lg border border-gray-700 p-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-semibold">
                        🚀{" "}
                        {deployment.project}
                      </div>

                      <div className="mt-1 text-sm text-gray-500">
                        {
                          deployment.environment
                        }{" "}
                        •{" "}
                        {
                          deployment.time
                        }
                      </div>
                    </div>

                    <div
                      className={
                        deployment.status.includes(
                          "Success"
                        )
                          ? "font-semibold text-green-400"
                          : "font-semibold text-yellow-400"
                      }
                    >
                      {
                        deployment.status
                      }
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </main>
  );
}
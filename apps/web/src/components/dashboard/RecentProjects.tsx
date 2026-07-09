export default function RecentProjects() {
  const projects = [
    "Atlas API",
    "Atlas UI",
    "AI Orchestrator",
  ];

  return (
    <div className="rounded-xl border border-gray-800 p-6">
      <h2 className="mb-4 text-xl font-bold">Recent Projects</h2>

      <div className="space-y-3">
        {projects.map((project) => (
          <div
            key={project}
            className="rounded-lg bg-gray-900 p-3"
          >
            {project}
          </div>
        ))}
      </div>
    </div>
  );
}
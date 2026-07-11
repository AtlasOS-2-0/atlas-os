interface QuickActionsProps {
  onCreateProject: () => void;
}

export default function QuickActions({
  onCreateProject,
}: QuickActionsProps) {
  const actions = [
    {
      name: "Create Project",
      action: onCreateProject,
    },
    {
      name: "Open Workspace",
      action: () => alert("Workspace module coming soon 📂"),
    },
    {
      name: "Ask AI Architect",
      action: () => alert("Architect Agent activated 🤖"),
    },
    {
      name: "Deploy Application",
      action: () => alert("Deployment pipeline started 🚀"),
    },
  ];

  return (
    <div className="rounded-xl border border-gray-800 p-6">
      <h2 className="mb-4 text-xl font-bold">
        Quick Actions
      </h2>

      <div className="grid gap-3">
        {actions.map((action) => (
          <button
            key={action.name}
            onClick={action.action}
            className="rounded-lg bg-blue-600 p-3 transition hover:bg-blue-500"
          >
            {action.name}
          </button>
        ))}
      </div>
    </div>
  );
}
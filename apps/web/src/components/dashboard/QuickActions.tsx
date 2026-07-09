export default function QuickActions() {
  const actions = [
    "Create Project",
    "Open Workspace",
    "Ask AI Architect",
    "Deploy Application",
  ];

  return (
    <div className="rounded-xl border border-gray-800 p-6">
      <h2 className="mb-4 text-xl font-bold">Quick Actions</h2>

      <div className="grid gap-3">
        {actions.map((action) => (
          <button
            key={action}
            className="rounded-lg bg-blue-600 p-3 transition hover:bg-blue-500"
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
}
export default function Sidebar() {
  const items = [
    "Dashboard",
    "Projects",
    "Workspace",
    "AI Agents",
    "Terminal",
    "Deployments",
    "Monitoring",
    "Settings",
  ];

  return (
    <aside className="w-64 border-r border-gray-800 bg-[#0B0F19] p-6">
      <h1 className="mb-10 text-3xl font-bold text-white">
        Atlas OS
      </h1>

      <nav className="space-y-2">
        {items.map((item) => (
          <button
            key={item}
            className="w-full rounded-lg px-4 py-3 text-left text-gray-400 transition-all hover:bg-gray-800 hover:text-white"
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
}
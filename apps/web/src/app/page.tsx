export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="flex h-screen">

        {/* Sidebar */}
        <aside className="w-64 border-r border-gray-800 p-6">
          <h1 className="text-2xl font-bold mb-8">Atlas OS</h1>

          <nav className="space-y-4">
            <p>Dashboard</p>
            <p>Projects</p>
            <p>Workspace</p>
            <p>AI Agents</p>
            <p>Terminal</p>
            <p>Deployments</p>
            <p>Monitoring</p>
            <p>Settings</p>
          </nav>
        </aside>

        {/* Main Content */}
        <section className="flex-1 p-8">
          <h2 className="text-4xl font-bold">
            Welcome to Atlas OS
          </h2>

          <p className="mt-4 text-gray-400">
            The AI-native software engineering operating system.
          </p>
        </section>

        {/* AI Panel */}
        <aside className="w-80 border-l border-gray-800 p-6">
          <h2 className="text-xl font-bold mb-6">
            AI Hub
          </h2>

          <div className="space-y-4">
            <div className="border border-gray-700 rounded-lg p-4">
              Architect Agent
            </div>

            <div className="border border-gray-700 rounded-lg p-4">
              Backend Agent
            </div>

            <div className="border border-gray-700 rounded-lg p-4">
              Frontend Agent
            </div>
          </div>
        </aside>

      </div>
    </main>
  );
}
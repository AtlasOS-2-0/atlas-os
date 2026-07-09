import Sidebar from "@/components/layout/Sidebar";
import RecentProjects from "@/components/dashboard/RecentProjects";
import SystemHealth from "@/components/dashboard/SystemHealth";
import QuickActions from "@/components/dashboard/QuickActions";
import Topbar from "@/components/layout/Topbar";
import CommandPalette from "@/components/command/CommandPalette";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

     <CommandPalette />

    <div className="flex h-screen">

        {/* Sidebar */}
       <Sidebar />

        {/* Main Content */}
{/* Main Content */}
       <section className="flex-1 p-8 overflow-auto">
        <Topbar />

     <div className="grid gap-6 md:grid-cols-2">
       <RecentProjects />
       <SystemHealth />
       <QuickActions />
     </div>
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
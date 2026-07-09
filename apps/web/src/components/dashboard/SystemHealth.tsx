export default function SystemHealth() {
  return (
    <div className="rounded-xl border border-gray-800 p-6">
      <h2 className="mb-4 text-xl font-bold">System Health</h2>

      <div className="space-y-3 text-gray-400">
        <p>Frontend: 🟢 Online</p>
        <p>Backend: ⚪ Offline</p>
        <p>Database: ⚪ Offline</p>
      </div>
    </div>
  );
}
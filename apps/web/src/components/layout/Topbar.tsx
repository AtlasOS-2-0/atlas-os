export default function Topbar() {
  return (
    <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="text-5xl font-bold whitespace-nowrap">
          Welcome to Atlas OS
        </h1>

        <p className="mt-2 text-gray-400">
          AI-native software engineering operating system
        </p>
      </div>

      <div className="flex items-center gap-3">
        <input
          placeholder="Search projects, agents, commands..."
          className="
            w-96
            rounded-xl
            border
            border-gray-800
            bg-gray-900
            px-4
            py-3
            outline-none
            focus:border-blue-500
          "
        />

        <button
          className="
            rounded-xl
            bg-blue-600
            px-5
            py-3
            font-semibold
            hover:bg-blue-500
          "
        >
          Ctrl + K
        </button>
      </div>
    </header>
  );
}
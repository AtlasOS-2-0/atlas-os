const agents = [
  {
    emoji: "🧠",
    name: "Architect AI",
    role: "Designs system architecture, services and workflows.",
    status: "Planning",
  },
  {
    emoji: "⚙️",
    name: "Backend AI",
    role: "Builds APIs, authentication and business logic.",
    status: "Building",
  },
  {
    emoji: "🎨",
    name: "Frontend AI",
    role: "Creates modern user interfaces and experiences.",
    status: "Building",
  },
  {
    emoji: "🗄️",
    name: "Database AI",
    role: "Designs schemas and optimizes queries.",
    status: "Optimizing",
  },
  {
    emoji: "🧪",
    name: "Testing AI",
    role: "Runs unit, integration and security tests.",
    status: "Testing",
  },
  {
    emoji: "🚀",
    name: "Deployment AI",
    role: "Prepares preview and production deployments.",
    status: "Deploying",
  },
  {
    emoji: "👀",
    name: "Monitoring AI",
    role: "Observes production systems and detects issues.",
    status: "Monitoring",
  },
  {
    emoji: "📊",
    name: "Analytics AI",
    role: "Finds user behavior patterns and opportunities.",
    status: "Learning",
  },
];

export default function AITeam() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">

      <div className="text-center">

        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
          Meet Your AI Team
        </span>

        <h2 className="mt-6 text-5xl font-bold">
          Every Engineer Has One Job.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
          Atlas doesn't rely on one general AI assistant.
          It coordinates specialists that work together
          throughout the software lifecycle.
        </p>

      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        {agents.map((agent) => (

          <div
            key={agent.name}
            className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
          >

            <div className="text-5xl">
              {agent.emoji}
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              {agent.name}
            </h3>

            <p className="mt-4 text-sm leading-7 text-zinc-400">
              {agent.role}
            </p>

            <div className="mt-8 inline-flex items-center rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-400">
              ● {agent.status}
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}
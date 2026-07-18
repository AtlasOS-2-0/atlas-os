"use client";

const workflow = [
  {
    step: "01",
    title: "Describe Your Idea",
    description:
      "Explain your application in natural language. Atlas understands your goals, architecture, and requirements.",
    icon: "💡",
  },
  {
    step: "02",
    title: "Architect AI Designs",
    description:
      "The Architect AI creates the complete software blueprint, database schema, APIs, and project structure.",
    icon: "🧠",
  },
  {
    step: "03",
    title: "AI Engineering Team Builds",
    description:
      "Backend, Frontend, Database and DevOps agents work simultaneously to generate production-ready code.",
    icon: "⚙️",
  },
  {
    step: "04",
    title: "Automatic Testing",
    description:
      "Testing AI validates functionality, security, performance and reliability before deployment.",
    icon: "🧪",
  },
  {
    step: "05",
    title: "Private Deployment",
    description:
      "Atlas deploys the application into an isolated preview environment for verification.",
    icon: "🚀",
  },
  {
    step: "06",
    title: "Monitor & Improve",
    description:
      "AI continuously analyzes production behavior, proposes improvements, validates them privately, and asks for approval before public release.",
    icon: "🌍",
  },
];

export default function Workflow() {
  return (
    <section
      id="workflow"
      className="relative mx-auto max-w-7xl px-6 py-28"
    >
      <div className="mb-20 text-center">

        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
          Workflow
        </span>

        <h2 className="mt-6 text-5xl font-bold">
          From Idea to Production
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
          Atlas isn't just an AI assistant.
          It's an autonomous engineering platform
          that delivers software through an end-to-end workflow.
        </p>

      </div>

      <div className="relative">

        <div className="absolute left-8 top-0 hidden h-full w-px bg-zinc-800 md:block" />

        <div className="space-y-12">

          {workflow.map((item) => (

            <div
              key={item.step}
              className="group relative flex gap-8"
            >

              <div className="z-10 hidden h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/30 bg-zinc-900 text-3xl md:flex transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-400">
                {item.icon}
              </div>

              <div className="flex-1 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 transition-all duration-300 group-hover:border-cyan-500 group-hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]">

                <div className="mb-4 flex items-center gap-4">

                  <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-300">
                    STEP {item.step}
                  </span>

                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                </div>

                <p className="leading-8 text-zinc-400">
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
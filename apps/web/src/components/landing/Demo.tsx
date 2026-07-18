"use client";

const steps = [
  {
    title: "1. Describe your idea",
    content:
      "Build a SaaS platform where restaurants can manage online orders and reservations.",
  },
  {
    title: "2. Architect AI",
    content:
      "Designing microservices, authentication flow, database schema, and deployment strategy.",
  },
  {
    title: "3. Engineering Team",
    content:
      "Backend AI • Frontend AI • Database AI • Testing AI are building in parallel.",
  },
  {
    title: "4. Preview Ready",
    content:
      "A private deployment is ready for review. Tests passed successfully.",
  },
];

export default function Demo() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">

      <div className="text-center">

        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
          Atlas in Action
        </span>

        <h2 className="mt-6 text-5xl font-bold">
          Watch an AI Engineering Team Build
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
          From a single prompt to a working application,
          Atlas coordinates specialized AI engineers across the
          software development lifecycle.
        </p>

      </div>

      <div className="mt-20 rounded-3xl border border-zinc-800 bg-zinc-950 overflow-hidden">

        <div className="flex items-center gap-2 border-b border-zinc-800 px-6 py-4">

          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />

          <span className="ml-4 text-sm text-zinc-500">
            Atlas Workspace
          </span>

        </div>

        <div className="space-y-6 p-8">

          {steps.map((step) => (

            <div
              key={step.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6"
            >

              <h3 className="font-semibold text-cyan-400">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-zinc-300">
                {step.content}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
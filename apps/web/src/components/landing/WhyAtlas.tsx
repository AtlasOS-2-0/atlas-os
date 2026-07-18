export default function WhyAtlas() {
  const comparison = [
    {
      traditional: "One developer does everything",
      atlas: "Specialized AI engineers collaborate together",
    },
    {
      traditional: "Manually write boilerplate",
      atlas: "AI generates production-ready foundations",
    },
    {
      traditional: "Deploy and hope everything works",
      atlas: "Preview deployment with automated validation",
    },
    {
      traditional: "Read logs after users report bugs",
      atlas: "AI monitors applications continuously",
    },
    {
      traditional: "Developers search for improvements",
      atlas: "AI proposes improvements backed by data",
    },
    {
      traditional: "Release directly to production",
      atlas: "Private validation before public release",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-28">

      <div className="text-center">

        <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
          Why Atlas Exists
        </span>

        <h2 className="mt-6 text-5xl font-bold">
          Software Engineering Should Evolve
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
          Atlas isn't replacing developers.
          It's removing repetitive engineering work so
          developers can spend more time solving meaningful
          problems.
        </p>

      </div>

      <div className="mt-20 overflow-hidden rounded-3xl border border-zinc-800">

        <div className="grid grid-cols-2 border-b border-zinc-800 bg-zinc-900">

          <div className="border-r border-zinc-800 p-6 text-center">
            <h3 className="text-2xl font-bold text-zinc-300">
              Traditional Development
            </h3>
          </div>

          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold text-cyan-400">
              Atlas OS
            </h3>
          </div>

        </div>

        {comparison.map((item) => (

          <div
            key={item.traditional}
            className="grid grid-cols-2 border-b border-zinc-800 last:border-none"
          >

            <div className="border-r border-zinc-800 p-6 text-zinc-400">
              {item.traditional}
            </div>

            <div className="p-6 font-medium text-white">
              {item.atlas}
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}
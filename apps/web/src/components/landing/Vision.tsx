"use client";

export default function Vision() {
  return (
    <section
      id="vision"
      className="relative overflow-hidden py-36"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 text-center">

        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
          Our Vision
        </span>

        <h2 className="mt-8 text-6xl font-extrabold leading-tight">
          We Believe Software
          <br />
          Should Build Itself.
        </h2>

        <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-zinc-400">
          Software development shouldn't stop after deployment.
          Applications should observe users, identify problems,
          propose improvements, validate them safely, and evolve
          continuously—with developers making the final decisions.
        </p>

        <div className="mt-24 grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8">

            <div className="mb-6 text-5xl">
              👀
            </div>

            <h3 className="text-2xl font-bold">
              Observe
            </h3>

            <p className="mt-4 leading-7 text-zinc-400">
              Atlas continuously monitors application
              behavior, user interactions, performance,
              and production issues.
            </p>

          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8">

            <div className="mb-6 text-5xl">
              🧠
            </div>

            <h3 className="text-2xl font-bold">
              Improve
            </h3>

            <p className="mt-4 leading-7 text-zinc-400">
              AI engineers design new features,
              optimize existing code,
              and prepare improvements
              automatically.
            </p>

          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8">

            <div className="mb-6 text-5xl">
              🚀
            </div>

            <h3 className="text-2xl font-bold">
              Deliver
            </h3>

            <p className="mt-4 leading-7 text-zinc-400">
              Every improvement is deployed
              to a private environment,
              tested thoroughly,
              then submitted for your approval.
            </p>

          </div>

        </div>

        <div className="mt-24 rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-600/10 via-cyan-600/10 to-blue-600/10 p-10">

          <p className="text-sm uppercase tracking-[0.3em] text-blue-300">
            Atlas Vision
          </p>

          <h3 className="mt-6 text-4xl font-bold">
            From AI Coding Assistant
            <br />
            to Autonomous Software Engineering.
          </h3>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            We're building a future where AI doesn't just
            generate code—it collaborates across the entire
            software lifecycle while developers retain control
            over every production release.
          </p>

        </div>

      </div>
    </section>
  );
}
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-32">

      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-purple-600/10" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">

        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
          Start Building Today
        </span>

        <h2 className="mt-8 text-6xl font-bold leading-tight">
          Launch Your
          <br />
          AI Engineering Team
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          Turn your next idea into a real application with an AI team that
          plans, builds, tests, and prepares deployments—while you stay in
          control of every production release.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            href="/signup"
            className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400"
          >
            Launch Atlas →
          </Link>

          <Link
            href="#pricing"
            className="rounded-xl border border-zinc-700 px-8 py-4 transition hover:border-cyan-500"
          >
            View Pricing
          </Link>

        </div>

        <p className="mt-8 text-sm text-zinc-500">
          No credit card required • Free community plan available
        </p>

      </div>

    </section>
  );
}
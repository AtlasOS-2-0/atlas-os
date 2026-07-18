"use client";

import { useEffect, useState } from "react";

const statuses = [
  "🧠 Architect AI designing system architecture...",
  "⚙️ Backend AI generating production APIs...",
  "🎨 Frontend AI building responsive interfaces...",
  "🧪 Testing AI validating every feature...",
  "🚀 Deployment AI preparing preview deployment...",
];

export default function Hero() {
  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statuses.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
      </div>

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-300">
          AI Operating System for Software Engineering
        </span>

        <h1 className="mt-8 max-w-5xl text-6xl font-extrabold leading-tight md:text-7xl">
          Build Software
          <br />
          with an AI Engineering Team.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          Atlas coordinates specialized AI engineers that
          design, build, test and deploy production-ready
          software while you stay focused on solving real
          problems.
        </p>

        {/* Live Status */}
        <div className="mt-10 rounded-xl border border-blue-500/20 bg-blue-500/5 px-6 py-4 backdrop-blur">
          <p className="font-mono text-blue-300 transition-all duration-500">
            {statuses[statusIndex]}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-500">
            Start Building
          </button>

          <button className="rounded-xl border border-zinc-700 px-8 py-4 transition hover:border-zinc-500">
            View Documentation
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-10 text-center md:grid-cols-4">

          <div>
            <h3 className="text-3xl font-bold text-blue-400">5+</h3>
            <p className="mt-2 text-sm text-zinc-500">
              AI Engineers
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-400">24/7</h3>
            <p className="mt-2 text-sm text-zinc-500">
              Autonomous Work
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-400">∞</h3>
            <p className="mt-2 text-sm text-zinc-500">
              Scalability
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-400">1 Click</h3>
            <p className="mt-2 text-sm text-zinc-500">
              Deployment
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
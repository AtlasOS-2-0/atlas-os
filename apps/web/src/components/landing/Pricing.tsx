const plans = [
  {
    name: "Community",
    price: "Free",
    description: "Perfect for learning and personal projects.",
    features: [
      "Scratch Workspace",
      "3 AI Engineers",
      "2 Projects",
      "Local Execution",
      "Community AI Models",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "₹999/mo",
    description: "For serious developers and startups.",
    features: [
      "Unlimited Projects",
      "Unlimited AI Engineers",
      "Private Deployments",
      "GitHub Integration",
      "Background AI Agents",
      "Priority AI Models",
      "Preview Environments",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Built for organizations.",
    features: [
      "Dedicated AI Infrastructure",
      "Private Cloud",
      "SSO",
      "Audit Logs",
      "Advanced Security",
      "Team Collaboration",
      "Custom AI Agents",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <div className="text-center">

        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
          Pricing
        </span>

        <h2 className="mt-6 text-5xl font-bold">
          Choose Your AI Engineering Team
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
          Scale from solo projects to enterprise software with
          an AI engineering team that grows with you.
        </p>

      </div>

      <div className="mt-20 grid gap-8 lg:grid-cols-3">

        {plans.map((plan) => (

          <div
            key={plan.name}
            className={`rounded-3xl border p-8 transition-all ${
              plan.highlighted
                ? "border-blue-500 bg-blue-500/10 scale-105"
                : "border-zinc-800 bg-zinc-900/50"
            }`}
          >

            <h3 className="text-3xl font-bold">
              {plan.name}
            </h3>

            <p className="mt-2 text-zinc-400">
              {plan.description}
            </p>

            <div className="mt-8 text-5xl font-extrabold">
              {plan.price}
            </div>

            <div className="mt-10 space-y-4">

              {plan.features.map((feature) => (

                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <span className="text-green-400">
                    ✓
                  </span>

                  <span>{feature}</span>

                </div>

              ))}

            </div>

            <button
              className={`mt-10 w-full rounded-xl py-3 font-semibold ${
                plan.highlighted
                  ? "bg-blue-600 hover:bg-blue-500"
                  : "border border-zinc-700"
              }`}
            >
              Get Started
            </button>

          </div>

        ))}

      </div>
    </section>
  );
}
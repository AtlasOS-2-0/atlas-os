import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4">

        <div>

          <h2 className="text-2xl font-bold">
            Atlas OS
          </h2>

          <p className="mt-4 text-zinc-400 leading-7">
            The AI Operating System for modern software engineering.
          </p>

        </div>

        <div>

          <h3 className="font-semibold">
            Product
          </h3>

          <div className="mt-4 flex flex-col gap-3 text-zinc-400">

            <Link href="#workflow">Workflow</Link>

            <Link href="#pricing">Pricing</Link>

            <Link href="#vision">Vision</Link>

          </div>

        </div>

        <div>

          <h3 className="font-semibold">
            Resources
          </h3>

          <div className="mt-4 flex flex-col gap-3 text-zinc-400">

            <Link href="/docs">
              Documentation
            </Link>

            <Link href="/blog">
              Blog
            </Link>

            <Link href="/changelog">
              Changelog
            </Link>

          </div>

        </div>

        <div>

          <h3 className="font-semibold">
            Company
          </h3>

          <div className="mt-4 flex flex-col gap-3 text-zinc-400">

            <Link href="/about">
              About
            </Link>

            <Link href="/contact">
              Contact
            </Link>

            <Link href="/privacy">
              Privacy
            </Link>

          </div>

        </div>

      </div>

      <div className="border-t border-zinc-800 py-8 text-center text-sm text-zinc-500">

        © {new Date().getFullYear()} Atlas OS.
        Built for the future of software engineering.

      </div>

    </footer>
  );
}
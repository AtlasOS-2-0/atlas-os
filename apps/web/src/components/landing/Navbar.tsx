import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 font-bold">
            A
          </div>

          <div>
            <h1 className="font-bold tracking-wide">
              Atlas OS
            </h1>

            <p className="text-xs text-zinc-400">
              AI Software Engineering Platform
            </p>
          </div>
        </Link>

        <nav className="hidden gap-8 text-sm text-zinc-300 md:flex">
          <a href="#features">Features</a>
          <a href="#workflow">Workflow</a>
          <a href="#pricing">Pricing</a>
          <a href="#vision">Vision</a>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-lg px-4 py-2 text-sm text-zinc-300 transition hover:text-white"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium transition hover:bg-blue-500"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
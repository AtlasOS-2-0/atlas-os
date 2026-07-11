"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const items = [
    {
      name: "Dashboard",
      href: "/",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Workspace",
      href: "/workspace",
    },
    {
      name: "AI Agents",
      href: "/agents",
    },
    {
      name: "Terminal",
      href: "/terminal",
    },
    {
      name: "Deployments",
      href: "/deployments",
    },
    {
      name: "Monitoring",
      href: "/monitoring",
    },
    {
      name: "Settings",
      href: "/settings",
    },
  ];

  return (
    <aside className="w-64 border-r border-gray-800 bg-[#0B0F19] p-6">
      {/* Logo */}
      <h1 className="mb-10 text-3xl font-bold text-white">
        Atlas OS
      </h1>

      {/* Navigation */}
      <nav className="space-y-2">
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`block w-full rounded-lg px-4 py-3 transition-all ${
              pathname === item.href
                ? "bg-blue-600 text-white"
                : "text-gray-400 hover:bg-gray-800 hover:text-white"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
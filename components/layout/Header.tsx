"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-white/10 bg-[#0a0a0a]">
      <div className="bg-white text-black text-center text-xs tracking-widest py-1.5 uppercase font-inter">
        Revista para artistas emergentes
      </div>

      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="font-playfair text-3xl font-bold text-white">
          ErrE <span className="italic">(r)</span>
        </Link>

        <ul className="hidden md:flex gap-10 text-sm uppercase font-inter">
          <li>
            <Link href="/" className="text-white/70 hover:text-white">
              Revista
            </Link>
          </li>
          <li>
            <Link href="/assistant" className="text-white/70 hover:text-white">
              AI Assistant
            </Link>
          </li>
          <li>
            <Link href="/insights" className="text-white/70 hover:text-white">
              Insights
            </Link>
          </li>
        </ul>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Cerrar" : "Menú"}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-white/10">
          <ul className="flex flex-col">
            <li><Link href="/">Revista</Link></li>
            <li><Link href="/assistant">AI Assistant</Link></li>
            <li><Link href="/insights">Insights</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
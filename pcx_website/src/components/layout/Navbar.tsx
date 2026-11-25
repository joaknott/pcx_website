
"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/icono-pcx.png";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/reparaciones", label: "Solicitar reparación" },
];

export default function Navbar({ whatsappUrl }: { whatsappUrl: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  const linkClass = (href: string) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
      isActive(href)
        ? "text-accent"
        : "text-muted hover:text-text"
    }`;

  return (
    <nav className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
      <Link
        href="/"
        aria-label="PCX Computación, ir al inicio"
        onClick={() => setOpen(false)}
        className="flex items-center"
      >
        <Image
          src={logo}
          alt="PCX Computación"
          priority
          className="h-14 w-auto md:h-18"
        />
      </Link>

        {/* desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={linkClass(l.href)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-accent-hover"
          >
            Hablemos
          </a>
        </div>

        {/* Botón hamburguesa */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
          aria-expanded={open}
          className="rounded-md border border-border p-2 md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* mobil */}
      {open && (
        <div className="flex flex-col gap-1 border-t border-border bg-surface px-4 py-3 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={linkClass(l.href)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-md bg-accent px-4 py-2.5 text-center text-sm font-semibold text-black"
          >
            Hablemos
          </a>
        </div>
      )}
    </nav>
  );
}
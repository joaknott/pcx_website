"use client";

import { Fragment, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, MessageCircle, Search, ShieldCheck } from "lucide-react";
import { CATEGORIAS, SUBCATEGORIAS } from "@/sanity/lib/categorias";
import type { Producto } from "@/sanity/lib/catalogo";
import ProductCard from "./ProductCard";

type Orden = "recomendados" | "nombre" | "precio-asc" | "precio-desc";

export default function CatalogoClient({
  productos,
  whatsapp,
}: {
  productos: Producto[];
  whatsapp: string;
}) {
  const [categoria, setCategoria] = useState("todos");
  const [subcategoria, setSubcategoria] = useState<string | null>(null);
  const [busqueda, setBusqueda] = useState("");
  const [orden, setOrden] = useState<Orden>("recomendados");

  function elegirCategoria(valor: string) {
    setCategoria(valor);
    setSubcategoria(null);
  }

  const filtrados = useMemo(() => {
    const q = busqueda.trim().toLowerCase();
    let lista = productos.filter(
      (p) =>
        (categoria === "todos" || p.categoria === categoria) &&
        (!subcategoria || p.subcategoria === subcategoria) &&
        (!q || p.nombre.toLowerCase().includes(q))
    );
    if (orden === "nombre") lista = [...lista].sort((a, b) => a.nombre.localeCompare(b.nombre));
    if (orden === "precio-asc")
      lista = [...lista].sort((a, b) => (a.precio ?? Infinity) - (b.precio ?? Infinity));
    if (orden === "precio-desc")
      lista = [...lista].sort((a, b) => (b.precio ?? -1) - (a.precio ?? -1));
    return lista;
  }, [productos, categoria, subcategoria, busqueda, orden]);

  const contar = (valor: string) =>
    valor === "todos" ? productos.length : productos.filter((p) => p.categoria === valor).length;

  const contarSub = (cat: string, sub: string) =>
    productos.filter((p) => p.categoria === cat && p.subcategoria === sub).length;

  const tituloActual = subcategoria
    ? SUBCATEGORIAS[categoria]?.find((s) => s.value === subcategoria)?.label ?? "Productos"
    : categoria === "todos"
      ? "Todos los productos"
      : CATEGORIAS.find((c) => c.value === categoria)?.label ?? "Productos";

  const mensaje = "Hola! Necesito ayuda para elegir un producto.";
  const urlWhatsapp = `${whatsapp}${whatsapp.includes("?") ? "&" : "?"}text=${encodeURIComponent(mensaje)}`;

  const items = [{ value: "todos", label: "Todos los productos" }, ...CATEGORIAS];

  return (
    <div className="bg-neutral-100 text-neutral-900">
      {/* Header oscuro con buscador */}
      <section className="border-b-2 border-orange-600 bg-neutral-900 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <h1 className="text-3xl font-semibold">Catálogo PCX</h1>
            <p className="mt-1 text-sm text-neutral-400">
              Encontrá lo que necesitás para tu equipo.
            </p>
          </div>
          <div className="relative w-full md:max-w-xl">
            <input
              type="search"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar computadoras, periféricos y más…"
              className="h-12 w-full rounded-md bg-white pl-4 pr-12 text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
            <Search className="absolute right-4 top-1/2 size-5 -translate-y-1/2 text-neutral-500" />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <nav className="py-6 text-xs text-neutral-500">
          <Link href="/" className="hover:text-neutral-900">Inicio</Link>
          <span className="mx-2">/</span>
          <span className="text-neutral-700">Catálogo</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[256px_1fr]">
          {/* Sidebar */}
          <aside>
            <h2 className="mb-4 text-lg font-semibold">Categorías</h2>
            <ul className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0">
              {items.map((c) => {
                const activa = categoria === c.value;
                const subs = activa
                  ? (SUBCATEGORIAS[c.value] ?? []).filter((s) => contarSub(c.value, s.value) > 0)
                  : [];

                return (
                  <Fragment key={c.value}>
                    <li className="shrink-0">
                      <button
                        type="button"
                        onClick={() => elegirCategoria(c.value)}
                        className={`flex w-full items-center justify-between gap-6 rounded-md px-4 py-3 text-left text-sm transition ${
                          activa && !subcategoria
                            ? "bg-orange-100 font-semibold text-orange-800"
                            : activa
                              ? "font-semibold text-neutral-900 hover:bg-neutral-200"
                              : "text-neutral-600 hover:bg-neutral-200"
                        }`}
                      >
                        <span>{c.label}</span>
                        <span className="text-xs">{contar(c.value)}</span>
                      </button>
                    </li>

                    {subs.map((s) => {
                      const subActiva = subcategoria === s.value;
                      return (
                        <li
                          key={s.value}
                          className="shrink-0 lg:ml-4 lg:border-l lg:border-neutral-300"
                        >
                          <button
                            type="button"
                            onClick={() => setSubcategoria(subActiva ? null : s.value)}
                            className={`flex w-full items-center justify-between gap-6 rounded-md px-4 py-2 text-left text-sm transition ${
                              subActiva
                                ? "bg-orange-100 font-semibold text-orange-800"
                                : "text-neutral-600 hover:bg-neutral-200"
                            }`}
                          >
                            <span>{s.label}</span>
                            <span className="text-xs">{contarSub(c.value, s.value)}</span>
                          </button>
                        </li>
                      );
                    })}
                  </Fragment>
                );
              })}
            </ul>

            <div className="mt-8 hidden border-t border-neutral-300 pt-6 lg:block">
              <MessageCircle className="size-6 text-orange-700" />
              <p className="mt-4 font-semibold">¿Necesitás una mano?</p>
              <p className="mt-2 text-sm text-neutral-500">
                Te ayudamos a elegir el producto indicado.
              </p>
              <a
                href={urlWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-orange-700 hover:underline"
              >
                Consultar por WhatsApp <ArrowUpRight className="size-4" />
              </a>
            </div>
          </aside>

          {/* Contenido */}
          <section>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-3xl font-semibold">{tituloActual}</h2>
                <p className="mt-2 text-sm text-neutral-500">
                  {filtrados.length} {filtrados.length === 1 ? "resultado" : "resultados"}
                </p>
              </div>
              <label className="flex items-center gap-3 text-xs text-neutral-500">
                Ordenar por
                <select
                  value={orden}
                  onChange={(e) => setOrden(e.target.value as Orden)}
                  className="h-11 rounded-md border border-neutral-300 bg-white px-3 text-sm text-neutral-900"
                >
                  <option value="recomendados">Recomendados</option>
                  <option value="nombre">Nombre (A-Z)</option>
                  <option value="precio-asc">Precio: menor a mayor</option>
                  <option value="precio-desc">Precio: mayor a menor</option>
                </select>
              </label>
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-md bg-neutral-200 px-4 py-3 text-xs text-neutral-600">
              <ShieldCheck className="size-4 shrink-0 text-orange-700" />
              Elegí tu producto y consultanos. Atención personalizada, sin carrito.
            </div>

            {filtrados.length === 0 ? (
              <p className="mt-10 text-neutral-500">
                {productos.length === 0
                  ? "Todavía no hay productos cargados."
                  : "No encontramos productos con ese filtro."}
              </p>
            ) : (
              <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filtrados.map((p) => (
                  <ProductCard key={p._id ?? p.slug} producto={p} whatsapp={whatsapp} />
                ))}
              </div>
            )}

            <p className="mt-8 text-xs text-neutral-500">
              Catálogo de referencia. Imágenes ilustrativas. Consultá modelos, precio y
              disponibilidad por WhatsApp.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
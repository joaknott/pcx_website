"use client";

import { useState } from "react";
import { ArrowRight, Check, MessageCircle, ShieldCheck, Wrench } from "lucide-react";

const TIPOS = ["Notebook", "PC de escritorio", "All in One", "Impresora", "Celular / Tablet", "Otro"];
const PROBLEMAS = [
  "No enciende",
  "Anda lento",
  "Pantalla rota o sin imagen",
  "Virus o publicidad molesta",
  "Instalación de sistema / programas",
  "Limpieza y mantenimiento",
  "Upgrade (RAM, SSD, etc.)",
  "Otro",
];
const PRIORIDADES = ["Normal", "Urgente"];

const inputCls =
  "h-[42px] w-full rounded-md border border-neutral-800 bg-neutral-950 px-3 text-sm text-white placeholder:text-neutral-500 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500";

function Field({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs text-neutral-300">
        {label}
        {required && <span className="ml-1 text-orange-500">*</span>}
        {hint && <span className="ml-2 text-[10px] text-neutral-500">({hint})</span>}
      </span>
      {children}
    </label>
  );
}

export default function ReparacionForm({ whatsapp }: { whatsapp: string }) {
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();

    const telefono = get("telefono");
    if (telefono.replace(/\D/g, "").length < 8) {
      setError("Revisá el teléfono: ponelo con código de área y número.");
      return;
    }

    setEnviando(true);

    const email = get("email");

    const lineas = [
      "Hola! Quiero solicitar una reparación.",
      "",
      `*Nombre:* ${get("nombre")}`,
      `*Teléfono:* ${telefono}`,
      ...(email ? [`*Email:* ${email}`] : []),
      "",
      `*Equipo:* ${get("tipo")}`,
      `*Marca y modelo:* ${get("modelo")}`,
      `*Problema:* ${get("problema")}`,
      `*Prioridad:* ${get("prioridad")}`,
      "",
      `*Detalle:* ${get("descripcion")}`,
    ];

    const mensaje = lineas.join("\n");
    const url = `${whatsapp}${whatsapp.includes("?") ? "&" : "?"}text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank", "noopener,noreferrer");
    setEnviando(false);
  }

  return (
    <section className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Título: copiá acá las clases de fuente del h1 de tu Hero */}
        <h1 className="max-w-3xl text-5xl font-extrabold uppercase italic leading-[0.95] sm:text-7xl">
          Volvamos a poner todo en <span className="text-orange-500">marcha.</span>
        </h1>
        <p className="mt-6 text-sm text-neutral-400">
          Contanos qué le pasa a tu equipo. El primer paso para solucionarlo está acá.
        </p>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.7fr]">
          {/* Columna izquierda */}
          <div>
            <div className="flex size-12 items-center justify-center rounded-lg border border-orange-900/60 bg-orange-950/40">
              <Wrench className="size-6 text-orange-500" />
            </div>
            <h2 className="mt-8 text-3xl font-medium leading-tight">
              Tu solución <br /> empieza con un hola.
            </h2>
            <p className="mt-6 max-w-xs text-sm leading-7 text-neutral-400">
              No hace falta que sepas de computadoras. Contanos lo que notás y nosotros nos
              encargamos del resto.
            </p>

            <ul className="mt-8 space-y-3 text-xs text-neutral-200">
              {["Asesoramiento personalizado", "Presupuesto antes de reparar", "Sin compromisos ni sorpresas"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-3">
                    <Check className="size-4 text-orange-500" /> {t}
                  </li>
                ),
              )}
            </ul>

            <div className="mt-10 rounded-lg border border-emerald-900/60 bg-emerald-950/30 p-6">
              <MessageCircle className="size-6 text-emerald-500" />
              <p className="mt-4 text-sm font-semibold">Seguimos por WhatsApp</p>
              <p className="mt-3 text-xs leading-6 text-neutral-400">
                Prepararemos un mensaje con tus datos. Elegí el contacto de PCX y confirmá el envío
                en WhatsApp. No se envía automáticamente.
              </p>
            </div>
          </div>

          {/* Formulario */}
          <form
            onSubmit={onSubmit}
            className="rounded-lg border border-neutral-800 bg-neutral-900/60 p-6 sm:p-8"
          >
            <h3 className="flex items-baseline gap-3 text-base font-medium">
              <span className="text-xl font-bold italic text-orange-500">01</span>
              Primero, tus datos
            </h3>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field label="Nombre y apellido" required>
                <input name="nombre" required placeholder="¿Cómo te llamás?" className={inputCls} />
              </Field>
              <Field label="Teléfono / WhatsApp" required>
                <input
                  name="telefono"
                  type="tel"
                  required
                  placeholder="Código de área + número"
                  className={inputCls}
                />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Email" hint="opcional">
                  <input name="email" type="email" placeholder="tu@email.com" className={inputCls} />
                </Field>
              </div>
            </div>

            <h3 className="mt-12 flex items-baseline gap-3 text-base font-medium">
              <span className="text-xl font-bold italic text-orange-500">02</span>
              Hablemos de tu equipo
            </h3>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field label="Tipo de equipo" required>
                <select name="tipo" required defaultValue="" className={inputCls}>
                  <option value="" disabled>
                    Seleccioná una opción
                  </option>
                  {TIPOS.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </Field>
              <Field label="Marca y modelo" required>
                <input
                  name="modelo"
                  required
                  placeholder="Ej. Lenovo IdeaPad 3 o No sé"
                  className={inputCls}
                />
              </Field>
              <Field label="¿Qué problema tiene?" required>
                <select name="problema" required defaultValue="" className={inputCls}>
                  <option value="" disabled>
                    Seleccioná el problema
                  </option>
                  {PROBLEMAS.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </Field>
              <Field label="Prioridad" required>
                <select name="prioridad" required defaultValue="Normal" className={inputCls}>
                  {PRIORIDADES.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </Field>
              <div className="sm:col-span-2">
                <Field label="Contanos un poco más" required>
                  <textarea
                    name="descripcion"
                    required
                    rows={4}
                    placeholder="¿Desde cuándo pasa? ¿Aparece algún mensaje? Cualquier detalle nos ayuda."
                    className="w-full resize-y rounded-md border border-neutral-800 bg-neutral-950 px-3 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />
                </Field>
              </div>
            </div>

            <label className="mt-6 flex items-start gap-3 text-[11px] text-neutral-400">
              <input
                type="checkbox"
                name="acepto"
                required
                className="mt-0.5 size-4 shrink-0 accent-orange-500"
              />
              <span>
                Acepto compartir estos datos por WhatsApp para recibir atención sobre mi solicitud.
                <span className="ml-1 text-orange-500">*</span>
              </span>
            </label>

            {error && (
              <p role="alert" className="mt-4 text-sm text-red-400">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={enviando}
              className="mt-6 flex h-12 w-full items-center justify-center gap-3 rounded-md bg-orange-600 text-sm font-semibold text-white transition hover:bg-orange-500 disabled:opacity-60"
            >
              Preparar solicitud <ArrowRight className="size-4" />
            </button>

            <p className="mt-4 flex items-center justify-center gap-2 text-[10px] text-neutral-500">
              <ShieldCheck className="size-3" />
              Tus datos no se guardan en esta web. No incluyas contraseñas.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
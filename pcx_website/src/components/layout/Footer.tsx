import Link from "next/link";
import { getConfiguracionSitio } from "@/sanity/lib/sitio";
import { buildWhatsAppUrl } from "@/sanity/lib/whatsapp";

export default async function Footer() {
  "use cache" //for the problems of rendering and new date()
  const config = await getConfiguracionSitio();
  const waUrl = config?.whatsapp ? buildWhatsAppUrl(config.whatsapp) : null;

  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-xl font-extrabold italic uppercase">
            PCX <span className="text-orange-500">Computación</span>
          </p>
          <p className="mt-3 text-sm text-white/60">
            Reparación, mantenimiento, hardware y software. Equipos y periféricos.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase text-orange-500">Navegá</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="/" className="hover:text-white">Inicio</Link></li>
            <li><Link href="/catalogo" className="hover:text-white">Catálogo</Link></li>
            <li><Link href="/reparaciones" className="hover:text-white">Solicitar reparación</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase text-orange-500">Visitanos</h3>
          {config?.direccion && (
            <p className="text-sm text-white/70">{config.direccion}</p>
          )}
          {config?.horarios && config.horarios.length > 0 && (
            <ul className="mt-3 space-y-1 text-sm text-white/60">
              {config.horarios.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase text-orange-500">Contacto</h3>
          {waUrl && (
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-black hover:bg-orange-400"
            >
              Escribinos por WhatsApp
            </a>
          )}
          {config?.redes && config.redes.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/70">
              {config.redes.map((r) => (
                <li key={r.url}>
                  <a href={r.url} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    {r.nombre}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/40">
        © {new Date().getFullYear()} PCX Computación. Todos los derechos reservados.
      </div>
    </footer>
  );
}

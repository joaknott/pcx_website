export function buildWhatsAppUrl(numero?: string, mensaje = "") {
    const limpio = (numero ?? "").replace(/\D/g, ""); // solo dígitos
    if (!limpio) return "#";
    const texto = mensaje ? `?text=${encodeURIComponent(mensaje)}` : "";
    return `https://wa.me/${limpio}${texto}`;
  }
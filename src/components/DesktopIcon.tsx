"use client";

import { ReactNode, useState } from "react";

interface DesktopIconProps {
  label: string;
  icon: ReactNode;
  onOpen: () => void;
}

/**
 * Icono de escritorio: el propio dibujo + etiqueta son el botón (sin caja
 * ni borde alrededor), igual que en el Explorador clásico de Windows.
 * Un clic selecciona (resalte suave de cristal), doble clic abre la app.
 */
export default function DesktopIcon({ label, icon, onOpen }: DesktopIconProps) {
  const [selected, setSelected] = useState(false);

  return (
    <button
      type="button"
      className={`desktop-icon-btn flex w-20 flex-col items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
        selected ? "selected" : ""
      }`}
      onClick={() => setSelected(true)}
      onBlur={() => setSelected(false)}
      onDoubleClick={onOpen}
      onTouchEnd={(e) => {
        // En móvil no hay doble clic real: un toque selecciona y otro abre.
        if (selected) {
          e.preventDefault();
          onOpen();
        } else {
          setSelected(true);
        }
      }}
    >
      <span className="desktop-icon-image">{icon}</span>
      <span className="break-words px-1 text-center text-[14px] font-semibold leading-tight text-white [text-shadow:0_1px_3px_rgba(0,20,50,0.8)]">
        {label}
      </span>
    </button>
  );
}

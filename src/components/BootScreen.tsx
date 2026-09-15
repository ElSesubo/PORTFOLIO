"use client";

import { useEffect, useState } from "react";

export default function CustomBootScreen({
  onLoaded,
}: {
  onLoaded: () => void;
}) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Temporizador para simular la carga y activar el fundido de salida
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onLoaded, 800); // Espera a que termine la animación CSS de fundido
    }, 3500); // Duración de la pantalla de carga (3.5 segundos)

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col justify-between items-center bg-black text-white select-none transition-opacity duration-800 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Espaciador superior */}
      <div />

      {/* Centro: Logo retro de bloques de colores y tipografía personalizada */}
      <div className="flex flex-col items-center">
        {/* Logotipo de colores estilo clásico */}
        <div className="flex items-center gap-4 mb-4">
          <div className="grid grid-cols-2 gap-1.5 w-16 h-16 animate-pulse">
            <div className="bg-orange-600" />
            <div className="bg-green-500" />
            <div className="bg-blue-500" />
            <div className="bg-yellow-400" />
          </div>
        </div>

        {/* Textos de Marca (Full Stack Developer y Gabriel) */}
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-slate-400 uppercase font-['Windows95']">
            Full Stack Developer
          </p>
          <h1 className="text-5xl font-extrabold tracking-tight text-white mt-1 drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)] font-['Windows95',sans-serif]">
            Gabriel <span className="text-cyan-400">AA</span>
          </h1>
        </div>

        {/* Barra de carga estilo Windows XP */}
        <div className="mt-12 w-48 h-6 border border-[#ffffff] rounded-lg p-[2px] overflow-hidden shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]">
          <div className="h-full flex gap-[2px] animate-[xp-load_1.2s_linear_infinite]">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-5 shrink-0 h-full rounded-[1px] bg-gradient-to-b from-[#9497D6] via-[#4D52C4] to-[#131AA8] shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Pie de página con Copyright */}
      <div className="w-full px-8 pb-8 flex justify-between items-end text-xs text-zinc-500 font-['Windows95']">
        <p>Copyright © Gabriel Corporation</p>
        <p className="font-bold text-zinc-400">PORTFOLIO v2.6</p>
      </div>
    </div>
  );
}

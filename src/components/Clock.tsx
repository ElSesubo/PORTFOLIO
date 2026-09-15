"use client";

import { useEffect, useState } from "react";

/** Reloj de la barra de tareas (chip de cristal). Vacío hasta montar en cliente. */
export default function Clock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    function update() {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, "0");
      const mm = String(now.getMinutes()).padStart(2, "0");
      setTime(`${hh}:${mm}`);
    }
    update();
    const interval = setInterval(update, 1000 * 15);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="chip-aero px-3 py-1.5 text-xs font-semibold">
      {time ?? "--:--"}
    </div>
  );
}

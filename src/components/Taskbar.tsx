"use client";

import { WindowInstance } from "@/hooks/useWindowManager";
import Clock from "./Clock";

interface TaskbarProps {
  windows: WindowInstance[];
  startOpen: boolean;
  onToggleStart: () => void;
  onWindowClick: (instanceId: string) => void;
}

export default function Taskbar({
  windows,
  startOpen,
  onToggleStart,
  onWindowClick,
}: TaskbarProps) {
  return (
    <div className="taskbar-xp fixed bottom-0 left-0 right-0 z-[999] flex h-[30px] items-center justify-between">
      {/* Lado izquierdo: Botón Start y lista de ventanas */}
      <div className="flex h-full items-center gap-2">
        <button
          type="button"
          onClick={onToggleStart}
          className={`start-btn-xp ${startOpen ? "brightness-95" : ""}`}
        >
          {/* Logo 4 colores de Windows XP */}
          <svg className="w-4 h-4 drop-shadow" viewBox="0 0 16 16" fill="none">
            <path d="M0 2.3L6.5 1.4V7.5H0V2.3Z" fill="#F25022" />
            <path d="M7.5 1.2L16 0V7.5H7.5V1.2Z" fill="#7FBA00" />
            <path d="M0 8.5H6.5V14.6L0 13.7V8.5Z" fill="#00A4EF" />
            <path d="M7.5 8.5H16V16L7.5 14.8V8.5Z" fill="#FFB900" />
          </svg>
          Start
        </button>

        {/* Pestañas de las ventanas */}
        <div className="flex items-center gap-1 overflow-x-auto px-1">
          {windows.map((w) => (
            <button
              key={w.instanceId}
              type="button"
              onClick={() => onWindowClick(w.instanceId)}
              className={`taskbar-item-xp ${
                w.minimized ? "" : "active"
              }`}
              title={w.title}
            >
              <span className="truncate">{w.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Lado derecho: Área del Reloj (System Tray) */}
      <div className="system-tray-xp">
        {/* Icono de flecha plegable característico de XP */}
        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#0d69bd] border border-[#3ca2f4] text-[9px] cursor-pointer">
          &lt;
        </div>
        <Clock />
      </div>
    </div>
  );
}
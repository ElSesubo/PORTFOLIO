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
    <div className="taskbar-aero fixed bottom-0 left-0 right-0 z-[999] flex h-[52px] items-center gap-2 px-2">
      <button
        type="button"
        onClick={onToggleStart}
        className={`start-orb ${startOpen ? "brightness-110" : ""}`}
      >
        <span className="start-orb-dot" aria-hidden="true" />
        Inicio
      </button>

      <div className="flex flex-1 gap-2 overflow-x-auto">
        {windows.map((w) => (
          <button
            key={w.instanceId}
            type="button"
            onClick={() => onWindowClick(w.instanceId)}
            className={`chip-aero max-w-[200px] truncate px-3 py-1.5 text-left text-xs font-medium ${
              w.minimized ? "" : "active"
            }`}
            title={w.title}
          >
            {w.title}
          </button>
        ))}
      </div>

      <Clock />
    </div>
  );
}

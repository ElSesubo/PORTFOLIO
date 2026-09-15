"use client";

import { ReactNode } from "react";
import { WindowInstance } from "@/hooks/useWindowManager";
import { useDraggable } from "@/hooks/useDraggable";

interface WindowFrameProps {
  instance: WindowInstance;
  isMobile: boolean;
  onClose: () => void;
  onMinimize: () => void;
  onToggleMaximize: () => void;
  onFocus: () => void;
  onMove: (pos: { x: number; y: number }) => void;
  children: ReactNode;
}

const TASKBAR_HEIGHT = 52;

/** Ventana estilo Aero: cristal translúcido, cabecera glossy azul, arrastrable. */
export default function WindowFrame({
  instance,
  isMobile,
  onClose,
  onMinimize,
  onToggleMaximize,
  onFocus,
  onMove,
  children,
}: WindowFrameProps) {
  const draggable = useDraggable({
    position: { x: instance.x, y: instance.y },
    onChange: onMove,
    disabled: instance.maximized || isMobile,
  });

  if (instance.minimized) return null;

  const style: React.CSSProperties = instance.maximized
    ? {
        position: "fixed",
        left: 8,
        top: 8,
        right: 8,
        bottom: TASKBAR_HEIGHT + 8,
        width: "auto",
        height: "auto",
        zIndex: instance.zIndex,
      }
    : {
        position: "fixed",
        left: instance.x,
        top: instance.y,
        width: instance.width,
        height: instance.height,
        maxWidth: "95vw",
        maxHeight: `calc(100vh - ${TASKBAR_HEIGHT}px - 16px)`,
        zIndex: instance.zIndex,
      };

  return (
    <div
      className="window-aero flex flex-col"
      style={style}
      onMouseDown={onFocus}
      role="dialog"
      aria-label={instance.title}
    >
      <div
        className="title-bar-aero flex cursor-move select-none items-center justify-between px-3 py-2"
        onPointerDown={draggable.onPointerDown}
        onPointerMove={draggable.onPointerMove}
        onPointerUp={draggable.onPointerUp}
      >
        <span className="relative z-10 truncate text-sm font-bold">
          {instance.title}
        </span>
        <div className="relative z-10 flex items-center gap-2" data-no-drag>
          <button
            aria-label="Minimizar"
            onClick={onMinimize}
            className="aero-control-btn aero-control-minimize"
          >
            &#8211;
          </button>
          <button
            aria-label="Maximizar"
            onClick={onToggleMaximize}
            className="aero-control-btn aero-control-maximize"
          >
            &#9633;
          </button>
          <button
            aria-label="Cerrar"
            onClick={onClose}
            className="aero-control-btn aero-control-close"
          >
            &#215;
          </button>
        </div>
      </div>
      <div className="window-aero-body win95-scroll flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
}

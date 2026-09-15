"use client";

import { useCallback, useRef } from "react";

interface DragState {
  startX: number;
  startY: number;
  originX: number;
  originY: number;
}

interface UseDraggableOptions {
  /** Posición actual {x, y} en px respecto al viewport. */
  position: { x: number; y: number };
  onChange: (pos: { x: number; y: number }) => void;
  /** Si es true, no se puede arrastrar (p.ej. ventana maximizada o en móvil). */
  disabled?: boolean;
}

/**
 * Hook de arrastre genérico basado en Pointer Events (sin librerías externas).
 * Devuelve un `onPointerDown` para enganchar en la cabecera de la ventana.
 */
export function useDraggable({ position, onChange, disabled }: UseDraggableOptions) {
  const dragRef = useRef<DragState | null>(null);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (disabled) return;
      // Evita iniciar drag si el clic fue sobre un botón de la cabecera (min/max/cerrar)
      if ((e.target as HTMLElement).closest("[data-no-drag]")) return;

      dragRef.current = {
        startX: e.clientX,
        startY: e.clientY,
        originX: position.x,
        originY: position.y,
      };
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    [disabled, position.x, position.y]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragRef.current) return;
      const dx = e.clientX - dragRef.current.startX;
      const dy = e.clientY - dragRef.current.startY;

      const nextX = dragRef.current.originX + dx;
      const nextY = Math.max(0, dragRef.current.originY + dy); // no dejar que se salga por arriba

      onChange({ x: nextX, y: nextY });
    },
    [onChange]
  );

  const onPointerUp = useCallback(() => {
    dragRef.current = null;
  }, []);

  return { onPointerDown, onPointerMove, onPointerUp };
}

"use client";

import { useCallback, useState } from "react";
import { AppId, appRegistry } from "@/data/apps";

export interface WindowInstance {
  instanceId: string;
  appId: AppId;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
  minimized: boolean;
  maximized: boolean;
}

let instanceCounter = 0;
let zCounter = 10;

/**
 * Gestiona el estado de todas las "ventanas" abiertas del escritorio:
 * apertura, cierre, minimizado, maximizado, foco (z-index) y posición.
 */
export function useWindowManager(isMobile: boolean) {
  const [windows, setWindows] = useState<WindowInstance[]>([]);

  const focusWindow = useCallback((instanceId: string) => {
    zCounter += 1;
    const z = zCounter;
    setWindows((prev) =>
      prev.map((w) => (w.instanceId === instanceId ? { ...w, zIndex: z } : w))
    );
  }, []);

  const openApp = useCallback(
    (appId: AppId) => {
      setWindows((prev) => {
        // Si ya está abierta (y no minimizada->la reabrimos igual), la traemos al frente.
        const existing = prev.find((w) => w.appId === appId);
        zCounter += 1;
        if (existing) {
          return prev.map((w) =>
            w.appId === appId
              ? { ...w, minimized: false, zIndex: zCounter }
              : w
          );
        }

        const def = appRegistry[appId];
        instanceCounter += 1;
        const cascade = (prev.length % 6) * 28;

        const width = isMobile ? window.innerWidth : def.defaultSize.width;
        const height = isMobile
          ? window.innerHeight - 40
          : def.defaultSize.height;

        const newWindow: WindowInstance = {
          instanceId: `${appId}-${instanceCounter}`,
          appId,
          title: def.title,
          x: isMobile ? 0 : 60 + cascade,
          y: isMobile ? 0 : 40 + cascade,
          width,
          height,
          zIndex: zCounter,
          minimized: false,
          maximized: isMobile,
        };

        return [...prev, newWindow];
      });
    },
    [isMobile]
  );

  const closeWindow = useCallback((instanceId: string) => {
    setWindows((prev) => prev.filter((w) => w.instanceId !== instanceId));
  }, []);

  const minimizeWindow = useCallback((instanceId: string) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.instanceId === instanceId ? { ...w, minimized: true } : w
      )
    );
  }, []);

  const toggleMaximize = useCallback((instanceId: string) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.instanceId === instanceId ? { ...w, maximized: !w.maximized } : w
      )
    );
  }, []);

  const restoreWindow = useCallback(
    (instanceId: string) => {
      zCounter += 1;
      const z = zCounter;
      setWindows((prev) =>
        prev.map((w) =>
          w.instanceId === instanceId ? { ...w, minimized: false, zIndex: z } : w
        )
      );
    },
    []
  );

  const updatePosition = useCallback(
    (instanceId: string, pos: { x: number; y: number }) => {
      setWindows((prev) =>
        prev.map((w) => (w.instanceId === instanceId ? { ...w, ...pos } : w))
      );
    },
    []
  );

  return {
    windows,
    openApp,
    closeWindow,
    minimizeWindow,
    toggleMaximize,
    restoreWindow,
    focusWindow,
    updatePosition,
  };
}

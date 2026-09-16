"use client";

import { useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useWindowManager } from "@/hooks/useWindowManager";
import { AppId } from "@/data/apps";
import DesktopIcon from "./DesktopIcon";
import Taskbar from "./Taskbar";
import StartMenu from "./StartMenu";
import WindowFrame from "./WindowFrame";
import AsciiAssistant from "./AsciiAssistant";
import Background3D from "./Falling3DBackground";
import BootScreen from "./BootScreen";

import NotepadIcon from "./icons/NotepadIcon";
import FolderIcon from "./icons/FolderIcon";
import BriefcaseIcon from "./icons/BriefcaseIcon";
import MailIcon from "./icons/MailIcon";
import TrashIcon from "./icons/TrashIcon";

import AboutNotepad from "./apps/AboutNotepad";
import ProjectsExplorer from "./apps/ProjectsExplorer";
import ExperienceApp from "./apps/ExperienceApp";
import ContactApp from "./apps/ContactApp";
import RecycleBin from "./apps/RecycleBin";

/** Registro de qué componente renderizar dentro de cada tipo de ventana. */
const appBodies: Record<AppId, React.ComponentType> = {
  about: AboutNotepad,
  projects: ProjectsExplorer,
  experience: ExperienceApp,
  contact: ContactApp,
  trash: RecycleBin,
};

/** Escritorio principal: fondo, iconos, asistente ASCII, ventanas y barra de tareas. */
export default function Desktop() {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();
  const {
    windows,
    openApp,
    closeWindow,
    minimizeWindow,
    toggleMaximize,
    restoreWindow,
    focusWindow,
    updatePosition,
  } = useWindowManager(isMobile);

  const [startOpen, setStartOpen] = useState(false);

  function handleTaskbarClick(instanceId: string) {
    const win = windows.find((w) => w.instanceId === instanceId);
    if (!win) return;
    if (win.minimized) {
      restoreWindow(instanceId);
    } else {
      focusWindow(instanceId);
    }
  }

  return (
    <main className="aero-sky relative h-screen w-screen overflow-hidden">
      {isLoading && <BootScreen onLoaded={() => setIsLoading(false)} />}

      {/* Si algún día me pareec buena idea  
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Background3D />
      </div> */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url('/images/Pixelated_Background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      </div>

      {/* Iconos de escritorio */}
      <div className="absolute left-5 top-2 flex flex-col flex-wrap gap-1">
        <DesktopIcon
          label="Sobre mí"
          icon={<NotepadIcon size={90} />}
          onOpen={() => openApp("about")}
        />
        <DesktopIcon
          label="Mis Proyectos"
          icon={<FolderIcon size={90} />}
          onOpen={() => openApp("projects")}
        />
        <DesktopIcon
          label="Experiencia"
          icon={<BriefcaseIcon size={90}/>}
          onOpen={() => openApp("experience")}
        />
        <DesktopIcon
          label="Contacto"
          icon={<MailIcon size={90} />}
          onOpen={() => openApp("contact")}
        />
        <DesktopIcon
          label="Papelera"
          icon={<TrashIcon size={90} />}
          onOpen={() => openApp("trash")}
        />
      </div>

      <AsciiAssistant />

      {/* Ventanas abiertas */}
      {windows.map((win) => {
        const Body = appBodies[win.appId];
        return (
          <WindowFrame
            key={win.instanceId}
            instance={win}
            isMobile={isMobile}
            onClose={() => closeWindow(win.instanceId)}
            onMinimize={() => minimizeWindow(win.instanceId)}
            onToggleMaximize={() => toggleMaximize(win.instanceId)}
            onFocus={() => focusWindow(win.instanceId)}
            onMove={(pos) => updatePosition(win.instanceId, pos)}
          >
            <Body />
          </WindowFrame>
        );
      })}

      {/* Menú Inicio */}
      {startOpen && (
        <>
          {/* Capa invisible para cerrar el menú al hacer clic fuera */}
          <div
            className="fixed inset-0 z-[998]"
            onClick={() => setStartOpen(false)}
          />
          <StartMenu
            onOpenApp={(id) => openApp(id)}
            onClose={() => setStartOpen(false)}
          />
        </>
      )}

      <Taskbar
        windows={windows}
        startOpen={startOpen}
        onToggleStart={() => setStartOpen((v) => !v)}
        onWindowClick={handleTaskbarClick}
      />
    </main>
  );
}

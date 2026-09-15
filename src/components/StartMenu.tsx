"use client";

import { AppId } from "@/data/apps";
import NotepadIcon from "@/components/icons/NotepadIcon";
import FolderIcon from "@/components/icons/FolderIcon";
import BriefcaseIcon from "@/components/icons/BriefcaseIcon";
import MailIcon from "@/components/icons/MailIcon";
import { profile } from "@/data/content";

interface StartMenuProps {
  onOpenApp: (appId: AppId) => void;
  onClose: () => void;
}

const items: { id: AppId; label: string; icon: React.ReactNode }[] = [
  { id: "about", label: "Sobre mí", icon: <NotepadIcon size={26} /> },
  { id: "projects", label: "Proyectos", icon: <FolderIcon size={26} /> },
  { id: "experience", label: "Experiencia", icon: <BriefcaseIcon size={26} /> },
  { id: "contact", label: "Contacto", icon: <MailIcon size={26} /> },
];

/** Menú de Inicio: panel de cristal flotante sobre la barra de tareas. */
export default function StartMenu({ onOpenApp, onClose }: StartMenuProps) {
  return (
    <div
      className="glass-panel fixed bottom-[62px] left-2 flex w-72 flex-col overflow-hidden rounded-2xl"
      style={{ zIndex: 1000 }}
    >
      <div className="border-b border-white/40 bg-white/10 px-4 py-3">
        <p className="text-sm font-bold text-white [text-shadow:0_1px_3px_rgba(0,20,50,0.6)]">
          {profile.name}
        </p>
        <p className="text-xs text-white/80 [text-shadow:0_1px_3px_rgba(0,20,50,0.6)]">
          {profile.role}
        </p>
      </div>

      <div className="flex flex-col gap-1 p-2">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              onOpenApp(item.id);
              onClose();
            }}
            className="flex items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-semibold text-[#06305a] transition-colors hover:bg-white/50"
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>

      <div className="border-t border-white/40 p-2">
        <button
          type="button"
          onClick={onClose}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-semibold text-[#06305a] transition-colors hover:bg-white/50"
        >
          <span aria-hidden="true">⏻</span> Apagar el sistema...
        </button>
      </div>
    </div>
  );
}

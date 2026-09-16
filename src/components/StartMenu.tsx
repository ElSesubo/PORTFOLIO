"use client";

import { AppId } from "@/data/apps";
import NotepadIcon from "@/components/icons/NotepadIcon";
import FolderIcon from "@/components/icons/FolderIcon";
import BriefcaseIcon from "@/components/icons/BriefcaseIcon";
import MailIcon from "@/components/icons/MailIcon";
import { profile } from "@/data/content";
import Image from "next/image";

interface StartMenuProps {
  onOpenApp: (appId: AppId) => void;
  onClose: () => void;
}

const leftItems: {
  id: AppId;
  label: string;
  subtext?: string;
  icon: React.ReactNode;
}[] = [
  {
    id: "about",
    label: "Sobre mí",
    subtext: "Información personal",
    icon: <NotepadIcon size={30} />,
  },
  {
    id: "projects",
    label: "Proyectos",
    subtext: "Mis aplicaciones",
    icon: <FolderIcon size={30} />,
  },
  {
    id: "experience",
    label: "Experiencia",
    subtext: "Trayectoria laboral",
    icon: <BriefcaseIcon size={30} />,
  },
  {
    id: "contact",
    label: "Contacto",
    subtext: "Enviar un mensaje",
    icon: <MailIcon size={30} />,
  },
];

export default function StartMenu({ onOpenApp, onClose }: StartMenuProps) {
  return (
    <div className="start-menu-xp fixed bottom-[30px] left-0 z-[1000] flex w-[380px] flex-col overflow-hidden">
      {/* 1. Cabecera azul con avatar y nombre */}
      <div className="start-menu-header-xp flex items-center gap-3 px-3 py-2">
        <div className="h-12 w-12 overflow-hidden rounded-md border-2 border-white/80 bg-orange-500 shadow-md flex items-center justify-center text-white font-bold text-xl">
          <div className="relative h-12 w-12 overflow-hidden rounded-md border-2 border-white/80 bg-orange-500 shadow-md flex items-center justify-center">
            <Image
              src="/images/avatar.jpg"
              alt="Avatar de usuario"
              fill
              className="h-full w-full object-cover scale-175 object-bottom"
              priority
            />
          </div>
        </div>
        <span className="text-base font-bold text-white drop-shadow-[1px_1px_1px_rgba(0,0,0,0.8)]">
          {profile.name || "Usuario"}
        </span>
      </div>

      {/* 2. Cuerpo dividido en dos columnas */}
      <div className="flex flex-1 min-h-[300px]">
        {/* Columna Izquierda: Aplicaciones principales */}
        <div className="flex w-1/2 flex-col justify-between bg-white p-1.5">
          <div className="flex flex-col gap-0.5">
            {leftItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  onOpenApp(item.id);
                  onClose();
                }}
                className="start-menu-left-btn-xp flex items-center gap-2.5 rounded-sm p-1.5 text-left text-xs text-gray-900"
              >
                <div className="shrink-0">{item.icon}</div>
                <div className="flex flex-col overflow-hidden">
                  <span className="font-bold truncate">{item.label}</span>
                  {item.subtext && (
                    <span className="subtext-xp text-[10px] text-gray-500 truncate">
                      {item.subtext}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Botón "All Programs" (Todos los programas) */}
          <div className="border-t border-gray-200 pt-1 mt-2">
            <button
              type="button"
              className="start-menu-left-btn-xp flex w-full items-center justify-between rounded-sm p-1.5 text-xs font-bold text-gray-900"
            >
              <span>Todos los programas</span>
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-green-600 text-[10px] text-white font-black">
                ►
              </span>
            </button>
          </div>
        </div>

        {/* Columna Derecha: Accesos rápidos de sistema */}
        <div className="start-menu-right-col-xp flex w-1/2 flex-col gap-1 p-1.5 text-xs">
          <button
            type="button"
            onClick={() => {
              onOpenApp("projects");
              onClose();
            }}
            className="start-menu-right-btn-xp flex items-center gap-2 rounded-sm p-1 text-left"
          >
            <span className="text-base">📁</span>
            <span>Mis Documentos</span>
          </button>

          <button
            type="button"
            onClick={() => {
              onOpenApp("about");
              onClose();
            }}
            className="start-menu-right-btn-xp flex items-center gap-2 rounded-sm p-1 text-left"
          >
            <span className="text-base">🖼️</span>
            <span>Mis Imágenes</span>
          </button>

          <button
            type="button"
            onClick={() => {
              onOpenApp("experience");
              onClose();
            }}
            className="start-menu-right-btn-xp flex items-center gap-2 rounded-sm p-1 text-left"
          >
            <span className="text-base">💻</span>
            <span>Mi Equipo</span>
          </button>

          <div className="my-1 border-t border-[#b0cbef]" />

          <button
            type="button"
            className="start-menu-right-btn-xp flex items-center gap-2 rounded-sm p-1 text-left"
          >
            <span className="text-base">⚙️</span>
            <span>Panel de control</span>
          </button>

          <button
            type="button"
            className="start-menu-right-btn-xp flex items-center gap-2 rounded-sm p-1 text-left"
          >
            <span className="text-base">❓</span>
            <span>Ayuda y soporte</span>
          </button>

          <button
            type="button"
            className="start-menu-right-btn-xp flex items-center gap-2 rounded-sm p-1 text-left"
          >
            <span className="text-base">🔍</span>
            <span>Buscar</span>
          </button>

          <button
            type="button"
            className="start-menu-right-btn-xp flex items-center gap-2 rounded-sm p-1 text-left"
          >
            <span className="text-base">🏃</span>
            <span>Ejecutar...</span>
          </button>
        </div>
      </div>

      {/* 3. Pie de página azul con botones Log Off y Turn Off */}
      <div className="start-menu-footer-xp flex items-center justify-end gap-3 p-2">
        <button
          type="button"
          onClick={onClose}
          className="flex items-center gap-1.5 text-xs text-white hover:underline drop-shadow"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded bg-amber-500 border border-amber-300 text-[10px] font-bold text-white shadow">
            🔑
          </span>
          Cerrar sesión
        </button>

        <button
          type="button"
          onClick={onClose}
          className="flex items-center gap-1.5 text-xs text-white hover:underline drop-shadow"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded bg-red-600 border border-red-400 text-[10px] font-bold text-white shadow">
            ⏻
          </span>
          Apagar el equipo
        </button>
      </div>
    </div>
  );
}

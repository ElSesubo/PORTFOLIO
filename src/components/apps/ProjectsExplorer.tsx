"use client";

import { useState } from "react";
import { projects } from "@/data/content";
import FolderIcon from "@/components/icons/FolderIcon";

/** Explorador de proyectos: lista a la izquierda, detalle a la derecha. */
export default function ProjectsExplorer() {
  const [selected, setSelected] = useState(projects[0]?.id ?? null);
  const active = projects.find((p) => p.id === selected) ?? null;

  return (
    <div className="flex h-full">
      <div className="win95-scroll flex w-1/2 flex-col gap-1 overflow-y-auto border-r border-white/40 bg-white/15 p-2">
        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            onClick={() => setSelected(project.id)}
            className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-left text-xs font-medium transition-colors ${
              selected === project.id
                ? "bg-white/60 text-[#06305a]"
                : "text-[#06305a]/80 hover:bg-white/35"
            }`}
          >
            <FolderIcon size={20} />
            <span className="truncate">{project.name}</span>
          </button>
        ))}
      </div>

      <div className="flex w-1/2 flex-col gap-3 p-4 text-xs text-[#06305a]">
        {active ? (
          <>
            <h3 className="text-sm font-bold">{active.name}</h3>
            <p className="leading-relaxed">{active.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {active.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#06305a]/25 bg-white/45 px-2.5 py-0.5 text-[#06305a]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-auto flex gap-2">
              {active.demoUrl && (
                <a href={active.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-aero">
                  Ver demo
                </a>
              )}
              {active.githubUrl && (
                <a href={active.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-aero">
                  Código
                </a>
              )}
            </div>
          </>
        ) : (
          <p>Selecciona un proyecto de la lista.</p>
        )}
      </div>
    </div>
  );
}

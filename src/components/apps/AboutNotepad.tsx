import { aboutText, profile } from "@/data/content";

/** Simula un editor de texto con look de cristal, mostrando "Sobre mí". */
export default function AboutNotepad() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex gap-4 border-b border-white/50 bg-white/25 px-3 py-1.5 text-xs font-semibold text-[#06305a]">
        <span>Archivo</span>
        <span>Edición</span>
        <span>Buscar</span>
        <span>Ayuda</span>
      </div>
      <textarea
        className="notepad-textarea flex-1"
        readOnly
        value={aboutText}
        aria-label="Contenido de Sobre mí"
      />
      <div className="flex items-center justify-between border-t border-white/50 bg-white/25 px-3 py-2 text-xs text-[#06305a]">
        <span className="font-semibold">{profile.name}</span>
        <a href="/cv.pdf" className="btn-aero" target="_blank" rel="noopener noreferrer">
          Descargar CV real
        </a>
      </div>
    </div>
  );
}

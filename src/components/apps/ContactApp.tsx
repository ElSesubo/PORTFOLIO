import { profile } from "@/data/content";

/** Tarjeta de contacto con enlaces reales de Gabriel, estilo cristal. */
export default function ContactApp() {
  return (
    <div className="flex h-full flex-col gap-4 p-4 text-xs text-[#06305a]">
      <div className="glass-panel rounded-xl p-3">
        <p className="mb-2 text-sm font-bold">Contacto directo</p>
        <div className="mb-2 flex flex-col">
          <span className="font-semibold">Email</span>
          <a href={`mailto:${profile.email}`} className="underline">
            {profile.email}
          </a>
        </div>
        <div className="mb-2 flex flex-col">
          <span className="font-semibold">Teléfono</span>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="underline">
            {profile.phone}
          </a>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">Ubicación</span>
          <span>{profile.location}</span>
        </div>
      </div>

      <div className="glass-panel rounded-xl p-3">
        <p className="mb-2 text-sm font-bold">Redes</p>
        <div className="flex flex-wrap gap-2">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-aero">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-aero">
            LinkedIn
          </a>
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn-aero">
            Descargar CV
          </a>
        </div>
      </div>
    </div>
  );
}

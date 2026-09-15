export type AppId = "about" | "projects" | "experience" | "contact" | "trash";

export interface AppDefinition {
  id: AppId;
  title: string;
  /** Ancho/alto por defecto al abrir la ventana (px) en escritorio. */
  defaultSize: { width: number; height: number };
}

export const appRegistry: Record<AppId, AppDefinition> = {
  about: {
    id: "about",
    title: "Sobre_mi.txt - Bloc de notas",
    defaultSize: { width: 520, height: 420 },
  },
  projects: {
    id: "projects",
    title: "Mis Documentos - Proyectos",
    defaultSize: { width: 620, height: 460 },
  },
  experience: {
    id: "experience",
    title: "Experiencia.exe",
    defaultSize: { width: 560, height: 460 },
  },
  contact: {
    id: "contact",
    title: "Contacto",
    defaultSize: { width: 460, height: 420 },
  },
  trash: {
    id: "trash",
    title: "Papelera de reciclaje",
    defaultSize: { width: 420, height: 300 },
  },
};

/**
 * TODO EL TEXTO EDITABLE DEL PORTFOLIO VIVE AQUÍ.
 * Cambia estos datos para actualizar el contenido sin tocar los componentes.
 */

export const profile = {
  name: "Gabriel Argente",
  role: "Full Stack Developer",
  email: "gabrielargenteaguilera@gmail.com",
  phone: "+34 651 19 38 38",
  location: "Alcácer, Valencia",
  github: "https://github.com/gabrielargente",
  linkedin: "https://linkedin.com/in/gabrielargente",
};

export const aboutText = `SOBRE_MI.TXT
-------------

Soy Gabriel Argente, desarrollador Full Stack.

No solo escribo código, aporto soluciones adaptables.
Mi enfoque combina una técnica sólida con la flexibilidad
necesaria para trabajar en equipos dinámicos. Donde otros
ven cambios constantes, yo veo oportunidades para
evolucionar.

FORMACIÓN
---------
2019-2021  Técnico en Sistemas Microinformáticos y Redes
           (Florida Universitaria)
2021-2023  Técnico Superior en Desarrollo de Aplicaciones
           Multiplataforma (Florida Universitaria)
2023-Act.  Grado en Tecnología Digital y Multimedia
           (Universidad Politécnica de Valencia)

HABILIDADES
-----------
Lenguajes: JavaScript, Java, Python, HTML5, CSS3, SCSS
Front-End: React, Redux, diseño responsive
APIs:      Spring Boot, APIs REST, Swagger
Control de versiones: Git, GitHub, Bitbucket
`;

export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

// Placeholder: sustituye por tus proyectos reales.
export const projects: Project[] = [
  {
    id: "proyecto-1",
    name: "nova-shop.exe",
    description:
      "E-commerce con carrito persistente y panel de administración de productos y pedidos.",
    tags: ["React", "TypeScript", "Node.js"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/gabrielargente",
  },
  {
    id: "proyecto-2",
    name: "taskflow.exe",
    description:
      "Gestor de tareas colaborativo con tableros estilo Kanban en tiempo real.",
    tags: ["React", "Redux", "Socket.io"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/gabrielargente",
  },
  {
    id: "proyecto-3",
    name: "api-clima.exe",
    description:
      "API REST documentada con Swagger para consultar datos meteorológicos.",
    tags: ["Spring Boot", "Swagger", "REST"],
    githubUrl: "https://github.com/gabrielargente",
  },
];

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: "ceupv",
    company: "Consejo de Estudiantes UPV",
    role: "Coordinador TICs",
    period: "Enero 2026 — Actualidad",
    achievements: [
      "Gestor de la página web del CEUPV.",
      "Revisión y custodia del material audiovisual del CEUPV.",
    ],
  },
  {
    id: "etsit",
    company: "ETSIT — UPV",
    role: "Web Manager",
    period: "Diciembre 2024 — Mayo 2025",
    achievements: [
      "Gestor de la página web de la ETSIT.",
      "Uso de WordPress y herramientas de SEO.",
    ],
  },
  {
    id: "poliwood",
    company: "Poliwood UPV",
    role: "Editor de Vídeo, Podcast y Streaming",
    period: "Octubre 2024 — Actualidad",
    achievements: [
      "Postproducción y masterización de sonido (broadcast quality).",
      "Retransmisión en directo de eventos (Air Cargo Challenge, XtraChallenge).",
    ],
  },
  {
    id: "idrica",
    company: "Idrica, Global Omnium",
    role: "Web Developer (media jornada)",
    period: "Marzo 2023 — Agosto 2025",
    achievements: [
      "Desarrollo de interfaces responsivas con React y TypeScript.",
      "Gestión de estado complejo con Redux.",
      "Integración de APIs RESTful.",
    ],
  },
  {
    id: "etramufrep",
    company: "Etramufrep",
    role: "Técnico de Sistemas",
    period: "Julio 2022 — Septiembre 2022",
    achievements: [
      "Desarrollo SEO y gestión de archivos.",
      "Mantenimiento de equipos informáticos.",
    ],
  },
];

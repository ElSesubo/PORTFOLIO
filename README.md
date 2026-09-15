# Aero Desktop Portfolio — Gabriel Argente

Portfolio personal en forma de escritorio interactivo, con estética **Frutiger Aero** (superficies de cristal translúcido, gradientes azul/aqua glossy, botones con brillo, burbujas flotantes) manteniendo el concepto clásico de un escritorio de Windows: iconos, ventanas arrastrables, barra de tareas y menú de Inicio.

Construido con Next.js (App Router), React, TypeScript y TailwindCSS. **Sin librerías de UI externas**: todo el look Aero (cristal, brillos, degradados) está hecho a mano con CSS, para minimizar dependencias y riesgo de conflictos.

## Puesta en marcha

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Qué incluye

- **Escritorio**: fondo tipo cielo Aero (degradado azul) con burbujas flotantes decorativas.
- **Iconos de escritorio**: el propio dibujo + etiqueta son el botón (sin caja alrededor), doble clic para abrir. Un clic los selecciona con un resalte suave de cristal.
- **Sistema de ventanas**: cristal translúcido con esquinas redondeadas, cabecera glossy azul, arrastrables (Pointer Events, sin librerías externas), con minimizar / maximizar / cerrar (controles circulares glossy) y gestión de `z-index`.
- **Barra de tareas** Aero: cristal oscuro translúcido, orbe de "Inicio" verde glossy, pestañas dinámicas por cada ventana abierta, reloj en vivo.
- **Asistente ASCII**: una cara grande dibujada con caracteres en la mitad derecha del escritorio, con tu nombre y cargo a la izquierda. Parpadea cada pocos segundos (ya no suelta bocadillos de texto).
- **Responsive**: en pantallas < 768px las ventanas se abren maximizadas automáticamente; el asistente ASCII se oculta en móvil.

## Contenido editable

Todo el texto vive en `src/data/`, sin tocar componentes:

- `src/data/content.ts` — datos de contacto, texto de "Sobre mí", proyectos y experiencia laboral (ya con tu experiencia real del CV).
- `src/data/apps.ts` — registro de qué ventanas existen, su título y tamaño por defecto.

**Pendiente de tu parte:**
- `src/data/content.ts`: sustituye `github` y `linkedin` por tus URLs reales.
- `src/data/content.ts` → `projects`: son proyectos de ejemplo, sustitúyelos por los tuyos reales.
- `public/cv.pdf`: ya es tu currículum real; el enlace de "Descargar CV" funciona.

## Notas técnicas

- **Sin 98.css**: la iteración anterior usaba `98.css` para el look Windows 95. Al pasar a Frutiger Aero (cristal, brillos, degradados) se sustituyó por clases CSS propias en `src/app/globals.css` (`.glass-panel`, `.window-aero`, `.title-bar-aero`, `.btn-aero`, `.taskbar-aero`, `.start-orb`...), reduciendo dependencias a solo Next.js/React/Tailwind.
- **Burbujas de fondo**: posiciones y tamaños fijos en `AeroBubbles.tsx` (no usan `Math.random()` en el render) para evitar mismatches de hidratación entre servidor y cliente.
- **Reloj**: se genera dentro de un `useEffect` (solo cliente, tras el montaje) por el mismo motivo.
- **Arrastre de ventanas**: implementado a mano con Pointer Events (`src/hooks/useDraggable.ts`).
- **Accesibilidad**: iconos y ventanas usan elementos semánticos (`button`, `role="dialog"`, `aria-label`), navegables por teclado; el asistente ASCII es decorativo (`aria-hidden`).

## Próximos pasos recomendados

- Sustituir proyectos y enlaces reales.
- Prueba `npm run build` y revisa la consola del navegador la primera vez que lo levantes — no he podido ejecutar `npm install`/`npm run build` en este entorno por falta de acceso a red.

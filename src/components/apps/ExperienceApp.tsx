import { experience } from "@/data/content";

/** Lista la experiencia laboral en tarjetas de cristal apilables. */
export default function ExperienceApp() {
  return (
    <div className="win95-scroll flex h-full flex-col gap-3 overflow-y-auto p-3">
      {experience.map((item) => (
        <div key={item.id} className="glass-panel rounded-xl p-3">
          <p className="text-sm font-bold text-[#06305a]">{item.role}</p>
          <p className="text-xs font-semibold text-[#06305a]/80">{item.company}</p>
          <p className="mb-2 text-xs italic text-[#06305a]/70">{item.period}</p>
          <ul className="list-disc space-y-1 pl-4 text-xs text-[#06305a]">
            {item.achievements.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

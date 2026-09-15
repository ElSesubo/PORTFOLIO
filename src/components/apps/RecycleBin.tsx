import TrashIcon from "@/components/icons/TrashIcon";

/** Papelera de reciclaje, vacía. */
export default function RecycleBin() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center text-xs text-[#06305a]">
      <TrashIcon size={48} />
      <p className="font-semibold">La papelera está vacía.</p>
      <p className="text-[#06305a]/70">
        (Todos los proyectos que ves en el escritorio pasaron el control de calidad 😄)
      </p>
    </div>
  );
}

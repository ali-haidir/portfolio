import { Mouse } from "lucide-react";

export function ScrollHint() {
  return (
    <button
      type="button"
      aria-label="Scroll"
      className="
        fixed bottom-10 right-10
        h-16 w-16 rounded-full
        bg-[var(--surface)]
        shadow-[var(--shadow-soft)]
        flex items-center justify-center
        transition-all duration-200 ease-out
        hover:scale-[1.06]
      "
    >
      <Mouse className="h-7 w-7 text-[var(--text)]" />
    </button>
  );
}
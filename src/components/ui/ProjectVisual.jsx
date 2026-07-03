import Image from "next/image";
import WindowChrome from "@/components/ui/WindowChrome";

const PATTERNS = {
  grid: (
    <>
      <defs>
        <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0H0V28" fill="none" stroke="currentColor" strokeOpacity="0.18" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </>
  ),
  waves: (
    <>
      {Array.from({ length: 6 }).map((_, i) => (
        <path
          key={i}
          d={`M -20 ${60 + i * 30} Q 160 ${10 + i * 30} 340 ${60 + i * 30}`}
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.22"
        />
      ))}
    </>
  ),
};

/**
 * Project screenshot shown inside a browser-chrome frame. Falls back to a
 * designed placeholder (not a gray box) when no screenshot is available yet.
 */
export default function ProjectVisual({ label, tone = "accent", pattern = "grid", imageSrc, imageAspect, url }) {
  const toneClass = tone === "forest" ? "text-forest" : tone === "purple" ? "text-purple" : "text-accent";
  const bgClass =
    tone === "forest"
      ? "from-forest-tint via-paper-deep to-paper-alt"
      : tone === "purple"
        ? "from-[rgba(188,140,255,0.12)] via-paper-deep to-paper-alt"
        : "from-accent-tint via-paper-deep to-paper-alt";

  return (
    <WindowChrome url={url} title={!url ? label : undefined} className="group">
      <div
        className={`relative w-full overflow-hidden bg-gradient-to-br ${!imageSrc ? "aspect-[16/11]" : ""} ${bgClass}`}
        style={imageSrc ? { aspectRatio: imageAspect || 16 / 11 } : undefined}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={label}
            fill
            sizes="(min-width: 1024px) 40rem, 90vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <>
            <svg aria-hidden="true" viewBox="0 0 340 220" className={`absolute inset-0 h-full w-full ${toneClass}`}>
              {PATTERNS[pattern]}
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="rounded-full border border-line-strong bg-paper/80 px-5 py-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-soft backdrop-blur-sm">
                {label}
              </span>
            </div>
          </>
        )}
      </div>
    </WindowChrome>
  );
}

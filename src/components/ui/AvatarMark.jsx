import Image from "next/image";
import WindowChrome from "@/components/ui/WindowChrome";

/**
 * Portrait slot for the About section, framed like a code editor tab.
 * Drop a real photo at /public/<file> and pass photoSrc to swap it in.
 */
export default function AvatarMark({ photoSrc, initials = "RF" }) {
  return (
    <WindowChrome title="profile.jpg" className="group w-full max-w-sm transition-colors hover:border-accent/60">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-paper-deep via-accent-tint to-forest-tint">
        {photoSrc ? (
          <Image
            src={photoSrc}
            alt="Rasha Faheem"
            fill
            sizes="(min-width: 1024px) 24rem, 60vw"
            className="object-cover grayscale-[15%] transition-all duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <svg aria-hidden="true" viewBox="0 0 320 400" className="absolute inset-0 h-full w-full opacity-40">
              <defs>
                <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.4" fill="var(--ink-faint)" />
                </pattern>
              </defs>
              <rect width="320" height="400" fill="url(#dots)" />
              <circle cx="160" cy="160" r="110" fill="none" stroke="var(--accent)" strokeOpacity="0.35" strokeWidth="1.5" />
              <circle cx="160" cy="160" r="70" fill="none" stroke="var(--forest)" strokeOpacity="0.35" strokeWidth="1.5" />
            </svg>
            <span className="relative font-display text-7xl text-ink/80">{initials}</span>
          </div>
        )}
      </div>
    </WindowChrome>
  );
}

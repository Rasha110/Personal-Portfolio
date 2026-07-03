export default function Marquee({ items, className = "" }) {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <div className="flex w-max animate-marquee gap-10 group-hover:[animation-play-state:paused]">
        {[...items, ...items].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="font-mono text-sm uppercase tracking-[0.15em] text-ink-faint whitespace-nowrap"
          >
            {item}
            <span className="ml-10 text-accent">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}

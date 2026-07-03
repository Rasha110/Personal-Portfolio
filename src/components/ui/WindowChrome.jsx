function extractHost(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export default function WindowChrome({ title, url, children, className = "" }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-line bg-paper-deep ${className}`}>
      <div className="flex items-center gap-2 border-b border-line bg-paper-alt px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-orange/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-forest/70" />
        {url ? (
          <span className="ml-3 flex-1 truncate rounded-md bg-paper px-3 py-1 text-center font-mono text-[0.65rem] text-ink-faint">
            {extractHost(url)}
          </span>
        ) : title ? (
          <span className="ml-2 font-mono text-[0.7rem] text-ink-faint">{title}</span>
        ) : null}
      </div>
      {children}
    </div>
  );
}

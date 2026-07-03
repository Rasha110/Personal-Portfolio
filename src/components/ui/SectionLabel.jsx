export default function SectionLabel({ index, title }) {
  return (
    <div className="flex items-center gap-2 font-mono text-xs lowercase tracking-tight text-ink-faint">
      <span className="text-purple">{"//"}</span>
      <span className="text-accent">{index}</span>
      <span>{"—"}</span>
      <span className="text-forest">{title}</span>
    </div>
  );
}

export function SparkBars({ values }: { values: number[] }) {
  const max = Math.max(...values, 1);
  return (
    <div className="flex h-40 items-end gap-1.5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      {values.map((value, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm bg-gradient-to-t from-accent-2 to-accent"
          style={{ height: `${Math.max(8, (value / max) * 100)}%` }}
          title={`Demo point ${i + 1}: ${value}`}
        />
      ))}
    </div>
  );
}

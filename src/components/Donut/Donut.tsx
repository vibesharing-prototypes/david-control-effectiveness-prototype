type Slice = { value: number; color: string; label: string };

type Props = {
  slices: Slice[];
  centerLabel?: string;
  centerValue?: string | number;
  size?: number;
  thickness?: number;
};

export default function Donut({ slices, centerLabel, centerValue, size = 160, thickness = 22 }: Props) {
  const total = slices.reduce((sum, s) => sum + s.value, 0) || 1;
  const r = (size - thickness) / 2;
  const c = size / 2;
  const circumference = 2 * Math.PI * r;
  let offset = 0;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={c} cy={c} r={r} fill="none" stroke="var(--color-border)" strokeWidth={thickness} />
      {slices.map((s, i) => {
        const len = (s.value / total) * circumference;
        const dash = `${len} ${circumference - len}`;
        const el = (
          <circle
            key={i}
            cx={c}
            cy={c}
            r={r}
            fill="none"
            stroke={s.color}
            strokeWidth={thickness}
            strokeDasharray={dash}
            strokeDashoffset={-offset}
            transform={`rotate(-90 ${c} ${c})`}
          />
        );
        offset += len;
        return el;
      })}
      {centerValue != null && (
        <text
          x="50%"
          y="48%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="28"
          fontWeight="600"
          fill="var(--color-text-primary)"
        >
          {centerValue}
        </text>
      )}
      {centerLabel && (
        <text
          x="50%"
          y="62%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="12"
          fill="var(--color-text-secondary)"
        >
          {centerLabel}
        </text>
      )}
    </svg>
  );
}

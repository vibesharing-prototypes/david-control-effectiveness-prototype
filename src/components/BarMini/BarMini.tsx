type Bar = { label: string; value: number; color: string };

type Props = {
  bars: Bar[];
  maxY?: number;
  height?: number;
};

export default function BarMini({ bars, maxY = 1, height = 180 }: Props) {
  const width = 300;
  const padLeft = 28;
  const padBottom = 24;
  const padTop = 8;
  const innerW = width - padLeft - 8;
  const innerH = height - padBottom - padTop;
  const barW = innerW / bars.length - 16;
  const yTicks = [0, 0.2, 0.4, 0.6, 0.8, 1.0];

  return (
    <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
      {yTicks.map((t) => {
        const y = padTop + innerH * (1 - t / maxY);
        return (
          <g key={t}>
            <line x1={padLeft} y1={y} x2={width - 8} y2={y} stroke="var(--color-border)" strokeDasharray="2 2" />
            <text x={padLeft - 6} y={y + 4} fontSize="10" fill="var(--color-text-secondary)" textAnchor="end">
              {t.toFixed(1)}
            </text>
          </g>
        );
      })}
      {bars.map((b, i) => {
        const x = padLeft + 8 + i * (barW + 16);
        const h = (b.value / maxY) * innerH;
        const y = padTop + innerH - h;
        return (
          <g key={b.label}>
            <rect x={x} y={y} width={barW} height={Math.max(h, 1)} fill={b.color} rx="1" />
          </g>
        );
      })}
      <line x1={padLeft} y1={padTop + innerH} x2={width - 8} y2={padTop + innerH} stroke="var(--color-border-strong)" />
    </svg>
  );
}

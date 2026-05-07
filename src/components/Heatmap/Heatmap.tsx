import { StyledWrap, StyledBody, StyledGrid, StyledCell, StyledColLabels, StyledRowLabels, StyledAxis } from "./Heatmap.styles";

type Props = {
  values: number[][]; // 3x3 (rows = likelihood high→low, cols = impact low→high)
  xLabel?: string;
  yLabel?: string;
};

const xLabels = ["Low", "Medium", "High"];
const yLabels = ["High", "Medium", "Low"];

function riskScore(row: number, col: number): number {
  // row 0 = High likelihood (top), row 2 = Low likelihood (bottom)
  // col 0 = Low impact (left), col 2 = High impact (right)
  // risk = likelihood level + impact level
  const likelihood = 2 - row; // High=2, Medium=1, Low=0
  return likelihood + col;
}

function bandColor(row: number, col: number): string {
  const risk = riskScore(row, col);
  if (risk <= 1) return "var(--color-heatmap-green-strong)";
  if (risk === 2) return "var(--color-heatmap-amber)";
  return "var(--color-heatmap-red)";
}

function cellBg(row: number, col: number, value: number): string {
  if (value > 0) return bandColor(row, col);
  const risk = riskScore(row, col);
  if (risk <= 1) return "var(--color-success-soft)";
  if (risk === 2) return "var(--color-warning-soft)";
  if (risk >= 3) return "var(--color-danger-soft)";
  return "var(--color-heatmap-empty)";
}

export default function Heatmap({ values, xLabel = "Impact", yLabel = "Likelihood" }: Props) {
  return (
    <StyledWrap>
      <StyledBody>
        <StyledAxis>{yLabel}</StyledAxis>
        <StyledRowLabels>
          {yLabels.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </StyledRowLabels>
        <StyledGrid>
          {values.map((row, rIdx) =>
            row.map((val, cIdx) => (
              <StyledCell key={`${rIdx}-${cIdx}`} $bg={cellBg(rIdx, cIdx, val)} $filled={val > 0}>
                {val > 0 ? val : ""}
              </StyledCell>
            )),
          )}
        </StyledGrid>
      </StyledBody>
      <StyledColLabels>
        {xLabels.map((l) => (
          <span key={l}>{l}</span>
        ))}
      </StyledColLabels>
      <StyledAxis $horizontal>{xLabel}</StyledAxis>
    </StyledWrap>
  );
}

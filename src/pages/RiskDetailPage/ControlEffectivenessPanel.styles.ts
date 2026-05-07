import styled from "styled-components";
import { EffectivenessLevel } from "../../mocks/data";

export const StyledPanel = styled.section`
  background: var(--color-surface);
  border-radius: 0 0 var(--radius-lg) var(--radius-lg);
  box-shadow: var(--shadow-card);
  padding: var(--space-3);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);

  section {
    display: flex;
    flex-direction: column;
    gap: var(--space-1-5);
  }
`;

export const StyledSectionHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);

  h2 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: var(--color-text-primary);
    .muted {
      color: var(--color-text-secondary);
      font-weight: 500;
    }
  }

  .ghost {
    background: transparent;
    border: none;
    color: var(--color-text-secondary);
    font-size: 13px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    &:hover {
      color: var(--color-text-primary);
    }
  }
`;

export const StyledSectionSubtitle = styled.p`
  margin: 0;
  font-size: 12px;
  color: var(--color-text-secondary);
`;

export const StyledMetricsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-3);
  padding-top: var(--space-1);
`;

export const StyledMetric = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const StyledMetricLabel = styled.div`
  font-size: 12px;
  color: var(--color-text-secondary);
`;

export const StyledMetricValue = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text-primary);
`;

type Tone = "danger" | "warning" | "success" | "info";
const toneBg: Record<Tone, string> = {
  danger: "var(--color-danger)",
  warning: "var(--color-warning)",
  success: "var(--color-success)",
  info: "var(--color-accent-blue)",
};

export const StyledMetricPill = styled.div<{ $tone: Tone }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  font-size: 13px;
  font-weight: 500;
  color: var(--color-text-primary);
  max-width: fit-content;

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ $tone }) => toneBg[$tone]};
  }
`;

export const StyledCalcMethodSelect = styled.button<{ $tone: Tone }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  max-width: fit-content;
  color: var(--color-text-primary);

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ $tone }) => toneBg[$tone]};
  }
  .val {
    flex: 1;
  }
  svg {
    color: var(--color-text-secondary);
  }

  &:hover {
    background: var(--color-surface-alt);
  }
`;

export const StyledCalcMethodRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  label {
    font-size: 12px;
    color: var(--color-text-secondary);
  }
  .select {
    position: relative;
    display: flex;
    align-items: center;
    padding: 8px 10px;
    border: 1px solid var(--color-border-strong);
    border-radius: var(--radius-md);
    font-size: 14px;
    color: var(--color-text-primary);
    background: var(--color-surface);
    cursor: pointer;
    max-width: 420px;

    select {
      appearance: none;
      border: none;
      background: transparent;
      font-size: 14px;
      color: var(--color-text-primary);
      width: 100%;
      outline: none;
      cursor: pointer;
      padding-right: 24px;
    }
    svg {
      position: absolute;
      right: 10px;
      pointer-events: none;
      color: var(--color-text-secondary);
    }
  }
`;

export const StyledControlsCard = styled.div`
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
`;

const gridCols =
  "minmax(180px, 1.4fr) 170px 170px 90px 110px 130px 160px 32px";

export const StyledControlsHeader = styled.div`
  display: grid;
  grid-template-columns: ${gridCols};
  gap: var(--space-1);
  padding: 10px var(--space-2);
  background: var(--color-surface-alt);
  border-bottom: 1px solid var(--color-border);
  font-size: 11px;
  font-weight: 600;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.4px;
`;

export const StyledControlsTable = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledControlRow = styled.div<{ $gated: boolean }>`
  display: grid;
  grid-template-columns: ${gridCols};
  gap: var(--space-1);
  align-items: center;
  padding: 10px var(--space-2);
  border-bottom: 1px solid var(--color-divider);
  font-size: 13px;
  background: ${({ $gated }) => ($gated ? "#fdf5f5" : "var(--color-surface)")};

  &:last-child {
    border-bottom: none;
  }
  .name {
    font-weight: 500;
    color: var(--color-text-primary);
  }
  .contrib {
    font-weight: 600;
    color: var(--color-text-primary);
  }
  .date {
    color: var(--color-text-secondary);
  }
  .owner {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--color-text-primary);
    .avatar {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: linear-gradient(135deg, #c9d8ec, #7fa2d9);
      flex-shrink: 0;
    }
  }
`;

const levelBorder: Record<EffectivenessLevel, string> = {
  Effective: "rgba(46, 125, 50, 0.35)",
  "Partially Effective": "rgba(249, 168, 37, 0.45)",
  Ineffective: "rgba(211, 47, 47, 0.4)",
};

export const StyledLevelSelect = styled.div<{ $level: EffectivenessLevel; $muted?: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 8px;
  border: 1px solid ${({ $level }) => levelBorder[$level]};
  border-radius: var(--radius-md);
  background: var(--color-surface);
  font-size: 12px;
  font-weight: 500;
  opacity: ${({ $muted }) => ($muted ? 0.55 : 1)};
  width: 100%;

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  select {
    appearance: none;
    border: none;
    background: transparent;
    font: inherit;
    color: var(--color-text-primary);
    padding: 0 16px 0 0;
    outline: none;
    cursor: pointer;
    flex: 1;
    min-width: 0;
  }

  svg {
    position: absolute;
    right: 8px;
    color: var(--color-text-secondary);
    pointer-events: none;
  }
`;

export const StyledWeightSelect = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  padding: 5px 8px;
  font-size: 12px;
  font-weight: 500;
  width: 100%;

  select {
    appearance: none;
    border: none;
    background: transparent;
    font: inherit;
    color: var(--color-text-primary);
    padding: 0 16px 0 0;
    outline: none;
    cursor: pointer;
    flex: 1;
    min-width: 0;
  }
  svg {
    position: absolute;
    right: 8px;
    color: var(--color-text-secondary);
    pointer-events: none;
  }
`;

export const StyledRowActions = styled.div`
  display: inline-flex;
  justify-content: flex-end;
`;

export const StyledApplyBtn = styled.button`
  width: 28px;
  height: 28px;
  border: none;
  background: transparent;
  border-radius: var(--radius-pill);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--color-text-secondary);
  &:hover {
    background: var(--color-surface-alt);
    color: var(--color-text-primary);
  }
`;

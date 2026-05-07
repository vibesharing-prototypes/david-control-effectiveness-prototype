import styled from "styled-components";

export const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
`;

export const StyledBody = styled.div`
  display: flex;
  align-items: stretch;
  gap: 6px;
`;

export const StyledAxis = styled.div<{ $horizontal?: boolean }>`
  font-size: 10px;
  font-weight: 500;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;

  ${({ $horizontal }) =>
    $horizontal
      ? `text-align: center; padding-top: 6px;`
      : `writing-mode: vertical-rl; transform: rotate(180deg); display: flex; align-items: center; justify-content: center;`}
`;

export const StyledRowLabels = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 11px;
  color: var(--color-text-secondary);
  text-align: right;
  padding-right: 4px;
  min-width: 48px;
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 3px;
  flex: 1;
  aspect-ratio: 1;
  max-height: 180px;
`;

export const StyledColLabels = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3px;
  font-size: 11px;
  color: var(--color-text-secondary);
  text-align: center;
  padding-top: 4px;
  margin-left: 54px;
`;

export const StyledCell = styled.div<{ $bg: string; $filled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $bg }) => $bg};
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ $filled }) => ($filled ? "#ffffff" : "var(--color-text-muted)")};
  transition: transform 0.15s ease;

  &:hover {
    transform: scale(1.04);
  }
`;

import styled, { css } from "styled-components";
import { StageState } from "./StageProgress";

export const StyledWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledStage = styled.div`
  display: flex;
  align-items: center;
`;

const dotState = {
  complete: css`
    background: var(--color-success);
    border: 2px solid var(--color-success);
    color: #ffffff;
  `,
  current: css`
    background: #1e1e1e;
    border: 2px solid #1e1e1e;
    color: #ffffff;
  `,
  upcoming: css`
    background: #ffffff;
    border: 2px solid var(--color-border-strong);
    color: var(--color-text-secondary);
  `,
};

export const StyledDot = styled.span<{ $state: StageState }>`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  flex-shrink: 0;
  ${({ $state }) => dotState[$state]}
`;

export const StyledLabel = styled.span<{ $state: StageState }>`
  font-size: 13px;
  font-weight: ${({ $state }) => ($state === "current" ? 600 : 400)};
  color: ${({ $state }) => ($state === "upcoming" ? "var(--color-text-secondary)" : "var(--color-text-primary)")};
  margin-left: 6px;
  white-space: nowrap;
`;

export const StyledConnector = styled.span<{ $state: StageState }>`
  display: inline-block;
  flex: 0 0 48px;
  height: 0;
  margin: 0 8px;
  border-top: ${({ $state }) =>
    $state === "complete"
      ? "2px solid var(--color-success)"
      : "2px dashed var(--color-border-strong)"};
`;

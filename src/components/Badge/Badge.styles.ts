import styled, { css } from "styled-components";
import { BadgeTone } from "./Badge";

const toneStyles: Record<BadgeTone, ReturnType<typeof css>> = {
  neutral: css`
    background: #e8eaed;
    color: var(--color-text-primary);
  `,
  dark: css`
    background: #1e1e1e;
    color: #ffffff;
  `,
  success: css`
    background: var(--color-success);
    color: #ffffff;
  `,
  warning: css`
    background: var(--color-warning);
    color: #1e1e1e;
  `,
  danger: css`
    background: var(--color-danger);
    color: #ffffff;
  `,
  info: css`
    background: var(--color-accent-blue);
    color: #ffffff;
  `,
};

export const StyledBadge = styled.span<{ $tone: BadgeTone; $size: "sm" | "md" }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: ${({ $size }) => ($size === "sm" ? "2px 8px" : "4px 12px")};
  border-radius: var(--radius-pill);
  font-size: ${({ $size }) => ($size === "sm" ? "11px" : "12px")};
  font-weight: 500;
  line-height: 1.2;
  white-space: nowrap;
  ${({ $tone }) => toneStyles[$tone]};
`;

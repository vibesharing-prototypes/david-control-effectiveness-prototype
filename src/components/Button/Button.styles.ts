import styled, { css } from "styled-components";
import { ButtonVariant } from "./Button";

const variantStyles: Record<ButtonVariant, ReturnType<typeof css>> = {
  primary: css`
    background: var(--color-primary);
    color: var(--color-text-on-dark);
    border: 1px solid var(--color-primary);
    &:hover:not(:disabled) {
      background: var(--color-primary-hover);
    }
  `,
  secondary: css`
    background: var(--color-surface);
    color: var(--color-text-primary);
    border: 1px solid var(--color-border-strong);
    &:hover:not(:disabled) {
      background: var(--color-surface-alt);
    }
  `,
  text: css`
    background: transparent;
    color: var(--color-text-primary);
    border: 1px solid transparent;
    padding: 6px 10px;
    &:hover:not(:disabled) {
      background: var(--color-surface-alt);
    }
  `,
  ai: css`
    background: var(--color-surface);
    color: var(--color-text-primary);
    border: 1px solid transparent;
    position: relative;
    background-clip: padding-box;
    &::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: inherit;
      padding: 1px;
      background: linear-gradient(90deg, var(--color-ai-start), var(--color-ai-end));
      -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      pointer-events: none;
    }
    &:hover:not(:disabled) {
      background: var(--color-surface-alt);
    }
  `,
};

export const StyledButton = styled.button<{ $variant: ButtonVariant }>`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: 8px 14px;
  border-radius: var(--radius-md);
  font-size: var(--font-size-md);
  font-weight: 500;
  cursor: pointer;
  transition: background-color 120ms ease, border-color 120ms ease;
  white-space: nowrap;
  ${({ $variant }) => variantStyles[$variant]};
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:focus-visible {
    outline: 2px solid var(--color-accent-focus);
    outline-offset: 2px;
  }
  .btn-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
  }
`;

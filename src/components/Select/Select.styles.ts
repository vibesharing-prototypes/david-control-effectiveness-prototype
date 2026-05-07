import styled from "styled-components";

export const StyledSelectWrap = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;

  select {
    appearance: none;
    background: var(--color-surface);
    border: 1px solid var(--color-border-strong);
    border-radius: var(--radius-md);
    padding: 6px 28px 6px 10px;
    font-size: var(--font-size-md);
    color: var(--color-text-primary);
    cursor: pointer;
    min-width: 80px;

    &:focus-visible {
      outline: 2px solid var(--color-accent-focus);
      outline-offset: 2px;
    }
  }
`;

export const StyledCaret = styled.span`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: var(--color-text-secondary);
  font-size: 10px;
`;

import styled from "styled-components";

export const StyledToggle = styled.div`
  display: inline-flex;
  gap: var(--space-2);
`;

export const StyledOption = styled.button<{ $active: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: 6px 10px;
  border: 1px solid ${({ $active }) => ($active ? "var(--color-accent-blue)" : "var(--color-border-strong)")};
  background: ${({ $active }) => ($active ? "var(--color-accent-blue-soft)" : "var(--color-surface)")};
  color: var(--color-text-primary);
  border-radius: var(--radius-md);
  font-size: var(--font-size-md);
  cursor: pointer;

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1.5px solid ${({ $active }) => ($active ? "var(--color-accent-blue)" : "var(--color-border-strong)")};
    background: ${({ $active }) => ($active ? "var(--color-accent-blue)" : "transparent")};
    box-shadow: ${({ $active }) => ($active ? "inset 0 0 0 2px var(--color-surface)" : "none")};
  }
`;

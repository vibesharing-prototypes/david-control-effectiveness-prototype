import styled from "styled-components";

export const StyledTabs = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-border);
  .tabs {
    display: flex;
    gap: var(--space-3);
  }
`;

export const StyledTab = styled.button<{ $active: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  background: transparent;
  border: none;
  padding: 10px 2px;
  cursor: pointer;
  font-size: var(--font-size-md);
  font-weight: ${({ $active }) => ($active ? 600 : 500)};
  color: ${({ $active }) => ($active ? "var(--color-text-primary)" : "var(--color-text-secondary)")};
  border-bottom: 2px solid ${({ $active }) => ($active ? "var(--color-danger)" : "transparent")};
  margin-bottom: -1px;
`;

export const StyledTabCount = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 6px;
  background: var(--color-surface-alt);
  border-radius: var(--radius-pill);
  font-size: 11px;
  color: var(--color-text-secondary);
`;

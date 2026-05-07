import styled from "styled-components";

export const StyledTopBar = styled.header`
  height: var(--topbar-height);
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--space-3);
  flex-shrink: 0;
`;

export const StyledWorkspace = styled.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  font-weight: 600;
  color: var(--color-text-primary);

  .logo {
    width: 22px;
    height: 22px;
    background: var(--color-danger);
    border-radius: 4px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .logo .mark {
    width: 12px;
    height: 12px;
    background: #1e1e1e;
    clip-path: polygon(0 0, 100% 0, 0 100%);
    border-radius: 2px;
  }
`;

export const StyledActions = styled.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
`;

export const StyledIconButton = styled.button`
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: var(--radius-pill);
  border: 1px solid transparent;
  background: transparent;
  color: var(--color-text-primary);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: var(--color-surface-alt);
  }
`;

export const StyledBadgeDot = styled.span`
  position: absolute;
  top: 2px;
  right: 2px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: var(--radius-pill);
  background: var(--color-danger);
  color: #fff;
  font-size: 10px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
`;

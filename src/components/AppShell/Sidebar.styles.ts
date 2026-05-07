import styled from "styled-components";

export const StyledSidebar = styled.aside<{ $collapsed: boolean }>`
  width: ${({ $collapsed }) => ($collapsed ? "56px" : "var(--sidebar-width)")};
  background: var(--color-sidebar-bg);
  color: var(--color-sidebar-text);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  transition: width 0.2s ease;
  overflow: hidden;
`;

export const StyledLogoRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-1-5);
  height: var(--topbar-height);
  padding: 0 var(--space-2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

export const StyledMenuButton = styled.button`
  background: transparent;
  border: none;
  color: var(--color-sidebar-text);
  cursor: pointer;
  padding: 4px;
  display: inline-flex;
  flex-shrink: 0;
  &:hover {
    color: #fff;
  }
`;

export const StyledLogoMark = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  color: #fff;
  white-space: nowrap;

  .mark {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    background: var(--color-sidebar-active-bg);
    position: relative;
    flex-shrink: 0;
    &::before {
      content: "";
      position: absolute;
      top: 4px;
      left: 6px;
      width: 0;
      height: 0;
      border-left: 6px solid #fff;
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
    }
  }
  .name {
    font-size: 14px;
  }
`;

export const StyledBack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-1);
  padding: 12px var(--space-2);
  color: var(--color-sidebar-text-dim);
  font-size: 13px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  white-space: nowrap;
`;

export const StyledNav = styled.nav`
  flex: 1;
  padding: var(--space-1) var(--space-1);
  display: flex;
  flex-direction: column;
  gap: 2px;

  a {
    text-decoration: none;
  }
`;

export const StyledNavItem = styled.div<{ $active: boolean; $collapsed?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ $collapsed }) => ($collapsed ? "center" : "flex-start")};
  gap: var(--space-1-5);
  padding: ${({ $collapsed }) => ($collapsed ? "10px" : "8px 12px")};
  border-radius: var(--radius-md);
  background: ${({ $active }) => ($active ? "var(--color-sidebar-active-bg)" : "transparent")};
  color: ${({ $active }) => ($active ? "var(--color-sidebar-active-text)" : "var(--color-sidebar-text)")};
  font-size: 13px;
  font-weight: ${({ $active }) => ($active ? 600 : 500)};
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: ${({ $active }) => ($active ? "var(--color-sidebar-active-bg)" : "rgba(255, 255, 255, 0.05)")};
  }

  .icon {
    width: 18px;
    height: 18px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: ${({ $active }) => ($active ? "#fff" : "var(--color-sidebar-text)")};
    .plus {
      font-size: 18px;
      font-weight: 400;
      line-height: 1;
    }
  }
  .label {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .chev {
    display: inline-flex;
    opacity: 0.7;
  }
`;

export const StyledSectionDivider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  margin: var(--space-1) 4px;
`;

export const StyledSectionLabel = styled.div`
  color: var(--color-sidebar-text-dim);
  font-size: 11px;
  text-transform: none;
  padding: 12px 12px 4px;
  letter-spacing: 0;
  white-space: nowrap;
`;

export const StyledSubNavItem = styled.div<{ $active: boolean }>`
  padding: 8px 12px 8px 40px;
  margin: 1px 0;
  border-radius: var(--radius-md);
  font-size: 13px;
  color: ${({ $active }) => ($active ? "var(--color-sidebar-active-text)" : "var(--color-sidebar-text)")};
  background: ${({ $active }) => ($active ? "var(--color-sidebar-active-bg)" : "transparent")};
  font-weight: ${({ $active }) => ($active ? 600 : 500)};
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    background: ${({ $active }) => ($active ? "var(--color-sidebar-active-bg)" : "rgba(255, 255, 255, 0.05)")};
  }
`;

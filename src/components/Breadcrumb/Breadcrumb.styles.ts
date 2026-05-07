import styled from "styled-components";

export const StyledBreadcrumb = styled.nav`
  display: flex;
  align-items: center;
  gap: var(--space-1);
  font-size: 13px;
  color: var(--color-text-secondary);

  .crumb {
    display: inline-flex;
    align-items: center;
  }
  a {
    color: var(--color-text-secondary);
    &:hover {
      text-decoration: underline;
    }
  }
  .suffix {
    margin-left: var(--space-1);
  }
`;

export const StyledSeparator = styled.span`
  margin: 0 var(--space-1);
  color: var(--color-text-muted);
`;

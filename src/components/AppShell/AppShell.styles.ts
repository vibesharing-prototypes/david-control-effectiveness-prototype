import styled from "styled-components";

export const StyledShell = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const StyledMain = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;

  .content {
    flex: 1;
    padding: var(--space-3) var(--space-4);
    overflow: auto;
  }
`;

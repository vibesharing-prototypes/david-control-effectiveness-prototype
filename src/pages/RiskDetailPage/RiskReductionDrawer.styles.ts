import styled from "styled-components";

export const StyledBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 18, 35, 0.22);
  z-index: 40;
`;

export const StyledDrawer = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 420px;
  max-width: 100vw;
  height: 100vh;
  background: var(--color-surface);
  box-shadow: -8px 0 24px rgba(15, 18, 35, 0.12);
  z-index: 41;
  display: flex;
  flex-direction: column;
`;

export const StyledDrawerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-2) var(--space-3);
  border-bottom: 1px solid var(--color-divider);

  h2 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
  }
  .dots {
    width: 30px;
    height: 30px;
    border: none;
    background: transparent;
    border-radius: var(--radius-pill);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--color-text-secondary);
    &:hover {
      background: var(--color-surface-alt);
    }
  }
`;

export const StyledDrawerBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: var(--space-3);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`;

export const StyledOverviewBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: var(--space-2);
  background: var(--color-surface-alt);
  border-radius: var(--radius-md);

  .name {
    font-size: 14px;
    font-weight: 600;
    color: var(--color-text-primary);
  }
  .meta {
    font-size: 12px;
    color: var(--color-text-secondary);
    strong {
      color: var(--color-text-primary);
    }
  }
  .pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 11px;
    color: var(--color-warning);
    font-weight: 500;
    margin-top: 4px;
  }
`;

export const StyledSectionTitle = styled.h3`
  margin: 0 0 var(--space-1);
  font-size: 13px;
  font-weight: 600;
  color: var(--color-text-primary);
`;

export const StyledFieldLabel = styled.div`
  font-size: 12px;
  color: var(--color-text-secondary);
  font-weight: 500;
`;

export const StyledFieldBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1-5);
`;

export const StyledPercentRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 140px;
  align-items: center;
  gap: var(--space-2);
`;

export const StyledPercentInput = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-md);
  padding: 6px 10px;
  background: var(--color-surface);

  input {
    border: none;
    background: transparent;
    font: inherit;
    color: var(--color-text-primary);
    width: 100%;
    outline: none;
    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  span {
    color: var(--color-text-secondary);
    font-size: 13px;
  }
`;

export const StyledDrawerFooter = styled.div`
  padding: var(--space-2) var(--space-3);
  border-top: 1px solid var(--color-divider);
  display: flex;
  justify-content: flex-end;
  gap: var(--space-1);
`;

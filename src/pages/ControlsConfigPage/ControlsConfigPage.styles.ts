import styled from "styled-components";

export const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;

export const StyledHeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-1) 0;
`;

export const StyledTitle = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin: 0;
`;

export const StyledSavedChip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--color-text-secondary);
  font-size: 13px;
  svg {
    color: var(--color-success);
  }
`;

export const StyledTabsWrap = styled.div`
  border-bottom: 1px solid var(--color-border);
`;

export const StyledBody = styled.div`
  padding: var(--space-3) 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;

export const StyledSectionHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  h2 {
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    color: var(--color-text-primary);
  }
`;

export const StyledSectionSubtitle = styled.p`
  margin: 0;
  font-size: 13px;
  color: var(--color-text-secondary);
`;

export const StyledScaleRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(220px, 1fr));
  gap: var(--space-3);
  padding-top: var(--space-2);
`;

export const StyledScaleField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  label {
    font-size: 12px;
    font-weight: 600;
    color: var(--color-text-primary);
  }
`;

export const StyledStepperInput = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto auto;
  align-items: center;
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  padding: 0 4px 0 10px;
  height: 36px;

  input {
    border: none;
    background: transparent;
    font: inherit;
    color: var(--color-text-primary);
    height: 100%;
    width: 100%;
    outline: none;
    padding-right: 6px;
    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  .unit {
    color: var(--color-text-secondary);
    font-size: 13px;
    padding: 0 6px;
    border-left: 1px solid var(--color-border);
  }
  button {
    width: 28px;
    height: 28px;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-pill);
    background: var(--color-surface);
    color: var(--color-text-primary);
    font-size: 16px;
    line-height: 1;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: 6px;
    &:hover {
      background: var(--color-surface-alt);
    }
  }
`;

export const StyledAggRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: var(--space-1);
  max-width: 420px;
`;

export const StyledAggLabel = styled.label`
  font-size: 12px;
  color: var(--color-text-secondary);
`;

export const StyledAggSelect = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  padding: 0 10px;
  height: 36px;

  select {
    appearance: none;
    border: none;
    background: transparent;
    font: inherit;
    color: var(--color-text-primary);
    width: 100%;
    outline: none;
    cursor: pointer;
    padding: 0 20px 0 0;
  }
  svg {
    position: absolute;
    right: 10px;
    color: var(--color-text-secondary);
    pointer-events: none;
  }
`;

export const StyledFormulaCard = styled.div`
  padding: var(--space-3);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-accent-blue-soft);
  margin-top: var(--space-2);
`;

export const StyledFormulaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  .label {
    font-weight: 600;
    color: var(--color-text-primary);
  }
  .val {
    padding: 4px 10px;
    background: var(--color-surface);
    border-radius: var(--radius-sm);
    border: 1px solid var(--color-border);
  }
  .op {
    color: var(--color-text-secondary);
  }
`;

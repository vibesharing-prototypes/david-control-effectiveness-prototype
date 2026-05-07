import styled from "styled-components";

export const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;

export const StyledHeaderCard = styled.div`
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  padding: var(--space-3);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;

export const StyledHeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
`;

export const StyledTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-1-5);

  .back {
    width: 28px;
    height: 28px;
    border-radius: var(--radius-pill);
    border: 1px solid var(--color-border);
    background: var(--color-surface);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      background: var(--color-surface-alt);
    }
  }
`;

export const StyledTitle = styled.h1`
  font-size: 22px;
  font-weight: 600;
  margin: 0;
`;

export const StyledActions = styled.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);

  .saved {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--color-text-secondary);
    font-size: 13px;
    svg {
      color: var(--color-text-secondary);
    }
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
    &:hover {
      background: var(--color-surface-alt);
    }
  }
`;

export const StyledMeta = styled.div`
  font-size: 12px;
  color: var(--color-text-secondary);
  span {
    margin-right: 6px;
  }
`;

export const StyledStagesWrap = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-1);
  overflow-x: auto;

  .more {
    margin-left: auto;
    background: transparent;
    border: none;
    color: var(--color-text-secondary);
    cursor: pointer;
  }
`;

export const StyledTabsWrap = styled.div`
  background: var(--color-surface);
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  padding: 0 var(--space-3);
  box-shadow: var(--shadow-card);
`;

export const StyledSection = styled.section`
  background: var(--color-surface);
  border-radius: 0 0 var(--radius-lg) var(--radius-lg);
  box-shadow: var(--shadow-card);
  padding: var(--space-3);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`;

export const StyledSectionTitle = styled.h2`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`;

export const StyledFormRow = styled.div`
  display: flex;
  gap: var(--space-3);
  flex-wrap: wrap;
`;

export const StyledField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 240px;

  label {
    font-size: 12px;
    font-weight: 600;
    color: var(--color-text-primary);
    .req {
      color: var(--color-danger);
      font-weight: 500;
    }
  }
  .hint {
    font-size: 11px;
    color: var(--color-text-secondary);
    margin: -2px 0 0 0;
  }
`;

export const StyledInput = styled.input`
  padding: 8px 10px;
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  font-size: 14px;
  color: var(--color-text-primary);
  width: 100%;
  outline: none;
  &:focus {
    border-color: var(--color-accent-focus);
  }
`;

export const StyledRichTextHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 8px;
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-md) var(--radius-md) 0 0;
  border-bottom: none;
  font-size: 13px;
  color: var(--color-text-secondary);

  select {
    border: none;
    background: transparent;
    font-size: 13px;
    outline: none;
  }
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    border-radius: var(--radius-sm);
    font-weight: 600;
    cursor: pointer;
    user-select: none;
    &:hover {
      background: var(--color-surface-alt);
    }
  }
  .italic {
    font-style: italic;
  }
  .underline {
    text-decoration: underline;
  }
`;

export const StyledRichText = styled.div`
  padding: 10px;
  border: 1px solid var(--color-border-strong);
  border-radius: 0 0 var(--radius-md) var(--radius-md);
  min-height: 120px;
  background: var(--color-surface);
`;

export const StyledSelectBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 10px;
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  color: var(--color-text-secondary);
  cursor: pointer;
  font-size: 14px;
`;

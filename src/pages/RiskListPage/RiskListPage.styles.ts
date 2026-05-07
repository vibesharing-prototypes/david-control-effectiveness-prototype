import styled from "styled-components";

export const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`;

export const StyledPageHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--space-3);

  .crumbs {
    font-size: 12px;
    color: var(--color-text-secondary);
    margin-bottom: 6px;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin: 0;
  color: var(--color-text-primary);
`;

export const StyledActions = styled.div`
  display: inline-flex;
  gap: var(--space-1);
`;

export const StyledOverview = styled.section`
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  padding: var(--space-2) var(--space-3) var(--space-3);
`;

export const StyledOverviewHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-2);

  h2 {
    font-size: 16px;
    font-weight: 600;
    margin: 0;
  }
  .right {
    display: inline-flex;
    gap: var(--space-1);
    font-size: 13px;
    color: var(--color-text-secondary);
  }
  .right button {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background: transparent;
    border: none;
    color: var(--color-text-secondary);
    cursor: pointer;
    padding: 4px 6px;
    border-radius: var(--radius-sm);
    &:hover {
      background: var(--color-surface-alt);
    }
  }
`;

export const StyledOverviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: var(--space-2);
`;

export const StyledOverviewCard = styled.article`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-2) var(--space-2) var(--space-1-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);

  .sub {
    font-size: 11px;
    color: var(--color-text-muted);
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }
`;

export const StyledCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    font-size: 14px;
    font-weight: 600;
    margin: 0;
  }
  color: var(--color-text-secondary);
`;

export const StyledCardBody = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`;

export const StyledLegend = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  margin-top: var(--space-1);
  padding-top: var(--space-1);
  border-top: 1px solid var(--color-divider);
`;

export const StyledLegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: var(--color-text-secondary);
  min-width: 0;

  .sw {
    width: 10px;
    height: 10px;
    border-radius: 2px;
    flex-shrink: 0;
  }
  .lbl {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .val {
    margin-left: auto;
    font-weight: 600;
    color: var(--color-text-primary);
  }
`;

export const StyledFilterBar = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-1) var(--space-2);
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
`;

export const StyledSearch = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex: 0 0 260px;
  padding: 6px 10px;
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-md);
  color: var(--color-text-secondary);

  input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    font-size: var(--font-size-md);
    color: var(--color-text-primary);
  }
`;

export const StyledResetButton = styled.button`
  margin-left: auto;
  background: transparent;
  border: none;
  padding: 6px 10px;
  color: var(--color-text-secondary);
  cursor: pointer;
  border-radius: var(--radius-sm);
  font-size: var(--font-size-md);
  &:hover {
    background: var(--color-surface-alt);
  }
`;

export const StyledDataGrid = styled.div`
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  overflow: hidden;
`;

const gridCols = "40px 2.2fr 0.8fr 1.2fr 1.2fr 1fr 1fr 1fr";

export const StyledGridHeader = styled.div`
  display: grid;
  grid-template-columns: ${gridCols};
  gap: var(--space-2);
  padding: 12px var(--space-3);
  background: var(--color-surface-alt);
  border-bottom: 1px solid var(--color-border);
  font-size: 12px;
  font-weight: 600;
  color: var(--color-text-secondary);
  align-items: center;

  .right {
    text-align: right;
  }
`;

export const StyledGridRow = styled.div`
  display: grid;
  grid-template-columns: ${gridCols};
  gap: var(--space-2);
  padding: 12px var(--space-3);
  border-bottom: 1px solid var(--color-divider);
  align-items: center;
  font-size: 13px;

  &:hover {
    background: var(--color-surface-alt);
  }

  .name a {
    color: var(--color-text-link);
    text-decoration: underline;
    text-underline-offset: 2px;
  }
  .right {
    text-align: right;
  }
  .assess {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    justify-content: flex-end;
    width: 100%;
    .warn {
      display: inline-flex;
    }
  }
  .owner {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    .avatar {
      width: 22px;
      height: 22px;
      background: #5c7fa3;
      color: #fff;
      font-size: 10px;
      font-weight: 600;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const StyledCheckbox = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1.5px solid var(--color-border-strong);
  border-radius: 3px;
  background: #fff;
`;

export const StyledGridFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-2);
  font-size: 12px;
  color: var(--color-text-secondary);

  select {
    margin-left: 4px;
    border: 1px solid var(--color-border-strong);
    background: var(--color-surface);
    border-radius: var(--radius-sm);
    padding: 2px 6px;
    font-size: 12px;
  }
  .page {
    display: inline-flex;
    align-items: center;
    gap: var(--space-1);
    button {
      width: 22px;
      height: 22px;
      border: none;
      background: transparent;
      color: var(--color-text-secondary);
      border-radius: var(--radius-sm);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      &:hover {
        background: var(--color-surface-alt);
      }
    }
  }
`;

export const StyledCategoryChip = styled.span<{ $color: string }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 400;
  color: var(--color-text-primary);

  .dot {
    width: 10px;
    height: 10px;
    background: ${({ $color }) => $color};
    border-radius: 2px;
    flex-shrink: 0;
  }
`;

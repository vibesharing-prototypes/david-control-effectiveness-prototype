import styled from "styled-components";

const paddingMap = {
  none: "0",
  sm: "var(--space-2)",
  md: "var(--space-3)",
  lg: "var(--space-4)",
};

export const StyledCard = styled.div<{ $padding: keyof typeof paddingMap }>`
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  padding: ${({ $padding }) => paddingMap[$padding]};
`;

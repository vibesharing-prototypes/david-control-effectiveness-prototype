import { ReactNode } from "react";
import { StyledBadge } from "./Badge.styles";

export type BadgeTone = "neutral" | "dark" | "success" | "warning" | "danger" | "info";

type Props = {
  tone?: BadgeTone;
  children: ReactNode;
  size?: "sm" | "md";
};

export default function Badge({ tone = "dark", size = "md", children }: Props) {
  return (
    <StyledBadge $tone={tone} $size={size}>
      {children}
    </StyledBadge>
  );
}

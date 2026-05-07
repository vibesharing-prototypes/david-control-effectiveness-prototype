import { HTMLAttributes } from "react";
import { StyledCard } from "./Card.styles";

type Props = HTMLAttributes<HTMLDivElement> & {
  padding?: "none" | "sm" | "md" | "lg";
};

export default function Card({ padding = "md", children, ...rest }: Props) {
  return (
    <StyledCard $padding={padding} {...rest}>
      {children}
    </StyledCard>
  );
}

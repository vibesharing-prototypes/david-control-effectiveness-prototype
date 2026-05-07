import { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledButton } from "./Button.styles";

export type ButtonVariant = "primary" | "secondary" | "text" | "ai";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  icon?: ReactNode;
  children?: ReactNode;
};

export default function Button({ variant = "secondary", icon, children, ...rest }: Props) {
  return (
    <StyledButton type="button" $variant={variant} {...rest}>
      {icon && <span className="btn-icon">{icon}</span>}
      {children && <span>{children}</span>}
    </StyledButton>
  );
}

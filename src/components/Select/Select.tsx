import { SelectHTMLAttributes } from "react";
import { StyledSelectWrap, StyledCaret } from "./Select.styles";

type Option = { label: string; value: string };

type Props = Omit<SelectHTMLAttributes<HTMLSelectElement>, "children"> & {
  options: Option[];
};

export default function Select({ options, ...rest }: Props) {
  return (
    <StyledSelectWrap>
      <select {...rest}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <StyledCaret aria-hidden>▾</StyledCaret>
    </StyledSelectWrap>
  );
}

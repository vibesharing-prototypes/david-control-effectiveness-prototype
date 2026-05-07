import { StyledToggle, StyledOption } from "./SegmentedToggle.styles";

type Option<T extends string> = { label: string; value: T };

type Props<T extends string> = {
  value: T;
  options: Option<T>[];
  onChange: (v: T) => void;
};

export default function SegmentedToggle<T extends string>({ value, options, onChange }: Props<T>) {
  return (
    <StyledToggle role="radiogroup">
      {options.map((opt) => (
        <StyledOption
          key={opt.value}
          type="button"
          role="radio"
          aria-checked={value === opt.value}
          $active={value === opt.value}
          onClick={() => onChange(opt.value)}
        >
          <span className="dot" aria-hidden />
          {opt.label}
        </StyledOption>
      ))}
    </StyledToggle>
  );
}

import { StyledWrap, StyledStage, StyledDot, StyledConnector, StyledLabel } from "./StageProgress.styles";

export type StageState = "complete" | "current" | "upcoming";

export type Stage = {
  label: string;
  state: StageState;
  index?: number | string;
};

type Props = {
  stages: Stage[];
};

export default function StageProgress({ stages }: Props) {
  return (
    <StyledWrap>
      {stages.map((s, i) => (
        <StyledStage key={i}>
          <StyledDot $state={s.state} aria-hidden>
            {s.state === "complete" ? "✓" : s.index ?? i + 1}
          </StyledDot>
          <StyledLabel $state={s.state}>{s.label}</StyledLabel>
          {i < stages.length - 1 && <StyledConnector $state={s.state} />}
        </StyledStage>
      ))}
    </StyledWrap>
  );
}

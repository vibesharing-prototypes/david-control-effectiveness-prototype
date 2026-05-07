import { IconChevronDown, IconEnvelope, IconBell, IconUser } from "../../icons/Icons";
import { StyledTopBar, StyledWorkspace, StyledActions, StyledIconButton, StyledBadgeDot } from "./TopBar.styles";

export default function TopBar() {
  return (
    <StyledTopBar>
      <StyledWorkspace>
        <span className="logo">
          <span className="mark" />
        </span>
        <span className="name">Pied Piper</span>
        <IconChevronDown />
      </StyledWorkspace>
      <StyledActions>
        <StyledIconButton aria-label="Messages">
          <IconEnvelope />
        </StyledIconButton>
        <StyledIconButton aria-label="Notifications">
          <IconBell />
          <StyledBadgeDot>14</StyledBadgeDot>
        </StyledIconButton>
        <StyledIconButton aria-label="Account">
          <IconUser />
        </StyledIconButton>
      </StyledActions>
    </StyledTopBar>
  );
}

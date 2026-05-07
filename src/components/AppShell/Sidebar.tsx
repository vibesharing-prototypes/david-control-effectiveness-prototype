import { NavLink } from "react-router-dom";
import {
  IconMenu,
  IconChevronLeft,
  IconRisk,
  IconControl,
  IconProcess,
  IconTarget,
  IconAssessment,
  IconClipboard,
  IconCalendar,
  IconClock,
  IconSettings,
  IconChevronDown,
  IconChevronUp,
} from "../../icons/Icons";
import {
  StyledSidebar,
  StyledLogoRow,
  StyledLogoMark,
  StyledMenuButton,
  StyledBack,
  StyledNav,
  StyledNavItem,
  StyledSectionDivider,
  StyledSubNavItem,
  StyledSectionLabel,
} from "./Sidebar.styles";

const mainItems = [
  { to: "/risk", label: "Risks (Home)", icon: <IconRisk /> },
  { to: "/control", label: "Controls", icon: <IconControl /> },
  { to: "/process", label: "Processes", icon: <IconProcess /> },
  { to: "/objective", label: "Objectives", icon: <IconTarget />, plus: true },
];

const groupItems = [
  { to: "/risk-assessments", label: "Risk assessments", icon: <IconAssessment /> },
  { to: "/control-assessments", label: "Control assessments", icon: <IconClipboard /> },
];

const bottomItems = [
  { to: "/schedule", label: "Schedule automations", icon: <IconCalendar /> },
  { to: "/activity", label: "Activity log", icon: <IconClock /> },
];

const settingsChildren = [
  { to: "/settings/global", label: "Global settings" },
  { to: "/settings/controls-configuration", label: "Configuration hub" },
];

type Props = {
  collapsed: boolean;
  onToggle: () => void;
};

export default function Sidebar({ collapsed, onToggle }: Props) {
  return (
    <StyledSidebar $collapsed={collapsed}>
      <StyledLogoRow>
        <StyledMenuButton aria-label="Menu" onClick={onToggle}>
          <IconMenu />
        </StyledMenuButton>
        {!collapsed && (
          <StyledLogoMark>
            <span className="mark" />
            <span className="name">Diligent</span>
          </StyledLogoMark>
        )}
      </StyledLogoRow>

      <StyledBack>
        <IconChevronLeft />
        {!collapsed && <span>Risk &amp; Strategy</span>}
      </StyledBack>

      <StyledNav>
        {mainItems.map((i) => (
          <NavLink key={i.to} to={i.to} end={i.to === "/risk"}>
            {({ isActive }) => (
              <StyledNavItem $active={isActive} $collapsed={collapsed}>
                <span className="icon">{i.plus ? <span className="plus">+</span> : i.icon}</span>
                {!collapsed && <span className="label">{i.label}</span>}
              </StyledNavItem>
            )}
          </NavLink>
        ))}

        {!collapsed && <StyledSectionLabel>Records</StyledSectionLabel>}
        {collapsed && <StyledSectionDivider />}

        {groupItems.map((i) => (
          <NavLink key={i.to} to={i.to}>
            {({ isActive }) => (
              <StyledNavItem $active={isActive} $collapsed={collapsed}>
                <span className="icon">{i.icon}</span>
                {!collapsed && <span className="label">{i.label}</span>}
              </StyledNavItem>
            )}
          </NavLink>
        ))}

        <StyledSectionDivider />

        {bottomItems.map((i) => (
          <NavLink key={i.to} to={i.to}>
            {({ isActive }) => (
              <StyledNavItem $active={isActive} $collapsed={collapsed}>
                <span className="icon">{i.icon}</span>
                {!collapsed && <span className="label">{i.label}</span>}
              </StyledNavItem>
            )}
          </NavLink>
        ))}

        <StyledNavItem $active={false} $collapsed={collapsed} as="div" style={{ cursor: "default" }}>
          <span className="icon"><IconSettings /></span>
          {!collapsed && (
            <>
              <span className="label">Settings</span>
              <span className="chev"><IconChevronUp /></span>
            </>
          )}
        </StyledNavItem>

        {!collapsed && settingsChildren.map((s) => (
          <NavLink key={s.to} to={s.to}>
            {({ isActive }) => (
              <StyledSubNavItem $active={isActive}>{s.label}</StyledSubNavItem>
            )}
          </NavLink>
        ))}
      </StyledNav>
    </StyledSidebar>
  );
}

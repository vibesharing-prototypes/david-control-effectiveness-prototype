import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { StyledBreadcrumb, StyledSeparator } from "./Breadcrumb.styles";

type Crumb = { label: string; to?: string };

type Props = {
  crumbs: Crumb[];
  suffix?: ReactNode;
};

export default function Breadcrumb({ crumbs, suffix }: Props) {
  return (
    <StyledBreadcrumb aria-label="breadcrumb">
      {crumbs.map((c, i) => (
        <span key={i} className="crumb">
          {c.to ? <Link to={c.to}>{c.label}</Link> : <span>{c.label}</span>}
          {i < crumbs.length - 1 && <StyledSeparator aria-hidden>›</StyledSeparator>}
        </span>
      ))}
      {suffix && <span className="suffix">{suffix}</span>}
    </StyledBreadcrumb>
  );
}

import { ReactNode } from "react";
import { StyledTabs, StyledTab, StyledTabCount } from "./Tabs.styles";

export type TabItem = {
  id: string;
  label: string;
  count?: number | null;
};

type Props = {
  items: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
  right?: ReactNode;
};

export default function Tabs({ items, activeId, onChange, right }: Props) {
  return (
    <StyledTabs>
      <div className="tabs">
        {items.map((t) => (
          <StyledTab
            key={t.id}
            $active={t.id === activeId}
            type="button"
            onClick={() => onChange(t.id)}
          >
            {t.label}
            {t.count != null && <StyledTabCount>{t.count}</StyledTabCount>}
          </StyledTab>
        ))}
      </div>
      {right && <div className="right">{right}</div>}
    </StyledTabs>
  );
}

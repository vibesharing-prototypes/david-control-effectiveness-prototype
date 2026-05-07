import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { StyledShell, StyledMain } from "./AppShell.styles";

export default function AppShell() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <StyledShell>
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((c) => !c)} />
      <StyledMain>
        <TopBar />
        <div className="content">
          <Outlet />
        </div>
      </StyledMain>
    </StyledShell>
  );
}

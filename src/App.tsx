import { Navigate, Route, Routes } from "react-router-dom";
import AppShell from "./components/AppShell/AppShell";
import RiskListPage from "./pages/RiskListPage/RiskListPage";
import RiskDetailPage from "./pages/RiskDetailPage/RiskDetailPage";
import ControlsConfigPage from "./pages/ControlsConfigPage/ControlsConfigPage";

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<Navigate to="/risk" replace />} />
        <Route path="/risk" element={<RiskListPage />} />
        <Route path="/risk/:id" element={<RiskDetailPage />} />
        <Route path="/settings/controls-configuration" element={<ControlsConfigPage />} />
        <Route path="*" element={<Navigate to="/risk" replace />} />
      </Route>
    </Routes>
  );
}

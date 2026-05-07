import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Badge, { BadgeTone } from "../../components/Badge/Badge";
import Donut from "../../components/Donut/Donut";
import Heatmap from "../../components/Heatmap/Heatmap";
import BarMini from "../../components/BarMini/BarMini";
import {
  IconPlus,
  IconSparkle,
  IconSearch,
  IconFilter,
  IconColumns,
  IconExport,
  IconDots,
  IconWarn,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
} from "../../icons/Icons";
import {
  RISK_ROWS,
  WORKFLOW_STATUSES,
  WORKFLOW_DONUT_TOTAL,
  HEATMAP_VALUES,
} from "../../mocks/data";
import {
  StyledPage,
  StyledPageHeader,
  StyledTitle,
  StyledActions,
  StyledOverview,
  StyledOverviewHeader,
  StyledOverviewGrid,
  StyledOverviewCard,
  StyledCardHeader,
  StyledCardBody,
  StyledLegend,
  StyledLegendItem,
  StyledFilterBar,
  StyledSearch,
  StyledDataGrid,
  StyledGridHeader,
  StyledGridRow,
  StyledCheckbox,
  StyledGridFooter,
  StyledCategoryChip,
  StyledResetButton,
} from "./RiskListPage.styles";

function statusTone(status: string): BadgeTone {
  switch (status) {
    case "Assessment": return "success";
    case "Response": return "warning";
    case "Review": return "info";
    case "Identification": return "danger";
    case "Analysis": return "warning";
    default: return "neutral";
  }
}

export default function RiskListPage() {
  const [collapsed, setCollapsed] = useState(false);

  const donutSlices = WORKFLOW_STATUSES.filter((s) => s.count > 0).map((s) => ({
    value: s.count,
    color: s.color,
    label: s.label,
  }));

  const ratingBars = [
    { label: "Low", value: 1, color: "var(--color-success)" },
    { label: "Medium", value: 0, color: "var(--color-warning)" },
    { label: "High", value: 0, color: "var(--color-danger)" },
  ];

  const actionBars = [
    { label: "Accept", value: 1, color: "var(--color-success)" },
    { label: "Mitigate", value: 0, color: "var(--color-warning)" },
    { label: "Transfer", value: 0, color: "var(--color-danger)" },
  ];

  return (
    <StyledPage>
      <StyledPageHeader>
        <div>
          <div className="crumbs">Risk Manager</div>
          <StyledTitle>Risk</StyledTitle>
        </div>
        <StyledActions>
          <Button variant="primary" icon={<IconPlus />}>
            Add Risk
          </Button>
          <Button variant="ai" icon={<IconSparkle />}>
            Add risks with AI
          </Button>
        </StyledActions>
      </StyledPageHeader>

      {!collapsed && (
        <StyledOverview>
          <StyledOverviewHeader>
            <h2>Overview</h2>
            <div className="right">
              <button className="layout">
                Layout <IconColumns />
              </button>
              <button className="collapse" onClick={() => setCollapsed(true)}>
                Collapse <span aria-hidden>✕</span>
              </button>
            </div>
          </StyledOverviewHeader>

          <StyledOverviewGrid>
            <StyledOverviewCard>
              <StyledCardHeader>
                <h3>Workflow Status</h3>
                <IconDots />
              </StyledCardHeader>
              <StyledCardBody>
                <Donut
                  slices={donutSlices}
                  centerValue={WORKFLOW_DONUT_TOTAL}
                  centerLabel="Risks"
                  size={170}
                  thickness={24}
                />
                <StyledLegend>
                  {WORKFLOW_STATUSES.map((s) => (
                    <StyledLegendItem key={s.label}>
                      <span className="sw" style={{ background: s.color }} />
                      <span className="lbl">{s.label}</span>
                      <span className="val">{s.count}</span>
                    </StyledLegendItem>
                  ))}
                </StyledLegend>
              </StyledCardBody>
            </StyledOverviewCard>

            <StyledOverviewCard>
              <StyledCardHeader>
                <h3>Testing</h3>
                <IconDots />
              </StyledCardHeader>
              <p className="sub">Inherent Likelihood</p>
              <Heatmap values={HEATMAP_VALUES} />
              <StyledLegend>
                {ratingBars.map((b) => (
                  <StyledLegendItem key={b.label}>
                    <span className="sw" style={{ background: b.color }} />
                    <span className="lbl">{b.label}</span>
                    <span className="val">{b.label === "Low" ? 8 : 0}</span>
                  </StyledLegendItem>
                ))}
              </StyledLegend>
            </StyledOverviewCard>

            <StyledOverviewCard>
              <StyledCardHeader>
                <h3>Testing1</h3>
                <IconDots />
              </StyledCardHeader>
              <BarMini bars={actionBars} maxY={1.0} />
              <StyledLegend>
                <StyledLegendItem>
                  <span className="sw" style={{ background: "var(--color-success)" }} />
                  <span className="lbl">Accept</span>
                  <span className="val">1</span>
                </StyledLegendItem>
                <StyledLegendItem>
                  <span className="sw" style={{ background: "var(--color-warning)" }} />
                  <span className="lbl">Mitigate</span>
                  <span className="val">0</span>
                </StyledLegendItem>
                <StyledLegendItem>
                  <span className="sw" style={{ background: "var(--color-danger)" }} />
                  <span className="lbl">Transfer</span>
                  <span className="val">0</span>
                </StyledLegendItem>
              </StyledLegend>
            </StyledOverviewCard>
          </StyledOverviewGrid>
        </StyledOverview>
      )}

      <StyledFilterBar>
        <StyledSearch>
          <IconSearch />
          <input placeholder="Name" />
        </StyledSearch>
        <Button variant="text" icon={<IconFilter />}>
          Filter
        </Button>
        <Button variant="text" icon={<IconColumns />}>
          Columns
        </Button>
        <Button variant="text" icon={<IconExport />}>
          Export
        </Button>
        <StyledResetButton type="button" onClick={() => setCollapsed(false)}>
          ↺ Reset View
        </StyledResetButton>
      </StyledFilterBar>

      <StyledDataGrid>
        <StyledGridHeader>
          <StyledCheckbox />
          <div>Name</div>
          <div>Risk ID</div>
          <div>Inherent Risk Score</div>
          <div>Residual Risk Score</div>
          <div>Workflow Status</div>
          <div>Risk Owner</div>
          <div className="right">Assessments</div>
        </StyledGridHeader>

        {RISK_ROWS.map((r) => (
          <StyledGridRow key={r.id}>
            <StyledCheckbox />
            <div className="name">
              <Link to={`/risk/${r.id}`}>{r.name}</Link>
            </div>
            <div>{r.riskId ?? ""}</div>
            <div>
              {r.inherent && (
                <StyledCategoryChip $color={r.inherent.label === "Low" ? "var(--color-success)" : r.inherent.label === "Medium" ? "var(--color-warning)" : "var(--color-danger)"}>
                  <span className="dot" />
                  {r.inherent.label}
                </StyledCategoryChip>
              )}
            </div>
            <div>
              {r.residual && (
                <StyledCategoryChip $color={r.residual.label === "Low" ? "var(--color-success)" : r.residual.label === "Medium" ? "var(--color-warning)" : "var(--color-danger)"}>
                  <span className="dot" />
                  {r.residual.label}
                </StyledCategoryChip>
              )}
            </div>
            <div>
              <Badge tone={statusTone(r.status)}>{r.status}</Badge>
            </div>
            <div>
              {r.owner && (
                <span className="owner">
                  <span className="avatar">{r.owner.initials}</span>
                  {r.owner.name}
                </span>
              )}
            </div>
            <div className="right">
              <span className="assess">
                {r.assessments}
                {r.hasWarning && (
                  <span className="warn">
                    <IconWarn />
                  </span>
                )}
              </span>
            </div>
          </StyledGridRow>
        ))}

        <StyledGridFooter>
          <span>
            Rows{" "}
            <select defaultValue="25">
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </select>
          </span>
          <span className="page">
            1–25 of 197
            <button aria-label="Prev">
              <IconChevronLeft />
            </button>
            <button aria-label="Next">
              <IconChevronRight />
            </button>
          </span>
        </StyledGridFooter>
      </StyledDataGrid>
    </StyledPage>
  );
}

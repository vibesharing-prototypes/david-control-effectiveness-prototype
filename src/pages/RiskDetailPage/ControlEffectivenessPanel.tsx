import { useState } from "react";
import { ControlRow, EffectivenessLevel } from "../../mocks/data";
import Button from "../../components/Button/Button";
import { IconChevronDown, IconDots } from "../../icons/Icons";
import RiskReductionDrawer from "./RiskReductionDrawer";
import {
  StyledPanel,
  StyledSectionHeading,
  StyledSectionSubtitle,
  StyledMetricsRow,
  StyledMetric,
  StyledMetricLabel,
  StyledMetricValue,
  StyledMetricPill,
  StyledCalcMethodRow,
  StyledCalcMethodSelect,
  StyledControlsCard,
  StyledControlsHeader,
  StyledControlsTable,
  StyledControlRow,
  StyledLevelSelect,
  StyledWeightSelect,
  StyledRowActions,
  StyledApplyBtn,
} from "./ControlEffectivenessPanel.styles";

type Props = {
  riskName: string;
  controls: ControlRow[];
};

function contributionPercent(c: ControlRow): number {
  if (c.designEffectiveness === "Ineffective") return 0;
  const level = c.operatingEffectiveness;
  return c.percentByLevel[level];
}

const LEVEL_OPTIONS: EffectivenessLevel[] = ["Effective", "Partially Effective", "Ineffective"];

const levelDot: Record<EffectivenessLevel, string> = {
  Effective: "var(--color-success)",
  "Partially Effective": "var(--color-warning)",
  Ineffective: "var(--color-danger)",
};

type ScoringFormula =
  | "weighted-average"
  | "simple-average"
  | "worst-case"
  | "best-case"
  | "majority-vote";

const FORMULA_OPTIONS: { value: ScoringFormula; label: string }[] = [
  { value: "weighted-average", label: "Weighted average" },
  { value: "simple-average", label: "Simple average" },
  { value: "worst-case", label: "Worst case (minimum)" },
  { value: "best-case", label: "Best case (maximum)" },
  { value: "majority-vote", label: "Majority vote" },
];

function computeScore(controls: ControlRow[], formula: ScoringFormula, weightMap: Record<string, number>): number {
  const contribs = controls.map((c) => contributionPercent(c));

  switch (formula) {
    case "weighted-average": {
      const totalWeight = controls.reduce((s, c) => s + weightMap[c.id], 0) || 1;
      return Math.round(controls.reduce((s, c) => s + (contributionPercent(c) * weightMap[c.id]) / totalWeight, 0));
    }
    case "simple-average": {
      if (contribs.length === 0) return 0;
      return Math.round(contribs.reduce((a, b) => a + b, 0) / contribs.length);
    }
    case "worst-case": {
      if (contribs.length === 0) return 0;
      return Math.min(...contribs);
    }
    case "best-case": {
      if (contribs.length === 0) return 0;
      return Math.max(...contribs);
    }
    case "majority-vote": {
      const effective = contribs.filter((c) => c >= 75).length;
      return effective > contribs.length / 2 ? 100 : effective === contribs.length / 2 ? 50 : 0;
    }
  }
}

const OWNERS = ["Taylor Brown", "Alex Johnson", "Jamie Lee", "Sophia Clark", "Morgan Reed"];
const DATES = ["12 May 2025", "20 Jun 2025", "4 Jul 2025", "16 May 2025", "18 Apr 2025"];

export default function ControlEffectivenessPanel({ riskName, controls }: Props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerControl, setDrawerControl] = useState<ControlRow | null>(null);
  const [formula, setFormula] = useState<ScoringFormula>("weighted-average");
  const [designMap, setDesignMap] = useState<Record<string, EffectivenessLevel>>(
    Object.fromEntries(controls.map((c) => [c.id, c.designEffectiveness])),
  );
  const [operatingMap, setOperatingMap] = useState<Record<string, EffectivenessLevel>>(
    Object.fromEntries(controls.map((c) => [c.id, c.operatingEffectiveness])),
  );
  const [weightMap, setWeightMap] = useState<Record<string, number>>(
    Object.fromEntries(controls.map((c) => [c.id, c.weight])),
  );

  const liveControls = controls.map((c) => ({
    ...c,
    designEffectiveness: designMap[c.id],
    operatingEffectiveness: operatingMap[c.id],
    weight: weightMap[c.id],
  }));

  const environmentPct = computeScore(liveControls, formula, weightMap);
  const inherentLabel = "Very high";
  const currentResidualLabel = "Very high";
  const calculatedLabel = environmentPct >= 75 ? "Low" : environmentPct >= 40 ? "Medium" : "High";

  return (
    <>
      <StyledPanel>
        <section>
          <StyledSectionHeading>
            <h2>Effectiveness overview</h2>
            <Button variant="secondary" >
              Apply to risk
            </Button>
          </StyledSectionHeading>
          <StyledSectionSubtitle>
            Residual Risk Score updates dynamically depending on selected formula and the effectiveness of controls.
          </StyledSectionSubtitle>

          <StyledMetricsRow>
            <StyledMetric>
              <StyledMetricLabel>Inherent risk score</StyledMetricLabel>
              <StyledMetricPill $tone="danger">
                <span className="dot" />
                {inherentLabel}
              </StyledMetricPill>
            </StyledMetric>
            <StyledMetric>
              <StyledMetricLabel>Current residual score</StyledMetricLabel>
              <StyledMetricPill $tone="danger">
                <span className="dot" />
                {currentResidualLabel}
              </StyledMetricPill>
            </StyledMetric>
            <StyledMetric>
              <StyledMetricLabel>Calculated residual risk score</StyledMetricLabel>
              <StyledCalcMethodSelect $tone="warning">
                <span className="dot" />
                <span className="val">4 - {calculatedLabel}</span>
                <IconChevronDown />
              </StyledCalcMethodSelect>
            </StyledMetric>
            <StyledMetric>
              <StyledMetricLabel>Control environment score</StyledMetricLabel>
              <StyledMetricValue>{environmentPct}%</StyledMetricValue>
            </StyledMetric>
          </StyledMetricsRow>
        </section>

        <section>
          <StyledSectionHeading>
            <h2>Control environment calculation method</h2>
            <button className="ghost">
              <IconDots /> Open scoring formulas
            </button>
          </StyledSectionHeading>
          <StyledCalcMethodRow>
            <label>Scoring formula</label>
            <div className="select">
              <select
                value={formula}
                onChange={(e) => setFormula(e.target.value as ScoringFormula)}
              >
                {FORMULA_OPTIONS.map((f) => (
                  <option key={f.value} value={f.value}>{f.label}</option>
                ))}
              </select>
              <IconChevronDown />
            </div>
          </StyledCalcMethodRow>
        </section>

        <section>
          <StyledSectionHeading>
            <h2>
              Linked controls <span className="muted">({liveControls.length})</span>
            </h2>
            <Button variant="secondary" >
              Link control
            </Button>
          </StyledSectionHeading>

          <StyledControlsCard>
            <StyledControlsHeader>
              <div>Control</div>
              <div>Design effectiveness</div>
              <div>Operating effectiveness</div>
              <div>Weight</div>
              <div>Contribution</div>
              <div>Last tested</div>
              <div>Control owner</div>
              <div />
            </StyledControlsHeader>

            <StyledControlsTable>
              {liveControls.map((c, idx) => {
                const gated = c.designEffectiveness === "Ineffective";
                const contrib = contributionPercent(c);
                return (
                  <StyledControlRow key={c.id} $gated={gated}>
                    <div className="name">{c.name}</div>

                    <div>
                      <StyledLevelSelect $level={c.designEffectiveness}>
                        <span className="dot" style={{ background: levelDot[c.designEffectiveness] }} />
                        <select
                          value={c.designEffectiveness}
                          onChange={(e) =>
                            setDesignMap((m) => ({
                              ...m,
                              [c.id]: e.target.value as EffectivenessLevel,
                            }))
                          }
                        >
                          {LEVEL_OPTIONS.map((l) => (
                            <option key={l} value={l}>
                              {l}
                            </option>
                          ))}
                        </select>
                        <IconChevronDown />
                      </StyledLevelSelect>
                    </div>

                    <div>
                      <StyledLevelSelect $level={c.operatingEffectiveness} $muted={gated}>
                        <span className="dot" style={{ background: levelDot[c.operatingEffectiveness] }} />
                        <select
                          value={c.operatingEffectiveness}
                          onChange={(e) =>
                            setOperatingMap((m) => ({
                              ...m,
                              [c.id]: e.target.value as EffectivenessLevel,
                            }))
                          }
                        >
                          {LEVEL_OPTIONS.map((l) => (
                            <option key={l} value={l}>
                              {l}
                            </option>
                          ))}
                        </select>
                        <IconChevronDown />
                      </StyledLevelSelect>
                    </div>

                    <div>
                      <StyledWeightSelect>
                        <select
                          value={c.weight}
                          onChange={(e) =>
                            setWeightMap((m) => ({ ...m, [c.id]: parseInt(e.target.value, 10) }))
                          }
                        >
                          {[10, 15, 20, 25, 30, 35, 40, 50].map((w) => (
                            <option key={w} value={w}>
                              {w}%
                            </option>
                          ))}
                        </select>
                        <IconChevronDown />
                      </StyledWeightSelect>
                    </div>

                    <div className="contrib">{contrib}%</div>
                    <div className="date">{DATES[idx % DATES.length]}</div>
                    <div className="owner">
                      <span className="avatar" />
                      {OWNERS[idx % OWNERS.length]}
                    </div>

                    <StyledRowActions>
                      <StyledApplyBtn
                        type="button"
                        onClick={() => {
                          setDrawerControl(c);
                          setDrawerOpen(true);
                        }}
                        aria-label="Open risk reduction mapping"
                      >
                        <IconDots />
                      </StyledApplyBtn>
                    </StyledRowActions>
                  </StyledControlRow>
                );
              })}
            </StyledControlsTable>
          </StyledControlsCard>
        </section>
      </StyledPanel>

      <RiskReductionDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        riskName={riskName}
        control={drawerControl}
      />
    </>
  );
}

import { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Tabs from "../../components/Tabs/Tabs";
import { IconCloud, IconChevronDown } from "../../icons/Icons";
import {
  StyledPage,
  StyledHeaderRow,
  StyledTitle,
  StyledSavedChip,
  StyledTabsWrap,
  StyledBody,
  StyledSectionHeading,
  StyledSectionSubtitle,
  StyledScaleRow,
  StyledScaleField,
  StyledStepperInput,
  StyledAggRow,
  StyledAggLabel,
  StyledAggSelect,
  StyledFormulaCard,
  StyledFormulaRow,
} from "./ControlsConfigPage.styles";

const CONFIG_TABS = [
  { id: "scoring", label: "Scoring formula" },
  { id: "effectiveness", label: "Control effectiveness" },
  { id: "aggregation", label: "Aggregation rules" },
];

type ScaleRow = { key: string; label: string; value: number };

const INITIAL_SCALE: ScaleRow[] = [
  { key: "partiallyIneffective", label: "Partially ineffective from", value: 25 },
  { key: "partiallyEffective", label: "Partially effective from", value: 50 },
  { key: "moderatelyEffective", label: "Moderately effective from", value: 70 },
  { key: "effective", label: "Effective from", value: 85 },
];

export default function ControlsConfigPage() {
  const [tab, setTab] = useState("effectiveness");
  const [scale, setScale] = useState<ScaleRow[]>(INITIAL_SCALE);
  const [aggregation, setAggregation] = useState("weighted-average");

  const bump = (key: string, delta: number) => {
    setScale((rows) =>
      rows.map((r) =>
        r.key === key ? { ...r, value: Math.max(0, Math.min(100, r.value + delta)) } : r,
      ),
    );
  };
  const setVal = (key: string, v: string) => {
    const num = Math.max(0, Math.min(100, parseInt(v || "0", 10) || 0));
    setScale((rows) => rows.map((r) => (r.key === key ? { ...r, value: num } : r)));
  };

  return (
    <StyledPage>
      <Breadcrumb
        crumbs={[
          { label: "Risk manager", to: "/risk" },
          { label: "Settings" },
          { label: "Configuration hub" },
        ]}
      />

      <StyledHeaderRow>
        <StyledTitle>Configuration hub</StyledTitle>
        <StyledSavedChip>
          <IconCloud /> Saved
        </StyledSavedChip>
      </StyledHeaderRow>

      <StyledTabsWrap>
        <Tabs items={CONFIG_TABS} activeId={tab} onChange={setTab} />
      </StyledTabsWrap>

      <StyledBody>
        {tab === "effectiveness" && (
          <>
            <StyledSectionHeading>
              <h2>Scale setup</h2>
            </StyledSectionHeading>
            <StyledSectionSubtitle>
              Define the thresholds that map an aggregated score to an effectiveness label. Values apply left to right.
            </StyledSectionSubtitle>

            <StyledScaleRow>
              {scale.map((r) => (
                <StyledScaleField key={r.key}>
                  <label>{r.label}</label>
                  <StyledStepperInput>
                    <input
                      type="number"
                      value={r.value}
                      onChange={(e) => setVal(r.key, e.target.value)}
                    />
                    <span className="unit">%</span>
                    <button type="button" aria-label="Decrease" onClick={() => bump(r.key, -5)}>
                      −
                    </button>
                    <button type="button" aria-label="Increase" onClick={() => bump(r.key, 5)}>
                      +
                    </button>
                  </StyledStepperInput>
                </StyledScaleField>
              ))}
            </StyledScaleRow>
          </>
        )}

        {tab === "scoring" && (
          <>
            <StyledSectionHeading>
              <h2>Scoring formula</h2>
            </StyledSectionHeading>
            <StyledSectionSubtitle>
              Configure the calculation used to translate inherent and control effectiveness into a residual score.
            </StyledSectionSubtitle>
            <StyledFormulaCard>
              <StyledFormulaRow>
                <span className="label">Residual Risk Score</span>
                <span className="op">=</span>
                <span className="val">Inherent Risk Score</span>
                <span className="op">×</span>
                <span className="val">(1 − Control Environment Score)</span>
              </StyledFormulaRow>
            </StyledFormulaCard>
          </>
        )}

        {tab === "aggregation" && (
          <>
            <StyledSectionHeading>
              <h2>Aggregation rules</h2>
            </StyledSectionHeading>
            <StyledSectionSubtitle>
              Choose how individual control assessments combine into the control environment score.
            </StyledSectionSubtitle>

            <StyledAggRow>
              <StyledAggLabel>Method</StyledAggLabel>
              <StyledAggSelect>
                <select
                  value={aggregation}
                  onChange={(e) => setAggregation(e.target.value)}
                >
                  <option value="weighted-average">Weighted average (default)</option>
                  <option value="best">Best-case</option>
                  <option value="worst">Worst-case</option>
                  <option value="threshold">Threshold-based</option>
                </select>
                <IconChevronDown />
              </StyledAggSelect>
            </StyledAggRow>
          </>
        )}
      </StyledBody>
    </StyledPage>
  );
}

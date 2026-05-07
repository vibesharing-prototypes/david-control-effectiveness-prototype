import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Badge from "../../components/Badge/Badge";
import Button from "../../components/Button/Button";
import Tabs from "../../components/Tabs/Tabs";
import {
  IconChevronLeft,
  IconChevronDown,
  IconDots,
  IconCloud,
  IconWarn,
} from "../../icons/Icons";
import { CONFIG_GROUPS, RISK_ROWS } from "../../mocks/data";
import ControlEffectivenessPanel from "./ControlEffectivenessPanel";
import StageProgress, { Stage } from "../../components/StageProgress/StageProgress";
import {
  StyledPage,
  StyledHeaderCard,
  StyledHeaderTop,
  StyledTitleRow,
  StyledTitle,
  StyledMeta,
  StyledActions,
  StyledStagesWrap,
  StyledTabsWrap,
  StyledSection,
  StyledSectionTitle,
  StyledFormRow,
  StyledField,
  StyledInput,
  StyledRichTextHeader,
  StyledRichText,
  StyledSelectBox,
} from "./RiskDetailPage.styles";

const TAB_ITEMS = [
  { id: "details", label: "Details" },
  { id: "relationships", label: "Relationships" },
  { id: "risk-assessments", label: "Risk assessments" },
  { id: "controls", label: "Control effectiveness" },
];

export default function RiskDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState("controls");

  const risk = RISK_ROWS.find((r) => r.id === id);
  const configGroup = CONFIG_GROUPS.find((g) => g.id === id) ?? CONFIG_GROUPS[0];

  const title = risk?.name ?? "Enterprise Operational Risk Management and Miti…";

  const stageLabels = ["Draft", "Identification", "Analysis", "Assessment", "Response", "Review"];
  const currentStageIdx = 1;

  const stages: Stage[] = stageLabels.map((label, i) => ({
    label,
    index: String(i < 5 ? i + 1 : 5),
    state: i < currentStageIdx ? "complete" : i === currentStageIdx ? "current" : "upcoming",
  }));

  const nextStageLabel = stageLabels[currentStageIdx + 1]
    ? `Move to ${stageLabels[currentStageIdx + 1].toLowerCase()}`
    : "Complete";

  return (
    <StyledPage>
      <Breadcrumb
        crumbs={[
          { label: "Risk manager", to: "/risk" },
        ]}
      />

      <StyledHeaderCard>
        <StyledHeaderTop>
          <StyledTitleRow>
            <button className="back" onClick={() => navigate("/risk")} aria-label="Back">
              <IconChevronLeft />
            </button>
            <StyledTitle>{title}</StyledTitle>
            <Badge tone="info" size="sm">
              Identification
            </Badge>
          </StyledTitleRow>
          <StyledActions>
            <span className="saved"><IconCloud /> Saved</span>
            <Button variant="primary">{nextStageLabel}</Button>
            <button className="dots" aria-label="More">
              <IconDots />
            </button>
          </StyledActions>
        </StyledHeaderTop>

        <StyledMeta>
          <span>ID: 175-21-1894</span>
          <span>•</span>
          <span>Created: 17 Dec 2024</span>
          <span>•</span>
          <span>Updated: 19 Feb 2026</span>
          <span>•</span>
          <span>Created by: Alexandra Manolache</span>
        </StyledMeta>

        <StyledStagesWrap>
          <StageProgress stages={stages} />
          <button className="more"><IconDots /></button>
        </StyledStagesWrap>
      </StyledHeaderCard>

      <StyledTabsWrap>
        <Tabs items={TAB_ITEMS} activeId={activeTab} onChange={setActiveTab} />
      </StyledTabsWrap>

      {activeTab === "details" && (
        <StyledSection>
          <StyledSectionTitle>
            <IconChevronDown />
            Overview
          </StyledSectionTitle>

          <StyledFormRow>
            <StyledField style={{ flex: 2 }}>
              <label>
                Name <span className="req">(Required)</span>
              </label>
              <p className="hint">Enter the name</p>
              <StyledInput value={title} readOnly />
            </StyledField>
            <StyledField style={{ flex: 1 }}>
              <label>Risk ID</label>
              <StyledInput defaultValue="fsg" />
            </StyledField>
          </StyledFormRow>

          <StyledField>
            <label>Risk Description</label>
            <StyledRichTextHeader>
              <select defaultValue="Paragraph">
                <option>Paragraph</option>
                <option>Heading 1</option>
              </select>
              <span className="btn">B</span>
              <span className="btn italic">I</span>
              <span className="btn underline">U</span>
              <span className="btn">S</span>
              <span className="btn">≡</span>
              <span className="btn">⇥</span>
              <span className="btn">“ ”</span>
              <span className="btn">🔗</span>
              <span className="btn">🖼</span>
              <span className="btn">↶</span>
              <span className="btn">↷</span>
            </StyledRichTextHeader>
            <StyledRichText>fsh</StyledRichText>
          </StyledField>

          <StyledFormRow>
            <StyledField style={{ flex: 1 }}>
              <label>Risk Owner</label>
              <StyledSelectBox>
                Select…
                <IconChevronDown />
              </StyledSelectBox>
            </StyledField>
          </StyledFormRow>

          <StyledField>
            <label>Risk Category</label>
            <StyledSelectBox>
              Select…
              <IconChevronDown />
            </StyledSelectBox>
          </StyledField>
        </StyledSection>
      )}

      {activeTab === "controls" && (
        <ControlEffectivenessPanel
          riskName={configGroup.name}
          controls={configGroup.controls}
        />
      )}

      {activeTab !== "details" && activeTab !== "controls" && (
        <StyledSection>
          <StyledSectionTitle>
            <IconChevronDown />
            {TAB_ITEMS.find((t) => t.id === activeTab)?.label}
          </StyledSectionTitle>
          <p style={{ color: "var(--color-text-secondary)" }}>
            <IconWarn /> This tab is a placeholder — the prototype focuses on "Control Effectiveness".
          </p>
          <Link to="/settings/controls-configuration" style={{ color: "var(--color-text-link)" }}>
            Open Controls Configuration →
          </Link>
        </StyledSection>
      )}
    </StyledPage>
  );
}

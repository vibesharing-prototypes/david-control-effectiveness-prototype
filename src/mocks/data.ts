export type WorkflowStatus =
  | "Draft"
  | "Identification"
  | "Analysis"
  | "Assessment"
  | "Response"
  | "Review";

export type RiskRatingLabel = "Low" | "Medium" | "High" | "Very High" | "Very Low";

export type RiskRow = {
  id: string;
  name: string;
  riskId?: string;
  inherent?: { score: number; label: RiskRatingLabel };
  residual?: { score: number; label: RiskRatingLabel };
  status: WorkflowStatus;
  owner?: { name: string; initials: string };
  assessments: number;
  hasWarning?: boolean;
};

export type EffectivenessLevel = "Effective" | "Partially Effective" | "Ineffective";

export type ControlRow = {
  id: string;
  name: string;
  percentByLevel: { Effective: number; "Partially Effective": number; Ineffective: number };
  weight: number;
  designEffectiveness: EffectivenessLevel;
  operatingEffectiveness: EffectivenessLevel;
};

export type RiskGroup = {
  id: string;
  name: string;
  controls: ControlRow[];
};

export const RISK_ROWS: RiskRow[] = [
  { id: "r-1", name: "Data Center Growth Management Challenges", status: "Draft", assessments: 0, hasWarning: true },
  { id: "r-2", name: "Future success depends solely on imetable execution", status: "Draft", assessments: 0, hasWarning: true },
  { id: "r-3", name: "Serious adverse events could halt development", status: "Draft", assessments: 1 },
  { id: "r-4", name: "Brand value preservation and fashion trends", status: "Draft", assessments: 0, hasWarning: true },
  { id: "r-5", name: "Maintaining brand image and reputation", status: "Identification", assessments: 0, hasWarning: true },
  { id: "r-6", name: "Brand Equity Fragility: Isolated Incident Risk", status: "Draft", assessments: 1 },
  { id: "r-7", name: "Sustainability-Centered Brand Perception Fr…", status: "Draft", assessments: 0, hasWarning: true },
  { id: "r-8", name: "This is something risky", status: "Draft", assessments: 0, hasWarning: true, owner: { name: "David Balogh", initials: "DB" } },
  {
    id: "r-9",
    name: "Extreme Weather Vulnerability in Coastal R…",
    status: "Draft",
    assessments: 1,
    inherent: { score: 6, label: "Low" },
  },
  { id: "r-10", name: "CVOW Commercial Project construction", status: "Draft", assessments: 0, hasWarning: true },
  { id: "r-11", name: "Data Breach", status: "Assessment", assessments: 4, inherent: { score: 16, label: "High" }, residual: { score: 8, label: "Medium" } },
  { id: "r-12", name: "System Downtime", status: "Assessment", assessments: 3, inherent: { score: 12, label: "Medium" }, residual: { score: 6, label: "Low" } },
];

export const CONFIG_GROUPS: RiskGroup[] = [
  {
    id: "r-11",
    name: "Data Breach",
    controls: [
      {
        id: "c-1",
        name: "Access Control",
        percentByLevel: { Effective: 100, "Partially Effective": 40, Ineffective: 0 },
        weight: 25,
        designEffectiveness: "Effective",
        operatingEffectiveness: "Effective",
      },
      {
        id: "c-2",
        name: "Firewall Protection",
        percentByLevel: { Effective: 100, "Partially Effective": 0, Ineffective: 0 },
        weight: 25,
        designEffectiveness: "Effective",
        operatingEffectiveness: "Effective",
      },
      {
        id: "c-3",
        name: "Encryption Protocols",
        percentByLevel: { Effective: 80, "Partially Effective": 40, Ineffective: 0 },
        weight: 25,
        designEffectiveness: "Effective",
        operatingEffectiveness: "Partially Effective",
      },
      {
        id: "c-4",
        name: "User Training",
        percentByLevel: { Effective: 100, "Partially Effective": 40, Ineffective: 50 },
        weight: 25,
        designEffectiveness: "Partially Effective",
        operatingEffectiveness: "Partially Effective",
      },
    ],
  },
  {
    id: "r-12",
    name: "System Downtime",
    controls: [
      {
        id: "c-5",
        name: "Backup Systems",
        percentByLevel: { Effective: 100, "Partially Effective": 20, Ineffective: 0 },
        weight: 30,
        designEffectiveness: "Effective",
        operatingEffectiveness: "Effective",
      },
      {
        id: "c-6",
        name: "Network Monitoring",
        percentByLevel: { Effective: 90, "Partially Effective": 30, Ineffective: 0 },
        weight: 30,
        designEffectiveness: "Effective",
        operatingEffectiveness: "Partially Effective",
      },
      {
        id: "c-7",
        name: "Power Redundancy",
        percentByLevel: { Effective: 0, "Partially Effective": 0, Ineffective: 70 },
        weight: 40,
        designEffectiveness: "Ineffective",
        operatingEffectiveness: "Effective",
      },
    ],
  },
];

export const WORKFLOW_STATUSES: { label: WorkflowStatus; count: number; color: string }[] = [
  { label: "Draft", count: 4, color: "#2a2a40" },
  { label: "Identification", count: 0, color: "#d32f2f" },
  { label: "Analysis", count: 0, color: "#f9a825" },
  { label: "Assessment", count: 1, color: "#6e4ea0" },
  { label: "Response", count: 2, color: "#d9bf56" },
  { label: "Review", count: 1, color: "#4a7bb0" },
];

export const WORKFLOW_DONUT_TOTAL = 8;

export const HEATMAP_VALUES: number[][] = [
  [0, 0, 0],
  [0, 0, 0],
  [8, 0, 0],
];

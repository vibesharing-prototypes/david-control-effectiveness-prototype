import { SVGProps } from "react";

const base: SVGProps<SVGSVGElement> = {
  width: 16,
  height: 16,
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const IconMenu = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <line x1="2" y1="4" x2="14" y2="4" />
    <line x1="2" y1="8" x2="14" y2="8" />
    <line x1="2" y1="12" x2="14" y2="12" />
  </svg>
);

export const IconChevronLeft = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <polyline points="10 3 5 8 10 13" />
  </svg>
);

export const IconChevronRight = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <polyline points="6 3 11 8 6 13" />
  </svg>
);

export const IconChevronDown = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <polyline points="3 6 8 11 13 6" />
  </svg>
);

export const IconChevronUp = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <polyline points="3 10 8 5 13 10" />
  </svg>
);

export const IconSearch = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <circle cx="7" cy="7" r="4.5" />
    <line x1="14" y1="14" x2="10.5" y2="10.5" />
  </svg>
);

export const IconFilter = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <polygon points="2 3 14 3 10 8 10 13 6 12 6 8" />
  </svg>
);

export const IconColumns = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <rect x="2" y="3" width="12" height="10" rx="1" />
    <line x1="6" y1="3" x2="6" y2="13" />
    <line x1="10" y1="3" x2="10" y2="13" />
  </svg>
);

export const IconExport = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M8 2v8" />
    <polyline points="5 5 8 2 11 5" />
    <path d="M3 10v3a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3" />
  </svg>
);

export const IconPlus = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <line x1="8" y1="3" x2="8" y2="13" />
    <line x1="3" y1="8" x2="13" y2="8" />
  </svg>
);

export const IconSparkle = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M8 2l1.4 3.6L13 7l-3.6 1.4L8 12l-1.4-3.6L3 7l3.6-1.4L8 2z" fill="currentColor" stroke="none" />
  </svg>
);

export const IconBell = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M3 11h10l-1.5-1.5V7a3.5 3.5 0 0 0-7 0v2.5L3 11z" />
    <path d="M6.5 13a1.5 1.5 0 0 0 3 0" />
  </svg>
);

export const IconUser = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <circle cx="8" cy="6" r="3" />
    <path d="M2.5 14a5.5 5.5 0 0 1 11 0" />
  </svg>
);

export const IconEnvelope = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <rect x="2" y="4" width="12" height="8" rx="1" />
    <polyline points="2 4 8 9 14 4" />
  </svg>
);

export const IconDots = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <circle cx="3.5" cy="8" r="1" fill="currentColor" />
    <circle cx="8" cy="8" r="1" fill="currentColor" />
    <circle cx="12.5" cy="8" r="1" fill="currentColor" />
  </svg>
);

export const IconCheck = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <polyline points="3 8 7 12 13 4" />
  </svg>
);

export const IconWarn = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p} stroke="none" fill="#f9a825">
    <polygon points="8 2 14 13 2 13" />
    <line x1="8" y1="6" x2="8" y2="9" stroke="#1e1e1e" strokeWidth="1.5" />
    <circle cx="8" cy="11" r="0.5" fill="#1e1e1e" />
  </svg>
);

export const IconShield = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M8 2l5 2v4c0 3.5-2.5 5.5-5 6-2.5-.5-5-2.5-5-6V4l5-2z" />
  </svg>
);

export const IconControl = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M8 2l5 2v4c0 3.5-2.5 5.5-5 6-2.5-.5-5-2.5-5-6V4l5-2z" />
    <polyline points="6 8 7.5 9.5 10 7" />
  </svg>
);

export const IconProcess = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <rect x="2" y="3" width="12" height="10" rx="1" />
    <line x1="2" y1="6.5" x2="14" y2="6.5" />
    <line x1="5.5" y1="3" x2="5.5" y2="13" />
  </svg>
);

export const IconTarget = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <circle cx="8" cy="8" r="6" />
    <circle cx="8" cy="8" r="3" />
    <circle cx="8" cy="8" r="0.8" fill="currentColor" />
  </svg>
);

export const IconCalendar = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <rect x="2" y="3.5" width="12" height="10" rx="1" />
    <line x1="2" y1="6.5" x2="14" y2="6.5" />
    <line x1="5" y1="2" x2="5" y2="5" />
    <line x1="11" y1="2" x2="11" y2="5" />
  </svg>
);

export const IconList = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <line x1="3" y1="4" x2="13" y2="4" />
    <line x1="3" y1="8" x2="13" y2="8" />
    <line x1="3" y1="12" x2="13" y2="12" />
  </svg>
);

export const IconClock = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <circle cx="8" cy="8" r="6" />
    <polyline points="8 4.5 8 8 10.5 9.5" />
  </svg>
);

export const IconSettings = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <circle cx="8" cy="8" r="2.3" />
    <path d="M8 1.5v2M8 12.5v2M1.5 8h2M12.5 8h2M3.5 3.5l1.4 1.4M11.1 11.1l1.4 1.4M3.5 12.5l1.4-1.4M11.1 4.9l1.4-1.4" />
  </svg>
);

export const IconAssessment = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <rect x="3" y="2" width="10" height="12" rx="1" />
    <line x1="5" y1="5" x2="11" y2="5" />
    <line x1="5" y1="8" x2="11" y2="8" />
    <line x1="5" y1="11" x2="9" y2="11" />
  </svg>
);

export const IconRisk = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <polygon points="8 2 14 13 2 13" fill="currentColor" stroke="none" />
  </svg>
);

export const IconClipboard = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="3" width="9" height="11" rx="1" />
    <rect x="5.5" y="1.5" width="5" height="2.5" rx="0.5" />
  </svg>
);

export const IconCloud = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M4.5 12h7a2.5 2.5 0 0 0 0-5 3.5 3.5 0 0 0-6.7-1 2.5 2.5 0 0 0-0.3 6z" />
  </svg>
);

export const IconScore = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <circle cx="8" cy="8" r="6" />
    <path d="M5 9a3 3 0 0 1 6 0" />
    <line x1="8" y1="9" x2="10" y2="6" />
  </svg>
);

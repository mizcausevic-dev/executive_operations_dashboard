import type {
  BusinessSystem,
  CapabilityCard,
  CommandSignal,
  PriorityQueueItem,
  WeeklyNarrative
} from "./types";

export const commandSignals: CommandSignal[] = [
  {
    id: "signal-1",
    label: "Executive operating score",
    value: "89",
    delta: "+6 this quarter",
    tone: "positive"
  },
  {
    id: "signal-2",
    label: "Revenue workflow health",
    value: "94%",
    delta: "Lead-routing SLA under 2h",
    tone: "positive"
  },
  {
    id: "signal-3",
    label: "Platform risk pressure",
    value: "3",
    delta: "Open issues needing action",
    tone: "warning"
  },
  {
    id: "signal-4",
    label: "Cross-functional lift",
    value: "+18%",
    delta: "Content to pipeline efficiency",
    tone: "positive"
  }
];

export const businessSystems: BusinessSystem[] = [
  {
    id: "system-1",
    name: "Revenue Ops AI Assistant",
    owner: "Revenue Operations",
    posture: "stable",
    summary: "Account briefs and pipeline summaries are routing cleanly into GTM decision support.",
    metric: "47 high-priority accounts triaged this week"
  },
  {
    id: "system-2",
    name: "Cloud Cost Intelligence",
    owner: "Platform Engineering",
    posture: "watch",
    summary: "Production Kubernetes spend is above plan but optimization recommendations are already prioritized.",
    metric: "12% variance above monthly budget"
  },
  {
    id: "system-3",
    name: "SEO Governance Platform",
    owner: "Web Platform",
    posture: "stable",
    summary: "Publishing readiness and redirect integrity remain inside governance thresholds.",
    metric: "92% approval pass rate"
  },
  {
    id: "system-4",
    name: "Observability Incident Command",
    owner: "SRE + Leadership",
    posture: "critical",
    summary: "One revenue-affecting incident requires executive-visible comms discipline and containment tracking.",
    metric: "37 minutes open"
  }
];

export const priorityQueue: PriorityQueueItem[] = [
  {
    title: "Approve phased rollout for enterprise CTA modernization",
    team: "Growth + Product",
    urgency: "Next 24 hours",
    outcome: "Unlock high-confidence experiment win without exposing rollback risk."
  },
  {
    title: "Reduce privileged entitlement sprawl in finance reporting tools",
    team: "IAM + Compliance",
    urgency: "This sprint",
    outcome: "Close audit finding before quarter-end control review."
  },
  {
    title: "Escalate legal review blockers on flagship governance content",
    team: "Content Ops + Web Platform",
    urgency: "48 hours",
    outcome: "Protect launch window for a high-opportunity search asset."
  }
];

export const weeklyNarrative: WeeklyNarrative[] = [
  {
    stage: "Monday",
    headline: "Detect pressure",
    detail: "The command layer surfaces cost variance, rollout opportunity, and incident risk before teams drift into siloed reactions."
  },
  {
    stage: "Wednesday",
    headline: "Coordinate decisions",
    detail: "Revenue, web, support, and platform signals resolve into one operating picture with clear ownership and next actions."
  },
  {
    stage: "Friday",
    headline: "Report outcomes",
    detail: "Leadership sees decision velocity, business risk, and execution posture in one artifact instead of scattered dashboards."
  }
];

export const capabilityCards: CapabilityCard[] = [
  {
    title: "Unified command view",
    summary: "Front-end layer that turns revenue, platform, content, security, and growth data into one executive operating surface.",
    artifact: "Flagship dashboard experience"
  },
  {
    title: "System narrative design",
    summary: "Explains why the numbers matter, who owns the next move, and how operators should interpret pressure across the business.",
    artifact: "Decision framing, not vanity charts"
  },
  {
    title: "Portfolio integration",
    summary: "Connects the backend projects in this GitHub portfolio into one coherent visual system that looks like a real internal product.",
    artifact: "Cross-repo storytelling layer"
  }
];

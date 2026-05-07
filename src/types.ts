export type CommandSignal = {
  id: string;
  label: string;
  value: string;
  delta: string;
  tone: "positive" | "warning" | "neutral";
};

export type BusinessSystem = {
  id: string;
  name: string;
  owner: string;
  posture: "stable" | "watch" | "critical";
  summary: string;
  metric: string;
};

export type PriorityQueueItem = {
  title: string;
  team: string;
  urgency: string;
  outcome: string;
};

export type WeeklyNarrative = {
  stage: string;
  headline: string;
  detail: string;
};

export type CapabilityCard = {
  title: string;
  summary: string;
  artifact: string;
};

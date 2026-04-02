import type { CallCardConfig, CallCardRecord } from "../../modules/call-cards/types";

export const beaverPatchConfig: CallCardConfig = {
  moduleTitle: "BeaverPatch",
  moduleDescription:
    "Single-page operational board for incoming and resolved calls. Built with a schema-driven model for future real-time integration.",
  emptyStateMessage: "No calls are available right now.",
  labels: {
    status: "Status",
    callType: "Call Type",
    timestamp: "Timestamp",
    location: "Location",
  },
};

export const beaverPatchCalls: CallCardRecord[] = [
  {
    id: "BP-10021",
    status: "Active",
    callType: "Break & Enter",
    timestamp: "2026-04-02T15:30:00Z",
    location: "221B River Road",
    metadata: [
      { key: "priority", label: "Priority", value: "High" },
      { key: "unit", label: "Unit", value: "Car 12" },
    ],
  },
  {
    id: "BP-10022",
    status: "Resolved",
    callType: "Suspicious Activity",
    timestamp: "2026-04-02T13:05:00Z",
    location: "Central Market Lot",
    metadata: [
      { key: "priority", label: "Priority", value: "Medium" },
      { key: "unit", label: "Unit", value: "Unit 8" },
    ],
  },
  {
    id: "BP-10023",
    status: "Active",
    callType: "Traffic Collision",
    timestamp: "2026-04-02T15:48:00Z",
    location: "Hawthorne Ave & 9th",
    metadata: [
      { key: "priority", label: "Priority", value: "High" },
      { key: "unit", label: "Unit", value: "Traffic 3" },
    ],
  },
];

export type CallCardField = {
  key: string;
  label: string;
  value: string;
};

export type CallCardRecord = {
  id: string;
  status: string;
  callType: string;
  timestamp: string;
  location: string;
  metadata?: CallCardField[];
};

export type CallCardConfig = {
  moduleTitle: string;
  moduleDescription: string;
  emptyStateMessage: string;
  labels: {
    status: string;
    callType: string;
    timestamp: string;
    location: string;
  };
};

export interface CurrentProjectType {
  codebase: Record<string, string>;
  description: string;
  externalPackages: { packageName: string; packageVersion: string }[];
  projectId: string;
}

export interface ActiveProjectType {
  createdAt: string;
  description: string;
  id: number;
  name: string;
  processId: string;
  projectId: string;
  sandboxId: string;
  updatedAt: string;
  walletAddress: string;
}

// Add new interfaces to handle the nested structure
export interface FileData {
  code?: string;
  filePath?: string;
}

export interface NestedFileObject {
  [key: string]: FileData;
}

export interface CodeFile {
  filePath?: string;
  code?: string;
  [key: string]: unknown;
}

export type OverlayType = 'loading' | 'wallet' | 'creating';

export interface StatusTimelineEvent {
  id: string;
  message: string;
  timestamp: number;
}

export interface OverlayConfig {
  type: 'loading' | 'error' | 'success' | 'info';
  title?: string;
  description?: string;
  actionButton?: {
    label: string;
    onClick: () => void;
  };
  statusTimeline?: StatusTimelineEvent[];
}

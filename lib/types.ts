export interface CurrentProjectType {
  codebase: CodeContent[];
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

export interface CodeContent {
  code: string;
  filePath?: string;
  [key: string]: unknown;
}

// Add new interfaces to handle the nested structure
export interface FileData {
  code?: string;
  filePath?: string;
  filepath?: string;
  [key: string]: unknown;
}

export interface NestedFileObject {
  [key: string]: FileData;
}


export interface CodeFile {
  filePath?: string;
  code?: string;
  [key: string]: unknown;
}

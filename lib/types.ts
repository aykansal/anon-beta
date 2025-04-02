export interface ProjectType {
    createdAt: string;
    description: string | null;
    id: number;
    latestMessage: {
      integrationText: {
        content: {
          codebase: { filePath: string; code: string }[];
          externalPackages: string[];
        };
      };
    } | null;
    name: string;
    processId: string;
    projectId: string;
    sandboxId: string;
    updatedAt: string;
    walletAddress: string;
  }
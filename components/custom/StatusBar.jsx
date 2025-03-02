import React from 'react';
import { Loader2Icon, GitBranchIcon, CheckCircleIcon } from 'lucide-react';

const StatusBar = ({
  activeProject,
  status, // New status prop
  connectionStatus = 'connected', // 'connected' | 'disconnected' | 'connecting'
}) => {
  return (
    <div className="h-6 shrink-0 bg-muted border-t px-2 flex items-center text-xs text-muted-foreground">
      <div className="flex-1 flex items-center gap-4">
        {/* Project Status */}
        <div className="flex items-center gap-1">
          <GitBranchIcon size={12} />
          <span>
            {activeProject ? activeProject.name : 'No project selected'}
          </span>
        </div>

        {/* Status Message */}
        {status && (
          <div className="flex items-center gap-1 text-primary">
            <Loader2Icon size={12} className="animate-spin" />
            <span>{status}</span>
          </div>
        )}
      </div>

      {/* Connection Status */}
      <div className="flex items-center gap-1">
        {connectionStatus === 'connected' && (
          <>
            <CheckCircleIcon size={12} className="text-success" />
            <span>Connected</span>
          </>
        )}
        {connectionStatus === 'connecting' && (
          <>
            <Loader2Icon size={12} className="animate-spin text-warning" />
            <span>Connecting...</span>
          </>
        )}
        {connectionStatus === 'disconnected' && (
          <>
            <div className="w-2 h-2 rounded-full bg-destructive" />
            <span>Disconnected</span>
          </>
        )}
      </div>
    </div>
  );
};

export default StatusBar;

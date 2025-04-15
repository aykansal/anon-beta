import React from 'react';
import { Loader2Icon, GitBranchIcon} from 'lucide-react';

const StatusBar = ({
  activeProject,
  status, // New status prop
  connectionStatus = 'connected', // 'connected' | 'disconnected' | 'connecting',
}) => {
  return (
    <div className="h-8 shrink-0 bg-white border-t border-gray-200 px-4 flex items-center text-xs font-medium text-gray-600">
    <div className="flex-1 flex items-center gap-6">
      {/* Project Status */}
      <div className="flex items-center gap-2">
        <GitBranchIcon size={13} className="text-blue-600" />
        <span className="hover:text-gray-900 transition-colors">
          {activeProject ? activeProject.name : 'No project selected'}
        </span>
      </div>
  
      {/* Status Message */}
      {status && (
        <div className="flex items-center gap-2">
          <Loader2Icon size={13} className="animate-spin text-blue-600" />
          <span className="text-blue-700">{status}</span>
        </div>
      )}
    </div>
  
    {/* Connection Status */}
    <div className="flex items-center gap-2">
      {connectionStatus === 'connected' && (
        <>
          <div className="w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_6px] shadow-blue-600"></div>
          <span className="hover:text-gray-900 transition-colors">Connected</span>
        </>
      )}
      {connectionStatus === 'connecting' && (
        <>
          <Loader2Icon size={13} className="animate-spin text-blue-600" />
          <span className="text-blue-700">Connecting...</span>
        </>
      )}
      {connectionStatus === 'disconnected' && (
        <>
          <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_6px] shadow-red-500"></div>
          <span className="text-red-600">Disconnected</span>
        </>
      )}
    </div>
  </div>
  
  );
};

export default StatusBar;

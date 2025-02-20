'use client';

import React from 'react';
import { ActionContext } from '@/context/ActionContext';
import { SandpackPreview, useSandpack } from '@codesandbox/sandpack-react';
import { toast } from 'sonner';
import { loadSandpackClient } from '@codesandbox/sandpack-client';
// import { loadSandpackClient } from '@codesandbox/sandpack-client';

const SandPackPreviewClient = () => {
  const { sandpack } = useSandpack();
  const actionContext = React.useContext(ActionContext);

  const { action, setAction } = actionContext;
  const previewRef = React.useRef(null);

  const getSandPackClient = async () => {
    const client = previewRef?.current?.getClient();
    const clientId = previewRef.current?.clientId;

    const client2 = await loadSandpackClient(previewRef.current.iframe, {
      files: {
        '/index.js': {
          code: `console.log(require('uuid'))`,
        },
      },
      // entry: '/index.js',
      dependencies: {
        uuid: 'latest',
      },
      template: 'static',
    });
    
    if (client && clientId) {
      console.log(client);
      console.log(sandpack.clients[clientId]);
      
      console.log(client2);
      const result = await client.getCodeSandboxURL();
      console.log(result);
      if (action.Action == 'deploy') {
        navigator.clipboard
          .writeText('https://' + result.sandboxId + '.csb.app/')
          .then(() => {
            toast.success('Link Copied to the clipboard');
          });
      } else if (action.Action == 'export') {
        window.open(result.editorUrl);
      }
    }
  };

  React.useEffect(() => {
    getSandPackClient();
    // SandPackPreviewClient2();
  }, [sandpack && action]);

  return (
    <SandpackPreview
      ref={previewRef}
      showNavigator={true}
      style={{ height: '100%' }}
    />
  );
};

export default SandPackPreviewClient;

// export const SandPackPreviewClient2 = async () => {
//   await loadSandpackClient('#preview', {
//     files: {
//       '/index.js': {
//         code: `console.log(require('uuid'))`,
//       },
//     },
//     entry: '/index.js',
//     dependencies: {
//       uuid: 'latest',
//     },
//   });
// };

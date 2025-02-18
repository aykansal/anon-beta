'use client';
import { ActionContext } from '@/context/ActionContext';
import { toast } from '@/hooks/use-toast';
import { SandpackPreview, useSandpack } from '@codesandbox/sandpack-react';
import React, { useContext, useEffect, useRef } from 'react';

// okay the final changes can be made afterwards also but now first thing have to be created is mvp and what is left for the proper deployed mvp
// what all is left for the simple mvp for the friday
// first thing i have to change the ui for it
// i have to fix the multiple request being sent to the server of both the chat and the code generation
// download button to be fixed
// also have to find a way to fix the instant code deployment
// there is a better way for instant sharing link but i don't know how to use that

// okay ig i have to built it again this time properly with tsx and first thing is it will be with changed ui
// one simple ui and one with enhanced ui
// 3 months huh mai san 3 months everyone is upgrading themselves although i started before them but i am left behind i am very behind i am getting left behind in every area fitness , knowledge everything i know what to do now i feel fear again fear of failure i don't wanna fail just not failing i want to be good i'll fail if i don't do things right now
// anon ka landing page banega abhi then tomorrow we'll fix the request thingy

const SandPackPreviewClient = () => {
  const { sandpack } = useSandpack();
  const actionContext = useContext(ActionContext);

  const { action, setAction } = actionContext;
  const previewRef = useRef(null);

  useEffect(() => {
    getSandPackClient();
  }, [sandpack && action]);

  const getSandPackClient = async () => {
    const client = previewRef.current.getClient();
    if (client) {
      const result = await client.getCodeSandboxURL();
      console.log(result);
      if (action.Action == 'deploy') {
        navigator.clipboard
          .writeText('https://' + result.sandboxId + '.csb.app/')
          .then(() => {
            toast({
              title: 'Link Copied to the clipboard',
              Description: 'link copied to the clipboard` ',
            });
          });
      } else if (action.Action == 'export') {
        window.open(result.editorUrl);
      }
    }
  };

  return (
    <SandpackPreview
      ref={previewRef}
      showNavigator={true}
      style={{ height: '100%' }}
    />
  );
};

export default SandPackPreviewClient;

'use client';

import Image from 'next/image';
import React, { useContext } from 'react';
import { Button } from '../ui/button';
import { UserDetailsContext } from '@/context/UserDetailsContext';
import { MessageContext } from '@/context/MessagesContext';
// import { Menu } from 'lucide-react';
// import { useSidebar } from '../ui/sidebar';
import { ActionContext } from '@/context/ActionContext';
import Login from './Login';
import { googleLogout } from '@react-oauth/google';

const Navbar = () => {
  const context = useContext(UserDetailsContext);
  const msgContext = useContext(MessageContext);
  const actionContext = useContext(ActionContext);
  // const { toggleSidebar } = useSidebar();
  const { userDets } = context;
  const { message } = msgContext;
  const { setAction } = actionContext;

  const OnAction = (actionType) => {
    setAction({
      Action: actionType,
      timeStamp: Date.now(),
    });
  };

  return (
    <div className="flex justify-between items-center px-12 w-full">
      <div>
        <Image width={85} height={85} src="/logo.jpeg" alt="Logo" />
      </div>

      {userDets && message?.length > 0 ? (
        <div className="flex justify-between w-[50%]">
          <div className="flex items-center gap-4">
            <Button onClick={() => OnAction('export')} variant="ghost ">
              Export
            </Button>
            <Button
              onClick={() => OnAction('deploy')}
              className="bg-blue-500 hover:bg-blue-400 text-white"
            >
              Deploy
            </Button>
          </div>

          <div className="cursor-pointer">
            {/* <Menu onClick={toggleSidebar} /> */}
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          {userDets ? (
            <Button
              onClick={googleLogout}
              className="bg-blue-500 hover:bg-blue-400 text-white"
            >
              Logout
            </Button>
          ) : (
            <Login />
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;

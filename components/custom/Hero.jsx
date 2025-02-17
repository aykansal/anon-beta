'use client';

import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import Login from './Login';
import { MessageContext } from '@/context/MessagesContext';
import { ArrowRight, Link, Loader2Icon } from 'lucide-react';

const Hero = () => {
  const router = useRouter();
  const [userInput, setuserInput] = useState(null);
  const [openSignupDialog, setopenSignupDialog] = useState(false);
  const Msgcontext = useContext(MessageContext);
  const [loading, setloading] = useState(false);
  const { setmessage } = Msgcontext;

  const OnGenerate = async (input) => {
    setloading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000)); // Proper delay

    setmessage({
      role: 'user',
      content: input,
    });

    localStorage.setItem(
      'messageArray',
      JSON.stringify({
        role: 'user',
        content: input,
      })
    );

    setloading(false);
    router.push('/workspace');
  };

  return (
    <div className="flex flex-col items-center mt-28 w-full h-full">
      <Login open={openSignupDialog} setOpenChange={setopenSignupDialog} />
      <h1 className="font-bold text-4xl">What do you want to build?</h1>

      <p className="mt-1 text-gray-500">
        prompt, run, edit, and deploy fullstack web apps.{' '}
      </p>

      {/* this is the search box  */}
      <div className="relative flex flex-col border-white/20 mt-5 py-5 border rounded-xl w-full max-w-2xl">
        {/* this is the search box area */}
        <div className="flex justify-between items-start px-3 w-full">
          <textarea
            className="bg-transparent px-2 w-full max-w-xl h-32 outline-none removesc resize-none"
            onChange={(e) => setuserInput(e.target.value)}
          />

          <ArrowRight
            onClick={() => OnGenerate(userInput)}
            className="bg-blue-500 hover:bg-blue-400 p-1 rounded-lg w-8 h-8 cursor-pointer"
          />
        </div>

        <div className="px-3 w-full cursor-pointer">
          <Link className="opacity-60" />
        </div>

        {loading && (
          <div className="top-0 absolute flex justify-center items-center bg-gray-900 opacity-90 rounded-xl w-full h-full scale-105">
            <div className="flex items-center gap-2">
              <Loader2Icon className="animate-spin" />
              <h2>Creating your project.....</h2>
            </div>
          </div>
        )}
      </div>
      {/* this is the example fields  */}

      <div className="flex flex-wrap justify-center items-center gap-3 mt-3 px-2 w-full max-w-2xl">
        {[
          'create a TODO app',
          'create a Budget track app',
          'create a flappy bird game',
          'write backend for authentication',
          'create a landing page',
        ].map((input, index) => (
          <div
            key={index}
            className="border-white/30 px-3 py-1 border rounded-full text-gray-400 text-sm hover:text-gray-200 cursor-pointer"
            onClick={() => OnGenerate(input)}
          >
            <h2>{input}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;

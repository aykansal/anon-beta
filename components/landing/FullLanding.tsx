'use client';

import React from 'react';
import { redirect } from 'next/navigation';
import LandingNavbar from './LandingNavbar';

export default function Home() {
  const startChat = () => {
    redirect('/dashboard');
  };

  return (
    <div className="bg-[#FFFFFA] h-screen w-full relative">
      <LandingNavbar />
      {/* outer div */}
      <div className="w-full h-[93vh] flex items-end justify-center relative px-4 sm:px-6 md:px-10">
        {/* inner div */}
        <div className="w-full max-w-[1440px] pt-6 h-[87%] bg-[#F2F2E8] rounded-[20px] flex flex-col items-center justify-center">
          {/* main heading */}
          <div className="w-full f19 text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.2rem] text-[#213130] leading-tight sm:leading-[4rem] md:leading-[5.2rem] lg:leading-[6.2rem] xl:leading-[6.8rem] text-center">
            <h1>Vibe code,</h1>
            <h1>everywhere</h1>
          </div>
          {/* input div */}
          <div className="f18 w-full text-center text-[#515E5B] mt-6 sm:mt-8 md:mt-10 px-2 sm:px-4 md:px-0">
            <p className="text-sm sm:text-base md:text-lg">
              Plan, create, and build products with the most flexible Arweave
              toolkit.
            </p>
            <div className="flex mt-6 sm:mt-8 md:mt-10 mb-6 sm:mb-8 items-center justify-center w-full gap-2">
              <div
                className="px-4 sm:px-5 w-[70%] sm:w-[40%] md:w-[30%] lg:w-[20%] bg-[#B0EC9C] flex items-center gap-2 justify-center f18 py-[12px] sm:py-[14px] md:py-[16px] rounded-full border border-black text-sm sm:text-base md:text-lg cursor-pointer"
                onClick={startChat}
              >
                Get started now
                <svg
                  className="ButtonBrand_icon__mayHb"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M11.47 4.47a.75.75 0 0 1 1.06 0l7 7a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 1 1-1.06-1.06l5.72-5.72H5a.75.75 0 0 1 0-1.5h12.19l-5.72-5.72a.75.75 0 0 1 0-1.06Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

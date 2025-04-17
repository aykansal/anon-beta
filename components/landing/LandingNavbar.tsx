import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LandingNavbar = () => {
  return (
    <div className="w-full px-8  py-2 justify-between z-[100] items-center bg-[#FFFFFA] flex h-[10.2vh] fixed rounded-b-2xl">
      {/*  this is the logo section */}

      <div className="w-[9.5%]">
        <Image
          className="w-full h-full object-contain"
          src={'/bgRemoveLogoAnon.png'}
          alt="not"
          width={290}
          height={290}
        />
      </div>

      <div className="flex gap-2 text-[#596463] tracking-wide items-center">
        <div className=" cursor-not-allowed flex f18 text-[17.5px] capitalize hover:bg-[#F2F2E8] transition-all px-3 py-1 rounded-full gap-[10px] duration-300 items-center">
          <h1>Features</h1>
          <svg width="23" height="23" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M5.293 8.293a1 1 0 0 1 1.414 0L12 13.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414Z"
            ></path>
          </svg>
        </div>
        <div className=" cursor-not-allowed f18 flex text-[17.5px] capitalize hover:bg-[#F2F2E8] transition-all px-3 py-1 rounded-full gap-[10px]  duration-300 items-center">
          <h1>channels</h1>
          <svg width="23" height="23" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M5.293 8.293a1 1 0 0 1 1.414 0L12 13.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414Z"
            ></path>
          </svg>
        </div>
        <div className=" cursor-not-allowed  f18 text-[17.5px] capitalize hover:bg-[#F2F2E8] transition-all px-3 py-1 rounded-full gap-1  duration-300 ">
          <h1>pricing</h1>
        </div>
        <div className=" cursor-not-allowed  f18 text-[17.5px] capitalize hover:bg-[#F2F2E8] transition-all px-3 py-1 rounded-full gap-1  duration-300 ">
          <h1>blog</h1>
        </div>
      </div>

      <div className="w-[22%]  text-[#596463] h-full flex tracking-wide items-center gap-3 ">
        <div className=" rounded-full bg-black ">
          <Link href="https://x.com/a0_anon" target="_blank">
            <div className="px-5 bg-[#FFFFFA] hover:-translate-y-1 transition-all duration-200   f18 py-2 rounded-full border-[1px] text-lg border-black">
              Know us
            </div>
          </Link>
        </div>

        <div className="bg-black rounded-full">
          <div className="px-5 bg-[#B0EC9C] hover:-translate-y-1 duration-200 transition-all f18 py-2 rounded-full border-[1px] text-lg ">
            Connect wallet
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingNavbar;

'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import LandingNavbar from './LandingNavbar';
import L1 from '@/public/landing/L1.png';
import L2 from '@/public/landing/L2.png';
import R1 from '@/public/landing/R1.png';
import R2 from '@/public/landing/R2.png';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const startChat = () => {
    console.log('Navigation started');
    setIsLoading(true);
    router.push('/dashboard');
  };

  return (
    <div className="bg-[#FFFFFA] h-[100vh] relative w-full">
      <LandingNavbar />
      {/* outer div */}
      <div className="w-full h-[93vh] flex items-end justify-center relative ">
        {/* inner div */}
        <div className="w-[94%] pt-6 h-[87%] bg-[#F2F2E8] rounded-[20px] flex flex-col items-center justify-center">
          {/* main heading */}
          <div className="w-full f19 text-[2rem] sm:text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.2rem] text-[#213130] leading-[2.2rem] sm:leading-[3.2rem] md:leading-[4.8rem] lg:leading-[5.8rem] xl:leading-[6.8rem] text-center transition-all duration-300">
            <h1 className="mb-2 sm:mb-3">Vibe code,</h1>
            <h1>everywhere</h1>
          </div>
          {/* input div */}
          <div className="f18 w-full text-center text-[#515E5B] mt-4 sm:mt-6 md:mt-8 lg:mt-10">
            <p className="text-sm sm:text-base md:text-lg max-w-[280px] sm:max-w-[400px] md:max-w-[500px] mx-auto px-4 sm:px-0 leading-relaxed text-[#515E5B]/90">
              Plan, create, and build products with the most flexible Arweave
              toolkit.
            </p>
            <div className="flex mt-10 mb-8 items-center justify-center w-full  gap-2">
              <div
                className={`px-3 sm:px-4 md:px-5 w-full sm:w-[50%] md:w-[30%] lg:w-[20%] xl:w-[15%] bg-[#B0EC9C] flex items-center gap-2 justify-center f18 py-[12px] sm:py-[14px] md:py-[16px] rounded-full border-[1px] text-base sm:text-lg border-black cursor-pointer hover:scale-[1.02] transition-all duration-200 ${isLoading ? 'opacity-75 pointer-events-none' : ''}`}
                onClick={startChat}
              >
                <span className="whitespace-nowrap">
                  {isLoading ? 'Loading...' : 'Get started now'}
                </span>
                {!isLoading && (
                  <svg
                    className="ButtonBrand_icon__mayHb w-5 h-5 sm:w-6 sm:h-6"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M11.47 4.47a.75.75 0 0 1 1.06 0l7 7a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 1 1-1.06-1.06l5.72-5.72H5a.75.75 0 0 1 0-1.5h12.19l-5.72-5.72a.75.75 0 0 1 0-1.06Z"
                    ></path>
                  </svg>
                )}
                {isLoading && (
                  <svg
                    className="animate-spin w-5 h-5 sm:w-6 sm:h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
              </div>
            </div>
          </div>
          <div className="absolute top-[19%] -left-[1%] w-[150px] sm:w-[200px] md:w-[240px] lg:w-[290px] transition-all duration-300 hidden sm:block">
            <Image
              src={L1}
              alt="not showing"
              width={290}
              height={290}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
          <div className="absolute top-[27%] right-[1%] w-[130px] sm:w-[180px] md:w-[220px] lg:w-[260px] transition-all duration-300 hidden sm:block">
            <Image
              src={L2}
              alt="not showing"
              width={260}
              height={260}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
          <div className="absolute top-[58%] left-[1%] w-[160px] sm:w-[200px] md:w-[250px] lg:w-[300px] transition-all duration-300 hidden sm:block">
            <Image
              src={R1}
              alt="not showing"
              width={300}
              height={300}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
          <div className="absolute bottom-[0%] right-[6%] w-[110px] sm:w-[150px] md:w-[180px] lg:w-[210px] transition-all duration-300 hidden sm:block">
            <Image
              src={R2}
              alt="not showing"
              width={210}
              height={210}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

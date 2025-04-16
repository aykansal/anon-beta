"use client";

import React, { useState } from "react";
import { redirect } from "next/navigation";
import LocomotiveScroll from "locomotive-scroll";
import LandingNavbar from "./LandingNavbar";
import img1 from "../../../public/hero1.webp";
import img2 from "../../../public/hero2.webp";
import img3 from "../../../public/hero3.webp";
import img4 from "../../../public/hero4.webp";
import Image from "next/image";

export default function Home() {
  const locomotiveScroll = new LocomotiveScroll();
  const [prompt, setprompt] = useState("");
  const [loading, setLoading] = useState(false);

  const startChat = () => {
    redirect("/projects");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !event.shiftKey && prompt.length > 1) {
      event.preventDefault();
      setLoading(true);
      setTimeout(() => {
        startChat();
      }, 1200);
    }
  };

  return (
    <div className="bg-[#FFFFFA] h-fit relative w-full">
      <LandingNavbar />
      <div className="w-full h-[93vh] flex items-end justify-center relative ">
        <div className="w-[94%] pt-6 h-[87%] bg-[#F2F2E8] rounded-[20px] flex flex-col items-center justify-center relative">
          {/* Main heading */}
          <div className="w-full f19 text-[6.2rem] text-[#213130] leading-[6.8rem] text-center">
            <h1>Your content,</h1>
            <h1>everywhere</h1>
          </div>

          {/* Input container with blur and loader */}
          <div className="f18 w-full text-center text-[#515E5B] mt-10 relative">
            <p className="text-lg">
              Plan, create, and build products with the most flexible Arweave toolkit.
            </p>

            <div className="relative mt-10 mb-8 flex items-center justify-center w-full">
              {/* Blur area */}
              <div
                className={`flex items-center justify-center w-full gap-2 transition-all duration-300 ${
                  loading ? "blur-sm pointer-events-none" : ""
                }`}
              >
                {/* Input field */}
                <div className="w-[32%] shadow-xl shadow-black/10 px-5 bg-[#FFFFFA] duration-200 f18 py-[16px] rounded-full border-[1px] text-lg border-black">
                  <input
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setprompt(e.target.value)}
                    className="w-full h-full bg-transparent outline-none"
                    type="text"
                    placeholder="what you wanna vibe code..."
                  />
                </div>

                {/* Button */}
                <div className="px-5 w-[15%] bg-[#B0EC9C] flex items-center gap-2 justify-center f18 py-[16px] rounded-full border-[1px] text-lg border-black">
                  Get started now
                  <svg
                    className="ButtonBrand_icon__mayHb"
                    width="24"
                    height="24"
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

              {/* Loading overlay */}
              {loading && (
                <div className="absolute bg-white/60 backdrop-blur-md rounded-full px-6 py-3 flex items-center gap-3 shadow-lg border border-black">
                  <div className="w-5 h-5 border-2 border-t-transparent border-black rounded-full animate-spin" />
                  <span className="text-sm text-black font-semibold">
                    Starting your vibe...
                  </span>
                </div>
              )}
            </div>

            <p className="opacity-70">
              By entering your adderss, you agree to terms and services of ANON.
            </p>
          </div>

          {/* Decorative images */}
          <div className="absolute top-[19%] -left-[1%] w-[290px] ">
            <Image src={img1} alt="not showing" />
          </div>
          <div className="absolute top-[27%] right-[1%] w-[260px] ">
            <Image src={img2} alt="not showing" />
          </div>
          <div className="absolute top-[58%] left-[1%] w-[300px] ">
            <Image src={img3} alt="not showing" />
          </div>
          <div className="absolute bottom-[0%] right-[6%] w-[210px] ">
            <Image src={img4} alt="not showing" />
          </div>
        </div>
      </div>
    </div>
  );
}

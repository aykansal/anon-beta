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






      <div className="w-full flex h-[38vh] text-black items-center justify-center">
        <div className="w-[94%] h-[75%] gap-20 flex items-center px-20 border border-black rounded-3xl">
          <div className="text-[19px] f19 leading-[1.5rem]">
            <h1>connect your</h1>
            <h1>favourite accounts</h1>
          </div>
          <div className=" flex items-center gap-4">
            <div className="w-20 h-20 border flex items-center justify-center border-black rounded-xl">
              <svg
                className="ChannelsSection_linkLogo__toCwB"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M5.769 4.212C8.29 5.972 11.004 9.539 12 11.453c.996-1.914 3.709-5.482 6.231-7.241C20.051 2.942 23 1.96 23 5.086c0 .624-.385 5.244-.611 5.994-.785 2.608-3.647 3.273-6.192 2.87 4.449.704 5.58 3.035 3.136 5.366-4.642 4.426-6.672-1.111-7.192-2.53-.096-.26-.14-.382-.141-.278 0-.104-.045.018-.14.278-.52 1.419-2.55 6.956-7.193 2.53-2.445-2.331-1.313-4.662 3.136-5.366-2.545.403-5.407-.262-6.192-2.87C1.385 10.33 1 5.71 1 5.086c0-3.126 2.949-2.144 4.769-.874Z"
                ></path>
              </svg>
            </div>
            <div className="w-[75px] h-[75px] border flex items-center justify-center border-black rounded-xl">
              <svg
                className="ChannelsSection_linkLogo__toCwB"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M23 12.067C23 5.955 18.075 1 12 1S1 5.955 1 12.067C1 17.591 5.023 22.17 10.281 23v-7.734H7.488v-3.199h2.793V9.63c0-2.774 1.643-4.306 4.155-4.306 1.204 0 2.462.216 2.462.216v2.724h-1.387c-1.366 0-1.792.853-1.792 1.728v2.076h3.05l-.487 3.2h-2.563V23C18.977 22.17 23 17.591 23 12.067Z"
                ></path>
              </svg>
            </div>
            <div className="w-[75px] h-[75px] border flex items-center justify-center border-black rounded-xl">
              <svg
                className="ChannelsSection_linkLogo__toCwB"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M22 8.5c0 1.37-1.12 2.5-2.5 2.5S17 9.87 17 8.5c0 1.37-1.12 2.5-2.5 2.5S12 9.87 12 8.5c0 1.37-1.12 2.5-2.5 2.5S7 9.87 7 8.5C7 9.87 5.88 11 4.5 11S2 9.87 2 8.5l1.39-5.42S3.68 2 4.7 2h14.6c1.02 0 1.31 1.08 1.31 1.08L22 8.5Zm-1 3.7V20c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-7.8a3.96 3.96 0 0 0 4-.58c.69.55 1.56.88 2.5.88.95 0 1.82-.33 2.5-.88.69.55 1.56.88 2.5.88.95 0 1.82-.33 2.5-.88.68.55 1.56.88 2.5.88.53 0 1.04-.11 1.5-.3Zm-2 5.13c0-.2 0-.41-.05-.63l-.03-.16h-2.97v1.17h1.81c-.06.22-.14.44-.31.62-.33.33-.78.51-1.26.51-.5 0-.99-.21-1.35-.56-.69-.71-.69-1.86.02-2.58.69-.7 1.83-.7 2.55-.03l.14.13.84-.85-.16-.14c-.56-.52-1.3-.81-2.08-.81h-.01c-.81 0-1.57.31-2.14.87-.59.58-.92 1.34-.92 2.13 0 .8.31 1.54.88 2.09a3.2 3.2 0 0 0 2.22.91h.02c.8 0 1.51-.29 2.03-.8.47-.48.77-1.2.77-1.87Z"
                ></path>
              </svg>
            </div>
            <div className="w-[75px] h-[75px] border flex items-center justify-center border-black rounded-xl">
              <svg
                className="ChannelsSection_linkLogo__toCwB"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M20.387 3.653C19.34 2.565 17.847 2 16.153 2H7.847C4.339 2 2 4.339 2 7.847v8.266c0 1.734.565 3.226 1.694 4.314C4.782 21.476 6.234 22 7.887 22h8.226c1.734 0 3.185-.564 4.234-1.573C21.435 19.38 22 17.887 22 16.153V7.847c0-1.694-.564-3.145-1.613-4.194Zm-.161 12.5c0 1.25-.444 2.258-1.17 2.944-.725.685-1.733 1.048-2.943 1.048H7.887c-1.21 0-2.218-.363-2.943-1.048-.726-.726-1.09-1.734-1.09-2.984V7.847c0-1.21.364-2.218 1.09-2.944.685-.685 1.733-1.048 2.943-1.048h8.306c1.21 0 2.218.363 2.944 1.089.686.725 1.089 1.733 1.089 2.903v8.306Zm-1.694-9.476a1.17 1.17 0 1 1-2.339 0 1.17 1.17 0 0 1 2.339 0ZM6.838 11.96c0-2.863 2.34-5.162 5.162-5.162s5.161 2.34 5.161 5.162S14.863 17.12 12 17.12a5.146 5.146 0 0 1-5.162-5.161Zm1.855 0A3.321 3.321 0 0 0 12 15.266a3.321 3.321 0 0 0 3.306-3.306A3.321 3.321 0 0 0 12 8.653a3.321 3.321 0 0 0-3.307 3.307Z"
                ></path>
              </svg>
            </div>
            <div className="w-[75px] h-[75px] border flex items-center justify-center border-black rounded-xl">
              <svg
                className="ChannelsSection_linkLogo__toCwB"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M18.338 18.338H15.67v-4.177c0-.997-.018-2.278-1.387-2.278-1.39 0-1.602 1.085-1.602 2.206v4.25h-2.668v-8.59h2.561v1.173h.036c.356-.675 1.227-1.388 2.526-1.388 2.703 0 3.202 1.78 3.202 4.092v4.712ZM7.004 8.574a1.548 1.548 0 1 1 0-3.097 1.548 1.548 0 0 1 0 3.097ZM5.67 18.338h2.67v-8.59h-2.67v8.59ZM19.668 3H4.328C3.597 3 3 3.581 3 4.297v15.404C3 20.418 3.596 21 4.329 21h15.339c.734 0 1.332-.582 1.332-1.299V4.297C21 3.581 20.402 3 19.668 3Z"
                ></path>
              </svg>
            </div>
            <div className="w-[75px] h-[75px] border flex items-center justify-center border-black rounded-xl">
              <svg
                className="ChannelsSection_linkLogo__toCwB"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M16.68 17.768c2.955-.329 5.528-2.027 5.852-3.58.51-2.444.467-5.965.467-5.965 0-4.773-3.352-6.171-3.352-6.171-1.69-.725-4.592-1.029-7.608-1.052h-.074c-3.015.023-5.915.327-7.606 1.052 0 0-3.352 1.398-3.352 6.171l-.003.91c-.005.88-.01 1.856.017 2.875.122 4.667.918 9.267 5.544 10.41 2.133.526 3.964.636 5.439.56 2.675-.138 4.176-.89 4.176-.89l-.088-1.81s-1.911.562-4.058.494c-2.127-.068-4.372-.214-4.716-2.65a4.664 4.664 0 0 1-.048-.683s2.088.476 4.734.59c1.618.068 3.135-.09 4.676-.26Zm2.365-3.396V8.593c0-1.18-.322-2.12-.97-2.814-.668-.694-1.542-1.05-2.627-1.05-1.257 0-2.208.45-2.837 1.351L12 7.036l-.611-.956c-.63-.9-1.58-1.351-2.836-1.351-1.086 0-1.96.356-2.628 1.05-.648.695-.97 1.633-.97 2.814v5.779h2.454V8.763c0-1.182.534-1.782 1.6-1.782 1.18 0 1.771.711 1.771 2.12v3.07h2.44V9.1c0-1.409.591-2.12 1.77-2.12 1.067 0 1.6.6 1.6 1.782v5.609h2.455Z"
                ></path>
              </svg>
            </div>
            <div className="w-[75px] h-[75px] border flex items-center justify-center border-black rounded-xl">
              <svg
                className="ChannelsSection_linkLogo__toCwB"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M12 1C5.925 1 1 5.925 1 12c0 4.66 2.9 8.644 6.991 10.247-.096-.87-.183-2.21.039-3.16.2-.858 1.29-5.467 1.29-5.467s-.33-.659-.33-1.633c0-1.53.887-2.672 1.99-2.672.94 0 1.392.705 1.392 1.55 0 .944-.6 2.355-.91 3.662-.26 1.095.549 1.988 1.628 1.988 1.955 0 3.458-2.061 3.458-5.037 0-2.634-1.892-4.475-4.594-4.475-3.13 0-4.967 2.347-4.967 4.774 0 .945.364 1.959.818 2.51a.33.33 0 0 1 .077.315c-.084.348-.27 1.095-.306 1.248-.048.201-.16.244-.368.147-1.374-.60-2.233-2.648-2.233-4.262 0-3.47 2.521-6.656 7.268-6.656 3.816 0 6.782 2.719 6.782 6.353 0 3.791-2.39 6.842-5.708 6.842-1.115 0-2.163-.58-2.521-1.263 0 0-.552 2.1-.686 2.615-.248.955-.919 2.153-1.367 2.883 1.03.319 2.123.491 3.257.491 6.075 0 11-4.925 11-11S18.075 1 12 1Z"
                ></path>
              </svg>
            </div>
            <div className="w-[75px] h-[75px] border flex items-center justify-center border-black rounded-xl">
              <svg
                className="ChannelsSection_linkLogo__toCwB"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M11.628 1.256c-.72.033-1.37.106-1.987.222-2.53.481-4.495 1.715-5.805 3.648-.097.143-.179.272-.306.481-.062.1-.29.529-.364.685a11.365 11.365 0 0 0-.852 2.57c-.18.869-.272 1.683-.307 2.701a16.084 16.084 0 0 0 .24 3.23c.305 1.667.869 3.067 1.707 4.245 1.019 1.427 2.402 2.454 4.126 3.062 1.062.374 2.235.584 3.585.64.485.02 1.004.01 1.574-.028 2.455-.168 4.3-.903 5.84-2.325.889-.82 1.479-1.757 1.766-2.805a5.35 5.35 0 0 0 .173-.964 7.545 7.545 0 0 0 0-.907c-.112-1.177-.521-2.134-1.273-2.973-.16-.18-.519-.51-.714-.66a7.256 7.256 0 0 0-1.632-.938l-.134-.055-.014-.174c-.098-1.194-.442-2.172-1.039-2.946-.814-1.056-2.1-1.642-3.737-1.701-1.308-.048-2.457.254-3.386.89a4.61 4.61 0 0 0-.545.443 4.266 4.266 0 0 0-.548.611l-.05.07.282.178.802.508.552.349.03.019.102-.126c.557-.689 1.416-1.05 2.494-1.05.79 0 1.437.168 1.913.497.516.358.852.917 1.026 1.708.017.076.03.145.03.152 0 .01-.022.01-.093-.002-.822-.13-2.057-.171-2.983-.097-1.08.085-2.015.367-2.769.838a3.876 3.876 0 0 0-.973.862 3.13 3.13 0 0 0-.64 1.508c-.03.2-.03.698.001.902.145.98.671 1.774 1.554 2.35.852.554 2.043.839 3.22.77 1.845-.11 3.18-.885 3.986-2.314.31-.55.566-1.323.673-2.039a.785.785 0 0 1 .022-.115c.006-.009.046.009.135.063.267.161.472.313.69.516.591.547.909 1.189 1.007 2.029.022.182.018.598-.007.79-.12.94-.563 1.754-1.341 2.47-1.072.986-2.344 1.534-4.002 1.723-1.258.145-2.564.099-3.692-.128-2.92-.587-4.773-2.367-5.55-5.331-.419-1.589-.514-3.502-.266-5.282.35-2.516 1.365-4.386 2.99-5.513C8.19 3.785 9.478 3.35 11.035 3.2a11.997 11.997 0 0 1 2.878.072c2.112.315 3.742 1.204 4.854 2.649.511.664.939 1.505 1.227 2.41.032.101.063.183.07.183.015 0 1.925-.47 1.936-.477.016-.01-.17-.57-.292-.884-.928-2.375-2.584-4.097-4.853-5.047-1.136-.475-2.398-.747-3.905-.84a21.664 21.664 0 0 0-1.32-.01Zm2.362 11.049c.399.032.81.085 1.114.142l.12.021c.008 0-.008.182-.036.381-.098.718-.293 1.31-.579 1.754-.472.735-1.194 1.098-2.276 1.146-.84.037-1.607-.17-2.092-.567-.684-.559-.722-1.502-.086-2.117.188-.182.374-.304.655-.43.435-.194.985-.308 1.666-.346.28-.015 1.253-.006 1.514.016Z"
                ></path>
              </svg>
            </div>
            <div className="w-[75px] h-[75px] border flex items-center justify-center border-black rounded-xl">
              <svg
                className="ChannelsSection_linkLogo__toCwB"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M13.903 10.469 21.348 2h-1.764l-6.465 7.353L7.955 2H2l7.808 11.12L2 22h1.764l6.828-7.765L16.044 22H22l-8.097-11.531Zm-2.417 2.748-.791-1.107L4.4 3.3h2.71l5.08 7.11.791 1.107 6.604 9.242h-2.71l-5.389-7.542Z"
                ></path>
              </svg>
            </div>
            <div className="w-[75px] h-[75px] border flex items-center justify-center border-black rounded-xl">
              <svg
                className="ChannelsSection_linkLogo__toCwB"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M23.76 7.148s-.234-1.68-.954-2.42c-.912-.97-1.935-.974-2.404-1.031-3.359-.247-8.397-.247-8.397-.247h-.01s-5.038 0-8.397.247c-.469.057-1.491.061-2.404 1.032-.72.74-.954 2.42-.954 2.42S0 9.12 0 11.092v1.85c0 1.971.24 3.944.24 3.944s.234 1.68.954 2.42c.913.97 2.112.939 2.646 1.04 1.92.188 8.16.246 8.16.246s5.043-.008 8.402-.255c.469-.056 1.492-.06 2.404-1.032.72-.74.954-2.42.954-2.42s.24-1.972.24-3.944v-1.85c0-1.971-.24-3.944-.24-3.944ZM9.523 15.183V8.335l6.484 3.435-6.484 3.413Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

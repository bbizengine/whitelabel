"use client";

import BottomRect from "@/assets/BottomRect";
import Link from "next/link";
import React from "react";
import { IoPlay } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";
import AppPlayer from "../AppPlayer";

export default function Hero() {
  return (
    <div className="w-screen lg:h-screen relative bg-[url('/assets/bg.jpg')] bg-cover bg-center">
      <BottomRect className="absolute z-0 w-screen -bottom-1" />
      <div className="h-screen flex flex-col-reverse gap-10 md:gap-0 justify-center md:h-[60vh] lg:h-screen w-screen bg-black/60 md:grid md:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-3 px-2 text-white lg:px-20">
          <h1 className="text-xl font-bold lg:text-4xl ">
            Connecting Technology and Business for{" "}
            <span className="text-brand">Enterprise advancement</span>
          </h1>
          <h2 className="text-sm">
            Become a leading company that bridging technology and business to
            drive enterprise advancement by providing innovative and
            leading-edge solutions.
          </h2>
          <div className="w-full text-xl font-bold text-brand">
            <div className="h"></div>
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                1000,
                "WEB DEVELOPER",
                1000,
                "APPS DEVELOPER",
                1000,
                "SEO SERVICES",
                1000,
                "B-Biz Engine",
                1000,
              ]}
              speed={65}
              repeat={Infinity}
            />
          </div>

          <Link
            className="flex items-center gap-2 px-4 py-1 mt-2 font-bold rounded-full bg-brand"
            href={"/"}
          >
            Get Started <IoPlay />
          </Link>
        </div>
        <div className="relative flex items-center justify-center drop-shadow-md">
          <div className="z-10 flex flex-col items-center gap-3 p-1 m-2 overflow-hidden bg-white rounded-lg md:p-3 md:w-4/5 h-fit md:rounded-3xl drop-shadow-lg bottom-4">
            <AppPlayer />
          </div>
        </div>
      </div>
    </div>
  );
}

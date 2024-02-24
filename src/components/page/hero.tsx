"use client";

import BottomRect from "@/assets/BottomRect";
import Link from "next/link";
import React from "react";
import { IoPlay } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <div className="w-screen lg:h-screen relative bg-[url('/assets/bg.jpg')] bg-cover bg-center">
      <BottomRect className="w-screen absolute -bottom-1 z-0" />
      <div className="h-screen md:h-[60vh] lg:h-screen w-screen bg-black/60 grid md:grid-cols-2">
        <div className="flex flex-col px-2 lg:px-20 text-white gap-3 items-center justify-center">
          <h1 className="text-xl lg:text-4xl font-bold ">
            Connecting Technology and Business for{" "}
            <span className="text-brand">Enterprise advancement</span>
          </h1>
          <h2 className="text-sm">
            Become a leading company that bridging technology and business to
            drive enterprise advancement by providing innovative and
            leading-edge solutions.
          </h2>
          <div className=" w-full font-bold text-xl text-brand">
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
                "SERVER HOSTING",
                1000,
              ]}
              speed={65}
              repeat={Infinity}
            />
          </div>

          <Link
            className="bg-brand flex items-center font-bold gap-2 mt-2 px-4 py-1 rounded-full"
            href={"/"}
          >
            Get Started <IoPlay />
          </Link>
        </div>
        <div className="flex justify-center drop-shadow-md relative">
          <div className="w-3/4 h-full lg:w-1/2 md:h-1/2 rounded-3xl bg-white drop-shadow-lg z-10 absolute -bottom-4"></div>
        </div>
      </div>
    </div>
  );
}

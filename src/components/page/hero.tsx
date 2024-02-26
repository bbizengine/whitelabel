"use client";

import BottomRect from "@/assets/BottomRect";
import Link from "next/link";
import React from "react";
import { IoPlay } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  // const { TextArea } = Input;
  // const [message, setMessage] = useState("");
  // const phoneWaBbiz = "81233838383";
  return (
    <div className="w-screen lg:h-screen relative bg-[url('/assets/bg.jpg')] bg-cover bg-center">
      <BottomRect className="absolute z-0 w-screen -bottom-1" />
      <div className="h-screen md:h-[60vh] lg:h-screen w-screen bg-black/60 grid md:grid-cols-2">
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
                "SERVER HOSTING",
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
        <div className="relative flex justify-center drop-shadow-md">
          <div className="absolute z-10 flex flex-col items-center w-3/4 h-full gap-3 p-3 overflow-hidden bg-white lg:w-1/2 md:h-1/2 rounded-3xl drop-shadow-lg -bottom-4">
            {/* <h2 className="text-xl font-bold text-center text-brand-dark">
              Contact us now
            </h2>
            <TextArea
              rows={7}
              variant="filled"
              className="w-full p-1 text-sm rounded-lg active:border-brand-dark bg-brand-bone"
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                setMessage(e.target.value);
              }}
            />
            <Link
              href={`https://api.whatsapp.com/send?phone=62${phoneWaBbiz}&text=${message}`}
              className="flex items-center gap-3 px-4 py-1 text-white rounded-full bg-brand w-fit"
            >
              Send Message
              <IoLogoWhatsapp />
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

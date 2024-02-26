import Link from "next/link";
import React from "react";

export default function Body() {
  const phoneWaBbiz = "81233838383";
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden group min-h-52">
      <div className="bg-center bg-cover absolute group-hover:scale-110 bg-[url('/assets/bg3.jpg')] duration-1000 h-full w-full"></div>
      <div className="absolute w-full h-full bg-center bg-cover group-hover:scale-110 bg-black/70"></div>
      <div className="z-10 flex flex-col items-center justify-center w-full h-full gap-10">
        <h2 className="font-black text-center text-white md:text-3xl">
          Ready to start your project with us ?
        </h2>
        <Link
          href={`https://api.whatsapp.com/send?phone=62${phoneWaBbiz}&text=Hello B-Biz Engine`}
          className="px-5 py-1 font-black duration-500 rounded-full hover:scale-110 hover:bg-brand-light bg-brand w-fit"
          target="_blank"
        >
          Contact Us Now
        </Link>
      </div>
    </div>
  );
}

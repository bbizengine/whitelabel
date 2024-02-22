import BottomRect from "@/assets/BottomRect";
import React from "react";

export default function Hero() {
  return (
    <div className="w-screen h-screen relative overflow-hidden bg-[url('/assets/bg.jpg')] bg-cover bg-center">
      <BottomRect className="w-screen absolute bottom-0 z-0" />
      <div className="h-screen w-screen bg-black/60 grid grid-cols-2">
        <div className=""></div>
        <div className="flex justify-center drop-shadow-md relative">
          <div className="w-1/2 h-1/2 rounded-3xl bg-white drop-shadow-lg z-10 absolute bottom-0"></div>
        </div>
      </div>
    </div>
  );
}

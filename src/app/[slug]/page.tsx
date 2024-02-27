"use client";

import BottomRect from "@/assets/BottomRect";
import CardLink from "@/components/card/CardLink";
import { SERVICE } from "@/constants/SERVICE";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Dynamic() {
  const path = usePathname();
  const pathNow = path.split("/")[1];
  const [i, setI] = useState(0);
  useEffect(() => {
    if (pathNow === "web") {
      setI(0);
    } else if (pathNow === "apps") {
      setI(1);
    } else if (pathNow === "seo") {
      setI(2);
    } else {
      setI(3);
    }
  }, [pathNow]);
  const DATA = SERVICE[i];
  return (
    <div className="min-h-screen relative overflow-hidden  bg-[url('/assets/bg2.jpg')]  ">
      <div className="relative w-screen bg-center bg-cover">
        <BottomRect className="absolute z-10 w-screen -bottom-10 md:-bottom-1" />
        <div className="pt-20 md:h-[60vh] lg:h-screen w-screen grid md:grid-cols-2">
          <div className="flex flex-col items-center justify-center gap-3 px-2 text-black lg:px-20">
            <h1 className="text-xl font-bold lg:text-4xl ">{DATA.name}</h1>
            <h2 className="text-sm">{DATA.about}</h2>
          </div>
          <div className="relative aspect-square md:bg-gradient-to-r from-white/0 via-white to-white">
            <div className="bg-white">
              <Image
                src={DATA.src}
                alt={DATA.name}
                fill
                className="object-contain object-center "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-wrap justify-center w-screen gap-20 py-12 text-center group/isDiv md:px-20 bg-gradient-to-b from-gray-100 via-white to-gray-100">
        {Object.values(DATA.projects).map((projects, i) => (
          <div key={i} className="grid gap-6 place-items-center">
            <div className="w-fit">
              <label className="px-4 py-1 text-2xl font-bold text-center duration-500 rounded-full.name w-fit group-hover/isDiv:bg-brand/0 text-brand-dark">
                {projects.name}
              </label>
              <div className="h-[4px] w-0 duration-500 group-hover/isDiv:w-full bg-brand rounded-full"></div>
            </div>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 md:flex-row">
              {projects.project.map((data: any, i: number) => (
                <CardLink
                  className="duration-500 bg-white hover:scale-110 hover:rotate-3 group drop-shadow-lg"
                  name={data.name}
                  key={i}
                  link={data.link}
                  img={data.img}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

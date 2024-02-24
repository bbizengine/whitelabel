"use client";

import BottomRect from "@/assets/BottomRect";
import CardLink from "@/components/card/CardLink";
import { SERVICE } from "@/constants/SERVICE";
import Image from "next/image";
import React from "react";

export default function Web() {
  const DATA = SERVICE[0];
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="w-screen relative bg-gradient-to-b from-gray-200 via-white to-white  bg-cover bg-center">
        <BottomRect className="w-screen absolute -bottom-10 md:-bottom-1 z-0" />
        <div className=" md:h-[60vh] lg:h-screen w-screen flex flex-col-reverse md:flex-row ">
          <div className="flex flex-col px-2 lg:px-20 text-black gap-3 items-center justify-center">
            <h1 className="text-xl lg:text-4xl font-bold ">{DATA.name}</h1>
            <h2 className="text-sm">{DATA.about}</h2>
          </div>
          <div className="relative aspect-square">
            <Image
              src={DATA.src}
              alt={DATA.name}
              fill
              className="object-contain object-center "
            />
          </div>
        </div>
      </div>
      <div className="px-20 bg-gradient-to-b from-gray-100 via-white to-gray-100 flex flex-col gap-10 py-12">
        {Object.values(DATA.projects).map((projects, i) => (
          <div key={i} className="grid gap-6">
            <label className="font-bold text-center text-2xl text-brand-dark">
              {projects.name}
            </label>
            <div className="flex gap-10">
              {projects.project.map((data: any, i: number) => (
                <CardLink
                  className="hover:scale-110 hover:rotate-3 duration-500 drop-shadow-lg bg-white"
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

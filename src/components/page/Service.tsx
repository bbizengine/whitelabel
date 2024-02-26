import React from "react";
import CardOne from "../card/CardOne";
import { SERVICE } from "@/constants/SERVICE";
import Link from "next/link";

export default function Service() {
  return (
    <div className="flex flex-col gap-5 py-12 mt-20 group/isDiv md:px-20 bg-gradient-to-b from-gray-100 via-white to-gray-100">
      <div className="flex flex-col items-center justify-center ">
        <div className="w-fit">
          <label className="px-4 py-1 text-2xl font-bold text-center duration-500 rounded-full bg-brand w-fit group-hover/isDiv:bg-brand/0 text-brand-dark">
            Our Service
          </label>
          <div className="h-[4px] w-0 duration-500 group-hover/isDiv:w-full bg-brand rounded-full"></div>
        </div>
      </div>
      <div className="grid items-center justify-center gap-10 mt-6 md:grid-flow-col ">
        {SERVICE.map((data, i) => (
          <Link href={data.link} key={i} className="flex justify-center h-full">
            <CardOne
              className={`${
                i % 2 === 0
                  ? "bg-white rounded-xl drop-shadow-md "
                  : "hover:bg-gray-100 hover:drop-shadow-md rounded-lg"
              } p-3 hover:scale-110 duration-500`}
              name={data.name}
              src={data.src}
              about={data.about}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

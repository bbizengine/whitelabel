import React from "react";
import CardOne from "../card/CardOne";
import { SERVICE } from "@/constants/SERVICE";
import Link from "next/link";

export default function Body() {
  return (
    <div className="bg-gradient-to-b from-gray-100 via-white to-gray-100 flex flex-col gap-3 py-12">
      <label className="font-bold text-center text-2xl text-brand-dark">
        Our Service
      </label>
      {/* <div className="flex justify-center"> */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-10 items-center">
        {SERVICE.map((data, i) => (
          <Link href={data.link} key={i} className="flex justify-center">
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
        {/* </div> */}
      </div>
    </div>
  );
}

import Image from "next/image";
import React from "react";

interface IProps {
  name: string;
  src: string;
  about: string;
  className?: string;
}

export default function CardOne(props: IProps) {
  const { name, src, about, className } = props;
  return (
    <div
      className={`${className} w-64 pb-11 overflow-hidden gap-4 flex flex-col items-center group`}
    >
      <div className="relative w-full p-5 h-32 aspect-square ">
        <Image
          src={src}
          alt={name}
          fill
          className="object-contain object-center "
        />
      </div>
      <h2 className="w-full font-bold group-hover:text-brand-dark duration-500">
        {name}
      </h2>
      <p className="text-xs">{about}</p>
      <span className="px-3 bg-brand/50 rounded-full duration-500 absolute -bottom-10 group-hover:bottom-2">
        See Detail
      </span>
    </div>
  );
}

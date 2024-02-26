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
      className={`${className} w-64 pb-11 h-full overflow-hidden gap-4 flex flex-col items-center group/isCard`}
    >
      <div className="relative w-full h-32 p-5 aspect-square">
        <Image
          src={src}
          alt={name}
          fill
          className="object-contain object-center "
        />
      </div>
      <h2 className="w-full font-bold duration-500 group-hover/isCard:text-brand-dark">
        {name}
      </h2>
      <p className="text-xs">{about}</p>
      <span className="absolute px-3 duration-500 rounded-full bg-brand/50 -bottom-10 group-hover/isCard:bottom-2">
        See Detail
      </span>
    </div>
  );
}

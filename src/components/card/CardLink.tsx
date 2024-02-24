import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProps {
  name: string;
  link: string;
  img: any;
  about?: string;
  className?: string;
}

export default function CardLink(props: IProps) {
  const { name, img, link, about, className } = props;

  return (
    <Link
      href={link}
      target="_blank"
      className={`${className} w-64 h-full overflow-hidden drop-shadow-lg rounded-xl flex flex-col items-center`}
    >
      <div className="relative w-full p-5 h-32 aspect-square ">
        <Image
          src={img}
          alt={name}
          fill
          className="object-contain rounded-lg object-center "
        />
      </div>
      <div className="p-2">
        <h2 className="w-full">{name}</h2>
        <p className="text-sm">{about}</p>
      </div>
    </Link>
  );
}

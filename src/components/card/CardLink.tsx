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
      className={`${className} bg-white pt-3 px-3 pb-1 relative w-64 h-full overflow-hidden drop-shadow-lg rounded-xl flex flex-col items-center`}
    >
      <div className="relative w-full h-32 overflow-hidden duration-500 rounded-xl">
        <Image
          src={img}
          alt={name}
          fill
          className="object-cover object-center "
        />
      </div>
      <div className="p-2">
        <h2 className="w-full font-bold">{name}</h2>
        <p className="text-sm">{about}</p>
      </div>
      <div className="h-[3px] w-20 bg-brand rounded-full"></div>
    </Link>
  );
}

import React from "react";
import Link from "next/link";
import BbizLogo from "@/../public/bbiz.png";
import AppImage from "@/components/utility/AppImage";

interface IProps {
  className: string;
}

export default function BbizIcon(props: IProps) {
  const { className } = props;
  return (
    <Link
      href={"/"}
      className="flex justify-center h-20 overflow-hidden gap-3 font-montserrat items-center"
    >
      <AppImage
        src={BbizLogo}
        className="w-7 md:w-10 my-1 duration-400"
        alt="olmat-logo"
      />
      <h1 className={`${className} font-black duration-400`}>B-Biz Engine</h1>
    </Link>
  );
}

import Image from "next/image";
import Link from "next/link";
import React from "react";
import favicon from "@/assets/iconFooter.png";

export default function Footer() {
  return (
    <div className="bg-white drop-shadow-lg">
      <div className="flex flex-col gap-4 p-4 text-xs md:text-sm md:text-start">
        <p className="text-center text-black lg:text-15px">
          ©&nbsp;Copyright 2023&nbsp;
          <Link
            className="transition-colors duration-200 ease-in-out text-brand-dark hover:text-brand"
            href="https://bbiz.co.id"
          >
            B-Biz Whitelabel
          </Link>
          &nbsp; All rights reserved
        </p>
        <div className="flex justify-center text-brand-dark">
          <Link
            href={"https://bbizengine.com/"}
            className="flex items-center gap-3"
            target="_blank"
          >
            <p>Powered by</p>
            <div className="relative w-32 h-6 overflow-hidden duration-500 ">
              <Image
                src={favicon}
                alt="bbiz engine"
                fill
                className="object-contain object-center "
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

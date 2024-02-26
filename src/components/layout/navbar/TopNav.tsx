"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import bbizIcon from "@/../public/bbizwl.svg";
import bbizWhite from "@/../public/bbizwlwhite.svg";
import Link from "next/link";

export default function TopNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrolled(currentScrollPos > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`${
        isScrolled
          ? "bg-white drop-shadow-xl justify-center md:justify-start"
          : "bg-white/0 justify-center duration-500 "
      } fixed h-14 flex items-center z-50 gap-2 w-screen px-10 md:px-20 duration-500`}
    >
      <div className="relative grid items-center justify-center w-full md:w-64 aspect-video ">
        <Link href={"/"}>
          {isScrolled ? (
            <Image src={bbizIcon} alt="bbiz logo" fill />
          ) : (
            <Image src={bbizWhite} alt="bbiz logo" fill />
          )}
        </Link>
      </div>
    </div>
  );
}

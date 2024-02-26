import React from "react";

export default function AppPlayer() {
  return (
    <div className="relative grid items-start overflow-hidden bg-black rounded-xl xl:pt-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="z-10 object-cover object-center w-full max-h-screen"
      >
        <source
          src={`https://magnercare-dev.s3.ap-southeast-1.amazonaws.com/videos/bbiz.mp4`}
          type="video/mp4"
        />
      </video>
    </div>
  );
}

import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <Image
      alt="headhsot"
      src="/headshot.svg"
      width={200}
      height={200}
      quality={100}
      priority={true}
    />
  );
};

export default Avatar;

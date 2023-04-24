import React from "react";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="w-20  fixed top-1/2 -translate-y-1/2 right-8 bg-white shadow-2xl rounded-md">
      <div className="flex flex-col items-center justify-center py-2 gap-2">
        <Image
          src={"/images/profile.svg"}
          alt={"profile"}
          width={50}
          height={50}
          className="p-1 hover:fill-white fill-[#6C00FF] bg-white hover:bg-[#6C00FF] rounded-full transition-[box-shadow] hover:dark_box_shadow duration-300"
        />
        <Image
          src={"/images/profile.svg"}
          alt={"profile"}
          width={50}
          height={50}
        />
        <Image
          src={"/images/profile.svg"}
          alt={"profile"}
          width={50}
          height={50}
        />
        <Image
          src={"/images/profile.svg"}
          alt={"profile"}
          width={50}
          height={50}
        />
        <Image
          src={"/images/profile.svg"}
          alt={"profile"}
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default NavBar;

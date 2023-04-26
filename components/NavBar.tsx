import React from "react";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="w-20  fixed top-1/2 -translate-y-1/2 right-8 bg-white shadow-2xl rounded-md">
      <div className="flex flex-col items-center justify-center py-2 gap-2">
        <div className="hover:bg-[#6C00FF] group flex items-center m-1 justify-center h-12 w-12 bg-white rounded-full transition-all hover:dark_box_shadow duration-300">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="80%"
            height="80%"
            viewBox="0 0 24 24"
            className="fill-[#6C00FF] group-hover:fill-[#fff] transition-all duration-300"
          >
            <title>face</title>
            <path d="M12 20.016q3.281 0 5.648-2.367t2.367-5.648q0-1.031-0.328-2.25-1.031 0.234-2.297 0.234-2.156 0-4.523-1.242t-3.586-2.977q-1.547 3.75-5.25 5.391-0.047 0.281-0.047 0.844 0 3.281 2.367 5.648t5.648 2.367zM12 2.016q4.125 0 7.055 2.93t2.93 7.055-2.93 7.055-7.055 2.93-7.055-2.93-2.93-7.055 2.93-7.055 7.055-2.93zM15 11.766q0.516 0 0.891 0.352t0.375 0.867-0.375 0.891-0.891 0.375-0.891-0.375-0.375-0.891 0.375-0.867 0.891-0.352zM9 11.766q0.516 0 0.891 0.352t0.375 0.867-0.375 0.891-0.891 0.375-0.891-0.375-0.375-0.891 0.375-0.867 0.891-0.352z"></path>
          </svg>
        </div>

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

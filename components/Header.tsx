import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  function removeGif() {
    setTimeout(() => {
      setIsHovered(false);
    }, 500);
  }

  function addGif() {
    setIsHovered(true);
  }

  return (
    <div className="w-full flex justify-between absolute md:fixed z-50">
      <div className="p-2 ">
        <Image
          src={isHovered ? "/images/logo.webp" : "/images/logo.svg"}
          alt={"logo"}
          width={60}
          height={60}
          priority={true}
          onMouseOver={addGif}
          onMouseLeave={removeGif}
          className="cursor-pointer"
        />
      </div>
      <div className="h-12 bg-primary md:block hidden w-3/5 clip-bottom-left animate-slideSize  hover:pause_animation " />
    </div>
  );
};

export default Header;

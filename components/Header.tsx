import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  function removeGif() {
    setTimeout(() => {
      setIsHovered(false);
    }, 500);
  }

  return (
    <div className="w-full flex justify-between fixed">
      <div className="p-2">
        <Image
          src={isHovered ? "/images/logo.webp" : "/images/logo.svg"}
          alt={"logo"}
          width={60}
          height={60}
          onMouseOver={() => setIsHovered(true)}
          onMouseLeave={removeGif}
          className="cursor-pointer"
        />
      </div>
      <div className="h-12 bg-[#6C00FF] md:block hidden w-3/5 clip-bottom-left" />
    </div>
  );
};

export default Header;

import useWindowSize from "@/hooks/useWindowSize";
import React, { useState, useEffect } from "react";
import MobileNavBar from "./MobileNavBar";
import DeskTopNavBar from "./DesktopNavBar";

interface NavBarInterface {
  setSection: Function;
  currentSection: string;
}

const NavBar = ({ setSection, currentSection }: NavBarInterface) => {
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState<boolean>();

  useEffect(() => {
    console.log(isMobile, width, typeof isMobile === "boolean");
    if (width <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  return (
    <div className="fixed z-50">
      {typeof isMobile === "boolean" ? (
        isMobile ? (
          <MobileNavBar
            setSection={setSection}
            currentSection={currentSection}
          />
        ) : (
          <DeskTopNavBar
            setSection={setSection}
            currentSection={currentSection}
          />
        )
      ) : (
        <></>
      )}
    </div>
  );
};

export default NavBar;

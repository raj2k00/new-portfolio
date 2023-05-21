import useWindowSize from "@/hooks/useWindowSize";
import React from "react";
import MobileNavBar from "./MobileNavBar";
import DeskTopNavBar from "./DesktopNavBar";

interface NavBarInterface {
  setSection: Function;
  currentSection: string;
}

const NavBar = ({ setSection, currentSection }: NavBarInterface) => {
  const { width } = useWindowSize();

  return (
    <div className="fixed z-50">
      {width >= 768 ? (
        <DeskTopNavBar
          setSection={setSection}
          currentSection={currentSection}
        />
      ) : (
        <MobileNavBar setSection={setSection} currentSection={currentSection} />
      )}
    </div>
  );
};

export default NavBar;

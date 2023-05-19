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
    <>
      {width >= 768 ? (
        <DeskTopNavBar
          setSection={setSection}
          currentSection={currentSection}
        />
      ) : (
        <MobileNavBar setSection={setSection} currentSection={currentSection} />
      )}
    </>
  );
};

export default NavBar;

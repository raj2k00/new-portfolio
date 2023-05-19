import React from "react";

interface NavBarInterface {
  setSection: Function;
  currentSection: string;
}

const MobileNavBar = ({ setSection, currentSection }: NavBarInterface) => {
  return (
    <div className="w-fit py-4 px-3 fixed top-10 -translate-y-1/2 right-8 bg-white dark_box_shadow  rounded-full group">
      <div className="space-y-[0.5rem] ">
        <div className="group-hover:opacity-0 w-8 rounded-sm h-0.5 bg-primary"></div>
        <div className="group-hover:before:w-8 group-hover:before:block group-hover:before:rounded-sm group-hover:before:h-0.5 group-hover:before:bg-primary group-hover:after:-rotate-45 group-hover:after:-translate-y-[2px] group-hover:after:w-8 group-hover:after:block group-hover:after:rounded-sm group-hover:after:h-0.5 group-hover:after:bg-primary group-hover:before:rotate-45 w-8 rounded-sm h-0.5 bg-primary group-hover:bg-[#fff]"></div>
        <div className="group-hover:opacity-0 w-8 rounded-sm h-0.5 bg-primary"></div>
      </div>
    </div>
  );
};

export default MobileNavBar;

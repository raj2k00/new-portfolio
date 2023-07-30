import { useState } from "react";

interface NavBarInterface {
  setSection: Function;
  currentSection: string;
}

const MobileNavBar = ({ setSection, currentSection }: NavBarInterface) => {
  const [isNavClicked, setIsNavClicked] = useState<boolean>(false);

  function handleClick() {
    setIsNavClicked((prevValue) => !prevValue);
  }

  return (
    <>
      <div
        className="w-fit py-4 px-3 fixed top-10 -translate-y-1/2 right-8 z-[80] bg-[#fff] dark_box_shadow  rounded-full group"
        onClick={handleClick}
      >
        <div className="space-y-[0.5rem] ">
          <div
            className={`${
              isNavClicked ? "opacity-0" : ""
            } w-8 rounded-sm h-0.5 bg-primary `}
          ></div>
          <div
            className={` ${
              isNavClicked
                ? "before:w-8 before:block before:rounded-sm before:h-0.5 before:bg-primary after:-rotate-45 after:-translate-y-[2px] after:w-8 after:block after:rounded-sm after:h-0.5 after:bg-primary before:rotate-45 !bg-[#fff] "
                : ""
            }  w-8 rounded-sm h-0.5 bg-primary `}
          ></div>
          <div
            className={`${
              isNavClicked ? "opacity-0" : ""
            } w-8 rounded-sm h-0.5 bg-primary`}
          ></div>
        </div>
      </div>
      {isNavClicked ? (
        <div className="fixed top-0 left-0 z-50 flex h-full w-full transform flex-row items-center justify-center transition">
          <div
            className={`fixed top-0 left-0 z-0 flex h-full w-full flex-row items-center justify-center ${
              isNavClicked ? "bg-[#fff] " : "bg-transparent"
            } `}
          >
            {isNavClicked ? (
              <div className="flex items-start flex-col">
                <div
                  className="flex gap-3 justify-center items-center"
                  onClick={() => {
                    handleClick();
                    setSection("hero");
                  }}
                >
                  <div
                    className={` ${
                      currentSection === "hero" && "bg-primary dark_box_shadow"
                    } hover:bg-primary group flex items-center m-1 justify-center h-10 w-10 bg-white rounded-full transition-all hover:dark_box_shadow duration-300`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="70%"
                      height="70%"
                      className={` ${
                        currentSection === "hero" && "!fill-[#fff] "
                      } fill-primary group-hover:fill-[#fff] transition-all duration-300`}
                      viewBox="0 0 16 16"
                      id="person"
                    >
                      <path d="M11.5,8 C12.3284271,8 13,8.67157288 13,9.5 L13,10 C13,11.9714437 11.14049,14 8,14 C4.85950997,14 3,11.9714437 3,10 L3,9.5 C3,8.67157288 3.67157288,8 4.5,8 L11.5,8 Z M8,1.5 C9.51878306,1.5 10.75,2.73121694 10.75,4.25 C10.75,5.76878306 9.51878306,7 8,7 C6.48121694,7 5.25,5.76878306 5.25,4.25 C5.25,2.73121694 6.48121694,1.5 8,1.5 Z"></path>
                    </svg>
                  </div>
                  <div
                    className={`text-xl  py-1 px-5 -skew-x-[20deg] ${
                      currentSection === "hero"
                        ? "bg-primary text-[#fff] "
                        : "bg-[#fff] text-primary"
                    } `}
                  >
                    <span className="block skew-x-[20deg]"> Home</span>
                  </div>
                </div>

                <div
                  className="flex gap-3 justify-center items-center"
                  onClick={() => {
                    handleClick();
                    setSection("about");
                  }}
                >
                  <div
                    className={` ${
                      currentSection === "about" && "bg-primary dark_box_shadow"
                    } hover:bg-primary group flex items-center m-1 justify-center h-10 w-10 bg-white rounded-full transition-all hover:dark_box_shadow duration-300`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      id="target"
                      width="70%"
                      height="70%"
                      className="transition-all duration-300"
                    >
                      <rect width="256" height="256" fill="none"></rect>
                      <line
                        x1="128"
                        x2="224"
                        y1="128"
                        y2="32"
                        fill="none"
                        className={` ${
                          currentSection === "about" && "!stroke-[#fff]"
                        } stroke-primary group-hover:stroke-[#fff] transition-all duration-300`}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="18"
                      ></line>
                      <path
                        fill="none"
                        className={` ${
                          currentSection === "about" && "!stroke-[#fff]"
                        } stroke-primary group-hover:stroke-[#fff] transition-all duration-300`}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="18"
                        d="M195.88225 60.11775a95.90539 95.90539 0 1 0 18.76606 26.49271M161.94113 94.05887a47.99886 47.99886 0 1 0 13.98107 31.20092"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className={`text-xl  py-1 px-5 -skew-x-[20deg] ${
                      currentSection === "about"
                        ? "bg-primary text-[#fff] "
                        : "bg-[#fff] text-primary"
                    } `}
                  >
                    <span className="block skew-x-[20deg]"> About</span>
                  </div>
                </div>

                <div
                  className="flex gap-3 justify-center items-center"
                  onClick={() => {
                    handleClick();
                    setSection("skills");
                  }}
                >
                  <div
                    className={` ${
                      currentSection === "skills" &&
                      "bg-primary dark_box_shadow"
                    } hover:bg-primary group flex items-center m-1 justify-center h-10 w-10 bg-white rounded-full transition-all hover:dark_box_shadow duration-300`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="13"
                      className={` ${
                        currentSection === "skills" && "!fill-[#fff] "
                      } fill-primary group-hover:fill-[#fff] transition-all duration-300 scale-110`}
                      id="code"
                    >
                      <path d="M5.204 3.419a.997.997 0 0 0 0-1.401l-.013-.013a.975.975 0 0 0-1.388 0L.288 5.553a.998.998 0 0 0 0 1.402l3.515 3.548a.975.975 0 0 0 1.388 0l.013-.013a.997.997 0 0 0 0-1.401L3.09 6.955a.998.998 0 0 1 0-1.402l2.114-2.134zm13.508 2.134-3.515-3.548a.975.975 0 0 0-1.388 0l-.013.013a.997.997 0 0 0 0 1.401l2.115 2.134a.998.998 0 0 1 0 1.402l-2.115 2.134a.997.997 0 0 0 0 1.401l.013.013a.975.975 0 0 0 1.388 0l3.515-3.548a.998.998 0 0 0 0-1.402zm-5.903-4.145-5.062 10.83c-.164.341-.452.762-.823.762h-.02c-.721 0-1.192-.98-.873-1.641L11.064.631c.164-.34.772-.606.772-.606V0c.982 0 1.292.747.973 1.408z"></path>
                    </svg>
                  </div>
                  <div
                    className={`text-xl  py-1 px-5 -skew-x-[20deg] ${
                      currentSection === "skills"
                        ? "bg-primary text-[#fff] "
                        : "bg-[#fff] text-primary"
                    } `}
                  >
                    <span className="block skew-x-[20deg]"> Skills</span>
                  </div>
                </div>

                <div
                  className="flex gap-3 justify-center items-center"
                  onClick={() => {
                    handleClick();
                    setSection("projects");
                  }}
                >
                  <div
                    className={` ${
                      currentSection === "projects" && "bg-primary dark_box_shadow"
                    } hover:bg-primary group flex items-center m-1 justify-center h-10 w-10 bg-white rounded-full transition-all hover:dark_box_shadow duration-300`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      width="70%"
                      height="70%"
                      id="award"
                      className={` ${
                        currentSection === "projects" && "!fill-[#fff] "
                      } fill-primary group-hover:fill-[#fff] transition-all duration-300`}
                    >
                      <path d="M8,22.23V30a1,1,0,0,0,1.39.92L16,28.09l6.61,2.83A1,1,0,0,0,23,31a1,1,0,0,0,.55-.17A1,1,0,0,0,24,30V22.23a12.94,12.94,0,0,1-16,0Z"></path>
                      <path d="M16,23A11,11,0,1,0,5,12,11,11,0,0,0,16,23ZM16,5a7,7,0,1,1-7,7A7,7,0,0,1,16,5Z"></path>
                      <circle cx="16" cy="12" r="5"></circle>
                    </svg>
                  </div>

                  <div
                    className={`text-xl  py-1 px-5 -skew-x-[20deg] ${
                      currentSection === "projects"
                        ? "bg-primary text-[#fff] "
                        : "bg-[#fff] text-primary"
                    } `}
                  >
                    <span className="block skew-x-[20deg]"> Projects</span>
                  </div>
                </div>

                <div
                  className="flex gap-3 justify-center items-center"
                  onClick={() => {
                    handleClick();
                    setSection("footer");
                  }}
                >
                  <div
                    className={` ${
                      currentSection === "footer" &&
                      "bg-primary dark_box_shadow"
                    } hover:bg-primary group flex items-center m-1 justify-center h-10 w-10 bg-white rounded-full transition-all hover:dark_box_shadow duration-300`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      className={` ${
                        currentSection === "footer" && "!fill-[#fff] "
                      } fill-primary group-hover:fill-[#fff] transition-all duration-300 scale-110`}
                      id="message"
                    >
                      <path d="M5.1 22.1c-.5 0-.9-.1-1.4-.2-.3-.1-.6-.3-.8-.5l-.1-.1c-.1-.1-.2-.3-.2-.4 0-.2.1-.3.3-.4.8-.4 1.5-1.1 1.9-1.9.1-.1.2-.2.2-.3C2.2 16.6.5 13.9.5 11 .5 6 5.7 1.8 12 1.8S23.5 6 23.5 11c0 5-5.2 9.2-11.5 9.2-.6 0-1.3 0-1.9-.1-1.5 1.3-3.3 2-5 2z"></path>
                    </svg>
                  </div>
                  <div
                    className={`text-xl  py-1 px-5 -skew-x-[20deg] ${
                      currentSection === "footer"
                        ? "bg-primary text-[#fff] "
                        : "bg-[#fff] text-primary"
                    } `}
                  >
                    <span className="block skew-x-[20deg]"> Contact me</span>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default MobileNavBar;

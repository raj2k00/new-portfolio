import { Code } from "./icons/Icon";

const Skills = () => {
  return (
    <div className={`flex relative items-center justify-center h-screen`}>
      <div className="-mt-16">
        <div className="text-4xl pb-4 text-center leading-snug">Skills</div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center justify-center gap-3">
            <div className=" flex items-center justify-center">
              <Code width={"40"} height={"40"} />
            </div>
            <div className="">
              <div className="text-2xl font-semibold">Languages</div>
              <div className="text-xl">Javascript, C++, Python</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className=" flex items-center justify-center">
              <Code width={"40"} height={"40"} />
            </div>
            <div className="">
              <div className="text-2xl font-semibold">Languages</div>
              <div className="text-xl">Javascript, C++, Python</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className=" flex items-center justify-center">
              <Code width={"40"} height={"40"} />
            </div>
            <div className="">
              <div className="text-2xl font-semibold">Languages</div>
              <div className="text-xl">Javascript, C++, Python</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className=" flex items-center justify-center">
              <Code width={"40"} height={"40"} />
            </div>
            <div className="">
              <div className="text-2xl font-semibold">Languages</div>
              <div className="text-xl">Javascript, C++, Python</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

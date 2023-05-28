import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <section
      className={`flex relative items-center justify-center h-fit md:h-screen snap-start`}
    >
      <div className="absolute rounded-tr-md rounded-br-md  md:hidden block h-2 left-0 w-10/12 bg-primary top-0"></div>
      <div className="md:-mt-14 mt-12">
        <div className="text-2xl md:text-4xl pb-4 text-center leading-snug">
          Projects
        </div>
        <div className="flex gap-4 md:gap-8 flex-wrap my-12 mt-12 md:mt-20 items-center justify-center">
          <ProjectItem
            projectImage={"/images/beach.jpg"}
            languageImage={"/images/node-js.svg"}
            projectName={"Cliffhanger"}
          />
          <ProjectItem
            projectImage={"/images/beach.jpg"}
            languageImage={"/images/node-js.svg"}
            projectName={"Cliffhanger"}
          />
          <ProjectItem
            projectImage={"/images/beach.jpg"}
            languageImage={"/images/node-js.svg"}
            projectName={"Cliffhanger"}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;

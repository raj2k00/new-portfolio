import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <section
      className={`flex relative items-center justify-center h-screen snap-start`}
    >
      <div className="-mt-14">
        <div className="text-4xl pb-4 text-center leading-snug">Projects</div>
        <div className="flex gap-8 flex-wrap my-12 mt-20">
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

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
            projectImage={
              "https://res.cloudinary.com/dtv8z6zgr/image/upload/v1685876707/cliffhanger.png"
            }
            languageImage={"/images/node-js.svg"}
            projectName={"Cliffhanger"}
            anchorLink={"https://cliffhanger-raj2k00.onrender.com/"}
          />
          <ProjectItem
            projectImage={
              "https://res.cloudinary.com/dtv8z6zgr/image/upload/v1685877026/keeper-app.png"
            }
            languageImage={"/images/react.svg"}
            projectName={"Keeper App"}
            anchorLink={"https://keeper-notes.netlify.app/"}
          />
          <ProjectItem
            projectImage={
              "https://res.cloudinary.com/dtv8z6zgr/image/upload/v1685877864/outdoors.png"
            }
            languageImage={"/images/css3.svg"}
            projectName={"Outdoors"}
            anchorLink={"https://tours-outdoors.netlify.app/"}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;

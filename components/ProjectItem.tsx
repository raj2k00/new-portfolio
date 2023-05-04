import Image from "next/image";

interface ProjectItemInterface {
  projectImage: string;
  languageImage: string;
  projectName: string;
  anchorLink?: string;
}

const ProjectItem = ({
  projectImage,
  languageImage,
  projectName,
  anchorLink,
}: ProjectItemInterface) => {
  return (
    <a
      href={anchorLink || "#"}
      className=" dark_box_shadow rounded-md p-4 hover:scale-105 scale-100 ease-in delay-75 transition-all"
    >
      <Image
        src={projectImage || "/images/beach.jpg"}
        alt={"beach pic"}
        width={300}
        height={200}
        className=""
      />
      <div className="flex justify-between items-end py-2 px-1">
        <span className="text-lg font-bold">{projectName}</span>
        <Image
          src={languageImage || "/images/node-js.svg"}
          alt={"beach pic"}
          width={25}
          height={25}
          className="rounded-full"
        />
      </div>
    </a>
  );
};

export default ProjectItem;

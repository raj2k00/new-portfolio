import {
  Code,
  HTML,
  FRAMEWORK,
  DESIGN,
  DATABASE,
  CLOUD,
  NODE,
  TOOLS,
} from "./icons/Icon";
import SkillSet from "./SkillSet";

const SKILL_DATA = [
  {
    id: "1",
    icon: <Code width={"40"} height={"40"} />,
    title: "Languages",
    description: "Javascript, C++, Python",
  },
  {
    id: "2",
    icon: <FRAMEWORK width={"40"} height={"40"} />,
    title: "Frameworks",
    description: "Next.js, Express.js",
  },
  {
    id: "3",
    icon: <HTML width={"45"} height={"45"} />,
    title: "Front end stack",
    description: "HTML, SCSS, Tailwind CSS, React",
  },
  {
    id: "4",
    icon: <NODE width={"40"} height={"40"} />,
    title: "Back end stack",
    description: "Node.js",
  },
  {
    id: "5",
    icon: <DATABASE width={"40"} height={"40"} />,
    title: "Database",
    description: "MongoDB, MySQL",
  },
  {
    id: "6",
    icon: <CLOUD width={"40"} height={"40"} />,
    title: "Cloud",
    description: "AWS, Google Cloud",
  },
  {
    id: "7",
    icon: <DESIGN width={"40"} height={"40"} />,
    title: "Dev tools",
    description: "Jira, Monday, Git, Github, Figma",
  },
  {
    id: "8",
    icon: <TOOLS width={"40"} height={"40"} />,
    title: "Debugging",
    description: "Cypress, Jest, Chrome dev tools",
  },
];

const Skills = () => {
  return (
    <div className={`flex relative items-center justify-center h-screen`}>
      <div className="-mt-16">
        <div className="text-4xl pb-4 text-center leading-snug">Skills</div>
        <div className="grid grid-cols-2 gap-12 justify-start items-start pt-16 gap-x-20">
          {SKILL_DATA.map((skill) => (
            <SkillSet
              key={skill.id}
              ICON={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

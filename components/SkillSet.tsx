import { ReactNode } from "react";

interface SkillSetInterface {
  ICON: ReactNode;
  title: string;
  description: string;
}

function SkillSet({ ICON, title, description }: SkillSetInterface) {
  return (
    <div className="flex items-center justify-start gap-10">
      <div className=" flex items-center justify-center">{ICON}</div>
      <div className="flex flex-col gap-1">
        <div className="text-2xl font-semibold">{title}</div>
        <div className="text-xl">{description}</div>
      </div>
    </div>
  );
}

export default SkillSet;

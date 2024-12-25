import React from "react";
import { AiOutlineCode } from "react-icons/ai";
import { MdCloudQueue } from "react-icons/md";
import { HiDatabase } from "react-icons/hi";
import { BiGitBranch } from "react-icons/bi";

const ServicesData = [
  {
    name: "Front-End Development",
    description: "Creating interactive user interfaces.",
    icon: <AiOutlineCode className="text-4xl" />,
    bgColor: "bg-blue-500/70",
  },
  {
    name: "Back-End Development",
    description: "Building robust server logic.",
    icon: <MdCloudQueue className="text-4xl" />,
    bgColor: "bg-lime-500/70",
  },
  {
    name: "Database Management",
    description: "Managing and optimizing data storage.",
    icon: <HiDatabase className="text-4xl" />,
    bgColor: "bg-fuchsia-500/70",
  },
  {
    name: "API Integration",
    description: "Connecting systems seamlessly.",
    icon: <BiGitBranch className="text-4xl" />,
    bgColor: "bg-orange-500/70",
  },
];

const ServicesBox = () => {
  return (
    <div className="h-full mt-10 text-white">
      <div className="grid grid-cols-2 gap-6">
        {ServicesData.map(({ name, description, icon, bgColor }, index) => (
          <div
            key={index}
            className={`p-3 ${bgColor} min-h-[180px] rounded-xl`}
          >
            <div className="p-3 space-y-3">
              {icon}
              <h1 className="text-lg font-semibold">{name}</h1>
              <p className="text-sm">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesBox;

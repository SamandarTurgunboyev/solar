import { projectsType } from "@/data/projects";
import React from "react";
import { useTranslation } from "next-i18next";

const ProjectsFilter = ({ value, setValue }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <ul className="flex md:flex-row flex-col items-center gap-3">
        {projectsType.map((data) => {
          return (
            <li
              key={data.id}
              className={`p-2 md:w-fit w-full cursor-pointer hover:bg-blue hover:text-white transition ${
                value == data.value
                  ? "bg-blue text-white"
                  : "bg-[#E6E6E6] text-black"
              }`}
              onClick={() => setValue(data.value)}
            >
              {t(data.title)}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProjectsFilter;

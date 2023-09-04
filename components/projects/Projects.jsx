import React, { useMemo, useState } from "react";
import Image from "next/image";
import { ProjectsFilter } from "@/ui";
import { useTranslation } from "next-i18next";
import { projectsData } from "@/data/projects";

const Projects = () => {
  const { t, i18n } = useTranslation("common");
  const [type, setType] = useState("all");
  const [product, setProduct] = useState(projectsData);

  const filterProduct = () => {
    if (type == "all") {
      return product;
    }
    return product.filter((e) => e.type == type);
  };

  var filteredProduct = useMemo(filterProduct, [type, product]);

  return (
    <div className="custom-container py-8">
      <ProjectsFilter value={type} setValue={setType} />
      <ul className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-6">
        {filteredProduct.map((data) => {
          return (
            <li
              key={data.id}
              className="production-card overflow-hidden cursor-pointer relative w-full"
            >
              <Image
                src={data.photo}
                alt={t(data.name)}
                width={500}
                height={500}
                className="-z-[1] relative transition-all w-full h-full"
              />
              <div className="w-full bg-blue/[0.9] py-[15px] px-[10px] z-[1000] absolute bottom-0">
                {i18n.language == "uz" ? (
                  <p className="uppercase font-barlowBold text-white text-[14px]">
                    {data.name.uz}
                  </p>
                ) : i18n.language == "en" ? (
                  <p className="uppercase font-barlowBold text-white text-[14px]">
                    {data.name.en}
                  </p>
                ) : (
                  <p className="uppercase font-barlowBold text-white text-[14px]">
                    {data.name.ru}
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;

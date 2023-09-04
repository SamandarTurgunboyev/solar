import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Hero = () => {
  const { t } = useTranslation("common");
  return (
    <div className="relative w-full sm:h-[300px] h-[400px]">
      <Image
        src={"/images/project-bg.jpg"}
        width={1000}
        height={1000}
        alt="projects"
        className="object-cover w-full h-full absolute z-[-1] object-right-top"
      />
      <div className="custom-container flex flex-col gap-6 items-center justify-center h-full py-8 lg:w-[60%] md:w-[80%] w-full mx-auto">
        <h1 className="md:text-5xl text-[32px] text-blue font-barlowBlack text-center">
          {t("projects.hero.title")}
        </h1>
        <div className="flex flex-row gap-[20px] items-center">
          <Link href={"/"}>
            <p className="site_ab relative text-white font-barlowBold hover:text-yellow transition">
              {t("site_about.header.ul.link")}
            </p>
          </Link>
          <p className="text-blue font-barlowBold">{t("projects.hero.page")}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import Image from "next/image";
import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const Hero = () => {
  const { t } = useTranslation("common");
  return (
    <div className="relative w-full sm:h-[300px] h-[400px]">
      <Image
        src={"/images/individuals.jpg"}
        width={500}
        height={500}
        alt="individuals"
        className="object-cover w-full h-full absolute z-[-1] object-right-top"
      />
      <div className="custom-container flex flex-col gap-6 items-center justify-center h-full py-8 lg:w-[60%] md:w-[80%] w-full mx-auto">
        <h1 className="md:text-5xl text-[32px] text-blue font-barlowBlack text-center">
          {t("forIndividuals.hero.title")}
        </h1>
        <p className="font-barlowSemiBold md:text-[16px] text-[14px] text-blue text-center">
          {t("forIndividuals.hero.desc")}
        </p>
        <div className="flex flex-row gap-[20px] items-center">
          <Link href={"/"}>
            <p className="site_ab relative text-white font-barlowBold hover:text-yellow transition">
              {t("site_about.header.ul.link")}
            </p>
          </Link>
          <p className="text-blue font-barlowBold">
            {t("forIndividuals.hero.page")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

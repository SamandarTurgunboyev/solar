import React from "react";
import { useTranslation } from "next-i18next";
import { helpData } from "@/data/help";
import Image from "next/image";

const Help = () => {
  const { t, i18n } = useTranslation("common");
  return (
    <div className="bg-[#F8F8F8]">
      <div className="custom-container py-8 flex flex-col gap-6">
        <h1 className="md:text-5xl text-[32px] text-blue font-barlowBlack text-center">
          {t("forIndividuals.help.title")}
        </h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 my-4 lg:w-[70%] md:w-[80%] w-full mx-auto">
          {helpData.map((data) => {
            return (
              <div className="flex md:flex-row flex-col items-center md:gap-3 gap-6">
                <Image
                  src={data.photo}
                  alt={t(data.title)}
                  width={400}
                  height={400}
                  className="w-[50px] h-[50px]"
                />
                <p className="md:text-[16px] text-[14px] text-blue text-start">
                  {t(data.title)}
                </p>
              </div>
            );
          })}
        </div>
        <h3 className="text-center text-[22px] text-[#555] uppercase">
          {t("forIndividuals.help.income.title")}
        </h3>
        <div className="lg:w-[70%] md:w-[80%] w-full mx-auto">
          <p className="md:text-[16px] text-[14px] text-blue text-start">{t("forIndividuals.help.income.desc")}</p>
        </div>
        <Image src={i18n.language == "uz" ? "/images/help/5.png" : i18n.language == "en" ? "/images/help/6.png" : "/images/help/7.png"} alt="features" width={2000} height={2000} className="lg:w-[70%] md:w-[80%] w-full mx-auto"/>
        <div className="lg:w-[70%] md:w-[80%] w-full mx-auto">
          <p className="md:text-[16px] text-[14px] text-blue text-start">{t("forIndividuals.help.income.info.one")}</p>
        </div>
        <div className="lg:w-[70%] md:w-[80%] w-full mx-auto">
          <p className="md:text-[16px] text-[14px] text-blue text-start">{t("forIndividuals.help.income.info.one")}</p>
        </div>
      </div>
    </div>
  );
};

export default Help;

import React from "react";
import { useTranslation } from "next-i18next";

const Reasons = () => {
  const { t } = useTranslation("common");
  return (
    <div className="custom-container py-8 flex items-center justify-center h-fit">
      <div className="flex flex-col gap-8 items-center justify-center lg:w-[70%] md:w-[80%] w-full mx-auto">
        <p className="font-barlowSemiBold md:text-[16px] text-[14px] text-yellow text-center">
          {t("forIndividuals.reasons.subTitle")}
        </p>
        <h1 className="md:text-5xl text-[32px] text-blue font-barlowBlack text-center">
          {t("forIndividuals.reasons.title")}
        </h1>
        <p className="md:text-[16px] text-[14px] text-blue text-start">
          {t("forIndividuals.reasons.info.one")}
        </p>
        <p className="md:text-[16px] text-[14px] text-blue text-start">
          {t("forIndividuals.reasons.info.two")}
        </p>
      </div>
    </div>
  );
};

export default Reasons;

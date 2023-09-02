import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";

const Features = () => {
  const { t } = useTranslation("common");
  const [active, setActive] = useState(1);
  return (
    <div className="py-8 w-full flex flex-col items-center justify-center gap-6">
      <h1 className="md:text-5xl text-[32px] text-blue font-barlowBlack text-center">
        {t("forIndividuals.feature.title")}
      </h1>
      <div className="flex flex-row items-center gap-6">
        <div
          className={`flex flex-row items-center gap-2 cursor-pointer border-0 hover:border-b-2 border-yellow transition ${
            active == 1
              ? "opacity-100 border-0 border-b-2 border-yellow"
              : "opacity-50"
          }`}
          onClick={() => setActive(1)}
        >
          <Image
            src={"/images/roof.png"}
            width={500}
            height={500}
            alt="roof"
            className="w-[50px]"
          />
          <p>{t("forIndividuals.feature.one.title")}</p>
        </div>
        <div
          className={`flex flex-row items-center gap-2 cursor-pointer border-0 hover:border-b-2 border-yellow transition ${
            active == 2
              ? "opacity-100 border-0 border-b-2 border-yellow"
              : "opacity-50"
          }`}
          onClick={() => setActive(2)}
        >
          <Image
            src={"/images/roof.png"}
            width={500}
            height={500}
            alt="roof"
            className="w-[50px]"
          />
          <p>{t("forIndividuals.feature.two.title")}</p>
        </div>
      </div>
      <div className="">
        <div
          className={`flex flex-col gap-3 ${active == 1 ? "block" : "hidden"}`}
        >
          <p className="lg:w-[70%] md:w-[80%] w-full md:px-0 px-4 mx-auto md:text-[16px] text-[14px] text-blue text-start">
            {t("forIndividuals.feature.one.desc")}
          </p>
          <Image
            src={"/images/roof.jpg"}
            alt="roof"
            width={500}
            height={500}
            className="w-full h-[300px] object-cover"
          />
        </div>
        <div
          className={`flex flex-col gap-3 ${active == 2 ? "block" : "hidden"}`}
        >
          <p className="lg:w-[70%] md:w-[80%] w-full md:px-0 px-4 mx-auto md:text-[16px] text-[14px] text-blue text-start">
            {t("forIndividuals.feature.two.desc")}
          </p>
          <Image
            src={"/images/ground.jpg"}
            alt="roof"
            width={500}
            height={500}
            className="w-full h-[300px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;

import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { productionData } from "@/data/productionData";

const Production = () => {
  const { t } = useTranslation("common");
  return (
    <div className="py-8 custom-container flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <p className="text-yellow font-barlowSemiBold text-center">
          {t("production.subTitle")}
        </p>
        <h1 className="md:text-[42px] text-[25px] text-blue font-barlowBlack text-center">
          {t("production.title")}
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col justify-between w-full gap-6">
        <div className="production-card overflow-hidden cursor-pointer relative lg:w-[50%] w-full">
          <Image
            src={"/images/warranty/1.jpg"}
            alt="solar panel"
            width={500}
            height={500}
            className="-z-[1] relative transition-all w-full h-full"
          />
          <div className="w-full bg-blue/[0.9] py-[15px] px-[10px] z-[1000] absolute bottom-0">
            <p className="uppercase font-barlowBold text-white text-[14px]">
              Solar Station
            </p>
          </div>
        </div>
        <div className="grid lg:w-[50%] w-full md:grid-cols-2 grid-cols-1 gap-6">
          {productionData.map((data) => {
            return (
              <div
                key={data.id}
                className="w-fit production-card overflow-hidden cursor-pointer relative"
              >
                <Image
                  src={data.photo}
                  alt={data.title}
                  width={500}
                  height={500}
                  className="-z-[1] relative transition-all"
                />
                <div className="w-full bg-blue/[0.9] py-[15px] px-[10px] z-[1000] absolute bottom-0">
                  <p className="uppercase font-barlowBold text-white text-[14px]">
                    {data.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Production;

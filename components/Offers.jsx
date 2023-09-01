import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

const Offers = () => {
  const { t } = useTranslation("common");
  return (
    <div className="custom-container w-full flex flex-col gap-8 items-center bg-white py-8">
      <div className="flex flex-col gap-1 text-center lg:w-[40%] md:w-[70%] w-full mx-auto">
        <p className="text-yellow font-barlowSemiBold md:text-[16px] text-[14px]">
          {t("offers.subTitle")}
        </p>
        <h1 className="lg:text-[42px] text-[30px] text-blue font-barlowBold">
          {t("offers.title")}
        </h1>
        <p className="text-blue md:text-[16px] text-[14px]">
          {t("offers.desc")}
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 items-center md:gap-3 gap-6">
        <div className="flex flex-col gap-6 items-center">
          <div className="relative border p-4 md:border-t-[0px] border-t-[1px] md:border-l-[0px] border-l-[1px] md:border-r-[0px] border-r-[1px] border-b-[1px] before:content-[''] before:absolute before:bg-yellow before:w-full before:h-[1px] before:bottom-0 before:left-0 before:scale-x-0 hover:before:scale-x-100 flex flex-col gap-4">
            <Image
              src={"/images/home-icon1.png"}
              width={500}
              height={500}
              alt="icon"
              className="w-[60px]"
            />
            <h1 className="text-[25px] font-barlowBlack text-blue">{t("offers.card.left.title")}</h1>
            <p>{t("offers.card.left.desc")}</p>
          </div>
          <button className="button-hover w-fit before:!bg-blue text-white flex flex-row items-center">
            <p>{t("offers.card.left.btn")}</p>
            <IoIosArrowRoundForward className="text-2xl" />
          </button>
        </div>
        <div className="w-full flex items-center justify-center">
          <Image src={'/images/home-business.png'} width={500} height={500} alt="home-business"/>
        </div>
        <div className="flex flex-col gap-6 items-center">
          <div className="relative border p-4 md:border-t-[0px] border-t-[1px] md:border-l-[0px] border-l-[1px] md:border-r-[0px] border-r-[1px] border-b-[1px] before:content-[''] before:absolute before:bg-yellow before:w-full before:h-[1px] before:bottom-0 before:left-0 before:scale-x-0 hover:before:scale-x-100 flex flex-col gap-4">
            <Image
              src={"/images/home-icon2.png"}
              width={500}
              height={500}
              alt="icon"
              className="w-[60px]"
            />
            <h1 className="text-[25px] font-barlowBlack text-blue">{t("offers.card.right.title")}</h1>
            <p>{t("offers.card.right.desc")}</p>
          </div>
          <button className="button-hover w-fit before:!bg-blue text-white flex flex-row items-center">
            <p>{t("offers.card.right.btn")}</p>
            <IoIosArrowRoundForward className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offers;

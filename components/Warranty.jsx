import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { IoIosArrowRoundForward } from "react-icons/io";
import { warrantyData } from "@/data/warrantyData";
import { SampleNextArrow2, SamplePrevArrow2 } from "@/ui/CustomArrows";

const Warranty = () => {
  const { t } = useTranslation("common");
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 400,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow2 />,
    prevArrow: <SamplePrevArrow2 />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="custom-container py-8 flex lg:flex-row flex-col gap-4">
      <div className="xl:w-[30%] lg:w-[40%] w-full flex items-center">
        <div className="w-full flex flex-col gap-3">
          <p className="text-yellow font-semibold">{t("warranty.subtitle")}</p>
          <h1 className="text-[42px] text-blue font-barlowBlack">
            {t("warranty.title")}
          </h1>
          <p className="text-blue">{t("warranty.desc")}</p>
          <button className="button-hover w-fit !bg-blue before:!bg-yellow text-white flex flex-row items-center gap-1">
            <p>{t("warranty.btn")}</p>
            <IoIosArrowRoundForward className="text-2xl" />
          </button>
        </div>
      </div>
      <div className="xl:w-[70%] lg:w-[60%] w-full">
        <Slider {...settings} className="outline-none">
          {warrantyData.map((data) => {
            return (
              <div key={data.id} className="lg:p-2 p-0 outline-none">
                <Image
                  src={data.photo}
                  alt={data.name}
                  width={500}
                  height={500}
                  className="mb-2 w-full h-full"
                />
                <div>
                  <p className="font-barlowBlack text-[22px] text-blue mb-1">
                    {data.name}
                  </p>
                  <p className="">
                    {data.year} {t("warranty.warranty")}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Warranty;

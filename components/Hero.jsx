import hero from "@/data/hero";
import React from "react";
import { useTranslation } from "next-i18next";
import Slider from "react-slick";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import { SampleNextArrow, SamplePrevArrow } from "@/ui/CustomArrows";


const Hero = () => {
  const { t } = useTranslation();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 900,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="relative">
      <Slider {...settings}>
        {hero.map((data) => {
          return (
            <div key={data.id} className="relative md:h-[600px] h-[400px]">
              <Image
                src={data.photo}
                width={1000}
                height={1000}
                alt={t(data.title)}
                className="absolute h-full w-full object-cover z-40"
              />
              <div className="relative flex items-center flex-col justify-center w-full h-full z-50 gap-4">
                <h1 className="md:text-[60px] text-[32px] text-center font-barlowBlack text-blue">
                  {t(data.title)}
                </h1>
                <button className="button-hover before:!bg-blue text-white flex flex-row items-center gap-1">
                  <p>{t("hero.link_1")}</p>
                  <IoIosArrowRoundForward className="text-2xl" />
                </button>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Hero;

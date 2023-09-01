import hero from "@/data/hero";
import React from "react";
import { useTranslation } from "next-i18next";
import Slider from "react-slick";
import { BsArrowRightShort } from "react-icons/bs";
import { BsArrowLeftShort } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <button
      className="absolute z-[100] bottom-[140px] md:right-[130px] right-[calc(50%-65px)] w-[40px] h-[40px] bg-blue md:flex hidden items-center justify-center"
      onClick={onClick}
    >
      <BsArrowRightShort className="text-white text-2xl" />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <button
      className="absolute z-[100] bottom-[140px] md:right-[190px] right-[calc(50%+25px)] w-[40px] h-[40px] bg-blue md:flex hidden items-center justify-center"
      onClick={onClick}
    >
      <BsArrowLeftShort className="text-white text-2xl" />
    </button>
  );
}

const Hero = () => {
  const { t } = useTranslation();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
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

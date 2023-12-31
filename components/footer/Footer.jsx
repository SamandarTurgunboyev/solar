import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { IoIosArrowRoundForward } from "react-icons/io";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <footer className="footer-bg">
      <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 footer-color">
        <div className="my-[50px] mx-[30px]">
          <ul className="flex flex-col gap-[20px]">
            <li>
              <Image src={logo} width={150} height={150} alt="logo" />
            </li>
            <li className="flex gap-[15px]">
              {" "}
              <HiOutlineLocationMarker className="text-yellow text-xl" /> Ташкент,
              Мирабадский район, Фаргона Йули 222/12
            </li>
            <li className="flex gap-[15px]">
              {" "}
              <BsTelephone className="text-yellow text-xl" />
              +998 955020007
            </li>
            <li className="flex gap-[15px]">
              {" "}
              <CgMail className="text-yellow text-2xl" />
              info@mysun.uz
            </li>
          </ul>
        </div>
        <div className="my-[50px] mx-[30px]">
          <ul className="flex flex-col gap-[20px]">
            <li className="font-bold text-2xl">{t("footer.project.title")}</li>
            <li className="flex gap-[10px] ">
              <a href="/" className="footer_hov">
                {t("footer.project.city")}
              </a>
            </li>
            <li>
              <a href="/" className="footer_hov">
                {t("footer.project.committee")}
              </a>
            </li>
            <li>
              <a href="/" className="footer_hov">
                {t("footer.project.department")}
              </a>
            </li>
            <li>
              <a href="/" className="footer_hov">
                {t("footer.project.product")}
              </a>
            </li>
          </ul>
        </div>
        <div className="my-[50px] mx-[30px]">
          <ul className="flex flex-col gap-[20px]">
            <li className="font-bold text-2xl">{t("footer.links.title")}</li>
            <li>
              <a href="/site/about" className="footer_hov">
                {t("footer.links.info")}
              </a>
            </li>
            <li>
              <a href="/site/products" className="footer_hov">
                {t("footer.links.product")}
              </a>
            </li>
            <li>
              <a href="/site/for-individuals" className="footer_hov">
                {t("footer.links.private")}
              </a>
            </li>
            <li>
              <a href="/site/contact" className="footer_hov">
                {t("footer.links.contact")}
              </a>
            </li>
          </ul>
        </div>
        <div className="my-[50px] mx-[30px]">
          <ul className="flex flex-col gap-[20px]">
            <li className="font-bold text-2xl">
              {t("footer.information.title")}
            </li>
            <li>{t("footer.information.info")}</li>
            <li>
              <input
                type="text"
                className="w-full h-[55px] p-[15px] outline-0 text-blue font-bold placeholder:font-normal focus:border-yellow border-2"
                placeholder={t("footer.information.input")}
              />
            </li>
            <li>
              <button className="before:!bg-blue button-hover w-full bg-yellow text-center flex justify-center items-center gap-[15px] !py-2">
                {t("footer.information.button")}
                <IoIosArrowRoundForward className="text-center text-2xl my-[10px]" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

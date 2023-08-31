import { navbarData } from "@/data/navbar";
import Image from "next/image";
import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { FaTelegram } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TfiMenu } from "react-icons/tfi";
import { RiCloseLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import Mobile from "./Mobile";
import ModalButton from "./ModalButton";

const Navbar = () => {
  const { t } = useTranslation("common");
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  return (
    <nav className="custom-container text-white flex flex-row items-center justify-between bg-blue py-6 relative">
      <Link href={"/"}>
        <Image src={"/images/logo.png"} width={100} height={100} alt="logo" />
      </Link>
      <ul className="xl:flex hidden flex-row gap-8 font-tahomaRegular">
        {navbarData.map((data) => {
          return (
            <li key={data.id} className="text-[14px]">
              <Link href={data.link} className="triangle-hover relative">{t(data.title)}</Link>
            </li>
          );
        })}
      </ul>
      <div className="flex flex-row items-center">
        <ul className="md:flex hidden flex-row items-center gap-6">
          <Link href={"/"}>
            <FaTelegram className="text-3xl" />
          </Link>
          <button className="button-hover flex flex-row items-center">
            <p>Ariza yuborish</p>{" "}
            <IoIosArrowRoundForward className="text-2xl" />
          </button>
        </ul>
        <BsThreeDots
          className="md:hidden flex text-3xl text-yellow cursor-pointer"
          onClick={() => setModal(!modal)}
        />
        <ModalButton open={modal}/>
        <div className="xl:hidden flex items-center justify-center w-[40px] h-[40px] ml-4">
          {open ? (
            <RiCloseLine
              className="text-4xl text-yellow cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          ) : (
            <TfiMenu
              className="text-3xl text-yellow cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          )}
        </div>
      </div>
      <Mobile open={open} />
    </nav>
  );
};

export default Navbar;

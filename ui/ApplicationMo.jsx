import React, { useState } from "react";
import { ModalFather } from "./index";
import Image from "next/image";
import { RiCloseLine } from "react-icons/ri";
import { useTranslation } from "next-i18next";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import axios from "axios";
import { chatId, telegramBotId } from "@/data/constants";

const ApplicationMo = ({ open, setOpen }) => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const [nameE, setNameE] = useState(false);
  const [phoneE, setPhoneE] = useState(false);
  const [msgE, setMsgE] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (name.length == 0 && phone.length < 12 && msg.length < 3) {
      setNameE(true);
      setPhoneE(true);
      setMsgE(true);
      return;
    }

    if (name.length == 0) {
      setNameE(true);
      return;
    }

    if (phone.length < 12) {
      setNameE(true);
      return;
    }

    if (msg.length == 0) {
      setPhoneE(ture);
      return;
    }

    setIsLoading(true);
    const message = `Yangi foydalanuvchi
    \n<b>Ismi:</b> ${name}
    \n<b>Raqam:</b> <code>${phone}</code>
    \n<b>Xabar</b> ${msg}`;
    try {
      await axios.get(
        `https://api.telegram.org/bot${telegramBotId}/sendMessage`,
        {
          params: {
            chat_id: chatId,
            text: message,
            parse_mode: "html",
          },
        }
      );
      setIsLoading(false);
      setMsg("");
      setName("");
      setPhone("");
      setMsgE(false);
      setNameE(false);
      setPhoneE(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false)
    }
  };

  return (
    <>
      {open ? (
        <ModalFather>
          <div className="w-full h-full fixed bg-[#000]/[0.7]">
            <motion.div
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="w-full h-full text-white z-[200] flex items-center justify-center"
            >
              <div className="xl:w-[70%] w-[90%] lg:h-[630px] h-fit transition flex lg:flex-row flex-col items-center">
                <div className="lg:w-[50%] w-full h-full lg:block hidden">
                  <Image
                    src={"/images/quote-img.jpg"}
                    alt="application"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:w-[50%] w-full h-full bg-white relative text-black sm:py-6 py-3 ms:px-10 px-4 transition">
                  <div
                    className="absolute -top-[19px] right-[19px] cursor-pointer w-[38px] h-[38px] bg-yellow flex items-center justify-center hover:bg-yellowBlack"
                    onClick={() => setOpen(!open)}
                  >
                    <RiCloseLine className="text-xl text-white" />
                  </div>
                  <div className="flex items-center justify-center flex-col w-full h-full">
                    <p className="relative font-semibold mb-3 text-yellow text-center">
                      {t("application.subTitle")}
                    </p>
                    <h1 className="text-[30px] mb-3 text-blue text-center font-barlowBlack">
                      {t("application.title")}
                    </h1>
                    <p className="text-center mb-8">{t("application.desc")}</p>
                    <div className="w-full flex flex-col gap-5">
                      <div className="w-full">
                        <input
                          type="text"
                          placeholder={t("application.input.name")}
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="input-class"
                        />
                        {nameE ? (
                          <p className="mb-2 text-red text-start">
                            {t("application.error.name")}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="w-full">
                        <input
                          type="tel"
                          placeholder={t("application.input.phone")}
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="input-class"
                        />
                        {phoneE ? (
                          <p className="mb-2 text-red text-start">
                            {t("application.error.phone")}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="w-full">
                        <textarea
                          placeholder={t("application.input.message")}
                          value={msg}
                          onChange={(e) => setMsg(e.target.value)}
                          className="input-class max-h-[150px]"
                          maxLength={200}
                        />
                        {msgE ? (
                          <p className="mb-2 text-red text-start">
                            {t("application.error.message")}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                      <button
                        className="flex flex-row items-center gap-2 button-hover text-white before:!bg-yellow !bg-blue w-fit"
                        onClick={handleSubmit}
                      >
                        {t("application.btn")}{" "}
                        <IoIosArrowRoundForward className="text-2xl" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </ModalFather>
      ) : (
        ""
      )}
    </>
  );
};

export default ApplicationMo;

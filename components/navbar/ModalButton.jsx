import Link from "next/link";
import React from "react";
import { FaTelegram } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

const ModalButton = ({ open }) => {
  return (
    <>
      {open ? (
        <ul className="md:hidden z-50 block absolute top-[120px] right-0 w-fit">
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="flex flex-row items-center gap-6 bg-blue py-2 px-6"
          >
            <Link href={"/"}>
              <FaTelegram className="text-3xl" />
            </Link>
            <button className="button-hover flex flex-row items-center">
              <p>Ariza yuborish</p>{" "}
              <IoIosArrowRoundForward className="text-2xl" />
            </button>
          </motion.div>
        </ul>
      ) : (
        ""
      )}
    </>
  );
};

export default ModalButton;

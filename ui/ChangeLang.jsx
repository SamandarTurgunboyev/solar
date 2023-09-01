import { langauge } from "@/data/language";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { MdLanguage, MdKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";

const ChangeLang = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("uz");
  const router = useRouter();
  const { pathname, asPath, query } = router;

  const langHandler = () => {
    router.push({ pathname, query }, asPath, {
      locale: selected,
    });
  };

  useEffect(() => {
    langHandler();
  }, [selected]);

  return (
    <div className="flex flex-row relative z-50">
      <div
        className="flex flex-row items-center gap-1 cursor-pointer hover:text-yellow text-white"
        onClick={() => setOpen(!open)}
      >
        <MdLanguage className="text-xl z-50" />
        <p className="uppercase">{selected}</p>
        <MdKeyboardArrowDown className="text-xl" />
      </div>
      {open ? (
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <ul
            className={`flex flex-col w-[160px] absolute top-[30px] bg-white py-2 right-0`}
          >
            {langauge.map((data) => {
              return (
                <li
                  onClick={() => setSelected(data.lng)}
                  key={data.id}
                  className="px-4 py-2 flex flex-row items-center gap-3 cursor-pointer hover:text-yellow text-blue transition"
                >
                  <Image
                    src={data.logo}
                    width={100}
                    height={100}
                    alt={data.lng}
                    className="w-[18px] h-[18px]"
                  />
                  <p className="uppercase">{data.lng}</p>
                </li>
              );
            })}
          </ul>
        </motion.div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ChangeLang;

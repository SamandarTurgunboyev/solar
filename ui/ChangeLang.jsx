import { langauge } from "@/data/language";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { MdLanguage, MdKeyboardArrowDown } from "react-icons/md";

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
    <div className="flex flex-row relative">
      <div className="flex flex-row items-center gap-1 cursor-pointer">
        <MdLanguage className="text-xl z-50" />
        <p className="uppercase text-xl">{selected}</p>
        <MdKeyboardArrowDown className="text-xl" />
      </div>
      <ul
        className={`flex flex-col w-[160px] absolute top-[30px] bg-white py-2 right-0`}
      >
        {langauge.map((data) => {
          return (
            <li
              onClick={() => setSelected(data.lng)}
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
    </div>
  );
};

export default ChangeLang;

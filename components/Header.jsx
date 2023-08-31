import { header } from "@/data/header";
import { ChangeLang } from "@/ui";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full h-[55px] p-3 flex justify-between items-center bg-black text-white">
      <ul className="flex flex-row items-center gap-3">
        {header.map((data) => {
          return (
            <li key={data.id} className="">
              <Link
                href={data.link}
                className="flex flex-row items-center gap-1"
              >
                <data.icon className="text-xl" />
                <p>{data.title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
      <ChangeLang />
    </div>
  );
};

export default Header;

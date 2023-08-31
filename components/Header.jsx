import React from "react";
import { header } from "@/data/header";
import { ChangeLang } from "@/ui";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full px-4 py-3 flex flex-row justify-between items-center bg-black text-white">
      <ul className="sm:flex hidden flex-row items-center gap-3">
        {header.map((data) => {
          return (
            <li key={data.id} className="hover:text-yellow text-white">
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
      <ul className="sm:hidden flex flex-row items-center gap-3">
        {header.slice(0, 1).map((data) => {
          return (
            <li key={data.id} className="hover:text-yellow text-white">
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

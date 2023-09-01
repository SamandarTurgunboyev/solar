import { statisticsData } from "@/data/statisticsData";
import React from "react";
import CountUp from "react-countup";
import { useTranslation } from "next-i18next";

const Statistics = () => {
  const { t } = useTranslation("common");
  return (
    <div className="stat-box text-white">
        <div className="w-[80%] mx-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 flex flex-row justify-between gap-6">
        {statisticsData.map((data) => {
          return (
            <div key={data.id}>
              <div className="flex flex-row items-center justify-center">
                <CountUp
                  end={data.count}
                  duration={4}
                  className="lg:text-[60px] text-[32px] font-barlowBlack text-center"
                />
                <p className="lg:text-[60px] text-[32px] font-barlowBlack text-center">{data.value}</p>
              </div>
              <p className="text-yellow text-center md:text-[18px] text-[16px]">
                {t(data.title)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Statistics;

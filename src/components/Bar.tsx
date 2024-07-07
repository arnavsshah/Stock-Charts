"use client";

import { BarProps } from "@/types";

const Bar = ({ index, height, volume, label, handleClick }: BarProps) => {
  return (
    <div className="relative flex flex-col justify-end items-center flex-grow h-96 group">
      <div
        style={{ height: `${height}%` }}
        className="relative flex justify-center w-full z-0 bg-indigo-400 group-hover:scale-x-125 group-hover:bg-indigo-600 transition-all ease-in duration-100"
        onClick={() => handleClick(index)}
      >
        <span className="absolute -top-2 hidden z-10 -mt-6 text-sm font-semibold text-white group-hover:block group-hover:scale-x-75 group-hover:text-lg">
          {Intl.NumberFormat("en", { notation: "compact" }).format(volume)}
        </span>
      </div>
      <span className="absolute -bottom-12 text-sm font-semibold text-gray-500">
        {label}
      </span>
    </div>
  );
};

export default Bar;

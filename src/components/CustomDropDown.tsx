"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import { CustomDropDownProps } from "@/types";

const CustomDropDown = ({ placeHolder, options }: CustomDropDownProps) => {
  const router = useRouter();

  const [showDropDown, setShowDropDown] = useState<boolean | null>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleInputClick = () => {
    setShowDropDown(!showDropDown);
  };

  const getDropDownDisplay = () => {
    if (!selectedOption) {
      return placeHolder;
    } else {
      return selectedOption;
    }
  };

  const onItemClick = (option: string) => {
    setSelectedOption(option);
    setShowDropDown(false);
    router.push(`/?ticker=${option}`, { scroll: false });
  };

  return (
    <div className="w-64 rounded-md cursor-pointer bg-white">
      <div
        onClick={handleInputClick}
        className="relative flex flex-row justify-between items-center p-4 w-full h-12 rounded-md hover:border-2 hover:border-slate-400 transition-color ease-in-out duration-200"
      >
        <div>{getDropDownDisplay()}</div>
        {showDropDown ? (
          <IoIosArrowUp size="20" />
        ) : (
          <IoIosArrowDown size="20" />
        )}
      </div>
      {showDropDown && (
        <div className="absolute w-64 max-h-48 bg-white overflow-auto">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => onItemClick(option)}
              className="flex items-center p-4 w-full h-12 hover:bg-slate-200 hover:last:rounded-b-md transition-colors duration-200 ease-in-out"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropDown;

"use client";

import { useEffect, useState } from "react";

import Bar from "@/components/Bar";
import { BarChartProps } from "@/types";

const BarChart = ({ title, subTitle, values, labels }: BarChartProps) => {
  const [heights, setHeights] = useState<number[]>([]);
  const [valuesArr, setValuesArr] = useState<number[]>([]);
  const [labelArr, setLabelArr] = useState<string[]>([]);

  const calculateHeights = () => {
    const maxValue = Math.max(...values);
    const newHeights = values.map((value) => {
      return (value * 100) / maxValue;
    });

    setHeights(newHeights);
  };

  useEffect(() => {
    calculateHeights();
    setValuesArr(values);
    setLabelArr(labels);
  }, [values]);

  const handleBarClick = (deleteIndex: number) => {
    const newHeights = heights.filter((_, index) => index !== deleteIndex);
    const newValues = valuesArr.filter((_, index) => index !== deleteIndex);
    const newLabels = labelArr.filter((_, index) => index !== deleteIndex);
    setHeights(newHeights);
    setValuesArr(newValues);
    setLabelArr(newLabels);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-screen-lg p-6 pb-12 bg-black rounded-md shadow-md">
      <h2 className="text-xl text-white font-bold">{title}</h2>
      <span className="text-sm font-semibold text-gray-500">{subTitle}</span>
      <div className="relative flex items-end flex-grow w-full max-w-screen-md mt-2 space-x-2 p-6 border-l-2 border-b-2 border-gray-500">
        {heights.map((height, index) => (
          <Bar
            key={index}
            index={index}
            height={height}
            volume={valuesArr[index]}
            label={labelArr[index]}
            handleClick={handleBarClick}
          />
        ))}
      </div>
    </div>
  );
};

export default BarChart;

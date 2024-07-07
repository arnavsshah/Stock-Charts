import { CandleStickPlotProps } from "@/types";

import CandleStick from "@/components/CandleStick";

const CandleStickPlot = ({
  title,
  subTitle,
  prices,
  labels,
}: CandleStickPlotProps) => {
  const getPositions = (maxPrice: number, minPrice: number) => {
    const priceRange = maxPrice - minPrice;

    const positions = prices.map((price) => {
      const upperPrice = Math.max(price.open, price.close);
      const lowerPrice = Math.min(price.open, price.close);

      return {
        top1: ((maxPrice - price.high) * 100) / priceRange,
        top2: ((maxPrice - upperPrice) * 100) / priceRange,
        height1: ((price.high - price.low) * 100) / priceRange,
        height2: ((upperPrice - lowerPrice) * 100) / priceRange,
      };
    });

    return positions;
  };

  const maxPrice = Math.max(...prices.map((price) => price.high));
  const minPrice = Math.min(...prices.map((price) => price.low));
  const priceIntervals: number[] = [];

  for (let i = 0; i < 4; i++) {
    priceIntervals.push(minPrice + (maxPrice - minPrice) * (i / 3));
  }

  const positions = getPositions(maxPrice, minPrice);

  return (
    <div className="flex flex-col items-center w-full bg-black p-10 pb-20 rounded-md shadow-md ">
      <h2 className="text-xl text-white font-bold">{title}</h2>
      <span className="text-sm font-semibold text-gray-500 mb-10">
        {subTitle}
      </span>
      <div className="relative flex flex-col items-center w-full max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-xl p-6 border-l-2 border-b-2 border-gray-500">
        <div className="flex items-center w-full mt-2 space-x-2">
          {positions.map((position, index) => (
            <CandleStick
              key={index}
              prices={prices[index]}
              positions={position}
              label={labels[index]}
              isGreen={prices[index].open < prices[index].close}
            />
          ))}
        </div>

        {priceIntervals.map((price, index) => (
          <div
            key={index}
            style={{ bottom: `calc(1.5rem + (5 * ${index}rem))` }}
            className="absolute -left-12 text-sm font-semibold text-gray-500"
          >
            ${Math.round(price)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandleStickPlot;

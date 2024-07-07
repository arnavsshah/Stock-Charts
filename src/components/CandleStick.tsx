import { CandleStickProps } from "@/types";

const CandleStick = ({
  prices,
  positions,
  label,
  isGreen,
}: CandleStickProps) => {
  const { top1, top2, height1, height2 } = positions;
  return (
    <div className="relative flex flex-col items-center flex-grow h-64 pb-5 group">
      <div
        style={{ top: `${top1}%`, height: `${height1}%` }}
        className={
          "absolute flex justify-center w-0.5 bg-white z-0 group-hover:scale-125 transition-all ease-in duration-100"
        }
      >
        <span className="absolute top-0 hidden z-10 -mt-6 text-sm font-semibold text-white group-hover:block group-hover:scale-x-75 group-hover:text-lg">
          {prices.high.toFixed(2)}
        </span>
        <span className="absolute -bottom-5 hidden z-10 -mt-6 text-sm font-semibold text-white group-hover:block group-hover:scale-x-75 group-hover:text-lg">
          {prices.low.toFixed(2)}
        </span>
      </div>
      <div
        style={{ top: `${top2}%`, height: `${height2}%` }}
        className={`absolute flex justify-center w-full ${
          isGreen
            ? "bg-green-700 group-hover:bg-green-500"
            : "bg-red-700 group-hover:bg-red-500"
        } z-10 group-hover:scale-125 transition-transform ease-in duration-100`}
      ></div>
      <span className="absolute -bottom-12 text-sm font-semibold text-gray-500">
        {label}
      </span>
    </div>
  );
};

export default CandleStick;

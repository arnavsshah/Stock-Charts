import { notFound } from "next/navigation";

import { CandleStickPlot, BarChart } from "@/components";
import { fetchStockData } from "@/lib/utils";
import { tickers } from "@/constants";
import { StockData } from "@/types";

const Dashboard = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string };
}) => {
  const ticker = searchParams?.ticker || "AAPL";

  if (tickers.includes(ticker) === false) {
    notFound();
  }

  const prices: StockData[] = await fetchStockData(ticker);

  if (!prices || prices.length === 0) {
    throw new Error(`Failed to fetch stock data for ${ticker}`);
  }

  const volumes: number[] = prices.map((price: StockData) => price.volume);

  let labels: string[] = [];
  for (let i = 1; i < prices.length + 1; i++) {
    labels.push(`${i}`);
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 w-full h-full">
      <div className="text-6xl text-white leading-relaxed text-center xl:text-left">
        Interact with these Stock Charts!
      </div>
      <div className="xl:col-span-2 flex justify-center">
        <BarChart
          title={"Bar Chart: Click to Remove"}
          subTitle={`Volume of ${ticker} traded over the past month`}
          values={volumes}
          labels={labels}
        />
      </div>
      <div className="col-span-1 xl:col-span-3 flex justify-center">
        <CandleStickPlot
          title={"Candle-Stick Plot"}
          subTitle={`Price of ${ticker} over the past month`}
          prices={prices}
          labels={labels}
        />
      </div>
    </div>
  );
};

export default Dashboard;

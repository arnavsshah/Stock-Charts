export const fetchStockData = async (ticker: string) => {
  if (!ticker) {
    return [];
  }

  const PLOYGON_API_KEY: string = process.env.PLOYGON_API_KEY || "";
  const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/2024-06-03/2024-07-03?adjusted=true&sort=asc&apiKey=${PLOYGON_API_KEY}`;

  try {
    const response = await fetch(url);
    const jsonRespone = await response.json();
    return formatData(jsonRespone);
  } catch (error) {
    console.log(error);
    throw new Error(`Failed to fetch stock data for ${ticker}`);
  }
};

const formatData = (data: any) => {
  return data.results.map((result: any) => {
    return {
      volume: result.v,
      open: result.o,
      high: result.h,
      low: result.l,
      close: result.c,
    };
  });
};

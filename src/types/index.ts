export interface SideBarItemProps {
  icon: React.ReactNode;
  name: string;
  path: string;
}

export interface CustomDropDownProps {
  placeHolder: string;
  options: string[];
}

export interface StockData {
  volume: number;
  open: number;
  high: number;
  low: number;
  close: number;
}

export interface Positions {
  top1: number;
  top2: number;
  height1: number;
  height2: number;
}

export interface CandleStickPlotProps {
  title: string;
  subTitle: string;
  prices: StockData[];
  labels: string[];
}

export interface CandleStickProps {
  prices: StockData;
  positions: Positions;
  label: string;
  isGreen: boolean;
}

export interface BarChartProps {
  title: string;
  subTitle: string;
  values: number[];
  labels: string[];
}

export interface BarProps {
  index: number;
  height: number;
  volume: number;
  label: string;
  handleClick: (key: number) => void;
}

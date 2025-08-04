import z from "zod";

export interface CoinInfo {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string; // ISO8601 날짜 문자열
  atl: number;
  atl_change_percentage: number;
  atl_date: string; // ISO8601 날짜 문자열
  roi: null; // ROI 정보가 없으므로 null, 값이 있을 경우엔 다른 타입으로 정의 필요
  last_updated: string; // ISO8601 날짜 문자열
}

export interface CurrencySelectOption {
  label: string;
  value: string;
  imgSrc: string;
}

export const buyCryptoSchema = z.object({
  spend: z.object({
    currency: z.string(),
    amount: z.string(),
  }),
  receive: z.object({
    currency: z.string(),
    amount: z.string(),
  }),
  payment: z.object({
    method: z.string(),
    price: z.number(),
  }),
});

export type IBuyCryptoSchema = z.infer<typeof buyCryptoSchema>;

import { CoinInfo } from "./model";

const COINGECKO_DOMAIN = "https://api.coingecko.com";

export const getMarkets = async (): Promise<CoinInfo[]> => {
  const url = "/api/v3/coins/markets";

  const res = fetch(`${COINGECKO_DOMAIN}/${url}/?vs_currency=usd`);
  if (!(await res).ok) {
    throw { errorCode: "coins/markets error" };
  }

  return (await res).json();
};

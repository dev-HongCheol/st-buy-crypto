import { CoinInfo, CurrencySelectOption } from "@/app/_api/model";
import { useMemo } from "react";
import CurrencyInput from "./CurrencyInput";

interface Props {
  markets: CoinInfo[];
}

const Form = ({ markets }: Props) => {
  const currencyOptions: CurrencySelectOption[] = useMemo(
    () =>
      markets.map((coin) => ({
        label: coin.name,
        value: coin.symbol,
        imgSrc: coin.image,
      })),
    [markets],
  );

  return (
    <div className="m-4 w-[720px] rounded p-2 shadow-2xl">
      <div className="relative flex w-[250px]">
        {/* bg */}
        <div className="absolute top-0 z-0 h-full w-full bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABBAAAACgBAMAAABHzoKlAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAPUExURUdwTP///////////////xPgMRoAAAAEdFJOUwCTUNUAxBs8AAACU0lEQVR42u3Z203DQBRF0cFQgAMpwB8UECUUgPHtvyZQHspDYwTfZ50WZskeb7d2s2FzqJQdNlOz7oa3ytremff2VHFbPBQ4IGHlvVBFgrX2kQmhZkd/t/dK3c7hp18Qzhsd/3XbYAheDtc9V3kkWPYDwSPBDeEyn5DxnwynfSFwWriDWhBwVXRd9GbwblCXvRt8M/huWNsLB344uCK4JLgiiIt3GzD4GQfuim6LcpKk5KPBZ4OPht4+QdhS4PsRBBBkBH8bQAChMwgUJRAUJRBAAEFRAgEEEKRFEBQlEEAAQVECAQQQpEUQFCUQQABBUQIBBBCkRRAUJRBAAEFRAgEEEKRFEBQlEEAAQVECAQQQpEUQFCUQQABBUQIBBBCkRRAUJRBAAEFRAgEEEKRFEBQlEEAAQVECAQQQpEUQFCUQQABBUQIBBBCkRRAUJRBAAEFRAgEEECw8LTp+RQmEh40gGAimKIEAAgiKEghrm0EwEExRAgEEEKRFEBQlEEAAQVECAQQQpEUQFCUQQABBUQIBBBCkRRAUJRBAAEFRAgEEEKRFEBQlEEAAQVECAQQQpEUQFCUQQABBUQIBBBCkRRAUJRBAAEFRAgEEEKRFEBQlEEAAQVECAQQQpEUQFCUQQABBUQIBBBCkRRAUJRBAAEFRAgEEEKRFELK3gGDJIcHBCwkgdLcDwYJviw7ebREElwQQXBJAcEkAQUkAwbsBhP9uBsGOG0Gw1EeCU/dIAMEjAQQfDiD86YfDBIJFvhwcOQkg/C5hAsGO94RXEOxMIeap8A1CyWk9gc7TZAAAAABJRU5ErkJggg==)] bg-size-[100%_80px] bg-top bg-no-repeat"></div>
        <div className="z-1 h-full flex-1 p-4 text-center text-black">Buy</div>
        <div className="h-full flex-1 bg-gray-200 p-4 text-center">Sell</div>
      </div>
      <div className="flex flex-col gap-3 p-4">
        <CurrencyInput type="spend" options={currencyOptions} />
        <CurrencyInput type="receive" options={currencyOptions} />
      </div>
    </div>
  );
};

export default Form;

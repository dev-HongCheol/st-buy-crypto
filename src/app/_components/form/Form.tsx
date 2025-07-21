import React, { useMemo } from "react";
import AmountInput from "./AmountInput";
import { CoinInfo, CurrencySelectOption } from "@/app/_api/model";
import CurrencySelect from "./CurrencySelect";

interface Props {
  markets: CoinInfo[];
}

const Form = ({ markets }: Props) => {
  const currencyOptions: CurrencySelectOption[] = useMemo(
    () =>
      markets.map((coin) => ({
        label: coin.name,
        value: coin.id,
        imgSrc: coin.image,
      })),
    [markets],
  );

  return (
    <div>
      <AmountInput />
      <CurrencySelect options={currencyOptions} />
    </div>
  );
};

export default Form;

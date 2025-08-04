"use client";
import { CurrencySelectOption, IBuyCryptoSchema } from "@/app/_api/model";
import { useFormContext } from "react-hook-form";
import AmountInput from "./AmountInput";
import CurrencySelect from "./CurrencySelect";

interface Props {
  options: CurrencySelectOption[];
  type: "spend" | "receive";
}

function CurrencyInput({ options, type }: Props) {
  const { setValue } = useFormContext<IBuyCryptoSchema>();

  const handleChangeAmount = (amount: string) => {
    setValue(`${type}.amount`, amount);
  };

  const handleChangeCurrency = (currency: string) => {
    setValue(`${type}.currency`, currency);
  };

  return (
    <div className="flex gap-2 rounded bg-gray-200 p-2">
      <div className="flex-1">
        <p className="ps-1">{type}</p>
        <AmountInput onChange={handleChangeAmount} />
      </div>
      <CurrencySelect options={options} onChange={handleChangeCurrency} />
    </div>
  );
}

export default CurrencyInput;

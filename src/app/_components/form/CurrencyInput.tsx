"use client";
import { CurrencySelectOption } from "@/app/_api/model";
import React, { useCallback, useState } from "react";
import AmountInput from "./AmountInput";
import CurrencySelect from "./CurrencySelect";

interface Props {
  options: CurrencySelectOption[];
  type: "spend" | "receive";
}

function CurrencyInput({ options, type }: Props) {
  const [amount, setAmount] = useState("");
  const handleAmountChange = useCallback((amount: string) => {
    setAmount(amount);
  }, []);

  return (
    <div className="flex gap-2 rounded bg-gray-200 p-2">
      <div className="flex-1">
        <p className="ps-1">{type}</p>
        <AmountInput onChange={handleAmountChange} />
      </div>
      <CurrencySelect options={options} />
    </div>
  );
}

export default CurrencyInput;

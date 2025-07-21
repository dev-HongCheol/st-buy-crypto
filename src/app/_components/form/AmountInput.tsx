"use client";
import { Input } from "@/components/ui/input";
import BigNumber from "bignumber.js";
import React, { ChangeEvent, useState } from "react";

/**
 * 수량 입력 input.
 * 숫자만 입력이 가능하며 콤마로 자리수를 표시한다.
 * @returns
 */
const AmountInput = () => {
  const [amount, setAmount] = useState("");

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const onlyNumberValue = value.replaceAll(",", "");

    let bnValue;
    try {
      bnValue = new BigNumber(onlyNumberValue);
      const isEndPoint = onlyNumberValue.endsWith(".");
      setAmount(isEndPoint ? value : bnValue.toFormat());
    } catch {
      if (onlyNumberValue === "") setAmount(event.target.value);
    }
  };

  return <Input onChange={handleOnChange} value={amount} />;
};

export default AmountInput;

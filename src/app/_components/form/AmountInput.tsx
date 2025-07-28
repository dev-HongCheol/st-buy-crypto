"use client";
import { Input } from "@/components/ui/input";
import BigNumber from "bignumber.js";
import { ChangeEvent, memo, useCallback, useState } from "react";

interface Props {
  onChange: (amount: string) => void;
}
/**
 * 수량 입력 input.
 * 숫자만 입력이 가능하며 콤마로 자리수를 표시한다.
 * @returns
 */
const AmountInput = ({ onChange }: Props) => {
  const [amount, setAmount] = useState("");

  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      const onlyNumberValue = value.replaceAll(",", "");

      let bnValue;
      try {
        bnValue = new BigNumber(onlyNumberValue);
        const isEndPoint = onlyNumberValue.endsWith(".");
        setAmount(isEndPoint ? value : bnValue.toFormat());
      } catch {
        if (onlyNumberValue === "") {
          setAmount(event.target.value);
        }
      } finally {
        if (amount === "") {
          onChange("");
          return;
        }

        if (bnValue && !bnValue.isNaN()) {
          onChange(bnValue.toFixed());
        }
      }
    },
    [amount, onChange],
  );

  return (
    <Input
      className="focus:border-none"
      onChange={handleOnChange}
      value={amount}
    />
  );
};

export default memo(AmountInput);

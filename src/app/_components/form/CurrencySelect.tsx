import { CurrencySelectOption } from "@/app/_api/model";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import React from "react";

interface Props {
  options: CurrencySelectOption[];
}

const CurrencySelect = ({ options }: Props) => {
  const defaultValue = options[0];

  return (
    <Select defaultValue={defaultValue.value}>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent className="max-h-[50dvh]">
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            <Image
              className="rounded-full"
              width={20}
              height={20}
              src={option.imgSrc}
              alt={`${option.label} logo image`}
            />
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CurrencySelect;

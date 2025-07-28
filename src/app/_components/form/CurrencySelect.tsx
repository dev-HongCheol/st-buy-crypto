import { CurrencySelectOption } from "@/app/_api/model";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import React, { memo } from "react";

interface Props {
  options: CurrencySelectOption[];
}

const CurrencySelect = ({ options }: Props) => {
  const defaultValue = options[0];

  return (
    <Select defaultValue={defaultValue.value}>
      <SelectTrigger className="!h-[auto] w-[280px] bg-white">
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent className="max-h-[250px]">
        {options.map((option) => (
          <SelectItem key={option.value + option.label} value={option.value}>
            <Image
              className="rounded-full"
              width={25}
              height={25}
              src={option.imgSrc}
              alt={`${option.label} logo image`}
            />
            {option.value.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default memo(CurrencySelect);

"use client";

import {
  buyCryptoSchema,
  CoinInfo,
  CurrencySelectOption,
  IBuyCryptoSchema,
} from "@/app/_api/model";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import CurrencyInput from "./CurrencyInput";

interface Props {
  markets: CoinInfo[];
}

const Form = ({ markets }: Props) => {
  // 화폐정보 select list
  const currencyOptions: CurrencySelectOption[] = useMemo(
    () =>
      markets.map((coin) => ({
        label: coin.symbol,
        value: coin.id,
        imgSrc: coin.image,
      })),
    [markets],
  );

  const methods = useForm<IBuyCryptoSchema>({
    defaultValues: {
      spend: {
        currency: "",
        amount: "0",
      },
      receive: {
        currency: "",
        amount: "0",
      },
      payment: {
        method: "card",
        price: 119415,
      },
    },
    resolver: zodResolver(buyCryptoSchema),
  });

  const handleOnSubmit = (data: IBuyCryptoSchema) => {
    console.log(data);
  };

  //   const { watch } = methods;
  //   const spend = watch("spend");
  //   console.log("🚀 ~ Form ~ spend_", spend);

  //   useEffect(() => {
  //     console.log("🚀 ~ Form ~ methods.spend()_", spend);
  //   }, [spend]);

  //   // 초기값 설정
  //   useEffect(() => {
  //     if (!currencyOptions) return;
  //     setValue("spend.currency", currencyOptions[0].value);
  //     setValue("receive.currency", currencyOptions[1].value);
  //   }, [currencyOptions, setValue]);

  return (
    <FormProvider {...methods}>
      <form
        className="m-4 w-[720px] rounded p-2 shadow-2xl"
        onSubmit={methods.handleSubmit(handleOnSubmit)}
      >
        <div className="relative flex w-[250px]">
          {/* bg */}
          <div className="absolute top-0 z-0 h-full w-full bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABBAAAACgBAMAAABHzoKlAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAPUExURUdwTP///////////////xPgMRoAAAAEdFJOUwCTUNUAxBs8AAACU0lEQVR42u3Z203DQBRF0cFQgAMpwB8UECUUgPHtvyZQHspDYwTfZ50WZskeb7d2s2FzqJQdNlOz7oa3ytremff2VHFbPBQ4IGHlvVBFgrX2kQmhZkd/t/dK3c7hp18Qzhsd/3XbYAheDtc9V3kkWPYDwSPBDeEyn5DxnwynfSFwWriDWhBwVXRd9GbwblCXvRt8M/huWNsLB344uCK4JLgiiIt3GzD4GQfuim6LcpKk5KPBZ4OPht4+QdhS4PsRBBBkBH8bQAChMwgUJRAUJRBAAEFRAgEEEKRFEBQlEEAAQVECAQQQpEUQFCUQQABBUQIBBBCkRRAUJRBAAEFRAgEEEKRFEBQlEEAAQVECAQQQpEUQFCUQQABBUQIBBBCkRRAUJRBAAEFRAgEEEKRFEBQlEEAAQVECAQQQpEUQFCUQQABBUQIBBBCkRRAUJRBAAEFRAgEEECw8LTp+RQmEh40gGAimKIEAAgiKEghrm0EwEExRAgEEEKRFEBQlEEAAQVECAQQQpEUQFCUQQABBUQIBBBCkRRAUJRBAAEFRAgEEEKRFEBQlEEAAQVECAQQQpEUQFCUQQABBUQIBBBCkRRAUJRBAAEFRAgEEEKRFEBQlEEAAQVECAQQQpEUQFCUQQABBUQIBBBCkRRAUJRBAAEFRAgEEEKRFELK3gGDJIcHBCwkgdLcDwYJviw7ebREElwQQXBJAcEkAQUkAwbsBhP9uBsGOG0Gw1EeCU/dIAMEjAQQfDiD86YfDBIJFvhwcOQkg/C5hAsGO94RXEOxMIeap8A1CyWk9gc7TZAAAAABJRU5ErkJggg==)] bg-size-[100%_80px] bg-top bg-no-repeat"></div>
          <div className="z-1 h-full flex-1 p-4 text-center text-black">
            Buy
          </div>
          <div className="h-full flex-1 bg-gray-200 p-4 text-center">Sell</div>
        </div>
        <div className="flex flex-col gap-3 p-4">
          <CurrencyInput type="spend" options={currencyOptions} />
          <CurrencyInput type="receive" options={currencyOptions} />
        </div>
        <button>buy</button>
      </form>
    </FormProvider>
  );
};

export default Form;

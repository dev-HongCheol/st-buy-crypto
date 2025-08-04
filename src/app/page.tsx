import { getMarkets } from "./_api/fetch";
import Form from "./_components/form/Form";

export default async function Home() {
  const markets = await getMarkets();
  console.log("🚀 ~ Home ~ makets_", markets[0]);

  return <Form markets={markets} />;
}

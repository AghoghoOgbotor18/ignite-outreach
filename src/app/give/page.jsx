import GiveHero from "../components/give/GiveHero";
import GiveFlow from "../components/give/GiveFlow";
import { givingOptions } from "../data/giving";

export const metadata = {
  title: "Give",
  description:
    "Give your tithe or offering, or support our outreaches at Ignite Outreach.",
};

export default async function GivePage({ searchParams }) {
  const params = await searchParams;
  const requested = params?.for;
  const initialType = givingOptions.some((o) => o.id === requested)
    ? requested
    : "offering";

  return (
    <>
      <GiveHero />
      <GiveFlow initialType={initialType} />
    </>
  );
}
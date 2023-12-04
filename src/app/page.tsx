import { Card } from "@/components/sections/card.section";
import HeroSection from "@/components/sections/hero.section";
import TextBlockSection from "@/components/sections/text-block.section";

const page = () => {
  return (
    <>
      <HeroSection />
      <TextBlockSection />
      <Card />
    </>
  );
};

export default page;

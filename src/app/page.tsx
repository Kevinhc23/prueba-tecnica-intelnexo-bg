import {
  AccordionEU,
  AccordionSudamerica,
  AccordionUSA,
} from "@/components/sections/accordion.section";
import { Card, Card2 } from "@/components/sections/card.section";
import HeroSection from "@/components/sections/hero.section";
import { Requirements } from "@/components/sections/requiriments.section";
import ReviewSection from "@/components/sections/review.section";
import TextBlockSection from "@/components/sections/text-block.section";

const page = () => {
  return (
    <>
      <HeroSection />
      <TextBlockSection />
      <Card />
      <div className="mb-24">
        <AccordionUSA />
        <AccordionEU />
        <AccordionSudamerica />
      </div>
      <ReviewSection />
      <Requirements />
      <Card2 />
    </>
  );
};

export default page;

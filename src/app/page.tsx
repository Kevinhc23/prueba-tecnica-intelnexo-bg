import {
  AccordionEU,
  AccordionSA,
  AccordionUSA,
} from "@/components/sections/accordion.section";
import { Card, Card2 } from "@/components/sections/card.section";
import { Hero } from "@/components/sections/hero.section";
import { Requirements } from "@/components/sections/requiriments.section";
import ReviewSection from "@/components/sections/review.section";
import TextBlockSection from "@/components/sections/text-block.section";

const page = () => {
  return (
    <>
      <main className="bg-[#160f41]">
        <Hero />
        <TextBlockSection />
        <Card />
        <div className=" bg-white py-16 space-y-12">
          <AccordionUSA />
          <AccordionEU />
          <AccordionSA />
        </div>
        <ReviewSection />
        <Requirements />
        <Card2 />
      </main>
    </>
  );
};

export default page;

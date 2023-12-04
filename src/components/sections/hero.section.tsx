import Image from "next/image";
import HeaderImage from "@/../public/Hero-Image.jpg";
import { Paragraph, Title } from "../ui/tipography";
import { ButtonLink, ButtonLinkSecondary } from "../ui/button.ui";
import { ArrowRight } from "@/lib/icons";

const HeroSection = () => {
  return (
    <>
      <Image
        src={HeaderImage}
        alt="Hero Image"
        className=" object-cover -object-top w-screen h-[99px] aspect-auto md:hidden"
        priority
      />
      <section className="bg-[#160f41] py-16 px-8 justify-center flex flex-col gap-4">
        <span className="text-white uppercase">remesas</span>
        <Title className="text-white text-3xl">
          <span className="text-[#ed99c5]">Tus Giros te acercan </span>a los que
          están lejos en minutos
        </Title>
        <Paragraph className="text-white text-xl font-light">
          Recibe dinero del exterior en tu cuenta o envíalo a más de 200 países
          como Colombia, Perú y Chile de forma rápida.
        </Paragraph>
        <div className="flex flex-col items-center justify-center pt-4 space-y-4">
          <ButtonLink>
            Ver Requisitos <ArrowRight />
          </ButtonLink>
          <ButtonLinkSecondary>
            No tienes cuenta? Ábrela aquí <ArrowRight />
          </ButtonLinkSecondary>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

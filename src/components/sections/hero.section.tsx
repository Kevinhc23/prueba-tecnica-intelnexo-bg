import Image from "next/image";
import HeaderImage from "@/../public/Hero-Image.jpg";
import { Paragraph, Title } from "../ui/tipography";
import { ButtonLink, ButtonLinkSecondary } from "../ui/button.ui";
import { ArrowRight } from "@/lib/icons";

export const Hero = () => {
  return (
    <>
      <Image
        src={HeaderImage}
        alt="Hero Image"
        className=" object-cover -object-top w-screen h-[99px] aspect-auto md:hidden"
        priority
      />
      <section className="flex justify-center items-center">
        <article className="md:w-1/2 md:container md:max-w-lg md:mx-auto space-y-4 py-12 px-6">
          <span className="text-white uppercase">remesas</span>
          <Title className="text-white text-3xl md:text-7xl">
            <span className="text-[#ed99c5]">
              Tus Giros te <br className="hidden md:block" />
              acercan{" "}
            </span>
            a los que están lejos{" "}
            <span className="md:hidden block">en minutos</span>
          </Title>
          <Paragraph className="text-white text-xl font-light">
            Recibe dinero del exterior en tu cuenta o envíalo a más de 200
            países como Colombia, Perú y Chile de forma rápida.
          </Paragraph>
          <div className="flex flex-col items-center justify-center pt-4 space-y-4 md:items-start">
            <ButtonLink>
              Ver Requisitos <ArrowRight />
            </ButtonLink>
            <ButtonLinkSecondary>
              No tienes cuenta? Ábrela aquí <ArrowRight />
            </ButtonLinkSecondary>
          </div>
        </article>
        <article className="w-1/2 hidden md:flex">
          <Image
            src={HeaderImage}
            alt="Hero Image"
            className=" object-cover h-[583px] aspect-auto ratio-16/9 w-full"
            priority
          />
        </article>
      </section>
    </>
  );
};

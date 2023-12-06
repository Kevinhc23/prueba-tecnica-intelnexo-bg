import { ArrowDownIcon } from "@/lib/icons";
import { Subtitle } from "../ui/tipography";
import Image from "next/image";
import {
  RemesadorasUSA,
  RemesadorasEU,
  RemesadorasSA,
} from "@/lib/remesadoras.data";
import LogoUSAGroup from "@/../public/LogoUsaGroup.png";
import LogoEUGroup from "@/../public/LogoEUGroup.png";
import LogoSudamericaGroup from "@/../public/LogoSAGroup.png";

export const AccordionUSA = () => {
  return (
    <>
      <section className="px-6 gap-12 md:container md:max-w-6xl md:mx-auto md:px-0">
        <article>
          <hr className="text-neutral-300 py-2 md:w-1/2" />
          <details className="group" open={true}>
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <Subtitle className="text-xl">Desde Sudamérica</Subtitle>
              <span className="transition-transform duration-300 transform group-open:rotate-180 md:hidden">
                <ArrowDownIcon />
              </span>
            </summary>
            <div className="flex flex-col gap-4 md:flex-row md:justify-between">
              <div>
                <div className="grid grid-cols-2 gap-2 py-2 md:gap-x-8 md:gap-y-4">
                  {RemesadorasUSA.map((remesadora) => {
                    return (
                      <>
                        <dl
                          className="flex flex-col justify-center space-y-2"
                          key={remesadora.id}
                        >
                          <dd className="text-lg text-neutral-800 font-light hover:text-neutral-500">
                            {remesadora.name}
                          </dd>
                        </dl>
                      </>
                    );
                  })}
                </div>
              </div>
              <picture className="flex justify-center items-center py-8  md:rounded-xl md:border md:border-neutral-200">
                <Image
                  src={LogoUSAGroup}
                  alt="Logo de Remesadoras"
                  width={397}
                  height={244}
                  className="object-cover ratio-auto md:w-[490px] md:h-auto md:object-contain md:px-8"
                />
              </picture>
            </div>
          </details>
        </article>
      </section>
    </>
  );
};

export const AccordionEU = () => {
  return (
    <>
      <section className="px-6 gap-12 md:container md:max-w-6xl md:mx-auto md:px-0">
        <article>
          <hr className="text-neutral-300 py-2 md:w-1/2" />
          <details className="group" open={true}>
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <Subtitle className="text-xl">Desde Sudamérica</Subtitle>
              <span className="transition-transform duration-300 transform group-open:rotate-180 md:hidden">
                <ArrowDownIcon />
              </span>
            </summary>
            <div className="flex flex-col gap-4 md:flex-row md:justify-between">
              <div>
                <div className="grid grid-cols-2 gap-2 py-2 md:gap-x-8 md:gap-y-4">
                  {RemesadorasEU.map((remesadora) => {
                    return (
                      <>
                        <dl
                          className="flex flex-col justify-center space-y-2"
                          key={remesadora.id}
                        >
                          <dd className="text-lg text-neutral-800 font-light hover:text-neutral-500">
                            {remesadora.name}
                          </dd>
                        </dl>
                      </>
                    );
                  })}
                </div>
              </div>
              <picture className="flex justify-center items-center  md:rounded-xl md:border md:border-neutral-200">
                <Image
                  src={LogoEUGroup}
                  alt="Logo de Remesadoras"
                  width={303}
                  height={240}
                  className="object-cover ratio-auto md:w-[460px] md:h-auto  md:object-contain md:px-4 md:aspect-square"
                />
              </picture>
            </div>
          </details>
        </article>
      </section>
    </>
  );
};

export const AccordionSA = () => {
  return (
    <>
      <section className="px-6 gap-12 md:container md:max-w-6xl md:mx-auto md:px-0">
        <article>
          <hr className="text-neutral-300 py-2 md:w-1/2" />
          <details className="group" open={true}>
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <Subtitle className="text-xl">Desde Sudamérica</Subtitle>
              <span className="transition-transform duration-300 transform group-open:rotate-180 md:hidden">
                <ArrowDownIcon />
              </span>
            </summary>
            <div className="flex flex-col gap-4 md:flex-row md:justify-between">
              <div>
                <div className="grid grid-cols-2 gap-2 py-2 md:gap-x-8 md:gap-y-4">
                  {RemesadorasSA.map((remesadora) => {
                    return (
                      <>
                        <dl
                          className="flex flex-col justify-center space-y-2"
                          key={remesadora.id}
                        >
                          <dd className="text-lg text-neutral-800 font-light hover:text-neutral-500">
                            {remesadora.name}
                          </dd>
                        </dl>
                      </>
                    );
                  })}
                </div>
              </div>
              <picture className="flex justify-center items-center py-8  md:rounded-xl md:border md:border-neutral-200">
                <Image
                  src={LogoSudamericaGroup}
                  alt="Logo de Remesadoras"
                  width={246}
                  height={70}
                  className="object-cover ratio-auto md:w-[490px] md:h-[140px] md:object-contain md:px-8"
                />
              </picture>
            </div>
          </details>
        </article>
      </section>
    </>
  );
};

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
      <section className="px-6 gap-12">
        <Subtitle className="text-2xl py-16">
          Dile a tus familiares que te envíen tus Giros a través de estas
          Remesadoras
        </Subtitle>
        <hr className="text-neutral-300 py-2" />
        <details className="group">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
            <Subtitle className="text-xl">Desde Estados Unidos</Subtitle>
            <span className="transition-transform duration-300 transform group-open:rotate-180">
              <ArrowDownIcon />
            </span>
          </summary>
          {
            <div className="grid grid-cols-2 items-center justify-center py-4 text-neutral-500 transition-opacity duration-300 ease-in-out opacity-0 group-open:opacity-100">
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
          }
          <picture className="flex justify-center items-center py-8">
            <Image
              src={LogoUSAGroup}
              alt="Logo de Remesadoras"
              width={297}
              height={244}
              className="object-cover ratio-16:9"
            />
          </picture>
        </details>
      </section>
    </>
  );
};

export const AccordionEU = () => {
  return (
    <>
      <section className="px-6 gap-12">
        <hr className="text-neutral-300 py-2" />
        <details className="group">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
            <Subtitle className="text-xl">Desde Europa</Subtitle>
            <span className="transition-transform duration-300 transform group-open:rotate-180">
              <ArrowDownIcon />
            </span>
          </summary>
          {
            <div className="grid grid-cols-2 items-center justify-center py-4 text-neutral-500 transition-opacity duration-300 ease-in-out opacity-0 group-open:opacity-100">
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
          }
          <picture className="flex justify-center items-center py-8">
            <Image
              src={LogoEUGroup}
              alt="Logo de Remesadoras"
              width={303}
              height={240}
              className="object-cover ratio-16:9"
            />
          </picture>
        </details>
      </section>
    </>
  );
};

export const AccordionSudamerica = () => {
  return (
    <>
      <section className="px-6 gap-12">
        <hr className="text-neutral-300 py-2" />
        <details className="group">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
            <Subtitle className="text-xl">Desde Sudamérica</Subtitle>
            <span className="transition-transform duration-300 transform group-open:rotate-180">
              <ArrowDownIcon />
            </span>
          </summary>
          {
            <div className="grid grid-cols-2 items-center justify-center py-4 text-neutral-500 transition-opacity duration-300 ease-in-out opacity-0 group-open:opacity-100">
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
          }
          <picture className="flex justify-center items-center py-8">
            <Image
              src={LogoSudamericaGroup}
              alt="Logo de Remesadoras"
              width={246}
              height={70}
              className="object-cover ratio-16:9"
            />
          </picture>
        </details>
      </section>
    </>
  );
};

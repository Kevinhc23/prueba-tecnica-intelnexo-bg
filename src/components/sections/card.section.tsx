import { ArrowRight } from "@/lib/icons";
import Link from "next/link";
import { Subtitle } from "../ui/tipography";

export const Card = () => {
  return (
    <>
      <section className="p-4 bg-white ">
        <div className="px-8 py-12 bg-[#d2006e] rounded-2xl flex justify-center flex-col items-center gap-8 md:max-w-6xl md:container md:mx-auto">
          <Subtitle className="text-white font-bold text-2xl text-center md:text-4xl">
            Envia hasta $9.000 por transacción o acumulado en el mes.
          </Subtitle>
          <Link
            href={"/"}
            className="w-[248px] h-12 px-4 py-2 rounded-[32px] justify-center items-center gap-2 inline-flex text-center text-white text-base font-bold leading-normal bg-[#160f41]"
          >
            Ver requisitos <ArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
};

export const Card2 = () => {
  return (
    <>
      <section className="p-6 bg-white">
        <div className="px-8 py-12  bg-[#160f41] rounded-2xl flex justify-center flex-col items-center gap-8 md:max-w-6xl md:container md:mx-auto">
          <Subtitle className="text-white font-bold text-2xl text-center">
            Te ayudamos a resolver todas tu dudas
          </Subtitle>
          <Link
            href={"/"}
            className="w-[248px] h-12 px-4 py-2 rounded-[32px] justify-center items-center gap-2 inline-flex text-center text-white font-semibold bg-[#d2006e] text-base"
          >
            Contactarme con el Banco <ArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
};

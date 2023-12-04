import { ArrowRight } from "@/lib/icons";
import Link from "next/link";
import { Subtitle } from "../ui/tipography";

export const Card = () => {
  return (
    <>
      <section className="p-6 ">
        <div className="px-8 py-12 bg-[#d2006e] rounded-2xl flex justify-center flex-col items-center gap-8 ">
          <Subtitle className="text-white font-bold text-2xl text-center">
            Envia hasta $9.000 por transacción o acumulado en el mes.
          </Subtitle>
          <Link
            href={"/"}
            className="w-[248px] h-12 px-5 py-3 rounded-[32px] justify-center items-center gap-2 inline-flex text-center text-white text-base font-bold leading-normal bg-[#160f41]"
          >
            Ver requisitos <ArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
};

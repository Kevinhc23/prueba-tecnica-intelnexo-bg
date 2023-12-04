import Link from "next/link";
import { childrenProps } from "@/d.type";

export const ButtonLink = ({ children, className }: childrenProps) => {
  return (
    <>
      <Link
        className={`w-[312px] h-12 px-5 py-3 rounded-[32px] justify-center items-center gap-2 inline-flex bg-[#d2006e] text-center text-white text-base font-bold leading-normal ${className}`}
        href={`/`}
      >
        {children}
      </Link>
    </>
  );
};

export const ButtonLinkSecondary = ({ children, className }: childrenProps) => {
  return (
    <>
      <Link
        href={"/"}
        className={`w-[312px] h-12 px-5 py-3 rounded-[32px] justify-center items-center gap-2 inline-flex text-center text-white text-base font-bold leading-normal border border-white bg-[#160f41] ${className}`}
      >
        {children}
      </Link>
    </>
  );
};

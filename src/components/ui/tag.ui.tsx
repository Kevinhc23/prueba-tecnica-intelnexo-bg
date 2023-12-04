import { childrenProps } from "@/d.type";

export const InfoTag = ({ children }: childrenProps) => {
  return (
    <>
      <span className="px-2 py-1 bg-[#e6f3e5] rounded-lg text-center text-[#0b4301] font-bold leading-none">
        {children}
      </span>
    </>
  );
};

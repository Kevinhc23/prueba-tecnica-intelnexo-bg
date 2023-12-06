import { childrenProps } from "@/d.type";

export const Title = ({ children, className }: childrenProps) => {
  return (
    <>
      <h1
        className={` font-bold leading-10 lg:leading-[52.80px] lg:text-[44px] ${className}`}
      >
        {children}
      </h1>
    </>
  );
};

export const Paragraph = ({ children, className }: childrenProps) => {
  return (
    <>
      <p className={`leading-normal ${className}`}>{children}</p>
    </>
  );
};

export const Subtitle = ({ children, className }: childrenProps) => {
  return (
    <>
      <h2 className={`font-bold leading-10 lg:leading-[52.80px] ${className}`}>
        {children}
      </h2>
    </>
  );
};

export const HeadingTitle3 = ({ children, className }: childrenProps) => {
  return (
    <>
      <h3 className={`font-bold leading-10 lg:leading-[52.80px] ${className}`}>
        {children}
      </h3>
    </>
  );
};

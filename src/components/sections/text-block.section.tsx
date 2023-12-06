import { Feature, Feature2 } from "../ui/feature.ui";
import { InfoTag } from "../ui/tag.ui";
import { Subtitle } from "../ui/tipography";

const TextBlockSection = () => {
  return (
    <>
      <section className="py-12 px-6 bg-white space-y-16">
        <div className="space-y-8 md:max-w-6xl md:container md:mx-auto">
          <InfoTag className="">Si recibes dinero</InfoTag>
          <Subtitle className="text-black font-bold text-3xl">
            Recibe dinero del exterior dentro de Ecuador sin recargos
            adicionales.
          </Subtitle>
          <Feature />
        </div>
        <div className="space-y-8 md:max-w-6xl md:container md:mx-auto">
          <InfoTag>Si envías dinero</InfoTag>
          <Subtitle className="text-black font-bold text-2xl lg:text-3xl">
            Envía dinero desde Ecuador a cualquier parte del mundo.
          </Subtitle>
          <Feature2 />
        </div>
      </section>
    </>
  );
};

export default TextBlockSection;

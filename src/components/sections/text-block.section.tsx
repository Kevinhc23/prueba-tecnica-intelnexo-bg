import { Feature, Feature2 } from "../ui/feature.ui";
import { InfoTag } from "../ui/tag.ui";
import { Subtitle } from "../ui/tipography";

const TextBlockSection = () => {
  return (
    <>
      <section className="py-12 px-6 ">
        <div className="py-12 space-y-8">
          <InfoTag className="">Si recibes dinero</InfoTag>
          <Subtitle className="text-black font-bold text-2xl">
            Recibe dinero del exterior dentro de Ecuador sin recargos
            adicionales.
          </Subtitle>
          <Feature />
        </div>
        <div className="py-12 space-y-8">
          <InfoTag>Si envías dinero</InfoTag>
          <Subtitle className="text-black font-bold text-2xl">
            Envía dinero desde Ecuador a cualquier parte del mundo.
          </Subtitle>
          <Feature2 />
        </div>
      </section>
    </>
  );
};

export default TextBlockSection;

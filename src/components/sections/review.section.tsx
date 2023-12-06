import { Paragraph } from "../ui/tipography";

const ReviewSection = () => {
  return (
    <>
      <section className="p-4 bg-[#160f41]">
        <div className="text-white py-16  [text-wrap:pretty;] flex-col flex gap-4 md:container md:max-w-6xl md:mx-auto">
          <Paragraph className="text-2xl font-semibold md:text-4xl">
            “Enviar dinero al extranjero nunca ha sido tan fácil y confiable
            como con el servicio del Banco Guayaquil. La velocidad con la que mi
            dinero llega a mi familia es impresionante.”
          </Paragraph>
          <span className="text-md font-extralight md:text-xl">
            Javier Soto, Usuario real de Giros
          </span>
        </div>
      </section>
    </>
  );
};

export default ReviewSection;

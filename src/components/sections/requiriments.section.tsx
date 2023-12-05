import { InfoTag } from "@/components/ui/tag.ui";
import { Subtitle } from "@/components/ui/tipography";
import { ArrowDownIcon } from "@/lib/icons";

export const Requirements = () => {
  return (
    <>
      <section className="py-12 px-6">
        <div className="py-12 space-y-4">
          <InfoTag className="">Requisitos</InfoTag>
          <Subtitle className="text-black font-bold text-2xl">
            Requisitos para enviar y recibir tus Giros
          </Subtitle>

          <section className="gap-12">
            <details className="group py-4">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <Subtitle className="text-lg">
                  Para recibir dinero en Ecuador
                </Subtitle>
                <span className="transition-transform duration-300 transform group-open:rotate-180">
                  <ArrowDownIcon />
                </span>
              </summary>
              <div className="py-4 text-neutral-500 transition-opacity duration-300 ease-in-out opacity-0 group-open:opacity-100">
                <ol className="list-decimal px-4 space-y-2">
                  <li className="text-lg">
                    Cédula o pasaporte de la persona que recibe el dinero en
                    Ecuador (Beneficiario).
                  </li>
                  <li className="text-lg">
                    Clave del giro (La clave debe dártela la persona que hace el
                    envío)
                  </li>
                </ol>
              </div>
            </details>
            <hr className="text-neutral-300" />
            <details className="group py-4">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <Subtitle className="text-lg">
                  Para enviar dinero al exterior
                </Subtitle>
                <span className="transition-transform duration-300 transform group-open:rotate-180">
                  <ArrowDownIcon />
                </span>
              </summary>
              <div className="py-4 text-neutral-500 transition-opacity duration-300 ease-in-out opacity-0 group-open:opacity-100">
                <ol className="list-decimal px-4 space-y-2">
                  <li className="text-lg">
                    Datos personales de la persona que envía (Ordenante): Nombre
                    y apellido cédula o pasaporte, ocupación, dirección y
                    teléfono.
                  </li>
                  <li className="text-lg">
                    Datos personales de quién recibe el dinero en el exterior
                    (Beneficiario): Nombres, apellidos y teléfono.
                  </li>
                </ol>
              </div>
            </details>
          </section>
        </div>
      </section>
    </>
  );
};

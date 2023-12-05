import {
  WorldIcon,
  MultipleArrow,
  PersonIcon,
  StoreIcon,
  ClockIcon,
  LocationIcon,
} from "@/lib/icons";
import { Paragraph, HeadingTitle3 } from "../ui/tipography";
import Link from "next/link";

const feautures1 = [
  {
    id: 1,
    title: "Amplia red de pagos",
    description:
      "Retira tu dinero en más de 150 agencias y 18.000 Bancos del Barrio a nivel nacional.",
    icon: <WorldIcon />,
    linkText: "Encuentra el más cercano",
    link: "/",
  },
  {
    id: 2,
    title: "Múltiples opciones de cobro",
    description:
      "Cobra tu Giro en efectivo, en tu Cuenta Corriente, de Ahorros, Cuenta Amiga o tu cuenta.",
    icon: <MultipleArrow />,
    linkText: "Abre tu cuenta en línea",
    link: "/",
  },
  {
    id: 3,
    title: "Acceso a nuestros servicios",
    description:
      "Accede a todos los servicios de Banco Guayaquil recibiendo tus Giros del exterior directamente a tu número de cuenta.",
    icon: <PersonIcon />,
    linkText: "Conoce más",
    link: "/",
  },
];

const feautures2 = [
  {
    id: 1,
    title: "Atención en ventanillas",
    description:
      "Realiza el envío desde cualquiera de nuestras más de 150 agencias a nivel nacional.",
    icon: <StoreIcon />,
  },
  {
    id: 2,
    title: "Multiples destinos",
    description:
      "Envía tus Giros desde Banco Guayaquil a Colombia, Perú, Chile y más de 200 países. ",
    icon: <LocationIcon />,
  },
  {
    id: 3,
    title: "Disponible en minutos",
    description:
      "El dinero estará disponible en los puntos de atención de MoneyGram en el país de destino.",
    icon: <ClockIcon />,
  },
];

export const Feature = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-4 gap-16">
        {feautures1.map((feauture) => {
          return (
            <div
              className="flex flex-col justify-center space-y-4"
              key={feauture.id}
            >
              <span className="text-4xl">{feauture.icon}</span>
              <HeadingTitle3 className="text-xl">
                {feauture.title}
              </HeadingTitle3>
              <Paragraph className="text-lg text-neutral-500">
                {feauture.description}
              </Paragraph>
              <Link
                href={feauture.link}
                className="text-md  text-blue-600 underline underline-offset-2"
              >
                {feauture.linkText}
              </Link>
              <span className="border-b-[1px] border-neutral-300 py-4"></span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export const Feature2 = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-4 gap-16">
        {feautures2.map((feauture) => {
          return (
            <>
              <div
                className="flex flex-col justify-center space-y-4"
                key={feauture.id}
              >
                <span className="text-4xl">{feauture.icon}</span>
                <HeadingTitle3 className="text-xl">
                  {feauture.title}
                </HeadingTitle3>
                <Paragraph className="text-lg text-neutral-500">
                  {feauture.description}
                </Paragraph>
                <hr className="text-neutral-300 py-4" />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

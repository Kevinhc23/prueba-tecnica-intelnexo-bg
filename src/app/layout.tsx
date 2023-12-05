import type { Metadata } from "next";
import { Inter, Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

const SEO = {
  title: "Banco Guayaquil | Remesas Internacionales",
  description:
    "Recibe dinero del exterior en tu cuenta o envíalo a más de 200 países con las mejores tarifas y el mejor tipo de cambio. ¡Abre tu Cuenta del banco Guayaquil ahora!",
  image: "../../public/mobile-header-bg.jpg",
};

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>{children}</body>
    </html>
  );
}

import { Footer } from "@/components/Footer/Footer";
import Header from "@/components/Header";
import GetAuthState from "@/modules/Auth/GetAuthState";
import "@/styles/globals.css";
import { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cena Estelar",
  description: "Reviews duvidosas, ou não.",
};

export default function GlobalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <GetAuthState>{children}</GetAuthState>
        <Footer />
      </body>
    </html>
  );
}

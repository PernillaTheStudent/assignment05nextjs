import "./globals.css";
import { Signika_Negative, Montserrat, Lora } from "next/font/google";

const signika_negative = Signika_Negative({
  variable: "--font-signika-negative",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["300", "600", "700"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "PW Portfolio -- code(x)",
  description: "Building useful & beautiful interfaces",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${signika_negative.variable} ${montserrat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

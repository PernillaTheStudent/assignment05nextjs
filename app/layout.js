import "./globals.css";
import { Signika_Negative, Montserrat, Lora } from "next/font/google";
// import type { Metadata } from "next";

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
  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  // authors: [{ name: 'Seb' }, { name: 'Josh', url: 'https://nextjs.org' }],
  // colorScheme: 'dark',
  // creator: 'Jiachi Liu',
  // publisher: 'Sebastian Markbåge',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "0Wqv3AczPZTQBVvCeocQ9NKrcVC4qYqFKE9dhzqWmP8",
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${signika_negative.variable} ${montserrat.variable}`}
    >
      {/* <Head>
        <title>PW Portfolio</title>
      </Head> */}
      <body>{children}</body>
    </html>
  );
}

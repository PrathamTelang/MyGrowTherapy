import { Alegreya_Sans, Bellefair } from "next/font/google";
import "./globals.css";

const alegreya = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-alegreya",
});

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bellefair",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
  lang="en"
  className={`${alegreya.variable} ${bellefair.variable}`}
>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

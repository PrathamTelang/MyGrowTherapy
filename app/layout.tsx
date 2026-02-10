import type { Metadata } from "next";
import { Alegreya_Sans } from "next/font/google";
import "./globals.css";

const alegreyaSans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${alegreyaSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

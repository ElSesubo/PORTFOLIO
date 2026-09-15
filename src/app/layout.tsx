import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css"

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Gabriel Argente Full Stack Developer",
  description:
    "Portfolio de Gabriel Argente, Full Stack Developer",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${quicksand.variable} font-ui antialiased`}>
        {children}
      </body>
    </html>
  );
}

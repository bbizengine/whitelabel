import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Provider from "./provider";

const font = Ubuntu({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "B-Biz Whitelabel",
  description: "Connecting Technology and Business for Enterprise advancement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

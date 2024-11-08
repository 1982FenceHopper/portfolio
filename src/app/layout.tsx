import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import NextThemeProvider from "@/providers/NextThemesProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nashat Yafi",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.className} antialiased bg-background overflow-x-clip selection:bg-[#2e2e2e]`}
      >
        <NextThemeProvider
          enableColorScheme
          enableSystem
          attribute="class"
          defaultTheme="dark"
        >
          <main>{children}</main>
        </NextThemeProvider>
      </body>
    </html>
  );
}

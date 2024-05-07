import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhishek Suman",
  description: "Developed by Abhishek Suman with ❤️",
  icons: {
    icon: "/abhi-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  <link rel="icon" href="/favicon.ico" sizes="any" />
  return (
    <html lang="en">
      <SpeedInsights/>
      <body className={inter.className}><ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
       
        {children}
      </ThemeProvider></body>
    </html>
  );
}

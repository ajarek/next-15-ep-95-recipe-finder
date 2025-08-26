import type { Metadata } from "next";
import { Capriola } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { HeroHeader } from '@/components/header'
import FooterSection from "@/components/footer";

 
const capriola = Capriola({
  variable: "--font-capriola",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Recipe Finder App ",
  description: "Find your favorite recipes",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  suppressHydrationWarning>
      <body
        className={`${capriola.variable}  antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <HeroHeader/>
        {children}
         <FooterSection/>
        </ThemeProvider>
      </body>
    </html>
  );
}

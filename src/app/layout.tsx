import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

const jost = Jost({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "blogsmic",
  description: "one stop blogging application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen transition duration-900", jost.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

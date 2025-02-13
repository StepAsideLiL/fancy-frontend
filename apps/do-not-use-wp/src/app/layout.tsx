import type { Metadata } from "next";
import "./globals.css";
import fonts from "@/lib/fonts";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Why not WP",
  description: "Why not to use WordPress",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("antialiased", fonts.ppneuemontreal.normal.className)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

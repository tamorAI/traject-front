import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { ToastProvider } from "@tamor/ui/components/toast";
import { CursorGlow } from "@/components/cursor-glow";
import { ScrollProgress } from "@/components/scroll-progress";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trajeckt",
  description: "Understand, govern, and control how AI agents operate.",
};

const fontVariables = {
  "--font-sans":
    'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  "--font-heading":
    'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
} as CSSProperties;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full antialiased"
      style={fontVariables}
    >
      <head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <ThemeProvider>
          <ToastProvider>
            <CursorGlow />
            <ScrollProgress />
            {children}
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

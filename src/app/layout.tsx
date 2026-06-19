import type { Metadata, Viewport } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import GradientOrbs from "@/components/GradientOrbs";
import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Matheo Fontaine — Software Engineer",
  description:
    "Software Engineer building modern, performant digital experiences.",
  icons: {
    icon: "/logos/icon-mf.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${syne.variable} antialiased`}>
      <body>
        {/* Sets .dark on <html> before React hydrates to prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}`,
          }}
        />
        <ThemeProvider>
          <ScrollProgress />
          <Cursor />
          <GradientOrbs />
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

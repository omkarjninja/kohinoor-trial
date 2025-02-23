import { Geist, Geist_Mono } from "next/font/google";
import { Assistant, Martel } from "next/font/google";  
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const assistant = Assistant({ subsets: ["latin"], weight: ["200", "400", "600", "800"] });
const martel = Martel({ subsets: ["latin"], weight: ["200", "300", "400", "600", "700", "800", "900"] });

export const metadata = {
  title: "Kohinoor Watches",
  description: "A Legacy of Timekeeping Excellence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${assistant.className} ${martel.className} antialiased  bg-[#f2f0ef]` }
      >
        {children}
      </body>
    </html>
  );
}

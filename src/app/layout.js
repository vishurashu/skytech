import "./globals.css";
import { Michroma, Inter } from "next/font/google";
import MainWrapper from "./component/mainWrapper";

const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-michroma",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Skynetech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${michroma.variable} ${inter.variable}`}>
        <MainWrapper>{children}</MainWrapper>
      </body>
    </html>
  );
}
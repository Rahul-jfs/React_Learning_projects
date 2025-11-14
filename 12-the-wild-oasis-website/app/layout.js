import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

console.log(josefin);

import "@/app/_styles/globals.css";
import Header from "./_components/Header";

export const metadata = {
  // title: "The wild Oasis",
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Laxurious cabin hotel surrounded by beautiful mountains and nature.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${josefin.className} text-gray-100 bg-primary-950  min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full ">{children}</main>
        </div>
      </body>
    </html>
  );
}

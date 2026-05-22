import "./globals.css";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google"
import Image from "next/image";
import HomePageLogoImg from '@/public/printforge-logo 1.png'
import Link from "next/link";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap"
})

const montserratAlternates = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${albertSans.className} ${montserratAlternates.variable}`} >
        <header className="px-5 border-2">
          <nav className="flex flex-row justify-between items-center">
            <Link href="/"><Image src={HomePageLogoImg} alt="" /></Link>

            <ul className="flex flex-row gap-3 px-3">
              <li className="cursor-pointer transition duration-300 ease-in-out hover:text-[orange] hover:border-b">
                <Link href="/3d-models">3D MODELS</Link>
              </li>
              <li className="cursor-pointer transition duration-300 ease-in-out hover:text-[orange] hover:border-b">
                <Link href="/about">ABOUT</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
